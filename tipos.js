// Cerrar el modal al presionar "Cancelar"
var cancelButton = document.querySelector(".next-room2");
if (cancelButton) {
    cancelButton.addEventListener("click", function() {
        addRoomModal.style.display = 'none';  // Cierra el modal de la habitación
    });
}
// Función para abrir/cerrar el sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    sidebar.classList.toggle('active');
    main.classList.toggle('shifted');
}
function showSection(sectionId) {
    const sections = document.querySelectorAll('main .content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex"; // Cambiar a "flex" para centrar el modal
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
