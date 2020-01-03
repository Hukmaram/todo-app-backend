const mongoose = require('mongoose');
const shortid = require('shortid');
const time = require('../libs/timeLib');
const response = require('../libs/responseLib')
const logger = require('../libs/loggerLib');
const check = require('../libs/checkLib')

/* Models */
const ItemModel = mongoose.model('Item')
const ListModel = mongoose.model('List')


/* Start getAllItemsFunction */
/* params: listId
*/

let getAllItemsFunction = (req, res) => {

    let findListDetails = () => {
        return new Promise((resolve, reject) => {
            ListModel.findOne({ 'todoListId': req.params.todoListId })
                .select()
                .lean()
                .exec((err, listDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findListDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find list Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(listDetails)) {
                        logger.info('No list Found', 'Item  Controller:findListDetails')
                        let apiResponse = response.generate(true, 'No list Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'list Details Found', 200, listDetails)
                        resolve(listDetails)
                    }
                })
        })
    }// end findlistDetails

    let findItems = (listDetails) => {
        return new Promise((resolve, reject) => {

            ItemModel.find({ 'todoListId': req.params.todoListId })
                .select()
                .lean()
                .exec((err, ItemDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findItems', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Items', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ItemDetails)) {
                        logger.info('No Item Found', 'Item  Controller:findItems')
                        let apiResponse = response.generate(true, 'No Item Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Items Found and Listed', 200, ItemDetails)
                        resolve(apiResponse)
                    }
                })
        })
    }// end findItems


    findListDetails(req, res)
        .then(findItems)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Items Found and Itemed', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end getAllItemsFunction 


/* Start Delete Item  */
/* params : ItemId
*/
let deleteItemFunction = (req, res) => {

    let findItemDetails = () => {
        return new Promise((resolve, reject) => {
            ItemModel.findOne({ 'todoItemId': req.params.todoItemId })
                .select()
                .lean()
                .exec((err, ItemDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findItemDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ItemDetails)) {
                        logger.info('No Item Found', 'Item  Controller:findItemDetails')
                        let apiResponse = response.generate(true, 'No Item Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Item Details Found', 200, ItemDetails)
                        resolve(ItemDetails)
                    }
                })
        })
    }// end validate list input

    let deleteItem = (ItemDetails) => {
        return new Promise((resolve, reject) => {

            ItemModel.findOneAndRemove({ 'todoItemId': req.params.todoItemId }).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Item Controller: deleteItem', 10)
                    let apiResponse = response.generate(true, 'Failed To delete Item', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Item Found', 'Item Controller: deleteItem')
                    let apiResponse = response.generate(true, 'No Item Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'Deleted the Item successfully', 200, null)
                    resolve(apiResponse)
                }
            });// end Item model find and remove

        })
    }// end deleteItem function


    findItemDetails(req, res)
        .then(deleteItem)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Deleted the Item successfully', 200, resolve)
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end deleteItemFunction 


/* Start Update Item details */
/* params: ItemId
   body : ItemName,ItemMode,ItemModifierId,ItemModifierName
*/


