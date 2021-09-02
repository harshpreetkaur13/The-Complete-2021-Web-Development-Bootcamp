const express = require("express");
const bodyParser = require("body-parser");
const mongoose= require("mongoose");

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://Navdeep:Navdeep123@cluster0.p1hep.mongodb.net/todoListDB",{useNewUrlParser: true, useUnifiedTopology: true});

const itemSchema={
  name:String
};

const item= mongoose.model("item",itemSchema);

const item1=new item({
  name:"Welcome to your ToDoList"
});
const item2=new item({
  name:"Hit the + button to add new item"
});
const item3=new item({
  name:"Hit checkbox to delete an item"
});

const defaultItems=[item1,item2,item3];



app.get("/", function(req, res) {

  item.find({},function(err,foundItems){
    if(foundItems.length===0){
      item.insertMany(defaultItems,function(err){
        if(err){
          console.log(err);
        } else{
          console.log("Successfully Added Items");
        }
      });
      res.redirect("/");
    } else{
    res.render("list", {kindOfDay: "Today",newListItems:foundItems});
  }
  });
});

app.post("/",function(req,res){
  const itemName=req.body.newItem;
  const Item = new item({
    name:itemName
  });
  Item.save();
res.redirect("/");
})

app.post("/delete",function(req,res){
  const checkedId=req.body.checkbox;
  item.findByIdAndRemove(checkedId,function(err){
    if(err){
      console.log(err);
    } else{
      console.log("Successfully deleted checked item");
      res.redirect("/");
    }
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server is running.");
});
