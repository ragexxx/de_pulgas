const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Category {
  _id: ID
  name: String
}

type Product {
  _id: ID
  name: String
  description: String
  image: String
  quantity: Int
  price: Float
  category: Category
}


type Order {
  _id: ID
  purchaseDate: String
  products: [Product]
}

type Stock {
  _id: ID
  products: [Product]
}

type User {
  _id: ID
  firstName: String
  lastName: String
  email: String
  orders: [Order]
  stockes: [Stock]
}

type Checkout {
  session: ID
}

type Auth {
  token: ID
  user: User
}
  
`;

module.exports = typeDefs;
