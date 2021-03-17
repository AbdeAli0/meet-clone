import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
    faQuestionCircle,
    faExclamationCircle,
    faCog 
} from "@fortawesome/free-solid-svg-icons";
import "./Header.scss";

const Header = () => {
    return(
        <div className='header'>
            <div className="logo">
                <img src='https://i.pinimg.com/564x/34/61/32/3461321eaa8ca4e69d19ff163db3e36e.jpg' />
                <span className='help-text'>Toon </span>
                <span className='help-text2'>Chat</span>
            </div>
            <div className='action-btn'>
                <FontAwesomeIcon className="icon-block" icon={faQuestionCircle} />
                <FontAwesomeIcon className="icon-block" icon={faExclamationCircle} />
                <FontAwesomeIcon className="icon-block" icon={faCog} />
            </div>
        </div>
    )
}

export default Header;