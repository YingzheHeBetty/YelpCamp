var express = require("express");
var app = express();
var port = 3000;
var bodyParser = require("body-parser");

var campgrounds = [
		{name: "Salmon Creek", image:"https://pixabay.com/get/57e8d0424a5bae14f6da8c7dda793f7f1636dfe2564c704c7d2f7ad69145cd59_340.jpg"},
		{name: "Waterloo Park", image:" https://pixabay.com/get/55e8dc404f5aab14f6da8c7dda793f7f1636dfe2564c704c7d2f7ad69145cd59_340.jpg"},
		{name: "219 Park", image:"https://pixabay.com/get/57e8d1454b56ae14f6da8c7dda793f7f1636dfe2564c704c7d2f7ad69145cd59_340.jpg "}
	]



app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine", "ejs");

// add landing page -- rout page
app.get("/",function(req,res){
	res.render("landing");
});

// add campground page
app.get("/campgrounds", function(req,res) {
	
	res.render("campgrounds", {campgrounds: campgrounds});
});

// add post route. where we send a post request to /campgrounds
app.post("/campgrounds", function(req, res) {
	
	//get data from form and add them to campgrounds array
	var name = req.body.name;
	var image = req.body.image;
	// redirect to campgrounds
	var newCampground = {name: name, image:image};
	campgrounds.push(newCampground);
	res.redirect("/campgrounds");
	
})
// show the form that will pass the data to post/campgrounds
app.get("/campgrounds/new", function(req, res) {
	res.render("new");
})



app.listen(port, function(req,res){
	console.log("YelpCamp Has Started!");

})
	