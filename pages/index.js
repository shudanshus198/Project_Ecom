import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/app-logo.ico" />
      </Head>
      <div className="container">
        <Link href="/login">
          <a> Login Button</a>
        </Link>
      </div>
    </>

  )
}
