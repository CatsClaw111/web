const contentDiv = document.getElementById('content');

fetch('other/text.txt')
    .then(response => response.text())
    .then(data => {
    contentDiv.textContent = data;
    })
    .catch(error => {
    console.error('Ошибка загрузки текста:', error);
    });
