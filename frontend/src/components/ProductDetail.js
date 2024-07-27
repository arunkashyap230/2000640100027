import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`/api/products/${productId}`)
      .then(response => {
        setProduct(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the product details!', error);
      });
  }, [productId]);

  return (
    <div>
      {product ? (
        <div>
          <h1>{product.name}</h1>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}%</p>
          <p>Availability: {product.availability}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ProductDetail;
