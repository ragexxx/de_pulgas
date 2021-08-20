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
    { name: 'Electronics' }
  ]);
  console.log('categories seeded');
  await Product.deleteMany();
  const products = await Product.insertMany([
    {
      name: 'Mens Denim Shirt',
      description:
        'Classic Denim shirt, Size: L',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341606/t3lkmynsek7lcwcabung.jpg',
      category: categories[0]._id,
      price: '10.00',
      quantity: '5'
    },
    {
      name: 'Mens Print Shirt',
      description:
        'Cool Print short sleeve shit for Men, Size: L',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341651/ljyzvtwvrygci4gbwmgo.jpg',
      category: categories[0]._id,
      price: '8.00',
      quantity: '8'
    },
    {
      name: 'Women Denim Shirt',
      description:
        'Classic Denim shirt, Size: Unisize',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341739/soblwnnmwupeu1zvtt65.jpg',
      category: categories[0]._id,
      price: '11.00',
      quantity: '12'
    },
    {
      name: 'Women Pink Blousse',
      description:
        'Classic Denim shirt, Size: Unisize',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341695/ydfppvdhm6bu9xbixwbm.jpg',
      category: categories[0]._id,
      price: '7.00',
      quantity: '15'
    },
    {
      name: 'Mens Denim Jeans',
      description:
        'Loose fit Denim Jeans for Men, Size: 34 x 34.',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629338701/pv5anxm4zvozyy5zhcn1.jpg',
      category: categories[1]._id,
      price: '12.00',
      quantity: '10'
    },
    {
      name: 'Mens Black Shorts',
      description:
        'Loose fit shorts for Men.',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629340380/ixypssnb7vqc4nfonwxn.jpg',
      category: categories[1]._id,
      price: '7.00',
      quantity: '10'
    },
    {
      name: 'Pencil Denim Skirt',
      category: categories[1]._id,
      description:
        'Trendy Denim Pencil Skirt.',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629340434/bfbprq6m1pdrg239wn3j.jpg',
      price: '7.99',
      quantity: '20'
    },
    {
      name: 'Women Denim Jans',
      category: categories[1]._id,
      description:
        'slim fit Blue Jeans, show up your curves, Size: M.',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629340485/pqugnoouuxnoao3b4zvx.jpg',
      price: '19.99',
      quantity: '50'
    },
    {
      name: 'Chelsea Boots for Men',
      category: categories[2]._id,
      description:
        'Cool Black Vegan-lether chelsea boots, Size: 12',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341422/zmh5ycy0sx9zagyw6zau.jpg',
      price: '14.99',
      quantity: '10'
    },
    {
      name: 'Combat Boots for Women',
      category: categories[2]._id,
      description:
        'Cool Black Vegan-lether combat boots, Size: 6',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341478/nunysnoulcuwrhedvfzq.jpg',
      price: '14.99',
      quantity: '10'
    },
    {
      name: 'Pink Styletos',
      category: categories[2]._id,
      description:
        'Gorgeous Pink Vegan-lether Styletos, Size: 6',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341516/mevm2boqvx0cxbzwv7hy.jpg',
      price: '9.99',
      quantity: '10'
    },
    {
      name: 'Brown Heels',
      category: categories[2]._id,
      description:
        'Pretty classy Brown Vegan-lether Heels, Size: 5',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341556/hjfnwxd6opdqdzo7moss.jpg',
      price: '15.00',
      quantity: '15'
    },
    {
      name: 'The Shadow of the Wind',
      category: categories[3]._id,
      description:
        'The Shadow of the Wind by Carlos Ruiz-Zafon',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,w_800/v1629338670/nuxy6bo7ugo5rf553kvn.jpg',
      price: '8.00',
      quantity: '10'
    },
    {
      name: 'The Woman in the Window',
      category: categories[3]._id,
      description:
        'The Woman in the Window by A. J. Finn',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,w_800/v1629338681/y4wxykb7lpdqhbdefsw4.jpg',
      price: '7.00',
      quantity: '10'
    },
    {
      name: 'Harry Potter and the Order of Phoenix',
      category: categories[3]._id,
      description:
        'Harry Potter and the Order of Phoenix by J. K. Rowling',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800,w_800/v1629338689/ark7gwn8mvdw10sjagzx.jpg',
      price: '10.00',
      quantity: '10'
    },
    {
      name: 'Percy Jackson and the Sea of Monsters',
      category: categories[3]._id,
      description:
        'Percy Jackson and the Sea of Monsters by Rick Riordan',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629340553/c1ydlfwwpgxrrryqqbco.jpg',
      price: '7.00',
      quantity: '12'
    },
    {
      name: 'Chair',
      category: categories[4]._id,
      description: 'Trendy Animal Print Chair for Office or general purpose',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341273/df5x0owqxnlljacj0r87.jpg',
      price: '31.99',
      quantity: '25'
    },
    {
      name: 'Lamp',
      category: categories[4]._id,
      description: 'Cool Boho Lampfor accent decor',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341301/l4c0vwnompovdtufe5pn.jpg',
      price: '20.99',
      quantity: '20'
    },
    {
      name: 'Wall Mirror',
      category: categories[4]._id,
      description:
        'Beautiful Accent Mirror',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341340/wyuwekmfkviixoveszlf.jpg',
      price: '27.99',
      quantity: '100'
    },
    {
      name: 'Contemporary Vasse',
      category: categories[4]._id,
      description:
        'Beautiful contemporary Vasse',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341368/vmldpniwvk1wzafu4cy6.jpg',
      price: '16.99',
      quantity: '49'
    },
    {
      name: 'Kindle Papperwhite',
      category: categories[5]._id,
      description:
        'Kindle Papperwhite.',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629340706/h0g6dpi6wlxki4og9ove.jpg',
      price: '59.99',
      quantity: '60'
    },
    {
      name: 'MacBook Air',
      category: categories[5]._id,
      description:
        'MacBook Air in excelent conditions.',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341153/lcidmjmbh24ppehrmf9s.jpg',
      price: '459.99',
      quantity: '3'
    },
    {
      name: 'PlayStation 4',
      category: categories[5]._id,
      description:
        'PlayStation 4 in excelent conditions.',
      image: 'https://res.cloudinary.com/dquhmekvj/image/upload/c_scale,h_800/v1629341193/slakroit9nshidye4zhq.jpg',
      price: '159.99',
      quantity: '7'
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