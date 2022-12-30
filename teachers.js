let teachers = [
    {
        surname: 'Самоварова',
        name: 'Лидия',
        thirdName: 'Ивановна',
        sience: 'История и обществознание',
        specialization: 'Заведующая кафедрой.'
    },
    {
        surname: 'Ставицкая ',
        name: 'Елена ',
        thirdName: 'Владимировна',
        sience: 'История и обществознание ',
        specialization: 'Учитель'
    },
    {
        surname: 'Алиев',
        name: 'Руслан',
        thirdName: 'Гурбанович',
        sience: 'География',
        specialization: 'Учитель'
    },
    {
        surname: 'Логвинова',
        name: 'Любовь',
        thirdName: 'Петровна',
        sience: 'Истории и обществознания',
        specialization: 'учитель'
    },
    {
        surname: 'Крылова ',
        name: 'Валерия',
        thirdName: ' Валерьевна',
        sience: 'Английский язык',
        specialization: 'Заведующая кафедрой'
    },
    {
        surname: 'Карамышева ',
        name: 'Марина ',
        thirdName: 'Юрьевна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    }, {
        surname: 'Левина',
        name: 'Мария',
        thirdName: 'Алексеевна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    }, {
        surname: 'Сапожникова',
        name: 'Анна',
        thirdName: 'Владимировнаа',
        sience: 'Английский язык',
        specialization: 'Учитель'
    }, {
        surname: 'Коломбет',
        name: 'Татевик',
        thirdName: 'Кареновна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    }, {
        surname: 'Клепикова',
        name: 'Юлиана',
        thirdName: 'Валерьевна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    },{
        surname: 'Проценко',
        name: ' Светлана ',
        thirdName: 'Николаевна',
        sience: 'Французский язык',
        specialization: 'Учитель'
    },{
        surname: 'Семенова',
        name: 'Елена',
        thirdName: 'Владимировна',
        sience: 'Немецкий язык',
        specialization: 'Учитель'
    },{
        surname: 'Алексеева',
        name: 'Валерия',
        thirdName: ' Вячеславовна',
        sience: 'Китайский язык',
        specialization: 'Учитель'
    },{
        surname: 'Словенко',
        name: 'Алина ',
        thirdName: 'Игоревна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    },{
        surname: 'Лаврина',
        name: 'Анна ',
        thirdName: 'Владимировна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    },{
        surname: 'Гусева ',
        name: 'Ольга',
        thirdName: ' Александровна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    },{
        surname: 'Корзинова ',
        name: 'Ирина',
        thirdName: 'Евгеньевна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    },{
        surname: 'Пугачева ',
        name: 'Ирина',
        thirdName: 'Алексеевна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    },{
        surname: 'Котляр ',
        name: 'Ирина',
        thirdName: ' Николаевна',
        sience: 'Английский язык',
        specialization: 'Учитель'
    },{
        surname: 'Гаврикова',
        name: 'Ольга',
        thirdName: 'Сергеевна',
        sience: 'Математика',
        specialization: 'Руководитель кафедры'
    },

]
let gridOption = document.querySelector('.teachers__grid-options');

function teachersList() {

    teachers.forEach(function (item) {

        gridOption.insertAdjacentHTML('afterend', '<div class="teachers__grid-user">' +
            '<div class="teachers__grid-item" datatype="surname"> ' +item.surname + '</div>' +
            '<div class="teachers__grid-item" datatype="name"> ' +  item.name + '</div>' +
            '<div class="teachers__grid-item" datatype="thirdname"> ' +   item.thirdName + '</div>' +
            '<div class="teachers__grid-item" datatype="sience"> ' + item.sience +  '</div>' +
            '<div class="teachers__grid-item" datatype="specialization">' + item.specialization +  '</div>' +
            '</div>')
    })

}

teachersList();


// Самостоятельная работа
// создать массив из учеников(3-5 учащихся) и вывести их на соответствующую страницу. Пункты таблицы и параметры продумать произвольно

