const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
require('dotenv').config()

// Check if the current user is an admin
const canModifyUsers = ({ currentAdmin }) =>
    currentAdmin && currentAdmin.role === 'admin'

AdminBro.registerAdapter(AdminBroMongoose) // register mongoose adapter such that AdminBro can use it

const adminBro = new AdminBro({
    databases: [mongoose], // register mongoose database
    rootPath: '/admin',
    resources: [
        // register resources
        {
            resource: User,
            options: {
                // register options for the resource
                properties: {
                    encryptedPassword: {
                        isVisible: false,
                    },
                    password: {
                        type: 'string',
                        isVisible: {
                            list: false,
                            edit: true,
                            filter: false,
                            show: false,
                        },
                    },
                },
                actions: {
                    new: {
                        // new action called when creating a new user, which encrypts the password and adds it to the database
                        before: async (request) => {
                            if (request.payload.password) {
                                request.payload = {
                                    ...request.payload,
                                    encryptedPassword: await bcrypt.hash(
                                        request.payload.password,
                                        Integer.parseInt(
                                            process.env.SALT_ROUNDS
                                        )
                                    ),
                                    password: undefined,
                                }
                            }
                            return request
                        },
                    },
                    // set permissions for the actions based on the current user role
                    edit: { isAccessible: canModifyUsers },
                    delete: { isAccessible: canModifyUsers },
                    new: { isAccessible: canModifyUsers },
                },
            },
        },
    ],
})

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',   // name of the cookie used to store the admin session
    cookiePassword:
        process.env.ADMIN_COOKIE_PASSWORD || 'super-secret-password',      // password used to encrypt the cookie
    authenticate: async (email, password) => {      // function used to authenticate the signing in user
        const user = await User.findOne({ email: email })
        if (user) {
            const matched = await bcrypt.compare(
                password,
                user.encryptedPassword
            )
            if (matched) {
                return user
            }
        }
        return null
    },
})

module.exports = router
