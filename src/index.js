import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ShopContextProvider from './compnonent/context/shopcontext/ShopContext';

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,100;1,100&family=Noto+Sans+Syloti+Nagri&family=Noto+Sans:ital,wght@0,500;0,600;1,500&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,800;1,300&family=Oswald:wght@200;300;400;600;700&family=Poppins:ital,wght@0,100;0,400;0,500;0,700;1,500;1,600&family=Roboto:ital,wght@1,300;1,400&family=Sassy+Frass&family=Shadows+Into+Light&display=swap" rel="stylesheet"/></link>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ShopContextProvider>
    <App />
    </ShopContextProvider>
 
  </React.StrictMode>
);


