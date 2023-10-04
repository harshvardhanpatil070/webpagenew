var express=require('express');
var app=express();
app.use(express.static('public'))
app.get("/",(req, res)=>{res.send("Welcome");});
app.get("/product",(req, res)=>{var p={ "id":45, "title":"Harry Potter","description":"novel", "unitprice":14, "quantity":7000 };
                                       res.send(p);
});
app.listen(8000);
console.log("App is listening on port 8000");