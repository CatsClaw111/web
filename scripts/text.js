const contentDiv = document.getElementById('content');

fetch('other/test.txt')
    .then(response => response.text())
    .then(data => {
        // Заменяем символы новой строки на <br>
        contentDiv.innerHTML = data.replace(/\n/g, '<br>');
    })
    .catch(error => {
        console.error('Ошибка загрузки текста:', error);
    });
