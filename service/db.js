const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/Productlist",{ useNewUrlParser: true });

const category = mongoose.model("category", {
 cid:String,
 cname:String,
 cimage:String,
 gparentid:[],
 });

const product= mongoose.model("product", {
  pid:String,
  parentid:String,
 pgparentid:[],
  pname:String,
  pprice:String,
 pimage:String
});

const subcategory = mongoose.model("subcategory", {
  sid:String,
  sparentid:String,
  sname:String,
  sgparentid:[],
  simage:String
});
module.exports ={
    category,product,subcategory
      };