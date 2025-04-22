// Функция для сохранения имени в localStorage и перехода на вторую страницу
function saveName() {
    var name = document.getElementById('name').value; // Получаем значение из инпута
    localStorage.setItem('result', name); // Сохраняем имя в localStorage
    window.location.href = 'Home page.html'; // Переход на другую страницу
}

// Функция для отображения имени на второй странице
window.onload = function() {
    var result = localStorage.getItem('result'); // Получаем имя из localStorage
    if (result) {
        document.getElementById('result').textContent = result; // Отображаем имя на второй странице
    } else {
        document.getElementById('result').textContent = 'Гость'; // Если имя не задано, показываем "Гость"
    }
}

    // При загрузке страницы проверяем наличие числа в localStorage
window.onload = function() {
    let moneyElement = document.getElementById('money');
    let savedMoney = localStorage.getItem('money'); // Получаем число из localStorage
    if (savedMoney !== null) {
        moneyElement.textContent = savedMoney; // Отображаем сохранённое число
    }
};

// Функция для увеличения числа
function increment() {
    let moneyElement = document.getElementById('money');
    let money = parseInt(moneyElement.textContent) || 0; // Получаем текущее число или 0, если пусто
    money++; // Увеличиваем на 1
    moneyElement.textContent = money; // Обновляем число в элементе
    localStorage.setItem('money', money); // Сохраняем новое значение числа в localStorage
}

let lastTouchTime = 0;

document.addEventListener('touchend', function (event) {
  const now = new Date().getTime();
  if (now - lastTouchTime <= 300) {
    event.preventDefault(); // блокирует второй тап
  }
  lastTouchTime = now;
}, { passive: false });

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
  }, { passive: false });
  
  document.addEventListener('gesturechange', function (e) {
    e.preventDefault();
  }, { passive: false });
  
  document.addEventListener('gestureend', function (e) {
    e.preventDefault();
  }, { passive: false });
  
