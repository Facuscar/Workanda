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
    const btn = document.querySelector('.boton');
    btn.classList.add('not-visible')
    const loading = document.querySelector('.loading');
    loading.classList.add('visible');

    //Enviamos la petición al endpoint
    try {
        const url = 'http://localhost:3000';
        const respuesta = await fetch(url, {
            method: 'POST',
            body: datos
        });
        //Recibimos la respuesta
        const resultado = await respuesta.json();
        
        //Validamos si las alertas están vacias
        console.log(resultado);
        if(resultado.alertas.length === 0){
            //No hay alertas, por lo tanto lo llevamos al CRUD
            window.location.href = "http://localhost:3000/dashboard";
        } else{
            //Mostramos las alertas
            alertasContainer = document.querySelector(".alertas-container");
            for (const [key, value] of Object.entries(resultado.alertas)) {
                alertaMensaje = document.createElement("P");
                alertaMensaje.classList.add(key);
                alertaMensaje.classList.add('alerta');
                alertaMensaje.textContent = value;
                alertasContainer.appendChild(alertaMensaje);
            };
        }
    }
    catch (error) {
        console.log(error);
    }
    loading.classList.remove('visible');
    btn.classList.remove('not-visible');
}

})()