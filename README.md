
## Product Hub Marketplace

A simple e-commerce marketplace built using **Node.js**, **Express**, and **EJS**. This project features a responsive design and dynamic product filtering using route parameters.

### Features

* **Dynamic Routing**: Uses Express Routers to organize code for Mens, Womens, and Kids sections.
* **Responsive UI**: A custom CSS grid layout that adjusts product cards for mobile, tablet, and desktop views.
* **Product Filtering**: Browse products by category slugs (e.g., `/kids/toddler`).
* **Sticky Navigation**: A header and footer system that stays consistent across all pages.


###  Key Subroutes

The application includes specialized filtering for sales and categories:

#### 1. Womens Sale

Access SALE items in the womenswear section via sale route.

* **Route**: `/womens/sale`
* **Logic**: Filters the `womensData` to display only products marked as `onSale: true`.

#### 2. Kids Categories

The kids section uses sublinks to filter by age group and style.

* **Route**: `/kids/:category`
* **Sublinks**:
* `/kids/kids` (General kids items)
* `/kids/toddler` (Toddler-specific apparel)
* `/kids/teenager` (Teenage fashion)

###  Project Structure

* `data/`: Contains JSON-style JS files for products (e.g., `kidsData.js`).
* `public/`: Static assets like CSS and organized image folders.
* `routes/`: Express router files for clean URL handling.
* `views/`: EJS templates for the frontend.
