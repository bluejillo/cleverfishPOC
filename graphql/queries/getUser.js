let GraphQLObjectType = require('graphql').GraphQLObjectType;
let GraphQLList = require('graphql').GraphQLList;
let UserModel = require('../../models/user');
let userType = require('../types/user').userType;

// query
exports.queryType = new GraphQLObjectType({
	getUser: function({id}, {name}) {
		if()
	}
});