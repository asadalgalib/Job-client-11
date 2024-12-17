import { useContext } from "react"
import AuthContext from "../Context/AuthContext"

const useAuth = () => {
    const contex = useContext(AuthContext);
    return contex
}

export default useAuth;