import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Loader = () => {
   console.log('mongo', process.env.DATABASE_URL);
    return ( 
        <div className="w-full min-h-screen flex justify-center items-center">
           <div className="flex">
              <FontAwesomeIcon icon={faSpinner} size={'xl'} className="w-10 h-10 animate-spin duration-2000 mr-3"/>
           </div>
           <h1 className=" text-lg font-semibold text-slate-500 " >Loading...</h1>
        </div>
     );
}
 
export default Loader;