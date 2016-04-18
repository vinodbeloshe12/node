/**
 * BlogController
 *
 * @description :: Server-side logic for managing blogs
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


 module.exports = {
   save: function(req, res) {
     if (req.body) {
       Blog.saveData(req.body, function(err, data) {
         if (err) {
           res.json({
             value: false,
             data: err
           });
         } else {
           res.json({
             value: true,
             data: data
           });
         }
       });
     } else {
       res.json({
         value: false,
         data: "Invalid Call"
       });
     }
   },
	 getAll: function(req, res) {
     if (req.body) {
       Blog.getAll(req.body, function(err, data) {
         if (err) {
           res.json({
             value: false,
             data: err
           });
         } else {
           res.json({
             value: true,
             data: data
           });
         }
       });
     } else {
       res.json({
         value: false,
         data: "Invalid Call"
       });
     }
   },

 };
