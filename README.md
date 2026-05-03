# 🔍 GitHub Finder

A fast, responsive GitHub Profile search engine built with **React** and **Tailwind CSS**.

![GitHub Finder Preview](https://via.placeholder.com/800x400?text=GitHub+Finder+Dashboard)

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
   git clone [https://github.com/samarkhayam/Github-Finder.git](https://github.com/samarkhayam/Github-Finder.git)