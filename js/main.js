document.addEventListener('DOMContentLoaded', function() {
    // Получаем ссылку на изображение
    var brendImage = document.querySelector('.sound_button');
    var audio = document.getElementById('audio');
    
    // Добавляем обработчик события клика на изображение
    brendImage.addEventListener('click', function() {
        // Меняем изображение при каждом клике
        if (brendImage.src.includes('image/play_button.svg')) {
            audio.play();
            brendImage.src = 'image/stop_button.svg'; // Замените на новый путь
        } else {
            brendImage.src = 'image/play_button.svg';
            audio.pause();
        }
    });
});