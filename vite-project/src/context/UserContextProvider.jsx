
import { useState } from "react"
import UserContext from "./UserContext"
const UserContextProvider  = ({elements})=>{
    const [user,setUser]   = useState(null);
   return(
    <UserContext.Provider value = {{user,setUser}}>
  {elements}

    </UserContext.Provider>
   )
}
export default UserContextProvider;