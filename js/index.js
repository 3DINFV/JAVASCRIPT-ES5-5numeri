"option strict";

let DIM = 5;
let vect = new Array(DIM);
let txt;
let chk;

window.onload = function (){
    txt=document.getElementsByName("txtNumero");
    chk=document.getElementsByName("chkNumero");
}

function genera(){
    let pos;
    vect.fill(0);
    console.log(vect);
    for(let i = 1;i<=DIM;i++){
        do {
            pos=Math.floor(Math.random()*(4-0+1))+0
        }while(vect[pos]!=0);
        vect[pos]=i;
    }
    console.log(vect);
    for(let i = 0;i<DIM;i++){
        txt[i].value="";
        chk[i].checked=false;
    }
}

function controlla(){
    let indovinati = 0;
    for(let i =0; i< DIM; i++){
        txt[i].style.backgroundColor="red";
        chk[i].checked=false;
        if(txt[i].value == vect[i]){
            txt[i].style.backgroundColor="lightgreen";
            chk[i].checked=true;
            indovinati++;
        }
    }
    if(indovinati==DIM)
        document.getElementById("ris").innerHTML = "Hai indovinato!!";
}