# PlotchAI Assignment

![React](https://img.shields.io/badge/React-18.x-blue)
![IntersectionObserver](https://img.shields.io/badge/IntersectionObserver-API-green)
![JSONBin.io](https://img.shields.io/badge/API-JSONBin.io-orange)

A React-based product listing page that implements **lazy loading** for images. The page fetches 48 products at a time from an API but only renders 8 product images initially. As the user scrolls, the next set of images is progressively rendered until all 48 products are displayed. Once the 48th product is rendered, the API is called again to load the next batch of 48 products.

---

## Features

- **Lazy Loading**: Only 8 product images are rendered initially. As the user scrolls, more images are loaded dynamically.
- **API Integration**: Fetches 48 products per request using a simulated API hosted on [JSONBin.io](https://jsonbin.io/).
- **Scroll Detection**: Uses the `IntersectionObserver` API to detect when the user scrolls near the bottom of the page.
- **Performance Optimization**: Minimizes re-renders by using `React.memo` for the `LazyImage` component.
- **Error Handling**: Gracefully handles API errors and displays appropriate error messages.

---

## Demo

You can view a live demo of the project here: [https://plotch-assignment.vercel.app/](https://plotch-assignment.vercel.app/).

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Himanshu-Dhawale/plotch-assignment.git
   cd plotch-assignment
