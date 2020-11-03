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

//function stand() {
//	plat = document.querySelector("#plat").value
//	asso = document.querySelector("#asso").value
//	act = document.querySelector("#act").value
//	
//	phrase = "Stand name : "+adjectif.get(plat)+" "+nom.get(asso)+"\nPower : "+pouvoir.get(act);
//	document.querySelector("#get-value").textContent = phrase;
//	console.log(phrase);
//
//}
//stand()


function change_stand() {
    plat = document.querySelector("#plat").value
	asso = document.querySelector("#asso").value
	act = document.querySelector("#act").value

        fetch('/api/stand/' + plat + "/" + asso + "/" + act)
            .then(response => response.json())
            .then(data => {
                document.querySelector("#get-value").textContent = data.yourstand
                console.log(data)
            })

}
change_stand()

document.querySelector("#button").addEventListener("click", (event) => {
    change_stand()
    event.preventDefault()
})