var fs = require("fs");
var render = function(fileName,model,callback) {
    fs.readFile(fileName, {encoding:"utf-8"},function(err,data){
        if(err) {
            callback(err);
            return;
        }
        data = data.replace(/\n/g, '\\n')
                   .replace(/<%=([\s\S]+?)%>/,function(match,code){
                        return "' + " + code + " + '";
                   });
    
        var tpl = "tpl ='" + data +"'";
        tpl = 'var tpl="";\nwith(obj){ ' + tpl + ' }\nreturn tpl;';
        var c = new Function('obj',tpl);
        callback(null,c(model)); 
    });
}

module.exports = render
