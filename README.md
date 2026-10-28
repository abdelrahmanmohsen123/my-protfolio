# Abdelrahman Mohsen | Developer Portfolio & ATS Resumes (V2.0)
# البورتفوليو الشخصي الحديث والسيرة الذاتية الاحترافية (ATS)

A modern, high-performance developer portfolio built with **Vue 3, Vite, TypeScript, and Tailwind CSS**. Designed specifically to showcase real-world production backend engineering (PHP & Laravel), database optimization, and verified frontend systems (JavaScript, jQuery, Blade, Bootstrap) with **zero runtime server dependencies** (static HTML/CSS/JS ready for Nginx, Apache, aaPanel, or GitHub Pages).

---

## 🌟 Key Features / المميزات الرئيسية

1. **Dual Language & Full RTL/LTR Support (ثنائي اللغة عربي وإنجليزي):**
   - Instant language switching (English / العربية) with saved preference.
   - Tailored Arabic typography (Cairo font) and clean English typography (Inter font).
2. **True Full Stack Positioning with Backend Specialization:**
   - Emphasizes PHP, Laravel, RESTful APIs, MySQL, and server architecture.
   - Highlights verified frontend experience (JavaScript, jQuery, Laravel Blade, HTML5, CSS3, Bootstrap).
   - Strict adherence to real qualifications: no unverified claims of Vue/React/Livewire commercially.
3. **Four (4) ATS-Friendly Resume Versions (٤ نسخ سيرة ذاتية متوافقة مع أنظمة التوظيف):**
   - **Full Stack Engineer - English (ATS)**
   - **Full Stack Engineer - Arabic (ATS)**
   - **Backend Software Engineer - English (ATS)**
   - **Backend Software Engineer - Arabic (ATS)**
   - Instant in-browser preview, direct print-to-PDF (`Ctrl+P`), and standalone downloadable HTML files.
4. **Verified Production Projects Showcases:**
   - **FastEx** (`https://fastex.delivery/`)
   - **DotScore** (`https://dotscore.net/`)
   - **Mangoul** (`https://mangoul2.com/`)
   - **Asaar Plus** (`https://asaarplus.com/`)
   - **Gold Fawry** (`https://goldfawry.com/`)
   - Explicit breakdown of **Backend Architecture** vs **Frontend Dashboards** with significant end-to-end development ownership.
5. **Completely Centralized & Maintainable Data:**
   - All personal data, projects, experience, skills, and CVs are isolated in clean TypeScript files under `src/data/`.
   - Update your information in seconds without touching UI markup!

---

## 📁 Project Structure / هيكل المشروع

```text
abdelrahman-mohsen-portfolio/
├── dist/                          # Production output (Ready to deploy anywhere!)
│   ├── assets/                    # Bundled CSS and JS
│   ├── cv/                        # Standalone ATS HTML Resumes (4 versions)
│   ├── favicon.svg
│   ├── index.html
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .htaccess                  # Apache / aaPanel routing rules
├── public/                        # Static assets copied directly to dist/
│   ├── cv/                        # Source ATS Resume files
│   ├── favicon.svg
│   ├── robots.txt
│   ├── sitemap.xml
│   └── .htaccess
├── src/
│   ├── components/
│   │   ├── cv/
│   │   │   └── CvModal.vue        # ATS CV previewer, track switcher & downloader
│   │   ├── layout/
│   │   │   ├── Navbar.vue         # Responsive header with language switcher
│   │   │   └── Footer.vue         # Footer with social links & copyright
│   │   ├── projects/
│   │   │   └── ProjectModal.vue   # Deep-dive project contribution modal
│   │   └── sections/
│   │       ├── HeroSection.vue    # Name, title, headline & quick actions
│   │       ├── AboutSection.vue   # Engineering philosophy & background
│   │       ├── SkillsSection.vue  # Categorized technical skills
│   │       ├── ProjectsSection.vue# Interactive cards for verified projects
│   │       ├── ExperienceSection.vue # Arab Apps & CyperFace timelines
│   │       ├── EducationSection.vue  # ITI, NTI, and Engineering degree
│   │       ├── LearningSection.vue   # Currently Expanding My Skills
│   │       └── ContactSection.vue    # Email, Phone/WhatsApp, LinkedIn, GitHub
│   ├── composables/
│   │   └── useLanguage.ts         # Reactive language & RTL state
│   ├── data/                      # 💡 Centralized Data Layer (EDIT HERE!)
│   │   ├── cv-data.ts             # Source data for all 4 ATS CV tracks
│   │   ├── education.ts           # ITI, NTI, Bachelor degree data
│   │   ├── experience.ts          # Arab Apps, CyperFace details
│   │   ├── profile.ts             # Name, bio, phone, email, links
│   │   ├── projects.ts            # FastEx, DotScore, Mangoul, Asaar Plus, Gold Fawry
│   │   ├── skills.ts              # Categorized skills & learning tracks
│   │   └── translations.ts        # UI labels in English & Arabic
│   ├── styles/
│   │   └── main.css               # Tailwind CSS & animations
│   ├── types/
│   │   └── index.ts               # TypeScript interfaces
│   ├── App.vue
│   └── main.ts
├── nginx.conf                     # Ready-to-use Nginx virtual host configuration
├── tailwind.config.js
├── vite.config.ts
├── tsconfig.json
└── package.json
```

