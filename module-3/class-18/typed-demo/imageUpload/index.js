const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
  // TODO implement
  let { bucket, object } = event.Records[0].s3;
  // console.log(bucket, object);

  try {
    let manifest = await s3.getObject({ Bucket: bucket.name, Key: 'images.json' }).promise();
    console.log(manifest);
  } catch (e) {
    console.log(e);
    // what is the error?
    if (e.code == 'NoSuchKey') {
      let manifest = await s3.putObject({
        Bucket: bucket.name,
        Key: 'images.json',
        Body: JSON.stringify([{ name: object.key, size: object.size }]),
        ContentType: 'application/json'
      }).promise();
      console.log(manifest);
    }
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
