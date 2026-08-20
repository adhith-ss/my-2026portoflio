/* mailto: links fail silently when the visitor has no mail client registered —
   the click simply does nothing, with no error and no feedback. Let the mailto:
   proceed as normal; if the page never loses focus we know nothing handled it,
   so copy the address to the clipboard instead and confirm, rather than leaving
   the click a dead end.

   Applies to any element carrying data-email-cta. */
(function () {
  var targets = document.querySelectorAll('[data-email-cta]');
  if (!targets.length) return;

  /* One shared live region for the whole page — the confirmation is rendered as
     a CSS pseudo-element, which screen readers do not announce. */
  var status = document.createElement('span');
  status.className = 'sr-only';
  status.setAttribute('role', 'status');
  status.setAttribute('aria-live', 'polite');
  document.body.appendChild(status);

  Array.prototype.forEach.call(targets, function (link) {
    var address = (link.getAttribute('href') || '').replace(/^mailto:/, '').split('?')[0];
    if (!address) return;

    var hideTimer = null;

    function hide() {
      clearTimeout(hideTimer);
      link.classList.remove('is-copied');
      status.textContent = '';
    }

    function announce(message) {
      link.setAttribute('data-email-toast', message);
      link.classList.add('is-copied');
      status.textContent = message;
      clearTimeout(hideTimer);
      hideTimer = setTimeout(hide, 3000);
    }

    function legacyCopy() {
      var field = document.createElement('textarea');
      field.value = address;
      field.setAttribute('readonly', '');
      field.style.position = 'fixed';
      field.style.top = '-1000px';
      document.body.appendChild(field);
      field.select();
      var ok = false;
      try { ok = document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(field);
      return ok;
    }

    function writeClipboard() {
      /* execCommand runs synchronously, so it still holds the click's user
         activation and needs no permission grant. The async Clipboard API is
         only reached if that fails — as a promise handler it resolves a
         microtask later, by which point the activation is already spent. */
      if (legacyCopy()) return Promise.resolve(true);

      if (navigator.clipboard && navigator.clipboard.writeText) {
        return navigator.clipboard.writeText(address).then(function () {
          return true;
        }, function () {
          return false;
        });
      }
      return Promise.resolve(false);
    }

    link.addEventListener('click', function () {
      var handled = false;

      /* A mail client taking over pulls focus away from the page. Cold-starting
         a desktop app can take seconds, though, so this may well fire after the
         window below has already elapsed — retract the confirmation if so,
         otherwise a working mailto: shows a misleading "copied" toast. */
      function markHandled() {
        handled = true;
        hide();
      }

      function stopWatching() {
        window.removeEventListener('blur', markHandled);
        document.removeEventListener('visibilitychange', markHandled);
      }

      window.addEventListener('blur', markHandled);
      document.addEventListener('visibilitychange', markHandled);

      /* Copy now, while the click's user activation is still valid. Deferring
         this into the timeout below spends the activation and Chrome rejects
         the write with NotAllowedError. Only the confirmation is deferred. */
      var copying = writeClipboard();

      setTimeout(function () {
        if (handled) return;
        copying.then(function (ok) {
          if (handled) return;
          announce(ok ? 'Email address copied — ' + address : address);
        });
      }, 1200);

      /* Keep watching well past the confirmation so a slow app launch can still
         retract it, then stop so clicks elsewhere don't trip this handler. */
      setTimeout(stopWatching, 8000);
    });
  });
})();
