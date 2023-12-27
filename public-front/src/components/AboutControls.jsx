import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import CustomInput from "./CustomInput";
import { handleChange } from "../utils";
import Loading from "./Loading";
import { editAboutStats,setAboutStats } from "../features/ad-controls/adminSlice";

const initialState = {
  machines:'',
  partners:'',
  cities:''
};
const AboutControls = () => {
    const { aboutStats, aboutStatsIsLoading } = useSelector(
      (store) => store.menu
    );
    const [productValues, setProductValues] = useState(initialState);
    const dispatch = useDispatch();
  if(aboutStatsIsLoading){
    <section className="about-admin">
      <Loading/>
    </section>
  }
  const disabledIsTrue = aboutStats.machines !== '';
  const {id,machines,partners,cities} = aboutStats;
  const submitChanges = () => {
    dispatch(editAboutStats({machines:productValues.machines,partners:productValues.partners,cities:productValues.cities,id}))
  }
  const submitStats = () => {
     dispatch(
       setAboutStats({
         machines: productValues.machines,
         partners: productValues.partners,
         cities: productValues.cities,
       })
     );
  }
  return (
    <section className="about-admin">
      <div className="about-stats">
        <span className="stat">
          <h2>Machines:{machines}</h2>
        </span>
        <span className="stat">
          <h2>Partners:{partners}</h2>
        </span>
        <span className="stat">
          <h2>Cities:{cities}</h2>
        </span>
      </div>
      <div className="about-inputs">
        <form className="edit-products">
          <CustomInput
            labelName="Machines/მანქანები"
            name="machines"
            type="number"
            onChange={(e) => handleChange({ setProductValues, e })}
          />
          <CustomInput
            labelName="Partners/პარტნიორები"
            name="partners"
            type="number"
            onChange={(e) => handleChange({ setProductValues, e })}
          />
          <CustomInput
            labelName="Cities/ქალაქები"
            name="cities"
            type="number"
            onChange={(e) => handleChange({ setProductValues, e })}
          />
          <button className="btn about-btn" type="button" onClick={submitChanges}>Submit Changes</button>
          <button className="btn about-btn" type="button" disabled={disabledIsTrue} onClick={submitStats}>Submit Stats</button>
        </form>
      </div>
    </section>
  );
};
export default AboutControls;
