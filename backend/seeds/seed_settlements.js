exports.seed = function(knex) {
    return knex('settlements').truncate()
      .then(function () {
        return knex('settlements').insert([
          {id: 1, name: 'Karcag'},
          {id: 2, name: 'Győr'},
          {id: 3, name: 'Pécs'},
          {id: 4, name: 'Miskolc'},
          {id: 5, name: 'Szombathely'},
          {id: 6, name: 'Csanádpalota'},
        ]);
      });
  };