//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}
//oculto el menu una vez que selecciono una opción
let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

//Creo las barritas de una barra particular identificada por su id
function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

//selecciono todas las barras generales par aluego manipularlas
let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let wordpress = document.getElementById("wordpress");
crearBarra(wordpress);
let photoshop = document.getElementById("photoshop");
crearBarra(photoshop);
let php = document.getElementById("php");
crearBarra(php);
let ilustrator = document.getElementById("ilustrator");
crearBarra(ilustrator);

//Ahora voy a guardar la cantidad de barritas que se van a ir pintando por cada barar
//para eso utilizo un arreglo, cada posiciòn pertenece a un elemento
//comienzan en -1 porque no tiene ninguna pintada al iniciarse
let contadores = [-1,-1,-1,-1,-1,-1];
//esta variable la voy a utilizar de bandera para saber si ya ejecuto la animación
let entro = false;

//función que aplica las animaciones de la habilidades
function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 16, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 11, 1, intervalJavascript);
        },100);
        const intervalWordpress = setInterval(function(){
            pintarBarra(wordpress, 11, 2, intervalWordpress);
        },100);
        const intervalPhotoshop = setInterval(function(){
            pintarBarra(photoshop, 15, 3, intervalPhotoshop);
        },100);
        const intervalPhp = setInterval(function(){
            pintarBarra(php, 16, 4, intervalPhp);
        },100);
        const intervalIlustrator = setInterval(function(){
            pintarBarra(ilustrator, 11, 5, intervalIlustrator);
        },100);
    }
}

//lleno una barra particular con la cantidad indicada
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#07cad1";
    }else{
        clearInterval(interval)
    }
}

//detecto el scrolling del mouse para aplicar la animación de la barra
window.onscroll = function(){
    efectoHabilidades();
}

// VALIDACION DE FORMULARIO

// Id de campos
const inputName = document.getElementById("name")
const inputEmail = document.getElementById("email")
const inputPhone = document.getElementById("phone")
const inputMessage = document.getElementById("message")
const btnSend = document.getElementById("btn-send")
const conditionPrivacy = document.getElementById("condition-privacy")
// Id mensajes de error
const errorName = document.getElementById("name-error")
const errorEmailInputVoid = document.getElementById("email-error-input-void")
const errorEmailNotInclude = document.getElementById("email-error-not-include-condition")
const errorPhone = document.getElementById("phone-error")
const errorMessage = document.getElementById("message-error")
const errorConditionPrivacy = document.getElementById("condition-privacy-error")
// Mensaje a enviar
const mensajeEnviado = document.getElementById("mensaje-enviado")


function checkInputs() {
    // Obtener valores de los inputs
    let nameValue = inputName.value;
    let emailValue = inputEmail.value;
    let phoneValue = inputPhone.value;
    let messageValue = inputMessage.value
    let isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)

    // Verificar que los campos sean verdaderos
    let cumplirRequisitos = true

    // Evaluar cada Campo
    if (nameValue !== "") {
        errorName.classList.add("d-none");
    } else {
        errorName.classList.remove("d-none");
        cumplirRequisitos = false
    }

    // Error de Email Vació
    if (emailValue !== "") {
        errorEmailInputVoid.classList.add("d-none");
    } else {
        errorEmailInputVoid.classList.remove("d-none");
        cumplirRequisitos = false
    }
    // Error de Email sin cumplir condiciones
    if (isEmailValid) {
        errorEmailNotInclude.classList.add("d-none");
    } else {
        errorEmailNotInclude.classList.remove("d-none");
        cumplirRequisitos = false
    }

    if (phoneValue !== "") {
        errorPhone.classList.add("d-none");
    } else {
        errorPhone.classList.remove("d-none");
        cumplirRequisitos = false
    }

    if (messageValue !== "") {
        errorMessage.classList.add("d-none");
    } else {
        errorMessage.classList.remove("d-none");
        cumplirRequisitos = false
    }

    if (conditionPrivacy.checked) {
        errorConditionPrivacy.classList.add("d-none");
    } else {
        errorConditionPrivacy.classList.remove("d-none");
        cumplirRequisitos = false
    }

    if (cumplirRequisitos) {
        mensajeEnviado.classList.remove("d-none");
    }

    return cumplirRequisitos;
}

btnSend.addEventListener("click", () => {
    event.preventDefault();

    checkInputs()
})

document.getElementById('name').addEventListener('click', function(event) {
    event.preventDefault();
});

document.getElementById('email').addEventListener('click', function(event) {
    event.preventDefault();
});

document.getElementById('phone').addEventListener('click', function(event) {
    event.preventDefault();
});

document.getElementById('option-contact').addEventListener('click', function(event) {
    event.preventDefault();
});

document.getElementById('message').addEventListener('click', function(event) {
    event.preventDefault();
});

// API integration
document.addEventListener("DOMContentLoaded", () => {
    // Función para obtener datos de la API
    function fetchUserData() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                displayUserData(user);
            })
            .catch(error => console.error('Error:', error));
    }

    // Función para mostrar los datos en la página
    function displayUserData(user) {
        const userContainer = document.getElementById('user-container');
        userContainer.innerHTML = `
            <h3>Random User Data</h3>
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p>Email: ${user.email}</p>
            <img src="${user.picture.large}" alt="User Picture">
        `;
    }

    // Llamar a la función para obtener y mostrar datos
    fetchUserData();
});




