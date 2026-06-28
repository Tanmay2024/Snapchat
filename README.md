# 👻 Snapchat Clone

A responsive Snapchat web interface built using **HTML5** and **CSS3** as part of a collaborative front-end development project.

## 📌 Project Overview

This project recreates the Snapchat web experience with multiple pages and navigation between them.

The application currently includes:

- index Page
- Password Page
- Final Homepage
- Chat Pages
- Settings Page
- Responsive Navigation Bar
- Video Hero Section
- Dropdown Menu
- Interactive Buttons

## 🚀 Features

### Authentication Flow

- Login page with email validation
- Password page
- Navigation between pages
- Back button support

### UI Components

- Snapchat style navigation bar
- Stories
- Spotlight
- Chat
- Lenses
- Snapchat+
- Apps dropdown
- Responsive buttons
- Hover animations
- Microsoft download button

### Multimedia

- Hero videos
- Snapchat logo
- Responsive layout
- Modern styling

---

## 🛠️ Technologies Used

- HTML5
- CSS3
- Font Awesome
- Google Fonts (Poppins)
- Git
- GitHub

## 📂 Project Structure
Snapchat/
│
├── images/
│   └── logo/
│
├── videos/
│
├── index.html
├── password.html
├── final.html
├── settings.html
├── chat.html
├── style.css
├── chat.css
└── README.md

## 🔄 Navigation Flow

index.html
      │
      ▼
password.html
      │
      ▼
final.html

# 🐛 Challenges Faced

### 1. Login button was not navigating

**Issue**

The Login/Next button did not move to the password page.

**Cause**

The button was outside the correct form and multiple nested `<form>` tags were used.

**Solution**

Used a single form:

<form action="password.html">

and

<button type="submit">

### 2. Password page was not opening

**Issue**

Password page was not loading after clicking Next.

**Cause**

Incorrect page linking.

**Solution**

Connected pages using

action="password.html"

### 3. Final page navigation

**Issue**

After entering password the user stayed on the same page.

**Solution**

Changed the form action to

<form action="final.html">

### 4. Nested Form Issue

**Issue**

Multiple forms existed inside another form.

Example:

<form>
<form action="password.html">
<form action="password.html">

**Solution**

Removed all extra forms and kept only one.

### 5. Button Type Issue

**Issue**

Buttons were written using

<a class="login-btn">

instead of a submit button.

**Solution**

Changed to

<button type="submit" class="login-btn">

### 6. Git Merge Conflicts

**Issue**

Conflicts occurred while merging the login branch with the main branch.

**Solution**

- Resolved merge conflicts
- Accepted the required changes
- Committed the merge
- Pushed the updated branch

### 7. Pull Request Conflicts

**Issue**

Branch was behind the main branch.

**Solution**

Merged the latest main branch into the login branch before creating the Pull Request.

### 8. Local Files Overwriting Pull

**Issue**

Git prevented pulling because untracked files would be overwritten.

**Solution**

Committed the files first and then merged safely.

### 9. CSS Layout Issues

**Issue**

Navbar and login page styling broke after merging.

**Solution**

Rebuilt the stylesheet and verified every section before pushing.

### 10. GitHub Branch Synchronization

**Issue**

Login branch showed commits ahead/behind main.

**Solution**

Merged branches correctly and pushed the latest changes until both branches were synchronized.

## 📖 What We Learned

- HTML Forms
- Form Validation
- Page Navigation
- CSS Flexbox
- CSS Grid
- Responsive Design
- Git Branching
- Pull Requests
- Merge Conflict Resolution
- GitHub Collaboration
- Project Structure
- Debugging HTML Forms

## 🔧 Future Improvements

- JavaScript Authentication
- Firebase Login
- Responsive Mobile Layout
- Dark Mode
- Real User Authentication
- API Integration

## ⭐ Project Status

✔ index(Login) Page Completed

✔ Password Page Completed

✔ Homepage Connected

✔ Navigation Working

✔ Responsive UI

✔ GitHub Collaboration Completed

✔ Merge Conflicts Resolved

✔ Ready for Further Development