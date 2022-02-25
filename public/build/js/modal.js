const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

//La idea es que se puedan crear varios modales, por lo tanto le damos el EventListener a cada uno
openModalButtons.forEach(button =>{
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget);
      openModal(modal);
    });
})

//Si hacemos click en el overlay (cuando se encuentra activo) cerramos el modal
overlay.addEventListener('click', () =>{
    const modals = document.querySelectorAll('.modal-nuevo.active');
    modals.forEach(modal => {
    closeModal(modal);
    });
});


//Le damos el EventListener a cada boton cerrar de cada modal
closeModalButtons.forEach(button =>{
    button.addEventListener('click', () => {
      const modal = button.closest('.modal-nuevo')
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