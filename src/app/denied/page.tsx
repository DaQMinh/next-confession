import Link from "next/link"

export default function Denied() {
    return (
        <section className="flex flex-col gap-5 items-center">

        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Access Denied
        </h2>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
            You are logged in, but you do not have the required access level to view this page.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
            Get Admin Role <Link href="https://www.youtube.com/watch?v=yPYZpwSpKmA" className="underline text-blue-500">here</Link>
        </p>
        </section>
    )
}