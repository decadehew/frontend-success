const openModal = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeModal = document.querySelectorAll('.close-modal');
const btnConfirm = document.querySelector('.btn-confirm');
const body = document.body;

function createModalOverlay() {
    const div = document.createElement('div');
    div.classList.add('modal-overlay');
    return div;
}

openModal.addEventListener('click', function() {
    modal.style.display = 'block';
    body.appendChild(createModalOverlay());
})

btnConfirm.addEventListener('click', function() {
    alert('Hello 前端成才');
    modal.style.display = 'none';
    const modalOverlay = document.querySelector('.modal-overlay');
    body.removeChild(modalOverlay);
})

closeModal.forEach(function(e) {
    e.addEventListener('click', function() {
        modal.style.display = 'none';
        const modalOverlay = document.querySelector('.modal-overlay');
        body.removeChild(modalOverlay);
    })
})

document.body.addEventListener('click', function(e) {
    const target = e.target; //<div class="modal-overlay"></div>
    const modalOverlay = target.className;
    if(modalOverlay === 'modal-overlay') {
        modal.style.display = 'none';
        body.removeChild(target);
    }

})