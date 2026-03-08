# DYUTI Group Website

<p align="center">
  <strong>Multilingual React + TypeScript + Tailwind CSS website for DYUTI Group</strong><br/>
  Manpower consultancy, student consultancy, package pricing, required documents, and contact information.
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/React-18-blue" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-blue" />
  <img alt="Vite" src="https://img.shields.io/badge/Vite-6-purple" />
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-3-06B6D4" />
  <img alt="License" src="https://img.shields.io/badge/License-Business_Use-orange" />
</p>

---

## Overview

This project is a **responsive multilingual business website** built for **DYUTI Group**.

It presents the company’s services in a modern frontend interface using:

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router DOM**

The website is designed for consultancy and lead-generation use, with dedicated sections for:

- Qatar manpower services
- Work visa and free visa packages
- Student consultancy services
- Required documents
- Scholarship and tuition waiver packages
- Payment policy information
- Office contact information for Qatar and Bangladesh

---

## Features

- Multi-page React frontend
- English, Bengali, and Arabic language switcher
- Dark mode / light mode toggle
- Responsive layout for desktop and mobile
- QAR to BDT conversion buttons for pricing cards
- Separate pages for:
  - Home
  - Manpower
  - Student Consultancy
  - Required Documents
  - Contact
- Favicon support
- Arabic RTL support
- Brand-themed styling based on the DYUTI logo

---

## Services Included

### Manpower Services

- Delivery Work Visa Package
- Free Visa Package

### Student Consultancy

- Finland
- Netherlands
- Italy
- Austria

### Coaching Support

- IELTS
- GRE
- TOEFL

---

## Business Information Covered

- Qatar office contact details
- Bangladesh office contact details
- WhatsApp numbers
- Service pricing
- BMET card inclusion in manpower packages
- Required documents
- Scholarship / tuition waiver rules
- Payment conditions
- Estimated timelines

---

## Tech Stack

| Technology       | Purpose                              |
| ---------------- | ------------------------------------ |
| React            | UI development                       |
| TypeScript       | Type safety                          |
| Vite             | Development server and build tooling |
| Tailwind CSS     | Styling                              |
| React Router DOM | Page routing                         |

---

## Project Structure

```bash
src/
  components/
    Logo.tsx
    Seo.tsx
  App.tsx
  main.tsx
  index.css

public/
  logo.jpeg
  favicon.png
  favicon.ico
```

---

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

---

## Localization

This project supports:

- **English**
- **বাংলা**
- **العربية**

Notes:

- Arabic uses **RTL** layout direction.
- Language content is stored in the app’s translation/content structure.
- Content can be expanded further if more pages or service details are added.

---

## Branding

The UI is styled around the **DYUTI** brand identity.

**Primary Colors**

- Teal: `#43B6B1`
- Orange: `#E3A226`

---

## Customization

You can easily update:

- service titles
- package prices
- office locations
- WhatsApp links
- document requirements
- scholarship rules
- payment terms
- language content
- brand text

Most content is centralized in the app content structure inside `App.tsx`.

---

## Deployment

This project can be deployed easily on:

- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

For production deployment, first run:

```bash
npm run build
```

Then upload the generated `dist` folder to your hosting provider.

---

## Notes

- This is a **frontend-only** project.
- It is designed for **business presentation and lead generation**.
- Price conversion buttons are preset for display purposes.
- The project is intended for DYUTI Group business use.

---

## License

This project is created for **DYUTI Group** and is intended for **business/internal use** unless the owner chooses otherwise.

---

## Author

Built for **DYUTI Group**.
By **Shams Ishtiaque Rahman**.
