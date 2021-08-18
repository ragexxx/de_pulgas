import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useMutation } from '@apollo/client';

import { ADD_PRODUCT } from '../utils/mutations';

import { QUERY_CATEGORIES } from '../utils/queries';
function AddProduct(props) {
    const [formState, setFormState] = useState({ name: '', description: '', quantity: 0, price: 0.00, image: "H-lamp.jpeg", category: "" });
    const [addProduct] = useMutation(ADD_PRODUCT);
    const { loading, error, data } = useQuery(QUERY_CATEGORIES)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
    
   /*  console.log("dataa", data.categories) */

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        await addProduct({
            variables: {
                name: formState.name,
                description: formState.description,
                quantity: formState.quantity,
                price: formState.price,
                image: formState.image,
                category: formState.category,
            },
        });

    };

    const handleChange = (event) => {
        const { name, value } = event.target;
       
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <Link to="/myProducts">← Go your products</Link>

            <div className="input-field">
                <form onSubmit={handleFormSubmit}>
                    <h2>Add New Product</h2>
                    <label htmlFor="name"></label>
                    <input
                        placeholder="Name"
                        name="name"
                        // type="firstName"
                        id="name"
                        onChange={handleChange}
                    />
                    <label htmlFor="description"></label>
                    <input
                        placeholder="Description"
                        name="description"
                        // type="lastName"
                        id="description"
                        onChange={handleChange}
                    />

                    <label htmlFor="quantity"></label>
                    <input
                        placeholder="Quantity"
                        name="quantity"
                        type="number"
                        id="quantity"
                        min="0"
                        onChange={handleChange}
                    />

                    <label htmlFor="price"></label>
                    <input
                        placeholder="Price"
                        name="price"
                        type="number"
                        id="description"
                        min="0"
                        step="0.01"
                        onChange={handleChange}
                    />
                    

                    <label htmlFor="category" ></label>
                    <select name="category" className="browser-default" defaultValue onChange={handleChange}>
                        <option value="DEFAULT">Choose your category</option>
                        {data.categories.map(category => (
                            <option key={category._id} value={category._id}>
                                {category.name}
                            </option>
                        ))}
                    </select>


                    <label htmlFor="image"></label>
                    <input
                        name="image"
                        type="file"
                        id="image"
                        onChange={handleChange}
                    />
                    <br></br>
                    <br></br>
                    <div>
                        <button className="btn waves-effect waves-light #ffb300 amber darken-1" type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddProduct;