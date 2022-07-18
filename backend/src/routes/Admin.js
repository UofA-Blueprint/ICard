// const AdminBro = require('admin-bro');
// const AdminBroExpress = require('admin-bro-expressjs');
// const AdminBroMongoose = require('admin-bro-mongoose')

// const mongoose = require('mongoose')

// AdminBro.registerAdapter(AdminBroMongoose)

// const adminBro = new AdminBro({
//     databases: [mongoose],
//     rootPath: '/admin',
// });

// const ADMIN = {
//     email: process.env.ADMIN_EMAIL || 'admin@example.com',
//     password: process.env.ADMIN_PASSWORD || 'admin',
// }

// const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
//     cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
//     cookiePassword: process.env.ADMIN_COOKIE_PASSWORD || 'super-secret-password',
//     authenticate: async (email, password) => {
//         if (email === ADMIN.email && password === ADMIN.password) {
//             return ADMIN
//         }
//         return false
//     }
// });

// module.exports = router;

const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroMongoose = require('admin-bro-mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')

AdminBro.registerAdapter(AdminBroMongoose)

// const User = mongoose.model('User', {
//     email: { type: String, required: true },
//     encryptedPassword: { type: String, required: true },
//     role: { type: String, enum: ['admin', 'restricted'], required: true },
//   })

const adminBro = new AdminBro({
    databases: [mongoose],
    rootPath: '/admin',
    resources: [
        {
            resource: User,
            options: {
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
                        before: async (request) => {
                            if (request.payload.record.password) {
                                request.payload.record = {
                                    ...request.payload.record,
                                    encryptedPassword: await bcrypt.hash(
                                        request.payload.record.password,
                                        10
                                    ),
                                    password: undefined,
                                }
                            }
                            return request
                        },
                    },
                },
            },
        },
    ],
})

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    cookieName: process.env.ADMIN_COOKIE_NAME || 'admin-bro',
    cookiePassword:
        process.env.ADMIN_COOKIE_PASSWORD || 'super-secret-password',
    authenticate: async (email, password) => {
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
        // if (email === ADMIN.email && password === ADMIN.password) {
        //     return ADMIN
        // }
        // return false
    },
})

module.exports = router
