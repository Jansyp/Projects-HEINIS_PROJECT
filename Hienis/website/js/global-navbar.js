(function () {
  function getBasePath() {
    var scriptSrc = (document.currentScript && document.currentScript.src) || '';
    if (scriptSrc) {
      var normalized = scriptSrc.replace(/\\/g, '/');
      var baseFromScript = normalized.replace(/\/js\/global-navbar\.js.*$/i, '/');
      if (baseFromScript !== normalized) {
        return baseFromScript;
      }
    }

    var path = window.location.pathname.replace(/\\/g, '/');
    var lower = path.toLowerCase();
    var idx = lower.lastIndexOf('/website/');
    if (idx !== -1) {
      return path.substring(0, idx + '/website/'.length);
    }
    // Fallback: use current directory
    var parts = path.split('/');
    parts.pop();
    return parts.join('/') + '/';
  }

  function withBase(basePath, url) {
    if (!url) return url;
    if (/^(https?:|mailto:|tel:|#)/i.test(url)) return url;
    return basePath + url.replace(/^\/+/, '');
  }

  function setDataPaths(root, basePath) {
    root.querySelectorAll('[data-href]').forEach(function (el) {
      var raw = el.getAttribute('data-href');
      el.setAttribute('href', withBase(basePath, raw));
    });
    root.querySelectorAll('[data-src]').forEach(function (el) {
      var raw = el.getAttribute('data-src');
      el.setAttribute('src', withBase(basePath, raw));
    });
  }

  function wireHamburger(root) {
    var toggle = root.querySelector('#nav-toggle');
    var nav = root.querySelector('#site-nav');
    if (!toggle || !nav) return;
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  function injectNavbar() {
    var basePath = getBasePath();
    var target = document.getElementById('global-navbar');
    var existingHeader = document.querySelector('header.site-header');

    fetch(withBase(basePath, 'global-navbar.html'))
      .then(function (response) {
        return response.text();
      })
      .then(function (html) {
        var wrapper = document.createElement('div');
        wrapper.innerHTML = html;
        var header = wrapper.firstElementChild;
        if (!header) return;

        setDataPaths(header, basePath);
        wireHamburger(header);

        if (target) {
          target.innerHTML = '';
          target.appendChild(header);
        } else if (existingHeader) {
          existingHeader.replaceWith(header);
        } else {
          document.body.insertBefore(header, document.body.firstChild);
        }
      })
      .catch(function () {
        // fail silently
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectNavbar);
  } else {
    injectNavbar();
  }
})();
