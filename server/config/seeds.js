const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'Tops' },
    { name: 'Bottoms' },
    { name: 'Shoes' },
    { name: 'Books' },
    { name: 'HomeDecor' },
    { name: 'Electronics'}
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Mens Denim Shirt',
      description:
        'Classic Denim shirt, Size: L',
      image: 'T-mshirt1.jpeg',
      category: categories[0]._id,
      price: 10.00,
      quantity: 5
    },
    {
      name: 'Mens Print Shirt',
      description:
        'Cool Print short sleeve shit for Men, Size: L',
      image: 'T-mshirt2.jpeg',
      category: categories[0]._id,
      price: 8.00,
      quantity: 8
    },
    {
      name: 'Women Denim Shirt',
      description:
        'Classic Denim shirt, Size: Unisize',
      image: 'T-wshirt1.jpeg',
      category: categories[0]._id,
      price: 11.00,
      quantity: 12
    },
    {
      name: 'Women Pink Blousse',
      description:
        'Classic Denim shirt, Size: Unisize',
      image: 'T-pink.jpeg',
      category: categories[0]._id,
      price: 7.00,
      quantity: 15
    },
    {
      name: 'Mens Denim Jeans',
      description:
        'Loose fit Denim Jeans for Men, Size: 34 x 34.',
      image: 'Bo-mjeans.jpeg',
      category: categories[1]._id,
      price: 12.00,
      quantity: 10
    },
    {
      name: 'Mens Black Shorts',
      description:
        'Loose fit shorts for Men.',
      image: 'Bo-short.jpeg',
      category: categories[1]._id,
      price: 7.00,
      quantity: 10
    },
    {
      name: 'Pencil Denim Skirt',
      category: categories[1]._id,
      description:
        'Trendy Denim Pencil Skirt.',
      image: 'Bo-skirt.jpg',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Women Denim Jans',
      category: categories[1]._id,
      description:
        'slim fit Blue Jeans, show up your curves, Size: M.',
      image: 'Bo-wjeans.jpeg',
      price: 19.99,
      quantity: 50
    },
    {
      name: 'Chelsea Boots for Men',
      category: categories[2]._id,
      description:
        'Cool Black Vegan-lether chelsea boots, Size: 12',
      image: 'S-mboots.jpeg',
      price: 14.99,
      quantity: 10
    },
    {
      name: 'Combat Boots for Women',
      category: categories[2]._id,
      description:
        'Cool Black Vegan-lether combat boots, Size: 6',
      image: 'S-wboot.jpg',
      price: 14.99,
      quantity: 10
    },
    {
      name: 'Pink Styletos',
      category: categories[2]._id,
      description:
        'Gorgeous Pink Vegan-lether Styletos, Size: 6',
      image: 'S-wheel.jpg',
      price: 9.99,
      quantity: 10
    },
    {
      name: 'Brown Heels',
      category: categories[2]._id,
      description:
        'Pretty classy Brown Vegan-lether Heels, Size: 5',
      image: 'S-wshoe.jpeg',
      price: 15.00,
      quantity: 15
    },
    {
      name: 'The Shadow of the Wind',
      category: categories[3]._id,
      description:
        'The Shadow of the Wind by Carlos Ruiz-Zafon',
      image: 'B-book1.jpeg',
      price: 8.00,
      quantity: 10
    },
    {
      name: 'The Woman in the Window',
      category: categories[3]._id,
      description:
        'The Woman in the Window by A. J. Finn',
      image: 'B-book2.jpeg',
      price: 7.00,
      quantity: 10
    },
    {
      name: 'Harry Potter and the Order of Phoenix',
      category: categories[3]._id,
      description:
        'Harry Potter and the Order of Phoenix by J. K. Rowling',
      image: 'B-harry.jpeg',
      price: 10.00,
      quantity: 10
    },
    {
      name: 'Percy Jackson and the Sea of Monsters',
      category: categories[3]._id,
      description:
        'Percy Jackson and the Sea of Monsters by Rick Riordan',
      image: 'B-percy.jpeg',
      price: 7.00,
      quantity: 12
    },
    {
      name: 'Chair',
      category: categories[4]._id,
      description: 'Trendy Animal Print Chair for Office or general purpose',
      image: 'H-chair.jpeg',
      price: 31.99,
      quantity: 25
    },
    {
      name: 'Lamp',
      category: categories[4]._id,
      description: 'Cool Boho Lampfor accent decor',
      image: 'H-lamp.jpeg',
      price: 20.99,
      quantity: 20
    },
    {
      name: 'Wall Mirror',
      category: categories[4]._id,
      description:
        'Beautiful Accent Mirror',
      image: 'H-mirror.jpeg',
      price: 27.99,
      quantity: 100
    },
    {
      name: 'Contemporary Vasse',
      category: categories[4]._id,
      description:
        'Beautiful contemporary Vasse',
      image: 'H-vasse.jpeg',
      price: 16.99,
      quantity: 49
    },
    {
      name: 'Kindle Papperwhite',
      category: categories[5]._id,
      description:
        'Kindle Papperwhite.',
      image: 'E-kindle.jpeg',
      price: 59.99,
      quantity: 60
    },
    {
      name: 'MacBook Air',
      category: categories[5]._id,
      description:
        'MacBook Air in excelent conditions.',
      image: 'E-laptop.jpeg',
      price: 459.99,
      quantity: 3
    },
    {
      name: 'PlayStation 4',
      category: categories[5]._id,
      description:
        'PlayStation 4 in excelent conditions.',
      image: 'E-playstation.jpeg',
      price: 159.99,
      quantity: 7
    },
    
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Yaz',
    lastName: 'Tinoco',
    email: 'yaz@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ],
    stockes: [
      {
        products: [products[0]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Alsy',
    lastName: 'Google',
    email: 'alsy@testmail.com',
    password: 'password12345'
  });


  

  console.log('users seeded');

  process.exit();
});
