import { useEffect } from "react";
import { Outlet} from "react-router-dom";
import { Navbar,Footer,Loading,LanguageChange } from "../components";
import { useDispatch,useSelector } from "react-redux";
import { showMe } from "../features/user/userSlice";

const HomeLayout = () => {
  const {isLoading} = useSelector((store)=>store.user);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(showMe());
    }, []);
    if(isLoading){
      <>
        <Navbar />
        <section className="section-center">
          <Loading/>
        </section>
        <Footer />
      </>;
    }
  return (
    <>
      <Navbar />
      <section className="section-center">
        <LanguageChange/>
        <Outlet />
       </section>
      <Footer/>
    </>
  );
};

export default HomeLayout;
