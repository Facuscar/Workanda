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
}

})()