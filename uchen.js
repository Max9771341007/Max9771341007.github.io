let people = [
    {
        name: 'Самоходкин',
        surname: 'afa',
        thirdName: 'efrgfr',
        class: '10А',
        ruk:'Котляр'
    },    {
        name: 'Самоходкин',
        surname: 'afa',
        thirdName: 'efrgfr',
        class: '10А',
        ruk:'Котляр'
    },    {
        name: 'Самоходкин',
        surname: 'afa',
        thirdName: 'efrgfr',
        class: '10А',
        ruk:'Котляр'
    },    {
        name: 'Самоходкин',
        surname: 'afa',
        thirdName: 'efrgfr',
        class: '10А',
        ruk:'Котляр'
    },
]
let gridpOption = document.querySelector('.classes__grid-options');

function classesList() {

    people.forEach(function (item) {

        gridpOption.insertAdjacentHTML('afterend', '<div class="classes__grid-user">' +
            '<div class="classes__grid-item" datatype="surname"> ' +item.surname + '</div>' +
            '<div class="classes__grid-item" datatype="name"> ' +  item.name + '</div>' +
            '<div class="classes__grid-item" datatype="thirdname"> ' +   item.thirdName + '</div>' +
            '<div class="classes__grid-item" datatype="class"> ' +   item.class + '</div>'+
        '<div class="classes__grid-item" datatype="ruk"> ' + item.ruk +  '</div>'+
            '</div>')
    })

}

classesList();