import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from 'next/link';
import {signIn} from "next-auth/react";

const LoginButton = ({ provider, btnColor }) => {
    const icon = (name) => {
        if (name === 'Google') {
            return faGoogle
        } else if (name === 'Facebook') {
            return faFacebook
        } else {
            return faGithubAlt
        }
    }
    return (
        <div
            className=" cursor-pointer w-4/5 md:w-2/3 my-3 md:p-3 p-2.5 mt-4 mx-auto rounded text-white flex md:justify-between justify-around"
            style={{ backgroundColor: btnColor }}
            onClick={() => signIn(provider.id)}
        >
            <div className="md:w-20 ml-1 md:ml-3">
                <FontAwesomeIcon icon={icon(provider.name)} size={'xl'} />
            </div>
            <div className="md:flex-1">
                {` Continue with ${provider.name}`}
            </div>
        </div>

    );
}

export default LoginButton;