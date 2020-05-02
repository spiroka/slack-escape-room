import { App, ExpressReceiver, LogLevel } from "@slack/bolt";
import serverless from "serverless-http";

const expressReceiver = new ExpressReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  endpoints: "/.netlify/functions/escape-room/slack/events",
});

export const handler = serverless(expressReceiver.app);

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  receiver: expressReceiver,
});

app.command("/escape-room", async ({ ack, say }) => {
  await ack();

  await say("It works!");
});
