import { betterAuth } from "better-auth";
import { MongoClient, type Db } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.AUTH_DB_URI!);

let db: Db | undefined;

async function getDB() {
  if (!db) {
    await client.connect();
    db = client.db("better-auth-bd");
  }
  return db;
}

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(await getDB(), {
    client,
  }),
});
