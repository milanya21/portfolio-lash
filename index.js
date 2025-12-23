// Получаем все элементы галереи
const galleryImages = document.querySelectorAll('.gallery img');

// Добавляем обработчик клика на каждую фотографию
galleryImages.forEach((img) => {
  img.addEventListener('click', () => {
    // Отображаем выбранную фотографию во всплывающем окне
    showPopup(img.src, img.alt);
  });
});

// Функция для отображения всплывающего окна с фотографией
function showPopup(src, alt) {
  // Создаем элементы всплывающего окна
  const popup = document.createElement('div');
  const popupImage = document.createElement('img');
  const popupCaption = document.createElement('div');

  // Задаем атрибуты и содержимое элементов
  popupImage.src = src;
  popupImage.alt = alt;
  popupCaption.textContent = alt;

  // Добавляем стили к всплывающему окну и его элементам
  popup.style.position = 'fixed';
  popup.style.top = '0';
  popup.style.left = '0';
  popup.style.width = '100%';
  popup.style.height = '100%';
  popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  popup.style.display = 'flex';
  popup.style.justifyContent = 'center';
  popup.style.alignItems = 'center';

  popupImage.style.maxWidth = '90%';
  popupCaption.style.color = '#fff';
  popupCaption.style.fontSize = '24px';

  // Добавляем элементы во всплывающее окно
  popup.appendChild(popupImage);
  popup.appendChild(popupCaption);

  // Добавляем всплывающее окно на страницу
  document.body.appendChild(popup);

  // Добавляем обработчик клика на всплывающее окно, чтобы закрыть его при клике на любом месте
  popup.addEventListener('click', () => {
    popup.remove();
  });
}

const menuBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', () => {
      if (menu.style.display === 'none') {
        menu.style.display = 'block';
      } else {
        menu.style.display = 'none';
      }
    });

    //слайдер
    const slideContainer = document.querySelector('.slider-container');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let slideIndex = 0;

    prevBtn.addEventListener('click', () => {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = slideContainer.children.length - 1;
      }
      slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    nextBtn.addEventListener('click', () => {
      slideIndex++;
      if (slideIndex >= slideContainer.children.length) {
        slideIndex = 0;
      }
      slideContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
    });
  