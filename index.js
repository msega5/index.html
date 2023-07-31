function Question() {
    let film = prompt('Введите ваш любимый фильм', 'Название фильма')
    switch (film) {
        case 'Эверест':
            alert('Правильный ответ');
            break;
        case 'Интерстеллар':
            alert('Правильный ответ');
            break;
        case 'Очень страшное кино':
            alert('Правильный ответ');
            break;
        default:
            alert('Попробуйте ещё раз');
            break;
    }
}



alert('Для доступа к сайту необходимо пройти проверку безопасности');
Question()
