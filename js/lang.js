
document.addEventListener('DOMContentLoaded', function() {
  const langLinks = document.querySelectorAll('.lang');
  const uaElements = document.querySelectorAll('.ua');
  const enElements = document.querySelectorAll('.en');

  langLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const lang = this.dataset.lang;

      if (lang === 'ua') {
        uaElements.forEach(el => el.style.display = '');
        enElements.forEach(el => el.style.display = 'none');
      } else {
        uaElements.forEach(el => el.style.display = 'none');
        enElements.forEach(el => el.style.display = '');
      }
    });
  });
});
