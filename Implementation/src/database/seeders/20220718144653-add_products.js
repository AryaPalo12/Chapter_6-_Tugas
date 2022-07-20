'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('products',[
      {
      name:'Cha-cha',
      description:'this is normal',
      stock : 50,
      is_available: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'Bum-bum',
      description:'this is not normal',
      stock : 30,
      is_available: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'Lumpy',
      description:'this is normal?',
      stock : 20,
      is_available: true,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'Cun-gun',
      description:'this is really normal',
      stock : 0,
      is_available: false,
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      name:'Yuuu',
      description:'this is really disgusting',
      stock : 2,
      is_available: true,
      createdAt: new Date(),
      updatedAt: new Date()
     }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('products', null, {})
  }
};
