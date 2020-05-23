const connectMongoose = require("/opt/nodejs/connectMongoose.js");
const User = require("/opt/nodejs/user.js");

exports.handler = async (event) => {
	try {
		await connectMongoose();
		const u = await User.find({});
		return u;
	} catch (e) {
		return e;
	}
}
