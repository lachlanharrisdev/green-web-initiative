---
title: "Accessibility"
description: "Make your website accessible to differently-abled people"
---

Ensuring your website is accessible to all users, including those with disabilities, is crucial for inclusivity and usability. This guide covers best practices for making your website highly accessible, with a focus on visual impairments, contrast ratios, fonts, font sizes, and motor impairments.

## Why Accessibility Matters

- **Improves user experience** for everyone.
- **Expands your audience** by including users with disabilities.
- **Compliance with laws** (such as WCAG & ADA) helps avoid legal issues.
- **Boosts SEO** as search engines favor accessible websites.
- **Better usability on various devices**, including mobile.

---

## 1. Contrast and Color Accessibility

### Contrast Ratios

For readability, ensure sufficient contrast between text and background. Use a contrast ratio of at least:
- **4.5:1** for normal text.
- **3:1** for large text (18px and bold or 24px regular).
- **3:1** for UI elements and graphical components.

### Example of Good Contrast

```css
/* Good contrast: Dark text on a light background */
body {
    background-color: #FFFFFF;
    color: #222222;
}

/* High-contrast button */
button {
    background-color: #007BFF;
    color: #FFFFFF;
    border: none;
    padding: 10px;
    font-size: 16px;
}
```

#### Tools to Check Contrast
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/)

---

## 2. Font and Typography Accessibility

### Recommended Font Sizes
- **Body text:** Minimum **16px**.
- **Headings:** Use a logical hierarchy (e.g., `<h1>` larger than `<h2>`, and so on).
- **Line height:** At least **1.5x** the font size for better readability.

### Example of Readable Typography

```css
body {
    font-size: 16px;
    line-height: 1.6;
    font-family: Arial, sans-serif;
}

h1 {
    font-size: 32px;
}
```

### Avoid:
- Small, decorative, or cursive fonts.
- Using only color to differentiate elements (use underlines for links).
- Fixed font sizes (use `em` or `rem` instead of `px`).

---

## 3. Keyboard Navigation & Motor Impairment Support

### Keyboard-Friendly Navigation
Ensure users can navigate via keyboard (`Tab`, `Enter`, `Arrow Keys`).

```html
<a href="#" tabindex="0">Focusable Link</a>
```

### Best Practices:
- **Use `tabindex` properly** to ensure logical navigation order.
- **Provide focus styles** to indicate the active element.
- **Ensure all interactive elements** (buttons, links, forms) are accessible via keyboard.
- **Avoid `onclick` handlers without keyboard support.**

### Example of Custom Focus Styles

```css
a:focus, button:focus {
    outline: 3px solid #FFD700; /* High visibility outline */
}
```

#### Tools for Testing Keyboard Navigation:
- Press `Tab` to navigate through elements.
- Use [Google Lighthouse](https://developers.google.com/web/tools/lighthouse/) for accessibility audits.

---

## 4. Screen Reader Accessibility

Screen readers help visually impaired users navigate websites.

### Best Practices:
- **Use semantic HTML** (e.g., `<button>` instead of `<div>` for buttons).
- **Provide `alt` text for images.**
- **Use ARIA attributes** to enhance accessibility.

### Example of Accessible Image

```html
<img src="profile.jpg" alt="Photo of Jane Doe, smiling" />
```

### Example of ARIA Landmark Roles

```html
<nav role="navigation">...</nav>
<main role="main">...</main>
<footer role="contentinfo">...</footer>
```

#### Testing with Screen Readers
- **Windows:** [NVDA](https://www.nvaccess.org/)
- **Mac:** VoiceOver (`Cmd + F5` to activate)
- **Chrome:** [ChromeVox](https://chrome.google.com/webstore/detail/chromevox)

---

## 5. Forms and Input Accessibility

### Best Practices:
- **Use `label` elements** for all form inputs.
- **Ensure error messages are descriptive and accessible.**
- **Allow users to navigate forms using `Tab`.**

### Example of Accessible Form

```html
<label for="email">Email Address:</label>
<input type="email" id="email" name="email" required aria-describedby="email-help">
<small id="email-help">Enter a valid email address.</small>
```

---

## 6. Testing and Improving Accessibility

### Use Google Lighthouse
Lighthouse is a powerful tool for auditing accessibility.

#### Steps:
1. Open Chrome DevTools (`F12` or `Ctrl+Shift+I`).
2. Go to the **Lighthouse** tab.
3. Select **Accessibility** and click **Generate report**.
4. Review and fix highlighted issues.

### Other Testing Tools:
- [axe DevTools](https://www.deque.com/axe/devtools/) (browser extension)
- [WAVE](https://wave.webaim.org/) (Web Accessibility Evaluation Tool)
- [Color Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

---

## Summary of Key Accessibility Practices

| Category        | Best Practices |
|----------------|---------------|
| **Contrast**   | Ensure a 4.5:1 ratio for text and background. |
| **Fonts**      | Use at least 16px for body text and clear typography. |
| **Keyboard Navigation** | Ensure all elements are focusable and navigable. |
| **Screen Readers** | Use semantic HTML and ARIA roles where necessary. |
| **Forms** | Use labels, helpful error messages, and clear instructions. |
| **Testing** | Use Google Lighthouse and other accessibility tools. |

---

By following these guidelines, you can create an inclusive website that provides a better experience for all users. Accessibility is not just about compliance—it improves usability and benefits everyone. 🚀

