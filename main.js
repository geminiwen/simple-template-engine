var render = require("./render");
//console.log(render.toString())
render("template.html",{"name":"Gemini Wen"},function(err,data){
    console.log(data);
});
