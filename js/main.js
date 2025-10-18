// Espera a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileNavToggle && navLinks) {
        // Escucha el clic en el botón hamburguesa
        mobileNavToggle.addEventListener('click', () => {
            // Alterna la clase 'active' en la lista de enlaces
            navLinks.classList.toggle('active');
            
            // (Opcional) Cambia el ícono y el aria-label por accesibilidad
            const icon = mobileNavToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
                mobileNavToggle.setAttribute('aria-label', 'Cerrar menú');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
                mobileNavToggle.setAttribute('aria-label', 'Abrir menú');
            }
        });
    }

});