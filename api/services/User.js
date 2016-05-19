/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var schema = new Schema({
  name: String,
  email: String
});
module.exports = mongoose.model("User", schema);
var model = {
  saveData: function(data, callback) {
    var user = this(data);
    if (data._id) {
      this.findOneAndUpdate({
        _id:data._id
      },data,function(err,data2){
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          callback(null, data2);
        }
      });
    } else {
      user.save(function(err, data2) {
        if (err) {
          console.log(err);
          callback(err, null);
        } else {
          callback(null, data2);
        }
      });
    }
  },
  deleteData:function(data,callback){
    this.findOneAndRemove({
      _id:data._id
    },data,function(err,data2){
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, data2);
      }
    });
  },
  getAll:function(data,callback){
    this.find(function(err,data2){
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, data2);
      }
    });
  },
  getOne:function(data,callback){
    this.findOne({
      _id:data._id
    },function(err,data){
      if (err) {
        console.log(err);
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
};
module.exports = _.assign(module.exports, model);
