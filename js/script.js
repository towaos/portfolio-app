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