import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";


const Header=()=>{

  
        const { loginWithRedirect, logout,isAuthenticated,user} = useAuth0();
        
      
    return(
        <div className="bg-slate-100">
            <div className="w-36 h-6 cursor-pointer">
           <img src="https://i.pinimg.com/originals/67/21/6a/67216aed87816a4cae60df0e6c1e02d3.gif"/></div>
        <div className="text-center font-serif text-xl m-4">
            <h2 className="font-extrabold" >COLLAGE MANIA</h2>
        </div>
        <div className=" flex justify-end">
            
            <ul className="inline-flex space-x-5 p-3 m-1 cursor-pointer">
                <li>HOME</li>
                <li className="px-3 " onClick={""}> ABOUT</li>
                <li>Contact</li>
                <li>
                    {
                        isAuthenticated && <p>
                            {user.name}
                        </p>
                    }
                </li>
                {
                    isAuthenticated ?  <li> <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button></li> 
               :
                <li ><button className=""  onClick={() => loginWithRedirect()}>Log In</button></li>
                }
              
              

            </ul>
            
        </div>
        </div>
    );
}

export default Header;