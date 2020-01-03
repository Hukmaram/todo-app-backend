const express = require('express');
const router = express.Router();
const listController = require("../controllers/listController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')


module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/lists`;
    app.post(`${baseUrl}/createlist`, auth.isAuthorized, listController.addListFunction);
    app.put(`${baseUrl}/:todoListId/updatelist`, auth.isAuthorized, listController.updateListFunction);
    app.post(`${baseUrl}/:todoListId/delete`, auth.isAuthorized, listController.deleteListFunction);
    app.get(`${baseUrl}/view/all/lists/:userId`, auth.isAuthorized, listController.getAllListsFunction);
    app.post(`${baseUrl}/view/all/shared/lists`, auth.isAuthorized, listController.getAllPublicListsFunction);

}