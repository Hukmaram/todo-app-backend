const express = require('express');
const router = express.Router();
const friendController = require("../controllers/friendController");
const appConfig = require("../../config/appConfig")
const auth = require('../middlewares/auth')

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/friends`;

    app.get(`${baseUrl}/view/friend/request/sent/:userId`, auth.isAuthorized, friendController.getAllRequestSent);
    app.get(`${baseUrl}/view/friend/request/recieved/:userId`, auth.isAuthorized, friendController.getAllRequestRecieved);
    app.post(`${baseUrl}/send/friend/request`, auth.isAuthorized,friendController.sendFriendRequest);
    app.post(`${baseUrl}/accept/friend/request`, auth.isAuthorized,friendController.acceptFriendRequest);
    app.post(`${baseUrl}/reject/friend/request`, auth.isAuthorized,friendController.rejectFriendRequest);
    app.post(`${baseUrl}/cancel/friend/request`, auth.isAuthorized,friendController.cancelFriendRequest);
    app.post(`${baseUrl}/unfriend/user`, auth.isAuthorized,friendController.unfriendFunction);
}