import React from 'react';
import CustomNavbar from '../components/Navbar';
import ProductsPage from './products';

const HomePage = () => {
  return (
    <div>
      <CustomNavbar />
      {/* Your page content here */}
      <ProductsPage />
    </div>
  );
};

export default HomePage;