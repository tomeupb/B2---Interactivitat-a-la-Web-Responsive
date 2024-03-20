 /*
 Tres alertas alclicar  sobre las 3 imagenes del Inicio Saldrá un texto explicativo de cada imagen
 */  
   
   
   function mostrarAlerta1() {
        alert("Los clientes mas antiguos del restaurante Antonio y Miguel");
    }

    function mostrarAlerta2() {
        alert("La familia al completo celebrando la aperta de Meson C´an Tomeu ");
    }


    function mostrarAlerta3() {
        alert("Primera Foto de la cocina en el año 1950");
    }


 /*
 Si clica sobre el logo vegetariano saldran de la carta comidas vegetarianas (Pizza vegetariana,Hamburguesa Vegetariana y paella vegetariana)
 */   

function funcion4(){
  
let vegetariano = document.getElementById('comidaVegetariana');
vegetariano.style.display= 'block';
}

/*
Si clicla en la imagen botón se cmbia de modo noche a modo dia ; se cambia el color de fondo y las letras
Si clica uno modo noche si clica otro modo dia
*/
function funcion5() {
    let body = document.getElementById('dia'); 
    let textos = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, li, footer p'); 

    if (body.style.backgroundColor === 'white') {  // Modo oscuro
   
        body.style.backgroundColor = 'black'; 
        for (let i = 0; i < textos.length; i++) {
            textos[i].style.color = 'white';
        }
    } else {   // Modo claro
        
        body.style.backgroundColor = 'white'; 
        for (let i = 0; i < textos.length; i++) {
            textos[i].style.color = 'black';
        }
    }
}

// Si pasamos el cursor sobre el video saldrá un  alert descriptivo
function mostrarAlerta4() {
    alert("Con una pasión insaciable por la excelencia culinaria, el Chef Ejecutivo Juan Pérez lidera nuestra cocina con maestría y creatividad incomparables. Con más de 15 años de experiencia en algunos de los restaurantes más prestigiosos del país");
}

//carrusel de imágenes 
      const galeria = [
      '2.jpg',
        '1.jpg',
        '3.jpg',
        '4.PNG',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '10.PNG',
        '11.PNG',
        'slider2.jpg',
        'slider4.jpg',
        'fot1.png',
        'fot2.PNG',
        'fot3.PNG',
        'fot4.PNG',
        'fot5.PNG',
        'fot6.PNG',
        'fot7.PNG',
      ];

      let contador = 0;
      const imageElement = document.getElementById('imagen');
    
      function actual(indice) {
        imageElement.src = galeria[indice];
      }


    //funcion para las imágenes vayan alante
      function siguiente() {
        contador++;
        if (contador >= galeria.length) {
          contador = 0;
        }
        actual(contador);
      }
      actual(0);

      //funcion para que las imagenes vayan atras
      function anterior(){
        contador--;
        if (contador < 0) {
            contador = galeria.length - 1;
        }
        actual(contador);
      }
      

//Página historia aumenta cuando clicamos sobre historia1
      function aumento() {
        let imagen1 = document.getElementById("historia1");
        imagen1.style.height = "100px";
        imagen1.style.width =  "100px";

        let imagen2 = document.getElementById("historia2");
        imagen2.style.height =  "100px";
        imagen2.style.width =  "100px";

        let imagen3 = document.getElementById("historia3");
        imagen3.style.height =  "100px";
        imagen3.style.width = "100px";

        let imagen4 = document.getElementById("historia4");
        imagen4.style.height =  "100px";
        imagen4.style.width =  "100px";

        let imagen5= document.getElementById("historia5");
        imagen5.style.height = "100px";
        imagen5.style.width =  "100px";

        let imagen6= document.getElementById("historia6");
        imagen6.style.height =  "100px";
        imagen6.style.width =  "100px";;
      }

//Página historia disminuyen fotos  cuando clicamos sobre historia6
      function disminuye() {
        let imagen1 = document.getElementById("historia1");
        imagen1.style.height = "50px";
        imagen1.style.width = "50px";

        let imagen2 = document.getElementById("historia2");
        imagen2.style.height = "50px";
        imagen2.style.width = "50px";

        let imagen3 = document.getElementById("historia3");
        imagen3.style.height = "50px";
        imagen3.style.width = "50px";

        let imagen4 = document.getElementById("historia4");
        imagen4.style.height = "50px";
        imagen4.style.width = "50px";

        let imagen5 = document.getElementById("historia5");
        imagen5.style.height = "50px";
        imagen5.style.width = "50px";

        let imagen6 = document.getElementById("historia6");
        imagen6.style.height = "50px";
        imagen6.style.width = "50px";
      }
    
     
// Página Historia descripcion de los familiares y sale un alert cuando pones el cursor encima
function pareja1() {
    
    alert("Los Fundadores Paula y Tomeu ! Descubre la historia detrás del encantador Mesón Can Tomeu, creado con amor y dedicación por nuestros adorables abuelos. Su legado vive en cada plato y en cada rincón de nuestro restaurante. ¡Ven y descubre su inspiradora historia!");
}
function pareja2() {
    
    alert("Los hijos de los Fundadores Margalida y Biel! Conoce a nuestro dedicado hijo e hija , quienes continúan el legado familiar en el Mesón Can Tomeu. Su compromiso y talento se reflejan en cada detalle del servicio que ofrecemos. ¡Únete a nosotros y sé parte de esta tradición que perdura!");
}
function pareja3() {
    
    alert("Los nietos Jaume y Magdalena! Conoce a los nietos que dan vida al encanto y la tradición en el Mesón Can Tomeu.");
}
      

