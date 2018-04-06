const express = require('express');
const mongoose = require('./config/mongoose');
const graphqlHTTP = require('express-graphql');
const cors = require('cors');
const db = mongoose();
const app = express();

app.use('*', cors());

const userSchema = require('./graphql/index').userSchema;

app.use('/graphql', cors(), graphqlHTTP({
	schema: userSchema,
	rootValue: global,
	graphiql: true
}));

app.listen(process.env.PORT || 4000, () => {
	console.log('A graphql api running at port 4000');
});