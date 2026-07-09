(function(){
  function init(){
    var btn = document.getElementById('theme-toggle');
    if(!btn) return;
    function current(){
      return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    }
    btn.setAttribute('aria-checked', current() === 'dark' ? 'true' : 'false');
    btn.addEventListener('click', function(){
      var next = current() === 'dark' ? 'light' : 'dark';
      if(next === 'dark'){
        document.documentElement.setAttribute('data-theme', 'dark');
      } else {
        document.documentElement.removeAttribute('data-theme');
      }
      localStorage.setItem('theme', next);
      btn.setAttribute('aria-checked', next === 'dark' ? 'true' : 'false');
    });
  }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
