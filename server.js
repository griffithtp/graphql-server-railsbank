const express = require('express');
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');
const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen('9000', () => {
  console.log('Storm-Bank listening on 9000...');
});