//Encuesta de calidad- Cada vez que creamos un formulario se guarda y sale el siguiente
function guardarResultados(event) {
    event.preventDefault(); 
    
   
    var reserva = document.getElementById("reserva").value;
    var fecha = document.getElementById("fecha").value;
    var turno = document.getElementById("TurnoSelect").value;
    var calidadComida = document.getElementById("CalidadSelect").value;
    var TiempoEspera = document.getElementById("EsperaSelect").value;
    var Presentacion = document.getElementById("EmpleadosSelect").value;
    var Trato = document.getElementById("TratoSelect").value;
    var limpieza = document.getElementById("LimpiezaSelect").value;
    var Organizacion = document.getElementById("OrganizacionSelect").value;
    var Estrellas = document.getElementById("EstrellasSelect").value;
    var Comentarios= document.getElementById("comentarios").value;

var resultados = "<fieldset>";
resultados += "<legend>"+reserva + "</legend>";
resultados += "<b>Fecha de Reserva:</b> " + fecha + "<br>";
resultados += "<b>Turno:</b> " + turno + "<br>";
resultados += "<b>Calidad de la comida:</b> " + calidadComida + "<br>";
resultados += "<b>Tiempo de espera:</b> " + TiempoEspera + "<br>";
resultados += "<b>Presentacion de los platos:</b> " + Presentacion + "<br>";
resultados += "<b>Trato con los empleados:</b> " + Trato + "<br>";
resultados += "<b>Limpieza del local:</b> " + limpieza + "<br>";
resultados += "<b>Organizacion del servicio:</b> " + Organizacion + "<br>";
resultados += "<b>Estrellas:</b> " + Estrellas + "<br>";
resultados += "<b>Comentarios:</b> " + Comentarios + "<br>";
resultados += "</fieldset><br>";

    
  
  
    document.getElementById("resultadosFooter").innerHTML += resultados;
}



/*
Funcion que exlica con un alert que hace el icono de vegan postres
*/
function info(){
    alert("Información sobre los Postres Vegeanos : Si clicas sobre el icono Vegan que esta en la parte superior derecha te saldrán los postres veganos");
}
/*
Funcion que exlica con un alert que hace el icono de vegan carta
*/
function info1(){
    alert("Información sobre la carta Vegena : Si clicas sobre el icono Vegan que esta en la parte superior derecha te saldrá el menu vegetariano");
}

/*
Funcion que exlica con un alert que hace el icono de cocteles
*/

function info2(){
    alert("Información sobre la carta de Cocteles : Si clicas sobre el icono Cocteles que esta en la parte superior derecha te saldrá varios Cocteles");
}

function info3(){
    alert("Encuesta de calidad : Si quieres darnos tu opinión sobre el restaurante cliclando en la parte superior derecha en el icono con estrellas podrás valorarnos");
}

function info4(){
    alert("Si quieres Contactar con nosotros y tienes alguna duda o pregunta ,  clica sobre el icono que esta a la izquierda de la informacion");
}



/*
Ingredientes carta
*/
function infoHamburguesa() {
    alert("Ingredientes: Pan de hamburguesa, carne de res molida, queso cheddar, lechuga, tomate, cebolla, pepinillos, salsa de tomate (kétchup), mostaza, mayonesa");
}

function infoPizza() {
    alert("Ingredientes: Masa de pizza, salsa de tomate, mozzarella, ingredientes variados (según la pizza), orégano");
}

function infoSalmon() {
    alert("Ingredientes: Filete de salmón, especias, limón");
}

function infoCarne() {
    alert("Ingredientes: Carne asada, guarniciones");
}

function infoEnsalada() {
    alert("Ingredientes: Variedad de verduras, aderezo especial");
}

function infoPaella() {
    alert("Ingredientes: Arroz, mariscos, especias");
}

// Funciones para platos vegetarianos
function infoPizzaVegetariana() {
    alert("Ingredientes: Masa de pizza, salsa de tomate, mozzarella, ingredientes vegetarianos variados, orégano");
}

function infoHamburguesaVegetariana() {
    alert("Ingredientes: Pan de hamburguesa, hamburguesa vegetariana, queso (opcional), lechuga, tomate, cebolla, pepinillos, salsa de tomate (kétchup), mostaza, mayonesa");
}

function infoPaellaVegetariana() {
    alert("Ingredientes: Arroz, verduras, especias");
}



/*
Ingredientes Postres  , un alert que al pasar el cursor sobre el icono de informacion de dará los ingredientes
*/
function infoPastel() {
    alert("Ingredientes: Harina, azúcar, mantequilla, huevos, fresas, gelatina, azúcar glas");
}

function infoTortitas() {
    alert("Ingredientes: Harina, leche, huevos, azúcar, mantequilla, sirope de arce, frutas frescas");
}

function infoTiramisu() {
    alert("Ingredientes: Café, licor de café, huevos, azúcar, queso mascarpone, cacao en polvo");
}

function infoGofre() {
    alert("Ingredientes: Harina, leche, huevos, azúcar, mantequilla, levadura, sirope, frutas frescas");
}

function infoMousse() {
    alert("Ingredientes: Chocolate, nata, azúcar, huevos");
}

function infoTartaNaranja() {
    alert("Ingredientes: Harina, azúcar, mantequilla, huevos, naranjas, gelatina, azúcar glas");
}

function infoBrownie() {
    alert("Ingredientes: Chocolate, harina, azúcar, mantequilla, huevos, nueces");
}

function infoFruta() {
    alert("Ingredientes: Frutas de temporada (varía según la disponibilidad)");
}


function infoHistoria() {
    alert("Si haces dobleclic en la primera foto, todas las imágenes aumentarán de tamaño. Si haces dobleclic en la última foto, volverán a su tamaño original. Además, al pasar clicar las fotos 2, 4 y 5, aparecerá una descripción familiar.");
}
