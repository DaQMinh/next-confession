'use client'
import { useSession, signIn, signOut } from "next-auth/react"

export default function IndexPage() {
  const { data: session } = useSession()

  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">

      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Beautifully designed components <br className="hidden sm:inline" />
          built with Radix UI and Tailwind CSS.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.
        </p>
      </div>
      <div className="flex gap-4">
      {   session ? (
        <>
            <button
            onClick={() => signIn()}
            >
                Logout
            </button>

        <p className="max-w-[700px] text-lg text-muted-foreground">
           Sign In as {session.user.email}
        </p>
        </>
          ) : (
            <button
            onClick={() => signOut()}
            >
                Login
            </button>
          )
        }
      </div>
    </section>
  )
}

