import React from 'react';
import ProductItem from './Productitem';

function ProductList({ products, handleDeleteProduct }) {
  return (
    <ul className="divide-y divide-zinc-300">
      {products.map((product, index) => (
        <ProductItem key={index} index={index} product={product} handleDeleteProduct={handleDeleteProduct} />
      ))}
    </ul>
  );
}

export default ProductList;