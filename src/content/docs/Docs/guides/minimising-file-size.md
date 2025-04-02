---
title: "Minimising File Size"
description: "Write cleaner, faster code to reduce resource consumption"
---

Optimizing your website to minimize file size improves loading speed, enhances user experience, and reduces bandwidth usage. Below are key strategies to achieve this.

---

## 1. Optimize Images

Images often make up a large portion of a webpage's file size. Optimizing them can greatly improve performance.

### **Use Proper Formats**
- **WebP**: Provides better compression than PNG and JPEG.
- **SVG**: Best for icons and simple graphics as it is vector-based.
- **JPEG/PNG**: Use only if transparency (PNG) or high-quality photos (JPEG) are necessary.

### **Compress Images**
Use tools like:
- [TinyPNG](https://tinypng.com/)
- [Squoosh](https://squoosh.app/)

Example using ImageMagick:
```sh
convert input.png -resize 50% -strip -quality 85 output.png
```

### **Lazy Loading**
Lazy load images so they only load when needed:
```html
<img src="image.webp" loading="lazy" alt="Optimized Image">
```

---

## 2. Minimize JavaScript
JavaScript files can become bloated and slow down performance. Reduce file size using these methods:

### **Minify JavaScript**
Minification removes unnecessary characters (whitespace, comments, etc.). Use:
- [Terser](https://terser.org/)
- [UglifyJS](https://github.com/mishoo/UglifyJS)

Example:
```sh
npx terser script.js -o script.min.js
```

### **Reduce Unused Code**
Use tools like Google Chrome DevTools to find and remove unused JS:
1. Open DevTools (`F12` > "Coverage" tab)
2. Identify unused code
3. Remove or split into smaller modules

### **Defer & Async Loading**
Load scripts efficiently:
```html
<script src="script.js" defer></script>
<script src="analytics.js" async></script>
```
- `defer`: Executes after the document has been parsed.
- `async`: Loads asynchronously and executes immediately.

---

## 3. Optimize CSS
CSS can be optimized to improve rendering speed and reduce file size.

### **Minify CSS**
Use:
- [CSSNano](https://cssnano.co/)
- [PurgeCSS](https://purgecss.com/)

Example using CSSNano:
```sh
npx cssnano styles.css -o styles.min.css
```

### **Use Efficient Selectors**
Avoid deep selectors as they increase rendering time:
```css
/* Bad */
.container div ul li a {
  color: blue;
}

/* Good */
.nav-link {
  color: blue;
}
```

### **Use CSS instead of JavaScript for Animations**
CSS is generally more efficient than JS for animations:
```css
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.element {
  animation: fadeIn 0.5s ease-in;
}
```

---

## 4. Enable Gzip or Brotli Compression
Reduce file size by compressing static assets.

### **Gzip (Apache)**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>
```

### **Brotli (NGINX)**
```nginx
server {
  location / {
    gzip off;
    brotli on;
    brotli_comp_level 6;
    brotli_types text/plain text/css application/javascript;
  }
}
```

---

## 5. Optimize Fonts
Fonts can be large files, so optimize their use:

- Use modern formats like **WOFF2**.
- Load only necessary characters using `unicode-range`:
```css
@font-face {
  font-family: 'CustomFont';
  src: url('font.woff2') format('woff2');
  unicode-range: U+0025-00FF;
}
```
- Use **system fonts** whenever possible to avoid extra downloads:
```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

---

## 6. Reduce HTTP Requests
Each HTTP request adds load time. Reduce them by:

- **Using CSS sprites**: Combine multiple images into one.
- **Inlining small assets**: Use Base64 encoding for small images.
- **Removing unused plugins and libraries**.

---

## 7. Utilize Caching
Browser caching helps users load pages faster on return visits.

### **Set Cache Headers (Apache)**
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### **Service Workers**
Cache assets efficiently for offline access:
```js
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/script.js'
      ]);
    })
  );
});
```

---

## 8. Measure Performance
Use these tools to test your site:
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)

Run Lighthouse in Chrome DevTools:
```sh
lighthouse https://example.com --view
```

---

## Conclusion
By following these optimization techniques, you can reduce file sizes, improve website performance, and enhance user experience. Regularly test your site and refine your approach to k