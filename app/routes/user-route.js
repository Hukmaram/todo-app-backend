const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')
module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;
    // defining routes.


    // params: firstName, lastName, email, mobileNumber, password
    app.post(`${baseUrl}/signup`, userController.signUpFunction);

    /**
     * @apiGroup users
     * @apiVersion  1.0.0
     * @api {post} /api/v1/users/login api for user login.
     *
     * @apiParam {string} email email of the user. (body params) (required)
     * @apiParam {string} password password of the user. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
         {
            "error": false,
            "message": "Login Successful",
            "status": 200,
            "data": {
                "authToken": "eyJhbGciOiJIUertyuiopojhgfdwertyuVCJ9.MCwiZXhwIjoxNTIwNDI29tIiwibGFzdE5hbWUiE4In19.hAR744xIY9K53JWm1rQ2mc",
                "userDetails": {
                "mobileNumber": 2234435524,
                "email": "someone@mail.com",
                "lastName": "Sengar",
                "firstName": "Rishabh",
                "userId": "-E9zxTYA8"
            }

        }
    */

   app.post(`${baseUrl}/:userId/logout`, auth.isAuthorized, userController.logout);

    // auth token params: userId.
    app.get(`${baseUrl}/view/all`, auth.isAuthorized, userController.getAllUser);
    app.get(`${baseUrl}/:userId/details`, auth.isAuthorized,userController.getSingleUser);

    app.post(`${baseUrl}/forgotpassword`,userController.resetPasswordFunction);

    app.put(`${baseUrl}/updatepassword`, userController.updatePasswordFunction);

}
