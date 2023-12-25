import { NavLink } from 'react-router-dom'
import {Wrapper} from "../assets/wrappers/IntroductionWrapper";
import { useSelector } from "react-redux";
import IntroductionImages from "./IntroductionImages";
import ProductsCarousel from "./ProductsCarousel";
import AssociatedCompanies from './AssociatedCompanies';
import { blackCompanies } from '../utils';

/* introduction components which involves the big Introduction image, the dots to switch up big introduction image and products carousel the images used in the products carousel is determined in the features/menu/menuSlice.jsx(redux) folder */

const atHome = true;
const Introduction = () => {
  const { carouselImages,english } = useSelector((store) => store.menu);
  return (
    <Wrapper>
      <div className="introduction">
        <IntroductionImages />
        <div className="introduction-text">
          {!english ? (
            <p>
              Georgian Vending Group ესპანური კომპანია Azykoen-ის ოფიციალური
              წარმომადგენელია საქართველოში. (Azykoen - სავაჭრო აპარატების
              ერთ-ერთი უძლიერესი მწარმოებელი მსოფლიოში) <br /> ჩვენი მისიაა
              ყოველდღიური კომფორტის ხელმისაწვდომობის მიზნით ადგილობრივ
              ბიზნესებს, კერძო და სახელმწიფო ოფისებს, მივაწოდოთ საუკეთესო
              ხარისხის, მრავალფუნქციური, მათ ბიზნესზე და საქმისწარმოებაზე
              მორგებული სავაჭრო აპარატები. ჩვენ ვეხმარებით პარტნიორებს
              ისეთი ცოცხალი კუთხეების მოწყობაში, რომლებიც ქმნის პოზიტიურ
              კავშირებს, ამყარებს და აძლიერებს კომფორტს, ზრდის პროდუქტიულობას და
              იწვევს კმაყოფილებას <br /> ჩვენ ვამაყობთ რომ შეგვიძლია სწრაფად და
              მარტივად მივაწოდოთ საკვები, სასმელი და სხვა დაკავშირებული
              კატეგორიების პროდუქტი ნებისმიერ სექტორს, რაც ნიშნავს რომ შეგვიძლია
              მოვუაროთ როგორც მსხვილ, ისე მცირე ორგანიზაციებს.
            </p>
          ) : (
            <p>
              Georgian Vending Group is the official representative of the
              Spanish company Azykoen in Georgia. (Azykoen is a leading
              manufacturer of vending machines worldwide) Our mission is to
              provide daily comfort and accessibility to local businesses, large
              and public offices, by delivering high-quality, multifunctional
              vending machines for their business and operations. We assist
              partners in establishing vibrant communities that create positive
              relationships, build, and enhance comfort, increase product
              diversity, and contribute to the efficiency of their business and
              production. We value creating partnerships with dynamic
              organizations that focus on establishing positive connections,
              generating growth, and promoting comfort. We believe that we can
              quickly and easily deliver food, beverages, and other related
              product categories to any sector, meaning that we can serve both
              large and small organizations
            </p>
          )}
        </div>
        <ProductsCarousel images={carouselImages} atHome={atHome} />
        <AssociatedCompanies images={blackCompanies}/>
        <div className="introduction-products">
          <NavLink to='/products'>
            <button className='btn products-btn'>{english ? 'Products' : 'პროდუქტები'}</button>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Introduction;
