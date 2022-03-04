(() => {
//Seleccionamos el boton de enviar
 const btnEnviar = document.querySelector('.boton'); 

 //Cada vez que se toca enviar, hacemos una solicitud al backend que verifique los datos ingresados
 btnEnviar.addEventListener('click', (e)=>{
     e.preventDefault();
     enviarPeticion();
 });

async function enviarPeticion(){

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    //Construimos la peticion
    const datos = new FormData();
    datos.append('email', email.value);
    datos.append('password', password.value);

    //Agregamos una animación de carga
    agregarCarga();

    //Enviamos la petición al endpoint
    try {
        const url = 'https://obscure-mesa-25769.herokuapp.com';
        const respuesta = await fetch(url, {
            method: 'POST',
            body: datos
        });
        //Recibimos la respuesta
        const resultado = await respuesta.json();
        console.log(resultado);
        //Validamos si las alertas están vacia
        if(Object.keys(resultado.alertas).length === 0){
            //No hay alertas, por lo tanto lo llevamos al CRUD
            window.location.href = "https://obscure-mesa-25769.herokuapp.com/dashboard";
        } else{
            //Mostramos las alertas
            mostrarAlertas(resultado.alertas);
        }
    }
    catch (error) {
        console.log(error);
    }

    //Finalizamos la animación de carga
    sacarCarga();
}

    function mostrarAlertas(alertas){
        element = document.querySelectorAll('P');
            if(element){
            element.forEach(parrafo =>{
                parrafo.remove();
                } )
            }
            alertasContainer = document.querySelector(".alertas-container");
            for (const [key, value] of Object.entries(alertas)) {
                value.forEach(alerta => {
                alertaMensaje = document.createElement("P");
                alertaMensaje.classList.add(key);
                alertaMensaje.classList.add('alerta');
                alertaMensaje.textContent = alerta;
                alertasContainer.appendChild(alertaMensaje); 
            });     
        }
    }

    function agregarCarga(){
        const btn = document.querySelector('.boton');
        btn.classList.add('not-visible');
        const loading = document.querySelector('.loading');
        loading.classList.add('visible');
    }

    function sacarCarga(){
        const btn = document.querySelector('.boton');
        const loading = document.querySelector('.loading');
        loading.classList.remove('visible');
        btn.classList.remove('not-visible');
    }

})()