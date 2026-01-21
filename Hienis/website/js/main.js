// Root JS cleared — page-specific scripts live in each page folder.
// Add shared behaviors here if needed.
document.addEventListener('DOMContentLoaded', function(){
	// Enhanced hero slider (home page)
	try {
		var slides = document.querySelectorAll('.hero-slide');
		if (!slides || slides.length === 0) return;
		var current = 0;
		var timer = null;
		function show(i) {
			slides.forEach(function (s, idx) {
				s.classList.toggle('active', idx === i);
			});
			current = i;
			resetTimer();
		}
		function next() {
			show((current + 1) % slides.length);
		}
		function prev() {
			show((current - 1 + slides.length) % slides.length);
		}
		function resetTimer() {
			if (timer) clearInterval(timer);
			timer = setInterval(next, 5000);
		}
		show(current);
		var nextBtn = document.querySelector('.hero-next');
		var prevBtn = document.querySelector('.hero-prev');
		if (nextBtn) nextBtn.addEventListener('click', function () { next(); });
		if (prevBtn) prevBtn.addEventListener('click', function () { prev(); });
		resetTimer();
	} catch (e) { console.error(e); }

	// Navigation: mobile toggle and active link highlight
	try{
		var navToggle = document.getElementById('nav-toggle');
		var siteNav = document.getElementById('site-nav');
		if(navToggle && siteNav){
			navToggle.addEventListener('click', function(){
				// Toggle both modern and legacy classes for compatibility
				siteNav.classList.toggle('show');
				siteNav.classList.toggle('open');
				var expanded = siteNav.classList.contains('show') || siteNav.classList.contains('open');
				navToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
			});

			// Close mobile nav when a nav link is clicked
			siteNav.addEventListener('click', function(ev){
				var t = ev.target;
				if(t && t.tagName === 'A' && (siteNav.classList.contains('show') || siteNav.classList.contains('open'))){
					siteNav.classList.remove('show');
					siteNav.classList.remove('open');
					navToggle.setAttribute('aria-expanded', 'false');
				}
			});
		}

		// Highlight current page link (normalize paths: remove trailing slash and /index.html)
		var links = document.querySelectorAll('#site-nav a');
		function normalizePath(p){
			try{ p = p.replace(/\\\\/g,'/'); }catch(e){}
			return p.replace(/\/index\.html$|\/$/, '');
		}
		var currentPath = normalizePath(location.pathname || location.href);
		links.forEach(function(a){
			try{
				var linkHref = a.getAttribute('href') || a.href;
				// Resolve relative href to absolute path using URL
				var resolved = '';
				try{ resolved = new URL(linkHref, location.href).pathname; }catch(e){ resolved = linkHref; }
				resolved = normalizePath(resolved);
				if(resolved === currentPath){
					a.classList.add('active');
				}
			}catch(e){console.error(e)}
		});
	}catch(e){console.error(e)}
});
