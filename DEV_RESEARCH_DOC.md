# **Next.js SPA - Interview Assessment**

This document outlines the **development process**, **optimizations**, and **technical decisions** made for the Next.js SPA project.

---

## **🚀 Features**

- **💼 Data Fetching:**
  - **Cards Data:** Fetched on the **server** for improved performance.
  - **User Data:** Fetched **client-side** on page load to meet task criteria.
- **🔍 SEO & Performance:**
  - **Dynamic Metadata & OpenGraph tags** for search engines and social media.
  - **JSON-LD structured data** for better discoverability.
  - **Optimized image loading** using Next.js `<Image>` component.
- **🎨 Fully Responsive Design:**
  - **Mobile (375px - 767px):** Cards stack in a **single column**.
  - **Tablet (768px - 1023px):** Two-column layout for better spacing.
  - **Desktop (1024px+):** **Custom Figma grid layout**, ensuring pixel-perfect positioning.
- **🛠 State Management with Redux Toolkit**
  - **User & Cards state** are managed efficiently using Redux.
  - **Refactored API fetching** to ensure cleaner state updates.
- **⚡ Performance Optimizations**
  - **Hydration fixes** to prevent SSR/CSR mismatches.
  - **Memoized API calls** for efficient state updates.
  - **Removed unnecessary re-renders** using best practices.
- **💜 TypeScript Support**
  - Fully typed components, ensuring **type safety**.
  - **labelTag visibility is tied to the image prop**, ensuring clean logic.

---

## **💁 Folder Structure**

```
nextjs-spa/
├── app/
│   ├── components/                # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── CardsList.tsx
│   │   ├── Header.tsx
│   │   ├── HomePageClient.tsx
│   │   ├── LinkButton.tsx
│   │   ├── PrimaryCard.tsx
│   │   ├── SecondaryCard.tsx
│   │   ├── TertiaryCard.tsx
│   ├── styles/                     # SCSS stylesheets
│   │   ├── globals.scss
│   │   ├── Layout.module.scss
│   │   ├── PrimaryCard.module.scss
│   │   ├── SecondaryCard.module.scss
│   │   ├── TertiaryCard.module.scss
│   │   ├── _CardBase.module.scss
│   ├── favicon.ico
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                      # Server-side page
├── features/                         # Redux state management
│   ├── cards/
│   │   ├── cardsSlice.ts
│   ├── user/
│   │   ├── userSlice.ts
│   ├── store.ts
├── public/                           # Static assets (SVGs, icons)
│   ├── Verde.svg
│   ├── globe.svg
│   ├── window.svg
├── next.config.ts                     # Next.js configuration
├── tailwind.config.ts                  # Tailwind setup
├── tsconfig.json                        # TypeScript configuration
├── package.json                         # Dependencies
└── DEV_RESEARCH_DOC.md                   # Research & Documentation
```

---

## **🛠 Technologies Used**

- **Next.js 15** (App Router)
- **TypeScript**
- **Redux Toolkit**
- **SCSS (CSS Modules + Nesting)**
- **Tailwind CSS (just init setup)**
- **Next.js Image Optimization**
- **JSON-LD for SEO**
- **Server-side & Client-side Data Fetching**

---

## **💪 Installation & Setup**

```sh
# Clone the repository
git clone https://github.com/your-username/nextjs-spa.git

# Navigate to the project folder
cd nextjs-spa

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build && npm start
```

> **🔹 Note:** Requires Node.js 18+ for best compatibility.

---

## **🗂 API Endpoints Used**

| **Data**       | **API Endpoint**                                                                |
| -------------- | ------------------------------------------------------------------------------- |
| **User Data**  | [Mocky User API](https://run.mocky.io/v3/61ffeebd-1b8d-4c0e-8703-c8778819e46a)  |
| **Cards Data** | [Mocky Cards API](https://run.mocky.io/v3/c8927342-2c6f-40d7-9ff4-9eee6c02b691) |

---

## **📌 Key Improvements**

- Implemented **dynamic metadata & JSON-LD** for SEO.
- Optimized **image loading using Next.js Image component**.
- Ensured **labelTag is only displayed when an image exists**.
- Refactored API calls & Redux store for a **cleaner structure**.
- Fixed **hydration mismatches** by ensuring consistent data handling.
- Enforced a **fully responsive layout following the Figma design**.
- Addressed **all TypeScript, ESLint & Performance warnings**.

---

## **📄 Future Enhancements**

- **Skeleton Loader** for improved user experience.
- **Unit & Integration Tests** with Jest & React Testing Library.
- **Dark Mode Support** using Tailwind's theming.
- **Global State Optimization** using React Query.

---

## **📝 License**

This project is open-source under the **MIT License**.

---

### 📌 **Notes**

- The **username is fetched client-side** to comply with task requirements.
- The **cards are fetched server-side** for performance and SEO benefits.
- **Redux** is used for state management, ensuring a scalable and maintainable architecture.

---

This **DEV_RESEARCH_DOC.md** provides a complete technical breakdown of the **Next.js SPA**, ensuring clarity for future enhancements and developer onboarding. 🚀
