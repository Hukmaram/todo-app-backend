const express = require('express');
const router = express.Router();
const itemController = require("../controllers/itemController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/items`;
    app.post(`${baseUrl}/createitem`, auth.isAuthorized, itemController.addItemFunction);
    app.put(`${baseUrl}/:todoItemId/updateitem`, auth.isAuthorized, itemController.updateItemFunction);
    app.post(`${baseUrl}/:todoItemId/delete`, auth.isAuthorized, itemController.deleteItemFunction);
    app.get(`${baseUrl}/view/all/items/:todoListId`, auth.isAuthorized, itemController.getAllItemsFunction);
    // app.get(`${baseUrl}/:itemId/details`, auth.isAuthorized, itemController.getItemDetailsFunction);
    // app.put(`${baseUrl}/:itemId/addSubItem`, auth.isAuthorized, itemController.addSubItemFunction);
    // app.put(`${baseUrl}/:itemId/updateSubItem`, auth.isAuthorized, itemController.updateSubItemFunction);
    // app.put(`${baseUrl}/:itemId/deleteSubItem`, auth.isAuthorized, itemController.deleteSubItemFunction);
    // app.post(`${baseUrl}/subItems/:itemId/details`, auth.isAuthorized, itemController.getSubItemDetailsFunction);
}