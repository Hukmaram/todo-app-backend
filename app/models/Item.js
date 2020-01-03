const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
 
let ItemSchema = new Schema({
  
  todoListId: {
    type: String,
    default: '',
  },
  todoItemId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },

  todoItemName: {
    type: String,
    default: ''
  },

  todoItemCreatorId: {
    type: String,
    default: ''
  },
  todoItemCreatorName: {
    type: String,
    default: ''
  },
  
  todoItemCreatedOn :{
    type:Date,
    default:""
  },
  
  todoItemModifiedOn :{
    type:Date,
    default:""
  },

  todoItemModifierId: {
    type: String,
    default: ''
  },
  todoItemModifierName: {
    type: String,
    default: ''
  },

  todoItemDone:{
    type:String,
    default:'no'
  }

})


mongoose.model('Item', ItemSchema);