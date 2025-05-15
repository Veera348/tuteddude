# React Projects Showcase

This project is a multi-page React Single Page Application (SPA) showcasing various React functionalities including class/functional components, to-do apps, form validation, routing, lazy loading, and Bootstrap styling.

## 🛠 Technologies Used

- React
- React Router DOM
- React Bootstrap
- Bootstrap 5
- Lazy Loading (React.lazy + Suspense)
- JSX and Functional/Class Components

## 📁 Project Structure

/src
└── tasks
├── ClassCounter.jsx
├── FunctionalCounter.jsx
├── TodoApp.jsx
├── TodoAppRefined.jsx
|── pages
|    ├── Home.jsx
|    ├── FormPage.jsx
|    └── About.jsx
└── App.jsx


## 🚀 Features & Pages

### 1. **Home Page** (`/home`)
- Simple welcome screen.
- Accessible via the Navbar dropdown.
- Lists the other pages for navigation.

### 2. **Class Counter** (`/class`)
- A React class component.
- Displays a counter with `+` and `-` buttons.
- State managed using `this.state`.

### 3. **Functional Counter** (`/functional`)
- A functional component using React Hooks (`useState`).
- Similar counter interface as the class version.

### 4. **To-Do App** (`/todo`)
- Basic To-Do app using functional component and hooks.
- Input field + button to add tasks to a list.
- Displays items in a `<ul>`.

### 5. **To-Do App Refined** (`/todo-refined`)
- Enhanced version with:
  - Bootstrap layout (Cards, Forms, Buttons).
  - Validation for empty input.
  - "Delete" button for each item.

### 6. **Form Page** (`/form`) — *Lazy Loaded*
- Input form with validation:
  - Required fields.
  - Valid email format.
  - Password length >= 8.
- Uses React Bootstrap components like `Form`, `Button`.

### 7. **About Page** (`/about`) — *Lazy Loaded*
- Static information page.
- Loaded using `React.lazy()` for performance.

## 🧭 Routing

Implemented using `react-router-dom`:
- Navbar contains links to all features.
- A fallback route shows a default project list with links.

## 💡 Getting Started

### Install dependencies:

git clone https://github.com/Veera348/tuteddude.git

```bash
npm install

npm run dev  # For Vite
# OR
npm start    # For Create React App

npm run build
