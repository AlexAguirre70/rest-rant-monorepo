import { createContext, useEffect, useState } from "react";


export const CurrentUser = createContext()

function CurrentUserProvider({ children }){
    useEffect(()=>{
        const getLoggedInUser = async ()=>{
            let response= await fetch('http://localhost:5000/authentication/profile', {
                credentials:'include'
            })

            let user = response.json()
            setCurrentUser(user)
        }
        getLoggedInUser() 
    },[])
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <CurrentUser.Provider value={{ currentUser, setCurrentUser }}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider