// matching done
import colorLogo from '../images/pair-up.png';
import  whiteLogo from '../images/pair-up-bw.png';

const Nav = ({ authToken, minimal, setShowModal, showModal, setIsSignUp }) => {
    const handleClick = () => {
        setShowModal(true);
        setIsSignUp(false);
    };

  return (
    <nav className="nav" >
      <div className="logo-container">
          <img className="logo" src={minimal? whiteLogo : colorLogo } alt="logo" />
      </div>

        {!authToken && !minimal && <button
            className="nav-button"
            type="submit"
            onClick={handleClick}
            disabled={showModal}
        >
            Log in
        </button>}




  </nav>
  )}
export default Nav;