# Swagger API Docs

To view the swagger api docs go to route '/api-docs'

The swagger api docs are written in JSDoc format.

JSDoc for every route should be written before the route is defined.

The Format for the JSDoc is as follows:

For example a get route would look like:

```js
/**
 * @swagger
 * /api/route:
 *      get:
 *          summary:
 *          tags: [Object_Name]
 *          parameters:
 *              - in: header
 *                name: x-api-key
 *                schema:
 *                  type: string
 *                required: true
 *              - in: path
 *                name: any_value
 *                schema:
 *                  type: string
 *                required: true
 *          responses:
 *              200:
 *                  description:
 *                  content:
 *                      application/json:
 *                          schema:
 *                              $ref: '#/components/schemas/Object_Name'
 *              404:
 *                  description:
 */
```

You can also copy, paste, and edit the JSDoc for the route you are adding from the old routes for which the api-doc is already written.

The npm package used for jsdoc is [swagger-jsdoc](https://www.npmjs.com/package/swagger-jsdoc).

If you are creating a new model, then you have to add the model to the swagger api docs.

For example the model `Student` is added to the swagger api docs as follows:

```js
/**
 * @swagger
 * components:
 *   schemas:
 *     Student:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - icard_number
 *         - active
 *         - isaf_paying_status
 *       properties:
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         icard_number:
 *           type: string
 *         active:
 *           type: boolean
 *         isaf_paying_status:
 *           type: boolean
 */
```

Also add the tag to the swagger api docs as follows:

```js
/**
 * @swagger
 * tags:
 *   name: <Object Name>
 */
```

Still if you are confused on how to write api-docs then you can have a look at the already written api-docs in student and vendor files.


## Adding Route to Swagger API Docs

Add the path to the route file in options.apis array which is present in the app.js file 