(() => {

    async function enviarPeticion(){
        const email = document.getElementById('email');
        const nombre = document.getElementById('nombre');
        const password = document.getElementById('password');
        const password2 = document.getElementById('password2');

        //Construimos la peticion
        const datos = new FormData();
        datos.append('email', email.value);
        datos.append('nombre', nombre.value);
        datos.append('password', password.value);
        datos.append('password2', password2.value);

        //Agregamos una animación de carga
        agregarCarga();

        //Enviamos la petición al endpoint
        try {
            const url = 'http://localhost:3000/crear-usuario';
            const respuesta = await fetch(url, {
                method: 'POST',
                body: datos
            });
            //Recibimos la respuesta
            const resultado = await respuesta.json();
            console.log(resultado);

        } catch (error) {
            console.log(error);
        }
        
        //Finalizamos la animación de carga
        sacarCarga();
    } 

    const btnCrear = document.getElementById('crear-usuario');
    btnCrear.addEventListener('click', (e) => {
        e.preventDefault();
        enviarPeticion();
    });

    function agregarCarga(){
        const btn = document.getElementById('crear-usuario');
        btn.classList.add('not-visible');
        const loading = document.querySelector('.loading');
        loading.classList.add('visible');
    }

    function sacarCarga(){
        const btn = document.getElementById('crear-usuario');
        const loading = document.querySelector('.loading');
        loading.classList.remove('visible');
        btn.classList.remove('not-visible');
    }
})()