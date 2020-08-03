const checkBox = document.getElementById('checkbox');
const body = document.getElementById('body');

const items = document.querySelectorAll('#item');


function toggleNight() {
    items.forEach(function changeItemClass(e){
        if (!e.classList.contains('night')) {
            e.classList.add('night');
        } else {
            e.classList.remove('night');
        }
    });
}

checkbox.addEventListener('change', toggleNight);