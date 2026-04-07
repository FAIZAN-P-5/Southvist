# SouthVista — God's Own Countries (University Project)

## Project Overview
Hi! This is my React-based web application for the university submission. The project is called **SouthVista**, and it's a guide to the culture, products, and tourism of **Kerala** and **Tamil Nadu**. 

I wanted to build something that feels premium but also demonstrates the core React concepts we learned in class. I've focused on a "Slate & Obsidian" dark theme with some glassmorphism effects for a modern look.

## Core Features
- **Global State Filtering**: You can toggle between Kerala and Tamil Nadu styles globally from the Navbar, and it updates all the product lists automatically.
- **Dynamic Shopping Cart**: I implemented a full cart system using React Context. You can add items from any category and manage them in the cart page.
- **Custom Jewellery Wizard**: A 4-step interactive flow for designing custom jewellery.
- **Responsive Design**: The app works on mobile and desktop (used CSS flexbox and grid).

## How I met the requirements:
- **Class Components**: I used Class-based components in `App.js` and `About.js` to show I understand constructors and `this.state`.
- **Lifecycle Methods**: Included `componentDidMount` and `componentDidUpdate` in the App class to sync the theme with the browser.
- **Hooks**: Used `useState`, `useContext`, `useEffect`, and `useMemo` in all functional components.
- **State & Props**: Data flows from the main App state down to cards and detail pages via props.
- **Props Validation**: Used the `prop-types` library to ensure components get the right data types.
npm install prop-types
- **Routing**: Setup `react-router-dom` v6 for all 12+ pages of the app.
npm install react-router-dom


## Project Structure
- `/src/components`: Reusable UI like Navbar, Footer, and Product Cards.
- `/src/pages`: Individual page layouts.
- `/src/context`: Global state management for the Cart and Theme.
- `/src/data`: JSON-like arrays for the products (Nursery, Jewellery, etc.).
- `/src/hooks`: Custom hooks for searching and filtering.

## Setup Instructions
1. Run `npm install` to get the dependencies (`lucide-react`, `react-router-dom`, etc.).
2. Run `npm run dev` to start the local server.
3. Open `localhost:5173` in your browser.

*Note: I've added some console logs for debugging the cart and theme toggles in the console.*

---
**Submitted by:** Faizan
**Subject:** Advanced Web Development (React)
