import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { TypeORMLegacyAdapter } from "@next-auth/typeorm-legacy-adapter";
import { executeQuery } from "@/app/lib/db";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
  ],
  secret: process.env.SECRET,
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
