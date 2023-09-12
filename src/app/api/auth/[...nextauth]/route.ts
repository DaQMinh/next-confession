import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/lib/prisma"
import { env } from "process"

const options : AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: env.GOOGLE_CLIENT_ID as string,
      clientSecret: env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: { 
    strategy : "jwt"
   },
  callbacks: {
    async jwt({token, user}) {
      const dbUser = await prisma.user.findFirst({
        where : {
          email : token.email
        },
      })
      if (!dbUser){
        token.id = user!.id
        return token
      }
      return {
        id : dbUser.id,
        name : dbUser.name,
        email : dbUser.email,
        picture : dbUser.image,
        role : dbUser.role,
      }
    },
    async session({token, session}) {
      if(token) {
        session.user.email = token.email
        session.user.name = token.name
        session.user.image = token.picture
        session.user.role = token.role
        session.user.id = token.id
      }
      return session
    }
  }
}
const Handler = NextAuth(options)
export { Handler as POST , Handler as GET}