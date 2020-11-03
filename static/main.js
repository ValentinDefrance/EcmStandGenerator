var phrase = "";

var adjectif = new Map();
var nom = new Map();
var pouvoir = new Map ();


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