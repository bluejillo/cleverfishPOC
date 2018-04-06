let GraphQLSchema = require('graphql').GraphQLSchema;
let GraphQLObjectType = require('graphql').GraphQLObjectType;
let queryType = require('./queries/user').queryType;
let mutation = require('./mutations/index');

exports.userSchema = new GraphQLSchema({
	query: queryType,
	mutation: new GraphQLObjectType({
		name: 'Mutation',
		fields: mutation
	})
});