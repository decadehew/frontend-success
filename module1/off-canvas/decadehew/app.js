const openSide = document.querySelector('.open-side');
const sidebar = document.querySelector('#sidebar');

openSide.addEventListener('click', function(e) {
    if(sidebar.style.display === 'none') {
        sidebar.style.display = 'block'
    } else {
        sidebar.style.display = 'none'
    }
})
