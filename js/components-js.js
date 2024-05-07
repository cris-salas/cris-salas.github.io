
// deswplegar menu hamburguesa 

export const hamburguerMenu=(btn) =>{
   document.addEventListener("click",(e) =>{   
   if(e.target.matches(btn) || e.target.matches(`${btn} *`)){
    document.querySelector(btn).classList.toggle("is-active");
    document.querySelector(".header__nav").classList.toggle("transform-menu");
   }
})
}

// colocar los elementos de la barra denavegacion en el header version desktop

export const menuDesktop = () => {
  
  let bandera = false;
  
  window.addEventListener("load", () =>{
    if (window.innerWidth > 992 && !bandera) {
      colocarLinks(true);
      bandera = true;
    }

    if (window.innerWidth < 992 && bandera) {
      colocarLinks(false);
      bandera = false;
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 992 && !bandera) {
      colocarLinks(true);
      bandera = true;
    }

    if (window.innerWidth < 992 && bandera) {
      colocarLinks(false);
      bandera = false;
    }
  });
};

const colocarLinks = (agregar) => {
  const $template=document.getElementById("dropdown").content;
  let $clone = document.importNode($template, true);
  const $header = document.querySelector(".header__div");
  let $nav = $header.querySelector(".header__nav--dom");

  if (agregar && !$nav) {
    const $links = ["Inicio", $clone , "Clientes", "Comencemos", "¿Interesados?"];
    const $enlaces = ["index.html","","clients.html","comencemos.html","interesado.html"];
    const $fragment = document.createDocumentFragment();
    
    for(let i=0;i<$links.length;i++){
      if(i===1){
        $fragment.appendChild($clone);
        continue;
      }
      let $a = document.createElement("a");
      $a.classList.add("header__a--dom");
      $a.textContent = $links[i];
      $a.setAttribute("href", $enlaces[i])
      $fragment.appendChild($a);
    };

    $nav = document.createElement("nav");
    $nav.classList.add("header__nav--dom");
    $nav.appendChild($fragment);
    $header.appendChild($nav);
    if(document.querySelector(".header__nav").matches(".transform-menu")){
       document.querySelector(".header__nav").classList.toggle("transform-menu");
       document.querySelector(".hamburger").classList.toggle("is-active");
    }
  } else if (!agregar && $nav) {
    $header.removeChild($nav);
  }
 }

 // activar carousel y botom dropdown

 export const activeElementClick = () =>{
  const d = document;
  d.addEventListener("click", (e) => {

  if(e.target.matches(".buttom-pre") || e.target.matches(".bi-pre")){
     moverCarousel(false);
  }

  if(e.target.matches(".buttom-next") || e.target.matches(".bi-next")){
     moverCarousel(true);
  }

  if(e.target.id === "buttom-dropdown" || e.target.matches(".bi-caret-down-fill")){
    dropdown();
  }

  if(e.target.id === "buttom-dropdown-hamburguer"){
    dropdownHamburguer()
  }

})
 }


 //mover carousel cambiando la clase visibility a la imagen a la que se desplaza

let posact=0;

function moverCarousel(move){
    const arreglo=document.querySelectorAll(".carousel__container-item");
    
    for(let i =0;i<arreglo.length;i++){
       if(arreglo[i].classList.contains("visibility")){
         posact=i;
         break;
       }
    }
    console.log(posact);
    if(move){
       if(posact === 2){
       arreglo[posact].classList.remove("visibility");
       arreglo[0].classList.add("visibility");
       }else{
        arreglo[posact].classList.remove("visibility");
        arreglo[posact+1].classList.add("visibility"); 
        posact++;
       }
    }else if(!move){
       if(posact === 0){
       arreglo[posact].classList.remove("visibility");
       arreglo[2].classList.add("visibility");
       }else{
         arreglo[posact].classList.remove("visibility");
         arreglo[posact-1].classList.add("visibility"); 
       }
    }
} 


// bottom dropdown

function dropdown(){
 document.querySelector(".nav-dropdown").classList.toggle("display-block");
}

// bottom dropdown hamburguer

function dropdownHamburguer(){
 document.querySelector(".nav-dropdown-hamburguer").classList.toggle("display-block");
}



