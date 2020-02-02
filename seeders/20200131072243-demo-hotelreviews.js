'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

   return queryInterface.bulkInsert('Hotels', [{
     hotelName:'Rydges',
     hotelAddress: '8 Arrivals Court Sydney Airport',
     hotelCity: 'Mascot',
     reviewText: 'Always stay here for international flight and never been dissapointed',
     hotelRatings: 5,
     authorReview: 'David',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    hotelName:'Noosa Blue',
    hotelAddress: '16 Noosa Dr Noosa Dr',
    hotelCity: 'Noosa Heads',
    reviewText: 'Location and view was spectator',
    hotelRatings: 4,
    authorReview: 'James',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    hotelName:'The Village Melbourne',
    hotelAddress: '167 Franklin St',
    hotelCity: 'Melbourne',
    reviewText: 'Great value for money',
    hotelRatings: 3,
    authorReview: 'Hannah',
    createdAt: new Date(),
    updatedAt: new Date()
   },
   {
    hotelName:'Ibis Brisbane Airport',
    hotelAddress: '2 Dryandra Road Brisbane',
    hotelCity: 'Brisbane',
    reviewText: 'Room is nice and clean. Great Staff',
    hotelRatings: 3,
    authorReview: 'Son Heung Min',
    createdAt: new Date(),
    updatedAt: new Date()
   }
  ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Hotels', null, {});
  }
};