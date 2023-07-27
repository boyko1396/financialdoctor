// fullpage scroll init
document.addEventListener('DOMContentLoaded', function() {
    const layout = document.querySelector('body');
    const fullpageInstance = new fullpage('#fullpage', {
        css3: true,
        scrollingSpeed: 800,
        navigation: false,
        slidesNavigation: false,
        responsiveHeight: 330,
        controlArrows: false,
        fadingEffect: true,
        anchors: ['intro', 'intro-hero', 'services', 'meta', 'appeal', 'footer']
    });
});

//btn-toggle nav mobile
const btnToggle = document.querySelector('.js-btn-toggle');
const headerDropdown = document.querySelector('.header__dropdown');

function toggleMenu() {
  const isActive = btnToggle.classList.contains('is-active');
  
  if (isActive) {
    btnToggle.classList.remove('is-active');
    headerDropdown.classList.remove('is-show');
  } else {
    btnToggle.classList.add('is-active');
    headerDropdown.classList.add('is-show');
  }
}

// Додаємо обробник події для кліку на бургер
btnToggle.addEventListener('click', toggleMenu);


// svg inline
document.addEventListener('DOMContentLoaded', function() {
    const svgContainers = document.querySelectorAll('.js-svg-inline');

    svgContainers.forEach(container => {
        const src = container.getAttribute('data-src');
        const xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    const svgText = xhr.responseText;
                    const wrapper = document.createElement('span');
                    wrapper.innerHTML = svgText.trim();

                    container.appendChild(wrapper.firstChild);
                } else {
                    console.error('Failed to load SVG:', src);
                }
            }
        };

        xhr.open('GET', src, true);
        xhr.send();
    });
});