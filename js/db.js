// Получаем ссылку на XML файл базы данных
let xmlFile = '../xml/database.xml';

// Функция, которая загружает XML файл базы данных и выполняет поиск соответствующей страницы
function searchPage() {
  // Получаем значение поля input
  const key = document.getElementById('searchInput').value;
  
  // Загружаем XML файл базы данных
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // Парсим XML файл базы данных
      const xmlDoc = this.responseXML;
      
      // Получаем все элементы item
      const items = xmlDoc.getElementsByTagName('item');
      
      // Ищем элемент item с ключом, соответствующим значению поля input
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const keys = item.getAttribute('key').toLowerCase().split(',');

        if (keys.includes(key.toLowerCase())) {
          // Получаем ссылку на страницу из значения элемента item
          let pageUrl = item.textContent;
          
          // Загружаем страницу
          if (xmlFile.substring('../../'))
            pageUrl = '../' + pageUrl;

          window.location.href = pageUrl;
          return true;
        }
      }

      // Если не найдено соответствующего элемента, выводим сообщение об ошибке
      alert('Page not found!');
    } else {
        return false;
    } 
  };
  let pageUrl;
  if (!(pageUrl = xhr.open('GET', xmlFile, true))){
    xmlFile = '../' + xmlFile;
    pageUrl = xhr.open('GET', xmlFile, true);
  }

  xhr.send();
}

// Получаем ссылку на кнопку поиска
// const searchButton = document.getElementById('searchButton');

// Добавляем обработчик события click на кнопку поиска
searchInput.addEventListener('keydown', function(event) {
    if (event.keyCode === 13)
        searchPage();
});