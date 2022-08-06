import Head from "next/head";
import Navbar from "../components/Navbar";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
import Loader from "../components/Loader";

export default function Home() {
  const {data , status} = useSession();

  useEffect(() => {
    if (status === 'unauthenticated') {
      Router.push('/login');
    }
  }, [status])

  if (status !== 'authenticated') {
    return (
      <Loader /> 
    )
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/app-logo.ico" />
      </Head>
      <div className="container">
        <Navbar user={data?.user} isLoggedIn={status} />
      </div>
    </>
  )
}


