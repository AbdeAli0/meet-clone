import {useHistory} from "react-router-dom";
import shortid from "shortid";
import Header from "../UI/Header/Header";
import "./HomePage.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";

const HomePage = () => {
  const history = useHistory();
  const startCall = ()=> {
      //generate a unique id
      const uid = shortid.generate();
      //redirect to the call page
      history.push(`/${uid}#init`);
  } 

    return(
        <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>
            <div className="action-btn">
              <button className="btn green">
                <FontAwesomeIcon className="icon-block" onClick={startCall} icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input placeholder="Enter a code or link" />
                </div>
                <button className="btn no-bg">Join</button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="">Learn more</a> about Toon Chat
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img src="https://sm.mashable.com/t/mashable_in/news/g/google-to-/google-to-finally-add-a-zoom-style-gallery-view-but-itll-cos_hhf9.960.jpg" />
          </div>
        </div>
      </div>
    </div>
    )
}

export default HomePage;