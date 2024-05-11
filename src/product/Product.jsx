import React, { Component } from 'react';
import ProductInput from './ProductInput';
// import ProductList from './ProductList';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            newProduct: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({ newProduct: event.target.value });
    };

    handleAddProduct = () => {
        const { newProduct, products } = this.state;
        if (newProduct.trim() !== '') {
            const updatedProducts = [...products, newProduct];
            this.setState({ products: updatedProducts, newProduct: '' });
        }
    };

    handleDeleteProduct = (index) => {
        const { products } = this.state;
        const updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        this.setState({ products: updatedProducts });
    };

    render() {
        const { products, newProduct } = this.state;
        return (
            <div className="min-h-screen bg-zinc-100 flex items-center justify-center">
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl" style={{ height: "500px" }}>
                <h1 className="text-2xl font-bold mb-6">Product List</h1>
                <ProductInput
                newProduct={newProduct}
                handleInputChange={this.handleInputChange}
                handleAddProduct={this.handleAddProduct}
                />
                {/* <ProductList products={products} handleDeleteProduct={this.handleDeleteProduct} /> */}
            </div>
            </div>
        );
    }
}

export default Product;