import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faGithubAlt,
    faGoogle,
    faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {signIn} from "next-auth/react";

export default function LoginButton ({ provider, btnColor }) {
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
            className=" cursor-pointer w-4/5 md:w-2/3 my-3 mx-auto rounded text-white flex md:justify-between justify-around"
            style={{ backgroundColor: btnColor }}
            onClick={() => signIn(provider.id)}
        >
            <div className=" w-11 h-11 ml-1 p-2.5 md:p-3 md:ml-3 ">
                <FontAwesomeIcon icon={icon(provider.name)} size={'lg'} />
            </div>
            <div className="flex-1 py-3 pl-3">
                {` Continue with ${provider.name}`}
            </div>
        </div>

    );
}
