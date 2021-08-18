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
  quantity: String
  price: String
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
  
type Query {
  categories: [Category]
  products(category: ID, name: String): [Product]
  allproducts: [Product]
  product(_id: ID!): Product
  user: User
  order(_id: ID!): Order
  stock(_id: ID!): Stock
  checkout(products: [ID]!): Checkout
}

type Mutation {
  addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
  addOrder(products: [ID]!): Order
  updateUser(firstName: String, lastName: String, email: String, password: String): User
  updateProduct(_id: ID!, quantity: Int!): Product
  login(email: String!, password: String!): Auth
  addProduct(name: String!, description: String!, image:String!, price:String!, quantity:String!,category: String!):Product
  addStock(products: [ID]!): Stock
  addCategory(name: String!): Category
  deleteUserProduct(_id: ID!):Product
  deleteProduct(_id: ID!):String
}
`;

module.exports = typeDefs;
