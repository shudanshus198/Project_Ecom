import Head from "next/head";
import { useEffect, useState } from "react";
import Link from "next/link";
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoginPage = () => {
    const [title, setTitle] = useState('');

    useEffect(() => {
        setTitle('Eccom')
    }, [])
    return (
        <>
            <Head>
                <title>Ecom | Login</title>
            </Head>
            <div className="container h-screen flex justify-center items-center p-5 bg-black">
                <div className="container w-1/3 bg-white rounded p-5">
                    <div className="text-2xl text-center border-solid border-gray-300 border-0 border-b-2 p-2">
                       <h1>Login to Your Eccom Account</h1>
                    </div>
                    <div className="bg-facebookBlue w-2/3 my-3 p-3 mt-8 mx-auto rounded text-white flex justify-between">
                        <div className="w-20 ml-3">
                          <FontAwesomeIcon icon={faFacebook} size={'xl'}/>
                        </div>
                        <div className="flex-1">
                        <Link href='/'>
                          <a>
                            Continue with Facebook
                          </a>
                        </Link>
                        </div>
                    </div>
                    <div className="bg-googleRed p-3 w-2/3 my-3 mx-auto rounded text-white flex justify-between">
                    <div className="w-20 ml-3">
                        <FontAwesomeIcon icon={faGoogle} size={'xl'}/>
                    </div>
                        <div className="flex-1">
                            <Link href='/'>
                                <a>
                                    Continue with Google
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-githubBlack p-3 w-2/3 my-3 mx-auto rounded text-white flex justify-between">
                        <div className="w-20 ml-3">
                            <FontAwesomeIcon icon={faGithubAlt} size={'xl'}/>
                        </div>
                        <div className="flex-1">
                            <Link href='/'>
                                <a>
                                    Continue with GitHub
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="bg-white w-2/3 my-3 mx-auto flex justify-between border-gray border-2 rounded focus-within:border-blue-500">
                        <div className="w-10 ml-3 p-3">
                            <FontAwesomeIcon icon={faEnvelope} size={'md'} color={'gray'} />
                        </div>
                        <div className="flex-1 py-3 pl-3">
                            <input type="text" placeholder="Email" className="w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className="bg-white w-2/3 my-3 mx-auto flex justify-between border-gray border-2 rounded focus-within:border-blue-500">
                        <div className="w-10 ml-3 p-3">
                            <FontAwesomeIcon icon={faLock} size={'md'} color={'gray'} />
                        </div>
                        <div className="flex-1 py-3 pl-3">
                            <input type="password" placeholder="Password" className="w-full focus:outline-none" />
                        </div>
                    </div>
                    <div className="w-2/3 p-3 bg-redishPink text-white text-center mx-auto my-3 rounded">
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
            </div>
        </>
    );
}

export default LoginPage;