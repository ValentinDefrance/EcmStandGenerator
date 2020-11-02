var express = require('express')
var app = express()

var phrase = "";

var adjectif = new Map();
var nom = new Map();
var pouvoir = new Map ();

adjectif.set("Chilli","Spicy");
adjectif.set("Burger","Texas");
adjectif.set("Steak","Bloody");

nom.set("KSI","Buisenessman");
nom.set("Chaudron","Witch");
nom.set("MDV","Sailor");

pouvoir.set("Dormir","Contrôller les coussins dans un rayon de 20m");
pouvoir.set("Boire","Sa force double à chaques shot pris");
pouvoir.set("Coder","Peut hacker la réalité");

function stand(plat, asso, activité){
	
	phrase = "Stand name : "+adjectif.get(plat)+" "+nom.get(asso)+"\nPower : "+pouvoir.get(activité);
	console.log(phrase);
	return phrase;
}

var platpref = "Steak";
var assopref = "Chaudron";
var actipref = "Coder";

app.get('/submit', function(req, res){
    return res.send(stand(platpref,assopref,actipref));
});

app.listen(3000);


