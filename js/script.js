window.addEventListener('DOMContentLoaded', function() { // Ожидание загрузки HTML и создания DOM

   let products = document.querySelectorAll('.product');
   let buttons = document.querySelectorAll('button');
   let openBtn = document.querySelector('.open');

   // Функция создания корзины
   function createCard() {
      let cart = document.createElement('div'); // Cоздание элемента
      let field = document.createElement('div');
      let heading = document.createElement('h2');
      let closeBtn = document.createElement('button');

      cart.classList.add('cart');   // Добавление класса
      field.classList.add('cart-field');
      closeBtn.classList.add('closeBtn');

      heading.textContent = "В нашей корзине:"; // Изменение текста в heading
      closeBtn.textContent = "Закрыть";         // Изменение текста в кнопке закрытия

      document.body.appendChild(cart); // Добавление элемента в верстку
      cart.appendChild(heading);       // Добавление заголовка
      cart.appendChild(field);         // Добавление поля с товарами
      cart.appendChild(closeBtn);      // Добавление кнопки закрытия

   }

   createCard();  // Вызов создания корзины

   // Выбор созданных элементов
   let field = document.querySelector('.cart-field');
   let cart = document.querySelector('.cart');
   let closeBtn = document.querySelector('.closeBtn');

   // Функция открытия корзины
   function openCart() {
      cart.style.display = 'block'; // Изменение значения display
   }

   // Функция закрытия корзины
   function closeCart() {
      cart.style.display = 'none'; // Изменение значения display
   }

   openBtn.addEventListener('click', openCart); // Событие открытия корзины
   closeBtn.addEventListener('click', closeCart); // Событие закрытия корзины

   // Перебор всеъ элементов, добавление событий и удаление
   // Вариант 1
   // for (let i = 0; i < buttons.length; i++) {
   //    buttons[i].addEventListener('click', function() {  // Добавление событий
   //       let item = products[i].cloneNode(true);   // Глубокое клонированиие элемента
   //       let btn = item.querySelector('button');   // Выбор кнопки в склонированнои объекте
         
   //       btn.remove();                             // Удаление кнопки из клона
   //       field.appendChild(item);                  // Добавление клона в корзину
   //       products[i].remove();                     // Удаление элемента со страницы
   //    });
   // }

   //Вариант 2 (более предпочтительный)
   buttons.forEach((item, i) => {             // Перебор всего массива (стрелочная функция)
      item.addEventListener('click', () => {
         let item = products[i].cloneNode(true);
         let btn = item.querySelector('button');
         
         btn.remove();
         field.appendChild(item);
         products[i].remove();
      });
   });

});

