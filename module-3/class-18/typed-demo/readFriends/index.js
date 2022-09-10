const dynamoose = require("dynamoose");
const friendSchema = new dynamoose.Schema({
  id: String,
  Name: String,
  Phone: String
});

const FriendsModel = dynamoose.model("Friends", friendSchema);

exports.handler = async (event) => {

  console.log(event, event.pathParameters);

  try {
    let friendData;

    if (event.pathParameters) {
      friendData = await FriendsModel.query('id').eq(event.pathParameters.id).exec();
    } else {
      friendData = await FriendsModel.scan().exec();
    }

    const response = {
      statusCode: 200,
      body: JSON.stringify(friendData),
    };
    return response;
  } catch (e) {
    console.log(e);
    const response = {
      statusCode: 500,
      body: JSON.stringify(e),
    };
    return response;
  }
};
