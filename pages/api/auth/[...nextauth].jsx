import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter";
import { executeQuery } from "@/app/lib/db";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: "b5dc57e7b744e37a18b4",
      clientSecret: "bb69bbcf507310c8f8dbddc0cbbc52208f1279e0",
    }),
  ],
  secret: "ZWebSecretNumber1223334444555554444333221@#@#^^",
  adapter: TypeORMLegacyAdapter({
    type: "mysql",
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    synchronize: true,
  }),
};
export default NextAuth(authOptions);
