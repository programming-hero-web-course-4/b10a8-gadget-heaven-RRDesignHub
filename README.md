# GadgetHaven

**GadgetHaven** is a sleek and responsive e-commerce platform designed for gadget enthusiasts. It features a well-structured navigation bar, diverse product categories, and detailed product pages, along with essential e-commerce functionalities like a shopping cart, wishlist, and product filtering. Built with React, it offers a smooth and intuitive user experience with robust data management using Context API.

## Live Demo

[Visit the live site](https://gadget-hub.surge.sh/)

## Project Documentation

For more details on project requirements and functionality, please refer to the [Requirement Document](./Project-requirement.pdf) located in the root folder.

## Key Features

1. **Structured Navigation and Dynamic Routing**: Easily navigate through categories and individual product pages with a structured navigation bar and dynamic routing.
2. **Shopping Cart and Wishlist System**: Add items to your cart or wishlist and manage them seamlessly with pages dedicated to viewing and updating these lists.
3. **Product Filtering and Sorting**: Filter products by category and sort by price to quickly find desired items.
4. **Smooth User Experience**: Context API is used to handle cart and wishlist data globally, ensuring data persists across the app. The app also gracefully handles edge cases like price limits and reload errors.
5. **React Notifications**: Integrated notifications using React Toastify for real-time feedback on actions like adding items to the cart or wishlist.

## Tech Stack

- **Frontend**: React, Tailwind CSS, Daisy UI
- **Data Management**: Context API for managing global state of cart and wishlist
- **Notifications**: React Toastify

## React Concepts and Hooks Used

The project utilizes fundamental React concepts, including:

- **React Hooks**:
  - `useState` - Manage component state for dynamic elements.
  - `useEffect` - Handle side effects like data fetching and state updates.
  - `useLocation` - Track the current URL location for navigational context.
  - `useNavigation` - Implement navigation within the app for enhanced control.
  - `useParams` - Extract URL parameters to display the correct product details.
  - `useLoaderData` - Manage pre-loaded data for efficient rendering and navigation.

- **React Routing**:
  - Implemented React Router for single-page application (SPA) routing and nested routes for structured navigation.

- **Notifications**:
  - Integrated **React Toastify** to provide users with real-time notifications on key interactions.

