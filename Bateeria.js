const boton = document.querySelector('#boton');
const bateria=document.querySelector('#imagen');
const sonido=document.querySelector('#sonido');


document.addEventListener("keypress", (e) => { 
    e.preventDefault()
    if (e.keyCode == 32) {
       bateria.src="bacteria/img/base-bombo.png"
       sonido.innerHTML=`<audio autoplay src="bacteria/sounds/bombo.mp3"></audio>`

   } else if (e.keyCode == 115) {
       bateria.src="bacteria/img/base-caja.png"
       sonido.innerHTML=`<audio autoplay src="bacteria/sounds/caja.mp3"></audio>`
 
       //codigo 
   }else if (e.keyCode == 100) {
    bateria.src="bacteria/img/base-hit-hat.png"
    sonido.innerHTML=`<audio autoplay src="bacteria/sounds/hit-hat.mp3"></audio>`
       //codigo 
   }else if (e.keyCode == 102) {
    bateria.src="bacteria/img/base-platillo-crash-derecho.png"
    sonido.innerHTML=`<audio autoplay src="bacteria/sounds/platillo-crash-derecho2.mp3"></audio>`

   }else if (e.keyCode == 103) {
    bateria.src="bacteria/img/base-platillo-izquierdo.png"
    sonido.innerHTML=`<audio autoplay src="bacteria/sounds/platillo-crash-izquierdo.mp3"></audio>`

   }else if (e.keyCode == 106) {
    bateria.src="bacteria/img/base-platillo-ride.png"
    sonido.innerHTML=`<audio autoplay src="bacteria/sounds/platillo-ride.mp3"></audio>`
    
   }else if (e.keyCode == 107) {
    bateria.src="bacteria/img/base-tom-aereo.png"
    sonido.innerHTML=`<audio autoplay src="bacteria/sounds/tom-aereo.mp3"></audio>`

   }else if (e.keyCode == 108) {
    bateria.src="bacteria/img/base-tom-suelo.png"
    sonido.innerHTML=`<audio autoplay src="bacteria/sounds/tom-suelo.mp3"></audio>`
   }
   

})


boton.addEventListener("click", (e)  => {
   e.preventDefault()
    bateria.src="bacteria/img/CONTROL.png"
    setTimeout(()=>{
         bateria.src="bacteria/img/base.png";
    },3000);

console.log(e)
});