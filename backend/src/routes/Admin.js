const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const User = require('../models/AdminUser')
const Student = require('../models/Student')
const Vendor = require('../models/Vendor')
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
    branding: {
        companyName: 'ISA',
        logo: 'https://static.ucraft.net/fs/ucraft/userFiles/uaisa/images/small-logo.png?v=1628056458',
        softwareBrothers: false,
        favicon:
            'https://static.ucraft.net/fs/ucraft/userFiles/uaisa/images/small-logo.png?v=1628056458',
    },
    locale: {
        translations: {
            messages: {
                loginWelcome: '',
            },
            labels: {
                loginWelcome: 'ICARD Admin Panel',
            },
        },
    },
    resources: [
        // register resources
        {
            resource: Student,
            options: {
                properties: {
                    picture: {
                        isVisible: false,
                    },
                    _id: {
                        isVisible: false,
                    },
                },
            },
        },
        {
            resource: Vendor,
            options: {
                properties: {
                    _id: {
                        isVisible: {
                            list: false,
                            edit: false,
                            filter: false,
                            show: true
                        },
                    },
                },
            },
        },
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
                    _id: {
                        isVisible: false,
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
                                        parseInt(process.env.SALT_ROUNDS)
                                    ),
                                    password: undefined,
                                }
                            }
                            return request
                        },
                        isAccessible: canModifyUsers,
                    },
                    // set permissions for the actions based on the current user role
                    edit: { isAccessible: canModifyUsers },
                    delete: { isAccessible: canModifyUsers },
                },
            },
        },
    ],
    pages: {
        VendorLogo: {
            label: 'Vendor Image Upload',
            component: AdminBro.bundle('../components/VendorImageUpload'),
        }
    },
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
