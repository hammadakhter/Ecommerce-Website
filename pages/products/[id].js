// pages/products/[id].js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import CustomNavbar from '@/components/Navbar';

const ProductDetailPage = () => {

  const router = useRouter();
  const { id } = router.query;

  // In a real application, you would fetch product details based on the `id` parameter.
  // For this example, we'll use a static product.


  const [cart, setCart] = useState([]); // Initialize an empty cart array

  const product = {
    id: 1,
    name: 'Product 1',
    description: 'Description of Product 1',
    price: '$19.99',
    image: '/public/mens shirts.jpg',
  };

  // Function to add the current product to the cart
  const addToCart = () => {
    setCart([...cart, product]);
  };

  return (
    <div>
    <CustomNavbar />
      <div className="container mt-4">
         (
          <div>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={addToCart} className="btn btn-primary">
              Add to Cart
            </button>
          </div>
         )
      </div>
    </div>
  );
};

export default ProductDetailPage;