module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        id: 01,
        product_name: 'Cheese brust',
        available_quantity: 50,
        price: 200,
        description: 'Cheese brust',
        image: 'https://www.rvcj.com/wp-content/uploads/2016/08/pizza-hut-600x472.jpg'
      },
      {
        id: 02,
        product_name: 'Paneer cheese pizza',
        available_quantity: 70,
        price: 199,
        description: 'Paneer cheese pizza',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/cd/c3/4b/different-angle.jpg'
      },
      {
        id: 03,
        product_name: 'Chicken pizza',
        available_quantity: 100,
        price: 78,
        description: 'Chicken pizza',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/10/34/f0/77/we-sell-pizza-by-the.jpg'
      }, 
      {
        id: 04,
        product_name: 'Cheese chilly paneer',
        available_quantity: 100,
        price: 49,
        description: 'Cheese chilly paneer',
        image: 'https://i1.wp.com/blog.tracedeals.in/wp-content/uploads/2020/03/Untitled-design.png?resize=768%2C432&ssl=1'
      },
      {
        id: 05,
        product_name: 'Tropical chicken pan',
        available_quantity: 50,
        price: 69,
        description: 'Tropical chicken pan',
        image: 'https://www.paradisepizzas.com/wp-content/uploads/2019/04/TropicalChicken-Pan.png'
      },
      {
        id: 06,
        product_name: 'Paneer tikka pizza',
        available_quantity: 70,
        price: 169,
        description: 'Paneer tikka pizza',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/11/cd/c3/4b/different-angle.jpg'
      },
      {
        id: 07,
        product_name: 'Margarita pizza',
        available_quantity: 100,
        price: 299,
        description: 'Margarita pizza',
        image: 'https://www.dominos.co.in/files/items/Margherit.jpg'
      },
      {
        id: 08,
        product_name: 'Double cheese margrita Pizza',
        available_quantity: 100,
        price: 99,
        description: 'Double cheese margrita Pizza',
        image: 'https://pbs.twimg.com/media/BL5Z8p0CMAAvCQ_.jpg'
      },
      {
        id: 09,
        product_name: 'Onion pizza',
        available_quantity: 100,
        price: 99,
        description: 'Margarita pizza',
        image: 'https://i.pinimg.com/originals/2e/d4/c1/2ed4c1702b4b8bc6c119e2348f0eac63.jpg'
      },
      {
        id: 10,
        product_name: 'Parmesan Pizza Sticks',
        available_quantity: 100,
        price: 20,
        description: 'Parmesan Pizza Sticks',
        image: 'https://images-gmi-pmc.edge-generalmills.com/d530d5c9-8154-4bd7-ae22-5eccb794c92e.jpg'
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
