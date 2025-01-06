//matching done
import Nav from '../components/Nav'
import AuthModal from "../components/AuthModal"
import {useState} from 'react'
import {useCookies} from "react-cookie"

const Home = () => {

    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const authToken = cookies.AuthToken



    const handleClick = () => {
        if (authToken) {
            removeCookie('UserId', cookies.UserId)
            removeCookie('AuthToken', cookies.AuthToken)
            window.location.reload()
            return
        }
        setShowModal(true)
        setIsSignUp(true)
    }

  return (
      <div className="overlay">
          <Nav
              authToken={authToken}
              minimal={false}
              setShowModal={setShowModal}
              showModal={showModal}
              setIsSignUp={setIsSignUp}
          />

      <div className="home">
          <div className="title-container">
              <h1 className="primary-title">PairUp<span className="trademark">™</span></h1>
              <p className="tag-line">Creating Bonds That Last.</p>
          </div>
          <button className="primary-button" onClick={handleClick}>
          {/*  if authToken is true it display SignOut  */}
              {authToken ? 'Signout' : 'Create Account'}
          </button>

          {showModal && (
              <AuthModal setShowModal={setShowModal} isSignUp={isSignUp}/>
          )}

      </div>
      </div>
  )
}

export default Home