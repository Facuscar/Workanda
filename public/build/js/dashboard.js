(() => {
    /*  MODALES  */
    const openModalButtons = document.querySelectorAll('[data-modal-target]');
    const closeModalButtons = document.querySelectorAll('[data-close-button]');
    const overlay = document.getElementById('overlay');

    //La idea es que se puedan crear varios modales, por lo tanto le damos el EventListener a cada uno
    openModalButtons.forEach(button =>{
        button.addEventListener('click', (e) => {
            e.preventDefault();    
            const modal = document.querySelector(button.dataset.modalTarget);
            if(button.dataset.modalTarget === '#modal-edit'){
                llenarCampos(button);
            }
            openModal(modal);
        });
    })

    //Si hacemos click en el overlay (cuando se encuentra activo) cerramos el modal
    overlay.addEventListener('click', () =>{
        const modals = document.querySelectorAll('.modal.active');
        modals.forEach(modal => {
        closeModal(modal);
        });
    });


    //Le damos el EventListener a cada boton cerrar de cada modal
    closeModalButtons.forEach(button =>{
        button.addEventListener('click', () => {
        const modal = button.closest('.modal')
        closeModal(modal);
        });
    })


    //Funcion que abre el modal
    function openModal(modal){
        if(modal == null) return
        modal.classList.add('active')
        overlay.classList.add('active');
    }

    //Funcion que cierra el modal
    function closeModal(modal){
        if(modal == null) return
        modal.classList.remove('active')
        overlay.classList.remove('active');
    }

    function llenarCampos(btn){

        console.log(btn.dataset.id);

        //Vamos a recorrer el HTML para conseguir el resto de los elementos en la tabla y ponerlos en el formulario
        const email = btn.parentElement.previousElementSibling.lastElementChild.innerText;
        const nombre = btn.parentElement.previousElementSibling.previousElementSibling.lastElementChild.innerText;

        //Obtenemos los contenedores de cada elemento
        const emailP = document.getElementById('email-edit');
        const nombreP = document.getElementById('nombre-edit');
        const editP = document.getElementById('id-edit');

        //Ponemos los valores dentro del formulario
        emailP.value = email;
        nombreP.value = nombre;
        editP.value = btn.dataset.id;
    }
    
    
    
    
    
    /* DASHBOARD */   
    
    async function enviarPeticion(){
        const btnCrear = document.getElementById('crear-usuario');
        //Conseguimos los datos que vamos a enviar a través de la petición
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
        agregarCarga(btnCrear);

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
            if(resultado.resultado){
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
            }else {
                Swal.fire({
                    icon: 'error',
                    title: `Ups! Hubo un error`,
                    showConfirmButton: false,
                    timer: 1500
                  }) ;
            } 
        } catch (error) {
            console.log(error);
        }
        
        //Finalizamos la animación de carga
        sacarCarga(btnCrear);  
    } 

    async function editPeticion(){
        const btnEdit = document.getElementById('editar-usuario');
        //Conseguimos los datos que vamos a enviar a través de la petición
        const email = document.getElementById('email-edit');
        const nombre = document.getElementById('nombre-edit');
        const password = document.getElementById('password-edit');
        const password2 = document.getElementById('password2-edit');
        const id = document.getElementById('id-edit');

        //Construimos la peticion
        const datos = new FormData();
        datos.append('email', email.value);
        datos.append('nombre', nombre.value);
        datos.append('password', password.value);
        datos.append('password2', password2.value);
        datos.append('id',id.value);

        //Agregamos una animación de carga
        agregarCarga(btnEdit);

        //Enviamos la petición al endpoint
        try {
            const url = 'http://localhost:3000/actualizar-usuario';
            const respuesta = await fetch(url, {
                method: 'POST',
                body: datos
            });
            //Recibimos la respuesta
            const resultado = await respuesta.json();
            console.log(resultado);
            
            //Si no hay errores
            if(resultado.resultado){
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario editado exitosamente',
                    showConfirmButton: false,
                    timer: 1500
                  })

                  const cerrar = document.querySelectorAll('.active');
                  cerrar.forEach(element => {
                    element.classList.remove('active');
                  });

                  editarRegistro(id.value, email.value, nombre.value);
            }else {
                Swal.fire({
                    icon: 'error',
                    title: `Ups! Hubo un error`,
                    showConfirmButton: false,
                    timer: 1500
                  }) 
            }  
        } catch (error) {
            console.log(error);
        }
        
        //Finalizamos la animación de carga
        sacarCarga(btnEdit);
    }

    async function deletePeticion(id){
        const datos = new FormData();
        datos.append('id', id);

        //Enviamos la petición al endpoint
        try {
            const url = 'http://localhost:3000/eliminar-usuario';
            const respuesta = await fetch(url, {
                method: 'POST',
                body: datos
            });

            //Recibimos la respuesta
            const resultado = await respuesta.json();
            console.log(resultado);
            
            //Si no hay errores
            if(resultado.resultado){
                Swal.fire({
                    icon: 'success',
                    title: `Usuario ${id} eliminado exitosamente`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                eliminarRegistro(id);
            }else {
                Swal.fire({
                    icon: 'error',
                    title: `Ups! Hubo un error`,
                    showConfirmButton: false,
                    timer: 1500
                  }) ;
            } 
        } catch (error) {
            console.log(error);
        }
    }


    //Boton de crear, desde donde se hace trigger a la peticion una vez que se llenaron los datos
    const btnCrear = document.getElementById('crear-usuario');
    btnCrear.addEventListener('click', (e) => {
        e.preventDefault();
        enviarPeticion();
    });


    //Boton de editar, desde donde se hace trigger a la peticion una vez que se llenaron los datos
    const btnEdit = document.getElementById('editar-usuario');
    btnEdit.addEventListener('click', (e) =>{
        e.preventDefault();
        editPeticion();
    });

    const btnDelete = document.querySelectorAll('#delete');
    btnDelete.forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            const id = btn.dataset.id;
            Swal.fire({
                title: '¿Estás seguro?',
                text: "No podras revertir este cambio!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Si, eliminalo!'
              }).then((result) => {
                if (result.isConfirmed) {
                    deletePeticion(id);
                }
              });
           
        });
    });

    function agregarCarga(btn){
        btn.classList.add('not-visible');
        const loading = btn.nextElementSibling;
        loading.classList.add('visible');
    }

    function sacarCarga(btn){
        const loading = btn.nextElementSibling;
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
        
        //Agregamos los dataset
        update.setAttribute('data-modal-target','#modal-edit');
        update.setAttribute('data-id',userId.id);

        //El event listener para que abra el modal
        update.addEventListener('click', (e) => {
            e.preventDefault();    
            const modal = document.querySelector(update.dataset.modalTarget);
            if(update.dataset.modalTarget === '#modal-edit'){
                llenarCampos(update);
            }
            openModal(modal);
        });

        //El event listener para que se pueda eliminar
        borrar.addEventListener('click', e => {
            e.preventDefault();
            Swal.fire({
                title: '¿Estás seguro?',
                text: "No podras revertir este cambio!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: '¡Si, eliminalo!'
              }).then((result) => {
                if (result.isConfirmed) {
                    deletePeticion(userId.id);
                }
              });  
        });
    }

    function editarRegistro(id, email, nombre){

        //Editamos la data de los registros para que se actualice en tiempo real
        const edit = document.querySelector(`[data-id = '${id}']`);
        const emailContainer = edit.parentElement.previousElementSibling.lastElementChild;
        emailContainer.innerText = email; 
        const nombreContainer = edit.parentElement.previousElementSibling.previousElementSibling.lastElementChild;
        nombreContainer.innerText = nombre;
    }

    function eliminarRegistro(id){

        //Eliminamos el registro de la lista para que se actualice en tiempo real
        const edit = document.querySelector(`[data-id='${id}']`)
        const accionesContainer = edit.parentElement;
        const emailContainer = accionesContainer.previousElementSibling;
        const nombreContainer = emailContainer.previousElementSibling;
        const idContainer = nombreContainer.previousElementSibling;
        accionesContainer.parentElement.removeChild(accionesContainer);
        emailContainer.parentElement.removeChild(emailContainer);
        nombreContainer.parentElement.removeChild(nombreContainer);
        idContainer.parentElement.removeChild(idContainer);
    }
})()