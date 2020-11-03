var phrase = "";

var adjectif = new Map();
var nom = new Map();
var pouvoir = new Map ();

adjectif.set("chili","Spicy");
adjectif.set("pate","Italian");
adjectif.set("burger","Bloody");
adjectif.set("raclette","Cheesy");

nom.set("ksi","Businessman");
nom.set("farigoule","Composer");
nom.set("chaudron","Witch");
nom.set("mdv","Sailor");

pouvoir.set("dormir","Contrôler les coussins dans un rayon de 20m");
pouvoir.set("boire","Sa force double à chaque shot pris");
pouvoir.set("coder","Peut hacker la réalité");

function stand(plat, asso, act){
	
	phrase = "Stand name : "+adjectif.get(plat)+" "+nom.get(asso)+"  \nPower : "+pouvoir.get(act);
	console.log(plat)
	console.log(asso)
	console.log(act)
	console.log(phrase);
	return phrase;
}

module.exports = {
    stand: stand,
}