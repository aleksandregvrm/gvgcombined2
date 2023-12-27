import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import vendingMachine1 from "../../assets/images/vending-machine-1.png";
import vendingMachine2 from "../../assets/images/vending-machine-2.png";
import vendingMachine4 from "../../assets/images/vending-machine-4.png";
import { snackImages,payImages } from "../../utils";
import { customFetch } from "../../utils";

const imagesArray = [vendingMachine1, vendingMachine2,vendingMachine4];
const carouselImages = [...snackImages];
const moneyImages = [...payImages];
const initialState = {
  isLoading: false,
  isNavbarOpen: false,
  isSearchBarOpen: false,
  aboutStats:{machines:'',partners:'',cities:'',id:''},
  aboutStatsIsLoading: false,
  isSubmenuOpen: false,
  activeImageIndex: 0,
  images: imagesArray,
  carouselImages:carouselImages,
  moneyImages:moneyImages,
  submenuCenter: 0,
  english:false,
  submenuPages: [
    { name: "vending", nameGe:'ვენდინგი', to: "products/vending" },
    { name: "coffee", nameGe: 'ყავა', to: "products/coffee" },
    { name: 'snack', nameGe: 'სნექი', to:'products/snacks-and-ingredients'}
  ],
  editingInfo: {},
};
const getAboutStats = createAsyncThunk(
  "menuSlice/fetchAboutStats",
  async () => {
    try {
      const response = await customFetch.get(
        `/about`
      );
      return { data: response.data };
    } catch (error) {
      throw error;
    }
  }
);
const menuSlice = createSlice({
  name: "firstSlice",
  initialState,
  reducers: {
    toggleNavbar: (state) => {
      return { ...state, isNavbarOpen: !state.isNavbarOpen };
    },
    toggleSearchbar: (state) => {
      return { ...state, isSearchBarOpen: !state.isSearchBarOpen };
    },
    setSubmenuOpen: (state, action) => {
      return { ...state, isSubmenuOpen: true, submenuCenter: action.payload };
    },
    hideSubmenu: (state) => {
      return { ...state, isSubmenuOpen: false };
    },
    setActiveImageIndex: (state, action) => {
      return { ...state, activeImageIndex: action.payload };
    },
    changeLanguage: (state) => {
      return {...state, english: !state.english}
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAboutStats.pending, (state) => {
      state.aboutStatsIsLoading = true;
    });
    builder.addCase(getAboutStats.fulfilled, (state, action) => {
      const {data:{aboutStats}} = action.payload;
      const {machines,partners,cities,_id:id} = aboutStats[0];
      return {
        ...state,
        aboutStatsIsLoading: false,
        aboutStats: {
          ...state.aboutStats,
          machines,
          partners,
          cities,
          id
        },
      };
    });
    builder.addCase(getAboutStats.rejected, (state) => {
     state.aboutStatsIsLoading = false;
    });
  }
});
export const {
  toggleNavbar,
  toggleSearchbar,
  setSubmenuOpen,
  hideSubmenu,
  setActiveImageIndex,
  changeLanguage
} = menuSlice.actions;
export { getAboutStats };
export default menuSlice.reducer;
