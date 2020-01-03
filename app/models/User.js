'use strict'
/**
 * Module Dependencies
 */
const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

let userSchema = new Schema({
  userId: {
    type: String,
    default: '',
    index: true,
    unique: true
  },
  firstName: {
    type: String,
    default: ''
  },
  lastName: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  password: {
    type: String,
    default: ''
  },
  phone: {
    type: Number,
    default: 0
  },
  countryName: {
    type: String,
    default: ''
  },
  friends:{
    type:[{
      friendId:{
        type:String,
        default:''
      },
    
      friendName:{
        type:String,
        default:''
      },

    }],
  },

  friendRequestRecieved:{
    type:[{
      friendId:{
        type:String,
        default:''
      },
    
      friendName:{
        type:String,
        default:''
      },

    }],
  },

  friendRequestSent:{
    type:[{
      friendId:{
        type:String,
        default:''
      },
    
      friendName:{
        type:String,
        default:''
      },

    }],
  },
  validationToken: { //will generate automatically while resetting password
    type: String,
    default: ''
  },
  createdOn :{
    type:Date,
    default:""
  }


})


mongoose.model('User', userSchema);