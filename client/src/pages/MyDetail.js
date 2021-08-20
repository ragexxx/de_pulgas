import React, { useEffect, useState } from 'react';
import {Image} from 'cloudinary-react';
import { Link, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';

import { REMOVE_MYPRODUCT, REMOVE_PRODUCT } from '../utils/mutations';

import Auth from '../utils/auth';
import Cart from '../components/Cart';
import { useStoreContext } from '../utils/GlobalState';
import {
  UPDATE_PRODUCTS,
} from '../utils/actions';
import { QUERY_PRODUCTS } from '../utils/queries';
import { idbPromise } from '../utils/helpers';
import spinner from '../assets/spinner.gif';

function Detail() {
  const [removeMyProduct] = useMutation(REMOVE_MYPRODUCT);
  const [removeProduct] = useMutation(REMOVE_PRODUCT);
  const [state, dispatch] = useStoreContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() => {
    // already in global store
    if (products.length) {
      setCurrentProduct(products.find((product) => product._id === id));
    }
    // retrieved from server
    else if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });

      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    }
    // get cache from idb
    else if (!loading) {
      idbPromise('products', 'get').then((indexedProducts) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);



  const remProd = async (event) => {
    event.preventDefault();
    await removeMyProduct({
      variables: {
        _id: id
      },
      
    });
   
    await removeProduct({
      variables: {
        _id: id
      },
      
    });

    Auth.removeMyProduct();
    Auth.removeProduct();
};

  return (
    <>
      {currentProduct && cart ? (
        <div className="container my-1">
          <Link style={{color: "black", margin:"5px"}} to="/myProducts">← Back to My products</Link>

          <h3>{currentProduct.name}</h3>

          <p>{currentProduct.description}</p>

          <p>
            <strong>Price:</strong>${currentProduct.price}{' '}
            {/* <button style={{margin:"5px"}} className = "waves-effect waves-light btn-small #ffb300 amber darken-1" onClick={addToCart}>Add to Cart</button> */}
            {/* <button className = "waves-effect waves-light btn-small #ff5252 red accent-2"
              disabled={!cart.find((p) => p._id === currentProduct._id)}
              onClick={removeFromCart}
            >
              Remove from Cart
            </button> */}

            <button style={{margin:"5px"}} className = "waves-effect waves-light btn-small #ff5252 red accent-2" onClick={remProd}>Remove Product</button> 
          </p>

          {/* <img
            src={`/images/${currentProduct.image}`}
            alt={currentProduct.name}
          /> */}
          <Image
          style={{height:300} }
          cloudName="dquhmekvj"
          publicId={currentProduct.image}
        />
        </div>
      ) : null}
      {loading ? <img src={spinner} alt="loading" /> : null}
      <Cart />
    </>
  );
}

export default Detail;