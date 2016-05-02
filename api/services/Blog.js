/**
 * Blog.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
 var mongoose = require("mongoose");
 var Schema = mongoose.Schema;
 var schema = new Schema({
   title: String,
   content: String,
   timestamp : { type: Date, default: Date.now },
   tags: [String],
  //  image: { data: Buffer, contentType: String },
 });

 module.exports = mongoose.model("Blog", schema);

var model = {
  saveData: function(data, callback) {
    var blog = this(data);
      blog.save(function(err, data2) {
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

};
module.exports = _.assign(module.exports, model);
