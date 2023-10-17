let f=forma;
let ime=f.ime;
let email=f.mejl;
let godine=f.god;
let usl=f.uslovi;
let pomoc=f.pomoc;
function ispis(){
    console.log(ime.value);
    console.log(email.value);
    console.log(Number(godine.value));
    console.log(usl.checked);
    console.log(pomoc.value);
    alert("Vas zahtev za kontakt je evidentiran bice te kontaktirani u najkracem roku");
}
function cenovnik(x){
    let spisakProizvoda=[
        "ADAM-4,99$",
        "ISABISA-9,99$",
        "PALMA-14,99$",
        "RECKA-19,99$"
        ];
    let spisakDost=["IN STOCK",
        "IN STOCK",
        "OUT OF STOCK",
        "IN STOCK"];
    let spisakProizvodaBezcena=[
            "ADAM",
            "ISABISA",
            "PALMA",
            "RECKA"
            ];
        const polje=document.getElementById("polje");
        let sadrzaj="";
        if(x==='spisakProizvoda'){
            polje.style.backgroundColor="orange";
            polje.style.fontWeight="bold";
            sadrzaj+="<ul>"
                for (let i = 0; i < spisakProizvoda.length; i++) {
                    sadrzaj+="<li>"+spisakProizvoda[i]+"</li>";
                }
            sadrzaj+="</ul>"
            polje.innerHTML=sadrzaj;
        }
        else if(x==='spisakDost'){
            sadrzaj+=`
                <table>
                <caption  style='color:blue'>SPISAK DOSTUPNOSTI</caption>
                <tr>
                <td  style='color:purple'>Proizvod</td>
                <td  style='color:cyan'>Dostupnost</td>
                </tr>
            `;
            for (let i = 0; i < spisakProizvodaBezcena.length; i++) {
                sadrzaj+=`
                <tr>
                    <td>${spisakProizvodaBezcena[i]}</td>
                    <td>${spisakDost[i]}</td>
                </tr>`;
            }
            sadrzaj+=`</table>`;
            polje.innerHTML=sadrzaj;
        }
    }