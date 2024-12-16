// Функция для загрузки текста из файла text.txt
function loadText() {
    fetch('text.txt')
        .then(response => response.text())
        .then(text => {
            // Вставляем текст в секцию с id="app_description"
            const appDescription = document.getElementById('app_description');
            appDescription.innerHTML = `<div><p>${text}</p></div>`;
        })
        .catch(error => console.error('Error loading text:', error));
}

// Вызов функции при загрузке страницы
window.onload = loadText;