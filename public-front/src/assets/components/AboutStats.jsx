import { useSelector } from "react-redux";
import Loading from "./Loading";

const AboutStats = () => {
  const { english, aboutStats, aboutStatsIsLoading } = useSelector(
    (store) => store.menu
  );
  if (aboutStatsIsLoading) {
    return <Loading />;
  }
   const {id,machines,partners,cities} = aboutStats;
   return (
     <div className="about-stats">
       <div className="info">
         <h1 className="big">{machines}</h1>
         {!english ? (
           <span>
             <h4>- მდე </h4> <h2>აპარატი</h2>
           </span>
         ) : (
           <h2>Machines</h2>
         )}
         <div className="underline"></div>
       </div>
       <div className="info">
         <h1 className="big">{partners}</h1>
         {!english ? (
           <span>
             <h4>- მდე </h4> <h2>პარტნიორი</h2>
           </span>
         ) : (
           <h2>Partners</h2>
         )}
         <div className="underline"></div>
       </div>
       <div className="info">
         <h1 className="big">{cities}</h1>
         {!english ? (
           <span>
             <h2>ქალაქი</h2>
           </span>
         ) : (
           <h2>Cities</h2>
         )}
         <div className="underline"></div>
       </div>
     </div>
   );
};
export default AboutStats;
