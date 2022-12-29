let dropSearchList = document.querySelector('.search__attribute-list');
let chekUp = document.querySelector('i.fa-chevron-down');
let navbarMenuBtn = document.querySelector('.navbar__btn-open');
let navbarBtnValue = '1';
let centralSearch = document.querySelector('.central-search');
let centralSchool = document.querySelector('.central__school');
let centralTeachers = document.querySelector('.central__teachers');
let centralClasses = document.querySelector('.central__classes');
let navbar = document.querySelector('.navbar');
let navbarHeaders = document.querySelectorAll('.navbar__menu-item_header');
function activeList() {
    if (navbarBtnValue === '1') {
        centralSearch.style.display = 'block';
        centralSchool.style.display = 'none';
        centralTeachers.style.display = 'none';
        centralClasses.style.display = 'none';

    } else if (navbarBtnValue === '2') {
        centralSearch.style.display = 'none';
        centralSchool.style.display = 'block';
        centralTeachers.style.display = 'none';
        centralClasses.style.display = 'none';

    } else if (navbarBtnValue === '3') {
        centralSearch.style.display = 'none';
        centralSchool.style.display = 'none';
        centralTeachers.style.display = 'block';
        centralClasses.style.display = 'none';

    } else if (navbarBtnValue === '4') {
        centralSearch.style.display = 'none';
        centralSchool.style.display = 'none';
        centralTeachers.style.display = 'none';
        centralClasses.style.display = 'block';

    }
}

function settings() {
    if (navbarMenuBtn.querySelector('i').classList.contains('fa-xmark')) {
        navbar.style.width = '8%';
        navbarHeaders.forEach( (item) => {
            item.style.display = 'none';
        })
        centralSearch.style.width = '92%';
    }
    if (navbarMenuBtn.querySelector('i').classList.contains('fa-bars')) {
        navbar.style.width = '15%';
        navbarHeaders.forEach( (item) => {
            item.style.display = 'inline-block';
        })
        centralSearch.style.width = '85%';
    }
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('navbar__menu-item') || event.target.classList.contains('navbar__menu-item_header' || event.target.tagName.toLowerCase() === 'i')) {
        let headerBtns = document.querySelectorAll('.navbar__menu-item');
        headerBtns.forEach((item) => {
            item.classList.remove('active');
        })
        let target = event.target.classList[0].toLowerCase() === 'navbar__menu-item' ? event.target:event.target.parentNode
        target.classList.toggle('active');
    }

    if (event.target.classList.contains('navbar__menu-item') || event.target.parentNode.classList.contains('navbar__menu-item')) {
        let targetValue;
        if (event.target.classList.contains('navbar__menu-item')) {
            targetValue = event.target.value;
        } else {
            targetValue = event.target.parentNode.value;
        }
        navbarBtnValue = targetValue ;
        activeList();
    }
    if (event.target.classList.contains('search__attribute')) {
        chekUp.classList.toggle('fa-chevron-down');
        chekUp.classList.toggle('fa-chevron-up');
        dropSearchList.classList.toggle('active__search');
    }
    if (event.target.classList.contains('search__attribute-elem')) {
        let spanText = document.querySelector('.search__attribute');
        spanText.textContent = event.target.textContent;
        dropSearchList.classList.toggle('active__search');
        chekUp.classList.toggle('fa-chevron-down');
        chekUp.classList.toggle('fa-chevron-up');
    }

    if (event.target === navbarMenuBtn ||  event.target === navbarMenuBtn.querySelector('i')) {
        navbarMenuBtn.querySelector('i').classList.toggle('fa-xmark');
        navbarMenuBtn.querySelector('i').classList.toggle('fa-bars');
        settings();
    }
})






