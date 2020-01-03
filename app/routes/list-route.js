const express = require('express');
const router = express.Router();
const listController = require("../controllers/listController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/lists`;
    app.post(`${baseUrl}/createlist`, auth.isAuthorized, listController.addListFunction);
     /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/createlist api to Add List.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} todoListName Name of the List. (body params) (required)
     * @apiParam {string} todoListCreatorId User Id of the user creating todo. (body params) (required)
     * @apiParam {string} todoListCreatorName User Name of the user creating todo. (body params) (required)
     * @apiParam {string} todoListModifierId User Id of the user modifying todo. (body params) (required)
     * @apiParam {string} todoListModifierName User Name of the user modifying todo. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        { 
            "error": false,
            "message": "List Created",
            "status": 200,
            "data": {
                "__v": 0,
                "_id": "5bb87ee3625e5006d41f786d",
                "todoListModifiedOn": "2018-10-06T09:22:43.000Z",
                "todoListCreatedOn": "2018-10-06T09:22:43.000Z",
                "todoListModifierName": "Hukmaram Bishnoi",
                "todoListModifierId": "SkBEHfS97",
                "todoListCreatorName": "Hukmaram Bishnoi",
                "todoListCreatorId": "SkBEHfS97",
                "todoListName": "Test List",
                "todoListId": "SknkJ-UcX"
            }
        }    
    */

    app.put(`${baseUrl}/:todoListId/updatelist`, auth.isAuthorized, listController.updateListFunction);

     /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {put} /api/v1/lists/:todoListId/updatelist api to Update List Details.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} todoListId Id of the List. (query params) (required)
     * @apiParam {string} todoListName Name of the List. (body params) (required)
     * @apiParam {string} todoListModifierId User Id of the user modifying todo. (body params) (required)
     * @apiParam {string} todoListModifierName User Name of the user modifying todo. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "List details Updated",
            "status": 200,
            "data": null
        }    
    */
    app.post(`${baseUrl}/:todoListId/delete`, auth.isAuthorized, listController.deleteListFunction);
    /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {post} /api/v1/lists/:todoListId/delete api to Delete List.
     *
     * @apiParam {string} ListId ListId of the List to be deleted. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the List successfully",
            "status": 200,
            "data": null
        }
    */
    app.get(`${baseUrl}/view/all/lists/:userId`, auth.isAuthorized, listController.getAllListsFunction);
     /**
     * @apiGroup lists
     * @apiVersion  1.0.0
     * @api {get} /api/v1/lists/view/all/lists/:userId api for Getting all Lists of User.
     *
     * @apiParam {string} userId userId of the user. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Lists Found and Listed",
            "status": 200,
            "data": [
                {
                    "_id": "5bb87ee3625e5006d41f786d",
                    "todoListModifiedOn": "2018-10-06T09:26:55.000Z",
                    "todoListCreatedOn": "2018-10-06T09:22:43.000Z",
                    "todoListMode": "private",
                    "todoListModifierName": "Hukmaram Bishnoi",
                    "todoListModifierId": "SkBEHfS97",
                    "todoListCreatorName": "Hukmaram Bishnoi",
                    "todoListCreatorId": "SkBEHfS97",
                    "todoListName": "Updated Test List",
                    "todoListId": "SknkJ-UcX",
                    "__v": 0
                }
            ]
        }
    */
    app.post(`${baseUrl}/view/all/shared/lists`, auth.isAuthorized, listController.getAllPublicListsFunction);
    /**
    * @apiGroup lists
    * @apiVersion  1.0.0
    * @api {get} /api/v1/lists/view/all/lists/:userId api for Getting all Lists of User.
    *
    * @apiParam {string} userIds userId of the users. (Body params) (required)
    * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
    * 
    * @apiSuccess {object} myResponse shows error status, message, http status code, result.
    * 
    * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Lists Found and Listed",
            "status": 200,
            "data": [
                {
                    "_id": "5bb87ee3625e5006d41f786d",
                    "todoListModifiedOn": "2018-10-06T09:26:55.000Z",
                    "todoListCreatedOn": "2018-10-06T09:22:43.000Z",
                    "todoListModifierName": "Hukmaram Bishnoi",
                    "todoListModifierId": "SkBEHfS97",
                    "todoListCreatorName": "Hukmaram Bishnoi",
                    "todoListCreatorId": "SkBEHfS97",
                    "todoListName": "Updated Test List",
                    "todoListId": "SknkJ-UcX",
                    "__v": 0
                }
            ]
        }
   */
}