---

## 🛠️ How to Edit Your Information / كيفية تعديل بياناتك

All data is stored cleanly in `src/data/`:

| What you want to edit / ما تريد تعديله | File to edit / الملف المسئول |
|---|---|
| **Personal Info, Email, Phone, Bio** | `src/data/profile.ts` |
| **Projects & Contributions** | `src/data/projects.ts` |
| **Work Experience & Responsibilities** | `src/data/experience.ts` |
| **Technical Skills & Learning Topics** | `src/data/skills.ts` |
| **Education & Diplomas** | `src/data/education.ts` |
| **ATS CV Content & Bullets** | `src/data/cv-data.ts` and `public/cv/*.html` |
| **UI Translations & Labels** | `src/data/translations.ts` |

---

## 💻 Local Development / التشغيل المحلي على جهازك

### 1. Requirements
- Node.js (v18 or newer)
- VS Code or your favorite IDE

### 2. Run Local Development Server
Open PowerShell in the project directory:
```powershell
# If your PowerShell execution policy blocks npm.ps1, use npm.cmd:
npm.cmd run dev
# Or with standard npm:
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```powershell
npm.cmd run build
# Or:
npm run build
```
This generates the optimized static files in the `dist/` directory.

---

## 🚀 Deployment Guide / دليل رفع الموقع على السيرفر الخاص بك

The final build in `dist/` is **100% static** (HTML, CSS, JS). You do **NOT** need PHP, Node.js, or MySQL running for this portfolio website.

### Option A: Deploy to a Linux VPS using Nginx (Recommended)

1. **Build the project locally:**
   ```bash
   npm run build
   ```
2. **Upload the contents of `dist/` to your VPS:**
   ```bash
   # Using SCP / RSYNC to upload:
   scp -r dist/* user@your-vps-ip:/var/www/abdelrahman-portfolio/
   ```
3. **Configure Nginx:**
   Use the provided `nginx.conf` file in the project root:
   ```bash
   sudo nano /etc/nginx/sites-available/abdelrahman-portfolio
   ```
   Paste the configuration (update `server_name` with your domain and `root /var/www/abdelrahman-portfolio`).
4. **Enable site and reload Nginx:**
   ```bash
   sudo ln -s /etc/nginx/sites-available/abdelrahman-portfolio /etc/nginx/sites-enabled/
   sudo nginx -t
   sudo systemctl reload nginx
   ```
5. **Install Free SSL (Let's Encrypt / Certbot):**
   ```bash
   sudo certbot --nginx -d your-domain.com -d www.your-domain.com
   ```

---

### Option B: Deploy to Apache / aaPanel / cPanel

1. Build the project locally (`npm run build`).
2. Open your hosting file manager (aaPanel / cPanel) or connect via FTP.
3. Upload all files from inside `dist/` into your domain's document root (e.g., `public_html` or `/www/wwwroot/your-domain.com`).
4. The `.htaccess` file is already included automatically in `dist/` to handle client-side routing, compression, and security headers.

---

### Option C: Deploy to GitHub Pages

1. In `vite.config.ts`, relative paths are already enabled (`base: process.env.VITE_BASE_PATH || './'`).
2. Push your repository to GitHub.
3. Under GitHub Repository Settings > **Pages**, choose **GitHub Actions** or deploy from the `dist` folder on the `gh-pages` branch.

---

## 📄 ATS Resumes Overview / السير الذاتية الأربعة

All 4 CV versions are written in pure, single-column, ATS-parseable structure (compatible with Workday, Lever, Greenhouse, Taleo):
- `public/cv/Abdelrahman_Mohsen_CV_FullStack_English.html`
- `public/cv/Abdelrahman_Mohsen_CV_FullStack_Arabic.html`
- `public/cv/Abdelrahman_Mohsen_CV_Backend_English.html`
- `public/cv/Abdelrahman_Mohsen_CV_Backend_Arabic.html`

Visitors can preview each version inside the website or click **Print / Save as PDF** to generate an official 1-to-2 page PDF resume instantly using standard browser printing.
