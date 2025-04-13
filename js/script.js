// document.addEventListener('alpine:init', () => {
//   const bubbles = document.querySelectorAll('.bubble');
//   bubbles.forEach(bubble => {
//     animateBubble(bubble);
//   });
  
//   function animateBubble(bubble) {
//     const speed = Math.random() * 10 + 5;
//     const direction = Math.random() > 0.5 ? 1 : -1;
    
//     let position = parseInt(bubble.style.top);
    
//     setInterval(() => {
//       position += (Math.random() * 0.5) * direction;
//       bubble.style.top = `${position}%`;
      
//       if (position > 90 || position < 5) {
//         position = Math.random() * 80 + 10;
//       }
//     }, speed * 100);
//   }
// });

document.addEventListener('DOMContentLoaded', function() {
  const langSwitch = document.getElementById('langSwitch');
  
  const currentUrl = window.location.href;
  const isEnglish = currentUrl.includes('index-en.html') || document.documentElement.lang === 'en';
  
  if (isEnglish) {
    langSwitch.innerHTML = '<i class="fas fa-globe mr-1"></i> 日本語';
  } else {
    langSwitch.innerHTML = '<i class="fas fa-globe mr-1"></i> English';
  }
  
  langSwitch.addEventListener('click', function() {
    const currentUrl = window.location.href;
    const baseUrl = currentUrl.split('/').slice(0, -1).join('/') || currentUrl;
    
    if (isEnglish) {
      if (currentUrl.includes('index-en.html')) {
        window.location.href = currentUrl.replace('index-en.html', 'index.html');
      } else {
        window.location.href = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'index.html';
      }
    } else {
      if (currentUrl.includes('index.html')) {
        window.location.href = currentUrl.replace('index.html', 'index-en.html');
      } else {
        window.location.href = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'index-en.html';
      }
    }
  });
});

document.addEventListener('alpine:init', () => {
  Alpine.data('portfolio', () => ({
    activePage: 'home',
    devProjectFilter: 'all',
    secProjectFilter: 'all',
    activeTab: 'develop',
    
    init() {
      this.$watch('activeTab', (value) => {
        if (value === 'develop') {
          this.devProjectFilter = 'all';
        } else if (value === 'security') {
          this.secProjectFilter = 'all';
        }
      });
    }
  }))
});