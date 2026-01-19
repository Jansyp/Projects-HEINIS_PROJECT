HIENIS — Simple static site scaffold

Structure
- website/
  - index.html — Redirects to `home/index.html`
  - home/
    - index.html
    - css/style.css
    - js/main.js
  - about/
    - index.html
    - css/style.css
    - js/main.js
  - products/
    - index.html
    - css/style.css
    - js/main.js
  - contact/
    - index.html
    - css/style.css
    - js/main.js
  - images/ (place product images here)

How to use
How to use
- Open `website/index.html` in your browser (it redirects to `home/index.html`).
- Replace images in `website/images/` with actual photos.
- Edit page-specific styles in each folder under `website/*/css/style.css`.

Notes
Notes
- This is a static, client-side scaffold. For production forms, integrate a backend or a 3rd-party form service.