/* Amplify Params - DO NOT EDIT
	API_CONNECT_GRAPHQLAPIIDOUTPUT
	API_CONNECT_USERSTABLE_ARN
	API_CONNECT_USERSTABLE_NAME
	ENV
	REGION
Amplify Params - DO NOT EDIT */
var aws = require('aws-sdk');
var ddb = new aws.DynamoDB();
var s3 = new aws.S3()
exports.handler = async function (event) {
  console.log('Received S3 event:', JSON.stringify(event, null, 2));
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  console.log(event)
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);
  try {
	  const {ContentType} = await s3.getObject({
		Bucket: bucket,
		Key: key
	}).promise()
	console.log('CONTENT TYPE:', ContentType)
	return ContentType
  } catch (err) {
	const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
	console.log(message);
	throw new Error(message);
  }
};