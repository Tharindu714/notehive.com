# 📚 NoteHive — Free Lecture Notes Hub

> A static, responsive website offering JIAT students organized access to lecture notes across multiple subjects. Hosted on GitHub Pages at [notehive.com](https://tharindu714.github.io/notehive.com/).

---

## 📑 Table of Contents

1. [✨ Overview](#-overview)
2. [📂 Project Structure](#-project-structure)
3. [⚙️ Technologies & Dependencies](#️-technologies--dependencies)
4. [🚀 Getting Started](#-getting-started)
5. [🛠️ Customization & Content Updates](#️-customization--content-updates)
6. [🌐 Deployment (GitHub Pages)](#-deployment-github-pages)
7. [📷 Screenshots](#-screenshots)
8. [🔮 Future Enhancements](#-future-enhancements)
9. [🤝 Contributing](#-contributing)
10. [📜 License & Contact](#-license--contact)

---

## ✨ Overview

**NoteHive** is a static-site template built to showcase and distribute lecture notes for JIAT students. Key features:

* **Modular HTML includes**: Shared `header.html` and `footer.html` injected into each page for consistent navigation
* **Multiple content pages**: `courses.html`, `service.html`, `elements.html`, `future_enhancing.html`
* **Responsive design**: SCSS-driven styles, mobile-first layout
* **Static assets**: Organized in `assets/` (CSS, JS, images, fonts)

---

## 📂 Project Structure

```
notehive.com/                   # Root of repo and GitHub Pages site
├── .gitattributes              # Git settings for EOL and merges
├── README.md                   # This documentation file
├── header.html                 # Shared site header & navigation
├── footer.html                 # Shared site footer
├── index.html                  # Home / landing page
├── courses.html                # List of lecture notes by course
├── service.html                # Details of available services
├── elements.html               # UI components showcase
├── future_enhancing.html       # Roadmap & planned features
├── slider-area.html            # Homepage slider markup
├── assets/
│   ├── css/                    # Compiled CSS (from SCSS)
│   ├── scss/                   # Source SCSS files for styling
│   ├── js/                     # Custom JavaScript modules
│   └── images/                 # Site images and icons
└── doc/                        # (Optional) design docs or markdown notes
```

---

## ⚙️ Technologies & Dependencies

* **HTML5** & **SCSS** for markup and styles
* **Vanilla JavaScript** for interactivity (collapse, slider)
* **GitHub Pages** for free hosting
* **Live Server / any static server** for local development

---

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Tharindu714/notehive.com.git
   cd notehive.com
   ```
2. **Install dependencies** (if using a SCSS compiler or bundler):

   ```bash
   npm install   # if a package.json is provided for build scripts
   ```
3. **Build styles** (if SCSS source present):

   ```bash
   npm run build:css   # compiles scss/ to assets/css/
   ```
4. **Serve locally**:

   ```bash
   npx live-server .   # or use your preferred static server
   ```
5. **Visit** `http://127.0.0.1:8080` to preview the site.

---

## 🛠️ Customization & Content Updates

* **Header & Footer**: Edit `header.html` and `footer.html` to update navigation links or site branding.
* **Content Pages**: Modify individual HTML files (`courses.html`, etc.) to add or remove lecture note links.
* **Styles**: Update SCSS in `assets/scss/` and recompile.
* **Scripts**: Enhance interactivity by editing `assets/js/` modules.

---

## 🌐 Deployment (GitHub Pages)

1. **Push to `main`** branch of `notehive.com` repository.
2. **GitHub Settings** → **Pages** → Confirm `main` branch, `/ (root)` folder.
3. **Live Site** available at `https://tharindu714.github.io/notehive.com/`

> Subsequent commits to `main` auto-deploy to GitHub Pages.

---

## 📷 Screenshots

> *Add your site screenshots here*

<img width="1351" height="603" alt="image" src="https://github.com/user-attachments/assets/9a9862b0-c1bf-48a1-b9b5-24def56f2c04" />
<img width="1350" height="603" alt="image" src="https://github.com/user-attachments/assets/fdf58ff2-b78c-4d7c-b168-f740a5b9c32c" />
<img width="1350" height="599" alt="image" src="https://github.com/user-attachments/assets/09c98c37-8353-49c4-85ef-96a55f727ee3" />

---

## 🔮 Future Enhancements

* **Search functionality** to quickly find notes.
* **Category filtering** by subject or semester.
* **Dark mode** toggle for improved readability.
* **Automated builds** via GitHub Actions on content updates.

---

## 🤝 Contributing

1. **Fork** the repo and create a feature branch.
2. **Commit** with descriptive messages.
3. **Submit** a Pull Request for review.

Please ensure markup validity and style consistency when contributing.

---

## 📜 License & Contact

This project is licensed under the **MIT License**.

For questions or feedback, reach out to **[me](mailto:tharinduchanaka6@gmail.com)**.

---

> Empowering JIAT students with accessible, organized lecture notes—one page at a time! 🚀

