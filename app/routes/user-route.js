const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')
module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;
    // defining routes.


    // params: firstName, lastName, email, phone, password
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/signup api for Registering User.
     *
     * @apiParam {string} firstName First Name of the user. (body params) (required)
     * @apiParam {string} lastname Last Name of the user. (body params) (required)
     * @apiParam {string} countryName country Name of the user. (body params) (required)
     * @apiParam {string} phone phone number of the user. (body params) (required)
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
        "error": false,
        "message": "User Created",
        "status": 200,
        "data": [
            {
                "createdOn": "2018-09-12T13:42:58.000Z",
                "validationToken": "Null",
                "email": "hukmaram@gmail.com",
                "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa",
                "phoner": "91 7840962887",
                "countryName": "India",
                "lastName": "Hukmaram",
                "firstName": "Hukmaram",
                "userId": "B1cyuc8OX"
            }
        }
    */

   app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/:userId/logout api to logout from application.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Logged Out Successfully",
            "status": 200,
            "data": null
        }
    */
    // auth token params: userId.
    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/view/all api for Getting all users.
     *
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "All User Details Found",
            "status": 200,
            "data": [
                {
                    "createdOn": "2018-09-12T13:42:58.000Z",
                    "validationToken": "Null",
                    "email": "hukmaram@gmail.com",
                    "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa",
                    "phone": "91 7840962887",
                    "countryName": "India",
                    "lastName": "Bishnoi",
                    "firstName": "Hukmaram",
                    "userId": "B1cyuc8OX"
                }
            ]
        }
    */

    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized,userController.getSingleUser);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {get} /api/v1/users/:userId/details api for getting user details.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken authToken of the user. (query/body/header params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "User Details Found",
            "status": 200,
            "data": {
                "createdOn": "2018-09-12T13:42:58.000Z",
                "validationToken": "Null",
                "email": "hukmaram@gmail.com",
                "password": "$2a$10$XvHxf9JX76JvvIeqwd2CoOdxtCraX23nR2ToAYIhynLmNquDFdbOa",
                "phone": "91 7840962887",
                "countryName": "India",
                "lastName": "Bishnoi",
                "firstName": "Hukmaram",
                "userId": "B1cyuc8OX"
            }
        }
    */

    app.post(`${baseUrl}/forgotpassword`,userController.resetPasswordFunction);
    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/resetPassword api for Password Reset.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password reset instructions sent successfully",
            "status": 200,
            "data": None
        }    
    */

    app.put(`${baseUrl}/updatepassword`, userController.updatePasswordFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {put} /api/v1/users/updatePassword api for Updating Password after Reset.
     *
     * @apiParam {string} validationToken validationToken of the user recieved on Email. (body params) (required)
     * @apiParam {string} password new password of the user . (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Password Update Successfully",
            "status": 200,
            "data": "None"
            
        }
    */

}
