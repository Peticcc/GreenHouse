function popuniNiz(){
    let niz=[];
    for (let i = 1; i <= 5; i++){
       niz[niz.length]=`slike/sl${i}.jpg`;      
    }
    return niz;
}
let niz=popuniNiz();

let foto=document.getElementById("fotografija");
let trenutna=0;

function postaviFotografiju(){
    foto.innerHTML=`<img src='${niz[trenutna]}' width="600px" height="400px">`;
}
postaviFotografiju();
function prethodna(){
    if (trenutna==0) {
        trenutna=niz.length - 1;
    }
    else{
        trenutna--;

    }
    postaviFotografiju();
}
function sledeca(){
    if (trenutna==niz.length - 1) {
        trenutna=0;
    }
    else{
        trenutna++;
    }
    postaviFotografiju();
}