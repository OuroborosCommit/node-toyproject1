
const express = require('express');
const hbs = require('hbs');
var app = express(); 
const  port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/',(req,res) => {
res.render('home.hbs', {
	pageTitle:' Home page',
	welcomeMessage:'welcomeMessage',
	currentYear: new Date().getFullYear()
});

});





app.get('/about', (req,res) =>{
	res.render('about.hbs',{
		pageTitle:'About Page',
		currentYear : new Date().getFullYear()
	});

});

app.get('/bad',(req,res)=>{
	res.send({
	errorMessage:'Unable to respond	'
	});
});




app.listen(port,() => {
	console.log(`Server is on port ${port}`);
}); 
