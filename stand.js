var phrase = "";

var adjectif = new Map();
var nom = new Map();
var pouvoir = new Map ();

adjectif.set("chili","Spicy");
adjectif.set("Burger","Texas");
adjectif.set("Steak","Bloody");

nom.set("KSI","Buisenessman");
nom.set("Chaudron","Witch");
nom.set("MDV","Sailor");

pouvoir.set("Dormir","Contrôller les coussins dans un rayon de 20m");
pouvoir.set("Boire","Sa force double à chaques shot pris");
pouvoir.set("Coder","Peut hacker la réalité");

function stand(plat, asso, act){
	
	phrase = "Stand name : "+adjectif.get(plat)+" "+nom.get(asso)+"\nPower : "+pouvoir.get(act);
	console.log(plat)
	console.log(asso)
	console.log(act)
	console.log(phrase);
	return phrase;
}

module.exports = {
    stand: stand,
}