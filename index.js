const express = require("express");
const app = express();
const PORT = 3000;
const handleBars = require("express-handlebars");
const path = require("path");
const body = require("body-parser")

const products = [
    {
    id: 1,
    price: 300,
    name: "apple"
    },
    {
        id: 2,
        price: 300,
        name: "pear"
    },

    {
        id: 3,
        price: 400,
        name: "tomato"

    }
];

const hbs = handleBars.create({
    defaultLayout: "main",
    extname: "hbs"
});

app.engine("hbs",hbs.engine);
app.set("view engine","hbs");
app.set("views", "view");

app.use(express.static("frontEnd"));

app.get("/",(req,response)=>{
 response.sendFile(path.join(__dirname,"index.html"))
});

app.get("/add",(req,res)=>{
    res.render("add")
})

app.get("/products",(req,res)=>{
    res.render("products",products)
}); 
app.post("/add:post", body.json(),(req,res)=>{
     products.push(req.body);
     res.json(req.body);
});

app.delete("/delete/id",body.json(),(req,res)=>{
    const prodId =  Number(req.params["id"])
    const prod = products.findIndex(el=>{
        el.id === prodId;
    })
    products.splice(prod,1);
    res.redirect("/products")
});
app.get("/delete",(req,res)=>{
    res.render("delete")
})

app.listen(PORT,()=>{
console.log(`Server is running on localhost ${PORT}`)
});

 