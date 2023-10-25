window.addEventListener('DOMContentLoaded', () => {
    const contentContainer = document.getElementById('content');
    const url = 'https://hist-ege.sdamgia.ru/test?theme=169&ysclid=lo2n21yi9d520260591'; // Замените на URL вашего сайта

    // Используйте Fetch API для загрузки содержимого
    fetch(url)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        })
        .catch(error => {
            contentContainer.innerHTML = 'Произошла ошибка при загрузке содержимого сайта.';
            console.error(error);
        });
});
