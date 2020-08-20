const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
require('./db/mongoose.config');
require('dotenv').config();

const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(process.env.PORT, () => {
    console.log('Server is up on port ' + process.env.PORT);
});