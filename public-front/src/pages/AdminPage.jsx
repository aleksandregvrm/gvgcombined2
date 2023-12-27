import { useEffect } from "react"
import Wrapper from "../assets/wrappers/AdminPageWrapper"
import {AllProductsAd,FilterProductsAd,ProductEditing,GetAllEmails,DeleteEmail,AboutControls} from "../components"
import { useSelector, useDispatch } from "react-redux"
import { fetchProductsAdmin } from "../features/ad-controls/adminSlice";
import { getAboutStats } from "../features/menu/menuSlice";
const AdminPage = () => {
  const {search,productsType,page} = useSelector((store)=>store.admin);
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(fetchProductsAdmin());
     dispatch(getAboutStats());
  },[search,productsType,page])
  return (
    <Wrapper>
    <section className="all-products-section">
      <AllProductsAd/>
      <FilterProductsAd/>
      <ProductEditing/>
      <GetAllEmails/>
      <DeleteEmail/>
      <AboutControls/>
    </section>
    </Wrapper>
  )
}

export default AdminPage