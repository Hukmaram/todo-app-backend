const mongoose = require('mongoose'),
  Schema = mongoose.Schema;
 
let ListSchema = new Schema({
  todoListId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },

  todoListName: {
    type: String,
    default: ''
  },

  todoListCreatorId: {
    type: String,
    default: ''
  },
  todoListCreatorName: {
    type: String,
    default: ''
  },
  
  todoListModifierId: {
    type: String,
    default: ''
  },
  todoListModifierName: {
    type: String,
    default: ''
  },

  todoListMode: {
    type: String,
    default: 'private'
  }

})


mongoose.model('List', ListSchema);