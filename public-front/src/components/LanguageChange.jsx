import {useSelector,useDispatch} from 'react-redux';
import { changeLanguage } from '../features/menu/menuSlice';

const LanguageChange = () => {
    const {english} = useSelector((store)=>store.menu);
    const dispatch = useDispatch();
  return (
    <span className="language" onClick={() => dispatch(changeLanguage())}>
      <h5 className={`${!english && "active-language"} language-text`}>GEO</h5>
      <h5 className='language-text'>|</h5>
      <h5 className={`${english && "active-language"} language-text`}>ENG</h5>
    </span>
  );
}

export default LanguageChange