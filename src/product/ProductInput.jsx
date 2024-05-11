import React from 'react';

function ProductInput({ newProduct, handleInputChange, handleAddProduct }) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Add a new product..."
        className="form-input border-2 border-zinc-300 p-2 rounded w-full"
        value={newProduct}
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddProduct}
      >
        Add
      </button>
    </div>
  );
}

export default ProductInput;