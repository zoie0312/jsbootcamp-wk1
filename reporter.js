

module.exports = {
        reporter: function (res) {
                "use strict";
                var len = res.length;
                var str = "";
                var fs = require('fs');

                res.forEach(function (r) {
                        var file = r.file;
                        var err = r.error;

                        str += file + ": line " + err.line + ", col " +
                                err.character + ", " + err.reason + "\n";
                });
                //console.log('ha ha ha');
                if (str) {
                        process.stdout.write(str + "\n" + len + " error" +
                                ((len === 1) ? "" : "s") + "\n");
                        var output_result = "";
                        output_result = str + "\n" + len + " error" +
                                ((len === 1) ? "" : "s") + "\n";
                        //console.log('test1');

                        var fd = fs.openSync('./jshint_report.txt', 'a');
                        fs.write(fd, output_result, null, null, function(err){
                                if (err) {throw err;}
                                console.log('file written');
                                fs.close(fd, function(){
                                        console.log('file closed');
                                });
                        });



                        /*fs.writeFile("report", output_result, function(err){
                                        if(err) {
                                                console.log(err);
                                        } else {
                                                console.log("file was saved!");
                                        }
                        });*/
                }
        }
};

