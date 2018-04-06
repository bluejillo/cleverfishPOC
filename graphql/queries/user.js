let GraphQLObjectType = require('graphql').GraphQLObjectType;
let GraphQLList = require('graphql').GraphQLList;
let UserModel = require('../../models/user');
let userType = require('../types/user').userType;

// query
exports.queryType = new GraphQLObjectType({
	name: 'Query',
	fields: function() {
		return {
			users: {
				type: new GraphQLList(userType),
				resolve: function () {
					const users = UserModel.find().exec();
					if (!users){
						throw new Error('Error');
					}
					return users;
				}
			}
		}
	}
});