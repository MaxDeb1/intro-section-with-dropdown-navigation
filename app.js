const menuToggle = document.querySelector('.topnav-btn');
const menu = document.querySelector('.topnav-items');

menuToggle.onclick = function() {
	menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
}

window.onresize = function() {
    if(window.innerWidth >= "1200"){
        menuToggle.classList.remove('active');
        menu.classList.remove('active');
    }
}


const item = document.querySelectorAll(".item");

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-menu')) {
        item.forEach(el => {
            el.classList.remove('show');
        });
    } 
}

for (var i = 0; i < item.length; i++) {
    item[i].addEventListener('click', (e) => {
        item.forEach(el => {
            el.classList.remove('show');
        });
        if(e.target.classList.contains('dropdown-menu')) {
            e.target.closest('.item').classList.toggle('show');
        }
    })
}