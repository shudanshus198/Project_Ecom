import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import {getSession, getProviders, useSession } from "next-auth/react";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import LoginButton from "../components/login_Btn";
import { useEffect } from "react";
import Router from "next/router";
import Loader from "../components/Loader";
import Background from '../public/images/loginPage.svg'


const Login = ({providers}) => {
    const {data , status} = useSession();
    useEffect(() => {
        if(status === 'authenticated') {
          Router.push('/');
        }
    });
    if (status !== 'unauthenticated') {
       return (
         <Loader />
       )
    }

    return (
        <>
            <Head>
                <title>Ecom | Login</title>
            </Head>
            <div className="container w-full h-screen flex justify-center items-center p-5 bg-loginBg">
                <div className="container md:w-1/3 sm:w-full bg-white rounded-xl md:p-5 sm:p-2 mb-4">
                    <div className="xl:text-2xl text-lg text-center border-solid border-gray-300 border-0 border-b-2 p-2">
                       <h1>Login to Your Eccom Account</h1>
                    </div>
                    <LoginButton
                      provider={providers.facebook}
                      btnColor={'#166fe5'}
                    />
                    <LoginButton
                      provider={providers.google}
                      btnColor={'#c00'}
                    />
                    <LoginButton
                      provider={providers.github}
                      btnColor={'#24292f'}
                    />
                    <div className="bg-white w-4/5 md:w-2/3 my-3 mx-auto flex justify-between border-gray border-2 rounded focus-within:border-blue-500">
                        <div className="w-11 h-11 md:ml-3 ml-1 md:p-3 p-2.5">
                            <FontAwesomeIcon icon={faEnvelope} size={'lg'} color={'gray'} />
                        </div>
                        <div className="flex-1 py-3 pl-3">
                            <input type="text" placeholder="Email" className="w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className="bg-white w-4/5 md:w-2/3 my-3 mx-auto flex justify-between border-gray border-2 rounded focus-within:border-blue-500">
                        <div className="w-11 h-11 md:ml-3 ml-1 md:p-3 p-2.5">
                            <FontAwesomeIcon icon={faLock} size={'lg'} color={'gray'} />
                        </div>
                        <div className="flex-1 py-3 pl-3">
                            <input type="password" placeholder="Password" className="w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className="md:w-2/3 w-4/5 p-3 bg-redishPink text-white text-center mx-auto my-3 rounded">
                        <Link href="/">
                            <a>Log In</a>
                        </Link>
                    </div>
                    <div className="my-3 mx-auto w-2/3 text-center">
                        <span className="mr-1">or</span>
                        <Link href="/">
                           <a className="text-sky-500 hover:underline">Forgot Password</a>
                        </Link>
                    </div>
                    <div className="w-2/ p-3 mx-auto mt-5 mb-3 text-center">
                        <span className="mr-2 text-gray-400">
                            {`Don't have an account?`}
                        </span>
                        <Link href='/'>
                        <a className="text-sky-500 hover:underline">
                            Sign up
                        </a>
                        </Link>
                    </div>
                </div>
                <div className="ml-2 hidden lg:block">
                    <Background />
                </div>
            </div>
        </>
    );
}

Login.getInitialProps = async (context) => {
    console.log("initialProps", await getSession(context));
    return {
        providers: await getProviders(context),
    }
}

export default Login;