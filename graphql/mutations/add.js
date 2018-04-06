let GraphQLNonNull = require('graphql').GraphQLNonNull;
let GraphQLString = require('graphql').GraphQLString;
let UserType = require('../types/user');
let UserModel = require('../../models/user');

exports.add = {
	type: UserType.userType,
	args: {
		name: {
			type: new GraphQLNonNull(GraphQLString),
		}
	},
	resolve(root, params) {
		const uModel = new UserModel(params);
		const newUser = uModel.save();
		if(!newUser){
			throw new Error('Error');
		}

		return newUser;
	}
}