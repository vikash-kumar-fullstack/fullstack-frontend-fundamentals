# 🎨 CSS Basics

## What is CSS?

CSS = Cascading Style Sheets

It is used to style HTML elements.

---

## What does "Cascading" Mean?

Cascading means:

If multiple styles are applied,
the browser decides which one to apply based on priority.

Priority Order:
Inline > Internal > External

Example:

If two styles are applied to h1,
the one with higher priority wins.

---

## Types of CSS

There are 3 types of CSS:

1. Inline CSS
2. Internal CSS
3. External CSS

---

## 1. Inline CSS

Inline CSS is written directly inside the HTML element.

Example:

<h1 style="color: red;">Hello</h1>

Advantages:
- Quick to use
- Good for testing small changes

Disadvantages:
- Makes HTML messy
- Not reusable
- Not professional
- Hard to manage in big projects

---

## 2. Internal CSS

Internal CSS is written inside the <style> tag in the head section.

Example:

<style>
h1 {
    color: green;
}
</style>

Advantages:
- Better than inline
- Useful for small projects

Disadvantages:
- Still inside HTML file
- Not reusable in multiple pages
- Not good for large projects

---

## 3. External CSS

External CSS is written in a separate file like style.css

It is connected using:

<link rel="stylesheet" href="style.css">

Advantages:
- Clean structure
- Reusable
- Professional way
- Easy to manage
- Used in real projects

Disadvantages:
- Needs proper linking
- One extra file to manage

---

## Which One Should Be Used?

In real projects, External CSS is always preferred.

Inline and Internal are mainly used for testing or small examples.

## Why CSS is Important?

HTML = Structure
CSS = Design

Without CSS, website looks plain.