import { createContext, useReducer, useContext } from "react"
import { authReducerFunction } from "../reducer/authReducerFunction"


const AuthContext = createContext()
const tokenDetails = localStorage.getItem("token") || "";
// const userDetails = JSON.parse(localStorage.getItem("user"))
const AuthProvider = ({children}) => {
const [state,dispatch] = useReducer(authReducerFunction,{
    user:"",
    encodedToken:tokenDetails,
    isLoggedIn:!!tokenDetails,
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
})

return(
   < AuthContext.Provider value={{state,dispatch}}>
     {children}
   </AuthContext.Provider>
)
}

const useAuth = () => useContext(AuthContext)

export {useAuth, AuthProvider}