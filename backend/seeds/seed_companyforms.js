exports.seed = function(knex) {
    return knex('companyforms').truncate()
      .then(function () {
        return knex('companyforms').insert([
          {id: 1, name: 'Vállalat'},
          {id: 2, name: 'Szövetkezet'},
          {id: 3, name: 'Korlátolt felelősségű társaság'},
          {id: 4, name: 'Betéti társaság'},
          {id: 5, name: 'Egyéni cég'},
          {id: 6, name: 'Egyesülés'},
        ]);
      });
  };