// parallax

const layers = document.querySelectorAll('.layer');

function parallax(event) {
  layers.forEach(layer => {
    let speed = layer.getAttribute('data-speed');
  
    layer.style.transform = `translateX(${-event.clientX*speed/1000}px) translateY(${event.clientY*speed/700}px)`;
  });

}

function stopParallax(event) {
  layers.forEach(layer => {
    let speed = layer.getAttribute('data-speed');
  
    layer.style.transform = `translate(0)`;
  });

}

document.addEventListener('mousemove', parallax);
document.addEventListener('mouseout', stopParallax);

// tabs

const tabsProducts = document.querySelectorAll('[data-tabs-products]');

for (const product of tabsProducts) {
  product.addEventListener('click', () => {
    tabsProducts.forEach(item => {
      if (product == item) {
        item.classList.add('products__button-active');
      } else {
        item.classList.remove('products__button-active');
      }
    });
  });
};

// selection of products

const productsAll = document.querySelectorAll('.card__item');

for (const productSelected of productsAll) {
  productSelected.addEventListener('click', () => {
    let productInBasket = productSelected.querySelector('.card__basket');
    console.log('productInBasket: ', productInBasket);
    
    productInBasket.classList.toggle('card__basket-active');

  });
};

// menu

const menuElem = document.querySelector('.menu__nav');
const buttonElem = document.querySelector('.menu__btn-small');
const humburgerElem = document.querySelector('.menu__hamburger');

const toggleMenu = () => {
    menuElem.classList.toggle('menu__nav-active');
    humburgerElem.classList.toggle('menu__hamburger-active');
};

buttonElem.addEventListener('click', toggleMenu);

menuElem.addEventListener('click', (event) => {
    const target = event.target;
  
    if (target.classList.contains('menu-list__link')) {
      toggleMenu();
    }
});

// scroll

const scrollButtons = document.querySelectorAll('.scroll');

for (let scrollButton of scrollButtons) {
  scrollButton.addEventListener('click', function(e) {
    e.preventDefault()

    const blockID = scrollButton.getAttribute('href');

    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}