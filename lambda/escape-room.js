import { App, ExpressReceiver } from "@slack/bolt";

const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
});

export const handler = expressReceiver.app;

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: expressReceiver,
});

app.command("/escape-room", async ({ ack, say }) => {
  await ack();

  await say({ text: "It works!" });
});

app.error((error) => {
  console.error(error);
});