let updateItemFunction = (req, res) => {

    let findItemDetails = () => {
        return new Promise((resolve, reject) => {
            ItemModel.findOne({ 'todoItemId': req.params.todoItemId })
                .select()
                .lean()
                .exec((err, ItemDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findItemDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find Item Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(ItemDetails)) {
                        logger.info('No Item Found', 'Item  Controller:findItemDetails')
                        let apiResponse = response.generate(true, 'No Item Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'Item Details Found', 200, ItemDetails)
                        resolve(ItemDetails)
                    }
                })
        })
    }// end findItemdetails 

    let updateItem = (ItemDetails) => {
        return new Promise((resolve, reject) => {

            let options = req.body;
            options.todoItemModifiedOn = time.now()

            ItemModel.update({ 'todoItemId': req.params.todoItemId }, options).exec((err, result) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'Item Controller:updateItem', 10)
                    let apiResponse = response.generate(true, 'Failed To Update Item details', 500, null)
                    reject(apiResponse)
                } else if (check.isEmpty(result)) {
                    logger.info('No Item Found', 'Item Controller:updateItem')
                    let apiResponse = response.generate(true, 'No Item Found', 404, null)
                    reject(apiResponse)
                } else {

                    let apiResponse = response.generate(false, 'Item details Updated', 200, null)
                    resolve(apiResponse)
                }
            });// end Item model update

        })
    }// end updateItem function


    findItemDetails(req, res)
        .then(updateItem)
        .then((resolve) => {
            //let apiResponse = response.generate(false, 'Item Updated', 200, "None")
            res.send(resolve)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end updateItemFunction 




// start addItemFunction 
/* params: listId,ItemName,ItemCreatorId,ItemCreatorName,ItemModifierId,ItemModifierName
           
*/


let addItemFunction = (req, res) => {

    let validatelistInput = () => {
        return new Promise((resolve, reject) => {
            if (req.body.todoListId && req.body.todoItemName && req.body.todoItemCreatorId && req.body.todoItemCreatorName &&
                req.body.todoItemModifierId && req.body.todoItemModifierName) {
                resolve(req)
            } else {
                logger.error('Field Missing During Item Creation', 'ItemController: addItem()', 5)
                let apiResponse = response.generate(true, 'One or More Parameter(s) is missing', 400, null)
                reject(apiResponse)
            }
        })
    }// end validate list input

    let findListDetails = () => {
        return new Promise((resolve, reject) => {
            ListModel.findOne({ 'todoListId': req.body.todoListId })
                .select()
                .lean()
                .exec((err, listDetails) => {
                    if (err) {
                        console.log(err)
                        logger.error(err.message, 'Item Controller: findListDetails', 10)
                        let apiResponse = response.generate(true, 'Failed To Find List Details', 500, null)
                        reject(apiResponse)
                    } else if (check.isEmpty(listDetails)) {
                        logger.info('No List Found', 'Item  Controller:findListDetails')
                        let apiResponse = response.generate(true, 'No List Found', 404, null)
                        reject(apiResponse)
                    } else {
                        let apiResponse = response.generate(false, 'List Details Found', 200, listDetails)
                        resolve(listDetails)
                    }
                })
        })
    }// end findListDetails

    let addItem = () => {
        return new Promise((resolve, reject) => {
            //console.log(req.body)
            let newItem = new ItemModel({

                todoListId: req.body.todoListId,
                todoItemName: req.body.todoItemName,
                todoItemCreatorId: req.body.todoItemCreatorId,
                todoItemCreatorName: req.body.todoItemCreatorName,
                todoItemModifierId: req.body.todoItemModifierId,
                todoItemModifierName: req.body.todoItemModifierName,
                todoItemCreatedOn: time.now(),
                todotemModifiedOn: time.now(),
            })

            if (req.body.todoItemId != undefined) {
                newItem.todoItemId = req.body.todoItemId
            }
            else {
                newItem.todoItemId = shortid.generate()
            }

            console.log(newItem)
            newItem.save((err, newItem) => {
                if (err) {
                    console.log(err)
                    logger.error(err.message, 'ItemController: addItem', 10)
                    let apiResponse = response.generate(true, 'Failed to add new Item', 500, null)
                    reject(apiResponse)
                } else {
                    let newItemObj = newItem.toObject();
                    resolve(newItemObj)
                }
            })

        })
    }// end addItem function


    validatelistInput(req, res)
        .then(findListDetails)
        .then(addItem)
        .then((resolve) => {
            let apiResponse = response.generate(false, 'Item Created', 200, resolve)
            res.send(apiResponse)
        })
        .catch((err) => {
            console.log(err);
            res.send(err);
        })

}// end addItemFunction 
   


module.exports = {
    addItemFunction: addItemFunction,
    updateItemFunction: updateItemFunction,
    deleteItemFunction: deleteItemFunction,
    getAllItemsFunction: getAllItemsFunction

}// end exports