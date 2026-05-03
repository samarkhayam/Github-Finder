
# 🔍 GitHub Finder

A fast, responsive GitHub Profile search engine built with **React** and **Tailwind CSS**.

![GitHub Finder Preview](github.png)

## ✨ Features

- **Real-time User Search:** Fetches detailed developer data via the GitHub REST API.
- **Dynamic Stats Grid:** Displays Public Repos, Followers, Following, and Gists in a layout that adapts from a 2x2 grid on mobile to a seamless row on desktop.
- **Intelligent Conditional Rendering:** 
  - Icons and text for Location, Company, and Bio only appear if the user has provided that information.
  - Image handling prevents "broken link" icons when avatars are loading or missing.
- **GitHub Aesthetic:** Modern dark-mode UI styled with Tailwind CSS, featuring GitHub's signature green (`#238636`) and dark (`#0d1117`) color palette.
- **Performance Optimized:** Uses `min-h-screen` and Flexbox to ensure a consistent background and layout across all device sizes.

## 🛠️ Tech Stack

- **Frontend:** [React.js](https://reactjs.org/) (Vite)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [FontAwesome](https://fontawesome.com/)
- **API:** [GitHub REST API](https://docs.github.com/en/rest)

## ⚙️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/samarkhayam/Github-Finder.git
   ```

2. **Navigate to the project folder:**
   ```bash
   cd Github-Finder
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

## 📸 Responsive UI Logic

- **Desktop (`md:`):** Maximum width of 748px (`max-w-[748px]`), centered using `m-auto`.
- **Mobile:** Elements switch from `flex-row` to `flex-col` to maintain readability. Stats use `flex-1` to grow and shrink equally as the viewport changes.

## 🚧 Known Fixes & Configurations

- **Smart App Control:** If running on Windows, ensure the project directory is added to your Antivirus/Windows Security exclusions to prevent the `tailwindcss-oxide` binary from being blocked.
- **Height Fix:** Uses `min-h-screen` instead of `h-screen` to prevent white space appearing at the bottom of the page when scrolling on mobile.

## 🤝 Contributing

This is a personal project used to explore React State and API integration. If you have suggestions for improvements (like adding a "Top Repos" list), feel free to open an issue or submit a pull request!

## 📄 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
