import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        category {
          name
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
mutation addProduct ($name: String!, $description: String!, $image:String!, $quantity: String!, $price: String!, $category:String!){
  addProduct(name:$name, description:$description,image:$image, quantity: $quantity, price: $price,category:$category){
     _id
      name
      description
      price
      quantity
      category {
        _id
        name
      }
  }
  
}
`;

export const REMOVE_MYPRODUCT = gql`
mutation deleteUserProduct($_id: ID!){
  deleteUserProduct(_id: $_id){
    name
  }
   
  
}
`;

export const REMOVE_PRODUCT = gql`
mutation deleteProduct($_id: ID!){
  deleteProduct(_id: $_id)
   
  
}`;


export const UPDATE_PRODUCT =gql`
mutation updateQuantityProduct ($_id: ID!,$quantity: Int!){
  updateProduct(_id:$_id, quantity:$quantity){
    _id
      name
      description
      price
      quantity
      category {
        _id
        name
      }
  }
}`
