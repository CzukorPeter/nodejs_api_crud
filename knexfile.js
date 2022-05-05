
module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/partners.sqlite3'
    },
    useNullAsDefault : true
  },
};
