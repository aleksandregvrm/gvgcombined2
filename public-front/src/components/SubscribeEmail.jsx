import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { subscribeEmail } from "../features/user/userSlice";
import { handleChange } from "../utils";
import { subscribeEvent } from "../facebook-pixel/FacebookFunctions";

const SubscribeEmail = () => {
  const {isLoading} = useSelector((store)=>store.user);
  const {english} = useSelector((store)=>store.menu);
    const [userEmail,setProductValues] = useState({email:""});
    const dispatch = useDispatch();
    const emailHandler = (e) => {
      e.preventDefault();
      subscribeEvent(userEmail.email);
      dispatch(subscribeEmail({email:userEmail.email}));
    }
  return (
    <div className="subscribe">
      <div className="subscribe-container">
        <form>
          <div className="subscribe-text">
            <input
              placeholder={!english ? "მეილი" : "Email..."}
              className="subscribe-input"
              type="email"
              required
              name="email"
              id="email"
              onChange={(e)=>handleChange({ setProductValues, e})}
            />
            <label htmlFor="email">
              <FontAwesomeIcon className="letterbox" icon={faEnvelope} />
            </label>
          </div>
          <div className="underline subscribe-underline"></div>
          <button onClick={emailHandler} type="submit" className="btn subscribe-btn" disabled={isLoading}>
            {!english ? 'გამოწერა' : 'Subscribe'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeEmail;
