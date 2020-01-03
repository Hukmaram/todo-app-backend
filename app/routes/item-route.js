const express = require('express');
const router = express.Router();
const itemController = require("../controllers/itemController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/items`;
    app.post(`${baseUrl}/createitem`, auth.isAuthorized, itemController.addItemFunction);
    /**
     * @apiGroup items
     * @apiVersion  1.0.0
     * @api {post} /api/v1/items/createitem api to Add item.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} todoListId Id of the List. (body params) (required)
     * @apiParam {string} todoItemName Name of the item. (body params) (required)
     * @apiParam {string} todoItemCreatorId User Id of the user creating todo. (body params) (required)
     * @apiParam {string} todoItemCreatorName User Name of the user creating todo. (body params) (required)
     * @apiParam {string} todoItemModifierId User Id of the user modifying todo. (body params) (required)
     * @apiParam {string} todoItemModifierName User Name of the user modifying todo. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Item Created",
            "status": 200,
            "data": {
                "__v": 0,
                "_id": "5bb8839db223e91708c6f19d",
                "todoItemModifierName": "Hukmaram Bishnoi",
                "todoItemModifierId": "SkBEHfS97",
                "todoItemModifiedOn": "2018-10-06T09:42:53.000Z",
                "todoItemCreatedOn": "2018-10-06T09:42:53.000Z",
                "todoItemCreatorName": "Hukmaram Bishnoi",
                "todoItemCreatorId": "SkBEHfS97",
                "todoItemName": "Test Item",
                "todoItemId": "r1Bim-Lqm",
                "todoListId": "SknkJ-UcX"
            }
        }
    */

    app.put(`${baseUrl}/:todoItemId/updateitem`, auth.isAuthorized, itemController.updateItemFunction);
      /**
     * @apiGroup items
     * @apiVersion  1.0.0
     * @api {put} /api/v1/items/:todoItemId/updateitem api to Update item Details.
     *
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiParam {string} todoItemName Name of the item. (body params) (required)
     * @apiParam {string} todoItemModifierId User Id of the user modifying todo. (body params) (required)
     * @apiParam {string} todoItemModifierName User Name of the user modifying todo. (body params) (required)
     * @apiParam {string} todoItemDone yes/no to make item done/undone. (body params) (required)
     *
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Item details Updated",
            "status": 200,
            "data": null
        }    
    */
    app.post(`${baseUrl}/:todoItemId/delete`, auth.isAuthorized, itemController.deleteItemFunction);
     /**
     * @apiGroup items
     * @apiVersion  1.0.0
     * @api {post} /api/v1/items/:todoItemId/delete api to Delete item.
     *
     * @apiParam {string} todoItemId Id of the item to be deleted. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Deleted the Item successfully",
            "status": 200,
            "data": null
        }
    */
    app.get(`${baseUrl}/view/all/items/:todoListId`, auth.isAuthorized, itemController.getAllItemsFunction);
     /**
     * @apiGroup items
     * @apiVersion  1.0.0
     * @api {get} /api/v1/items/view/all/items/:userId api for Getting all items of User.
     *
     * @apiParam {string} todoListId userId of the user. (query params) (required)
     * @apiParam {string} authToken Authentication Token. (body/header/query params) (required)
     * 
     * @apiSuccess {object} myResponse shows error status, message, http status code, result.
     * 
     * @apiSuccessExample {object} Success-Response:
        {
            "error": false,
            "message": "Items Found and Listed",
            "status": 200,
            "data": [
                {
                    "_id": "5bb8839db223e91708c6f19d",
                    "todoItemModifierName": "Hukmaram Bishnoi",
                    "todoItemModifierId": "SkBEHfS97",
                    "todoItemModifiedOn": "2018-10-06T09:44:54.000Z",
                    "todoItemCreatedOn": "2018-10-06T09:42:53.000Z",
                    "todoItemCreatorName": "Hukmaram Bishnoi",
                    "todoItemCreatorId": "SkBEHfS97",
                    "todoItemName": "Updated Test Item",
                    "todoItemId": "r1Bim-Lqm",
                    "todoListId": "SknkJ-UcX",
                    "__v": 0
                }
            ]
        }
    */

    
}