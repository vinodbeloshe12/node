/**
 * FileController
 *
 * @description :: Server-side logic for managing files
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var fs = require('fs');
var mime=require('mime');
module.exports = {
  upload: function(req, res) {
    if (req.method === 'GET')
      return res.json({
        'status': 'GET not allowed'
      });
    //	Call to /upload via GET is error

    var uploadFile = req.file('uploadFile');
    console.log(uploadFile);

    uploadFile.upload({
      dirname: '../../uploads'
    }, function onUploadComplete(err, files) {
      //	Files will be uploaded to .tmp/uploads

      if (err) return res.serverError(err);
      //	IF ERROR Return and send 500 error with error

      console.log(files);
      res.json({
        status: 200,
        file: files
      });
    });
  },
	readFile:function(req,res){
		var path='./uploads/'+req.query.file;
		var image=fs.readFileSync(path);
		var mimetype=mime.lookup(path);
		res.set("Content-Type",mimetype);
		res.send(image);
	}
};
