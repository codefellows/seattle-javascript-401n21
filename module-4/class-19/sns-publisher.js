// Generate a temperature reading every few seconds
// Publish that temp to an sns topic
const Chance = new require("chance")();
const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");

const snsClient = new SNSClient({ region: "us-west-2" });
const TOPIC_ARN = "arn:aws:sns:us-west-2:758444019065:class-19-demo";

async function sendTemperature() {
  const temperature = Chance.natural({ min: 0, max: 100 });

  console.log(`Temperature generated`, temperature);

  setTimeout(sendTemperature, Chance.natural({ min: 2000, max: 3000 }));

  try {
    const command = new PublishCommand({
      Message: JSON.stringify({ temperature }),
      TopicArn: TOPIC_ARN,
    });

    const data = await snsClient.send(command);

    console.log(`SNS published message`, data);
  } catch (err) {
    console.error(`Problem publishing message`, err);
  }
}

sendTemperature();
