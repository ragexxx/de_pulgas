import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'cloudinary-react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function MyProducts() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container">
        <Link style={{ color: "black" }} to="/addProduct">← Add new product</Link>

        {user ? (
          <>
            <h4>
              Your products, {user.firstName} {user.lastName}
            </h4>
            {user.stockes.map((stock) => (
              <div key={stock._id} className="my-2">
                <div className="flex-row">
                  {stock.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        {/* <img alt={name} src={`/images/${image}`} /> */}
                        <Image
                          style={{ height: 300 }}
                          cloudName="dquhmekvj"
                          publicId={image}
                        />
                        <p style={{ color: "black" }}>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

export default MyProducts;