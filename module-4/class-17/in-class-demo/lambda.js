const AWS = require('aws-sdk');

const s3 = new AWS.S3();

exports.handler = async (event) => {
    
    // reading from bucket - non-dynamic proof of life --failing horribly in class
    // let bucketName = '401n21-demo';
    // let key = 'numbers.json';

    // let  numbers = await s3.getObject({Bucket: bucketName, Key: key}).promise();
    // let stringifiedNumbers = numbers.Body.toString();
    // let myNumbers = JSON.parse(stringifiedNumbers) 
    // console.log('numbers:', myNumbers);
    
    // dynamically get the newly uploaded file
    let bucketName = event.Records[0].s3.bucket.name;
    let key = event.Records[0].s3.object.key;
    
    let  s3Object = await s3.getObject({Bucket: bucketName, Key: key}).promise();
    // the s3Object data is returned as a BufferString inside of a Body property.  the toString(); will parse that data appropriately
    let stringifiedNumbers = s3Object.Body.toString();
    let myNumbers = JSON.parse(stringifiedNumbers) 
    console.log('numbers:', myNumbers);
    
    let { numberOne, numberTwo } = myNumbers.numbers;
    let result = numberOne + numberTwo;
    
    console.log('result:', result)
    // TODO implement
    const payload = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return payload;
};
