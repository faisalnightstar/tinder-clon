import { IoIosLogOut } from "react-icons/io";
import {useCookies} from "react-cookie";

const ChatHeader = ({user}) => {
    const [ cookies, setCookie, removeCookie ] = useCookies(['user'])
    const UserId = cookies.UserId
    const AuthToken = cookies.AuthToken

    const logout = () => {
        removeCookie('UserId',UserId )
        removeCookie('AuthToken', AuthToken)
        window.location.reload()
    }

    return (
        <div className="chat-container-header">
            <div className="profile">
                <div className="img-container">
                    <img src={user.url} alt={"photo of " + user.first_name}/>
                </div>
                <h3>{user.first_name}</h3>
            </div>
            <i className="log-out-icon" onClick={logout}> <IoIosLogOut/> logout</i>
        </div>
    )
}
export default ChatHeader;