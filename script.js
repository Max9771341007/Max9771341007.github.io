let dropSearchList = document.querySelector('.search__attribute-list');
let chekUp = document.querySelector('i.fa-chevron-down');
let navbarMenuBtn = document.querySelector('.navbar__btn-open');
function setList() {
    let headerBtns = document.querySelectorAll('.navbar__menu-item');
    headerBtns.forEach((item) => {
        let type = item.dataset.type
        console.log(type)
        if (type === 'search') {
            document.querySelector('.central-search').style.display = 'block';
        } else if(type === 'news') {
            document.querySelector('.central-search').style.display = 'none';
            document.querySelector('.central-news').style.display = 'block';
        }
    })
}


document.addEventListener('click', (event) => {
    if (event.target.classList.contains('navbar__menu-item') || event.target.classList.contains('navbar__menu-item_header' || event.target.tagName.toLowerCase() === 'i')) {
        let headerBtns = document.querySelectorAll('.navbar__menu-item');
        headerBtns.forEach((item) => {
            item.classList.remove('active');
        })

        let target = event.target.classList[0].toLowerCase() === 'navbar__menu-item' ? event.target:event.target.parentNode
        target.classList.toggle('active');



        // let type = target.dataset.type
        // if (type === 'search') {
        //     document.querySelector('.central-search').style.display = 'block';
        // } else if(type === 'news') {
        //     document.querySelector('.central-search').style.display = 'none';
        //     document.querySelector('.central-news').style.display = 'block';
        // }
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
let navbar = document.querySelector('.navbar');
let navbarHeaders = document.querySelectorAll('.navbar__menu-item_header')
let centralSearch = document.querySelector('.central-search');
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

