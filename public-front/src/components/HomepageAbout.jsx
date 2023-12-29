import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/wrappers/HomeAboutWrapper";
import { useDispatch, useSelector } from "react-redux";
import AboutPic from "../assets/images/aboutpic.png";
import { closeAboutBackgroundIsActive } from "../features/menu/menuSlice";

const HomepageAbout = () => {
  const {aboutBackgroundIsActive,english} = useSelector((store)=>store.menu);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div
        className={aboutBackgroundIsActive ? "background active-background" : "background"}
      >
        <FaTimes
          className="close-button"
          onClick={() => {
            dispatch(closeAboutBackgroundIsActive());
          }}
        />
        {/* <div className="image-container">
          <img srcSet={AboutPic} alt="" />
        </div> */}
        <div className="text-container">
          {!english ? (
            <p>
              Georgian Vending Group ესპანური კომპანია Azykoen-ის ოფიციალური
              წარმომადგენელია საქართველოში. (Azykoen - სავაჭრო აპარატების
              ერთ-ერთი უძლიერესი მწარმოებელი მსოფლიოში) ჩვენი მისიაა ყოველდღიური
              კომფორტის ხელმისაწვდომობის მიზნით ადგილობრივ ბიზნესებს, კერძო და
              სახელმწიფო ოფისებს, მივაწოდოთ საუკეთესო ხარისხის, მრავალფუნქციური,
              მათ ბიზნესზე და საქმისწარმოებაზე მორგებული სავაჭრო აპარატები. ჩვენ
              ვეხმარებით პარტნიორებს ისეთი ცოცხალი კუთხეების მოწყობაში, რომლებიც
              ქმნის პოზიტიურ კავშირებს, ამყარებს და აძლიერებს კომფორტს, ზრდის
              პროდუქტიულობას და იწვევს კმაყოფილებას ჩვენ ვამაყობთ რომ შეგვიძლია
              სწრაფად და მარტივად მივაწოდოთ საკვები, სასმელი და სხვა
              დაკავშირებული კატეგორიების პროდუქტი ნებისმიერ სექტორს, რაც ნიშნავს
              რომ შეგვიძლია მოვუაროთ როგორც მსხვილ, ისე მცირე ორგანიზაციებს.
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
      </div>
    </Wrapper>
  );
};

export default HomepageAbout;
