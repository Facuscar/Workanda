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