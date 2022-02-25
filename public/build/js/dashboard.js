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
            
            //Si no hay errores
            if(Object.keys(resultado.alertas).length === 0){
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario guardado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  const cerrar = document.querySelectorAll('.active');
                  cerrar.forEach(element => {
                    element.classList.remove('active');
                  });

                  agregarNuevoRegistro(resultado.resultado);
            }
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

    function agregarNuevoRegistro(userId){

        //Defino los elementos
        let lista = document.querySelector('.lista-dashboard')
        let idLi = document.createElement('LI');
        let idP = document.createElement('P');
        let nombreLi = document.createElement('LI');
        let nombreP = document.createElement('P');
        let emailLi = document.createElement('LI');
        let emailP = document.createElement('P');
        let acciones = document.createElement('LI');
        acciones.classList.add('acciones');
        let update = document.createElement('A');
        let borrar = document.createElement ('A');
        let email = document.getElementById('email');
        let nombre = document.getElementById('nombre');
        //Agrego el contenido a cada elemento

        //Agregamos el ID
        idLi.appendChild(idP);
        lista.appendChild(idLi);
        idP.textContent = userId.id;
        
        //Agregamos el nombre
        nombreLi.appendChild(nombreP);
        lista.appendChild(nombreLi);
        nombreP.textContent = nombre.value;

        //Agregamos el Email
        emailLi.appendChild(emailP);
        lista.appendChild(emailLi);
        emailP.textContent = email.value;

        //Agregamos las acciones
        const updateIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" /><path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" /><line x1="16" y1="5" x2="19" y2="8" />';
        const borrarIcon = '<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trash" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><line x1="4" y1="7" x2="20" y2="7" /><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>';
        lista.appendChild(acciones);
        acciones.appendChild(update);
        acciones.appendChild(borrar);
        update.innerHTML = updateIcon;
        borrar.innerHTML = borrarIcon;
        
    }
})()