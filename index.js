
let lengthEL = document.getElementById("length_el")
let volumeEl=document.getElementById("volume_el")
let massEl=document.getElementById("mass_el")
unit= document.getElementById("Unit").innerText

function length(){
    M2F=unit*3.28084
    F2M=unit*0.3048
   lengthEL.innerText= unit + " " + "meters" +" = " + M2F + "Feet" + " | " + unit + " " + "Feet" +" = " + F2M + "meters" 

}
function volume(){
    L2G=unit*0.264172
    G2L=unit*3.78541
   volumeEl.innerText= unit + " " + "liters" +" = " + L2G + "gallons" + " | " + unit + " " + "gallons" +" = " + G2L + "liters" 
}

function mass(){
    K2P=unit*2.20462
    P2K=unit*0.453592
   massEl.innerText= unit + " " + "kilograms" +" = " + K2P + "pounds" + " | " + unit + " " + "kilograms" +" = " + P2K + "pounds" 
}

