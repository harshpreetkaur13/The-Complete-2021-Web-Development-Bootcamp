const express = require("express");
const bodyParser =  require("body-parser");
const request = require("request");

const app = new express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
});

app.post("/",function(req, res){
    const firstName  = req.body.fName;
    const lastName  = req.body.lName;
    const email  = req.body.email;

    const data ={
        members: [
            {
            email_address: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName
            }
        }
        ]
    };

    const jsonData =JSON.stringify(data);

    const url = "https://us5.api.mailchimp.com/3.0/lists/048558ce89";


    const options ={
        method: "POST",
        auth: "Harsh:9784ee46917f774571b10720d6094dcf-us5"
    }

    const request = https.request(url, options, function(response){
        if(response.statusCode === 200){
            res.sendFile(__dirname+"/sucess.html");
        }else{
            res.send(__dirname+"/failure.html");
        }

        response.on("data",function(data){
            console.log(JSON.parse(data));
        });
    });

    request.write(jsonData);
    request.end(s);

});

app.post("/failure",function(req, res){
    res.redirect("/");
})


app.listen(3000,function(){
    console.log("Running on port 3000");
});


//api key
//9784ee46917f774571b10720d6094dcf-us5

//list id
//048558ce89.