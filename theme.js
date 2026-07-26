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

  function initNav(){
    var toggle = document.getElementById('nav-toggle');
    var list = document.getElementById('nav-links');
    if(!toggle || !list) return;
    function setOpen(open){
      list.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    }
    toggle.addEventListener('click', function(){
      setOpen(!list.classList.contains('is-open'));
    });
    list.addEventListener('click', function(e){
      if(e.target.closest('a')) setOpen(false);
    });
    document.addEventListener('keydown', function(e){
      if(e.key === 'Escape' && list.classList.contains('is-open')){
        setOpen(false);
        toggle.focus();
      }
    });
  }
  function boot(){ init(); initNav(); }
  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
