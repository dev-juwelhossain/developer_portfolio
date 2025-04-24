document.getElementById('menu-toggle').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
  });


  // MixItUp filter
  document.addEventListener('DOMContentLoaded', () => {
    const containerEl = document.querySelector('.container');
  
    if (containerEl) {
      mixitup(containerEl, {
        selectors: {
          target: '.mix'
        },
        animation: {
          duration: 300
        }
      });
    } else {
      console.error('MixItUp: .container not found!');
    }
  });
  