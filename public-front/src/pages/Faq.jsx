import Wrapper from '../assets/wrappers/FaqWrapper';
import { useSelector } from "react-redux";
import { SingleQuestion } from '../components';
import { questionsGe,questionsEng } from '../utils';

const Faq = () => {
  const { english } = useSelector((store)=>store.menu);
  return (
    <Wrapper>
      <section className="questions-section">
        <div className="questions-header">
          <h2>{english ? 'Frequently asked questions' : 'ხშირად დასმული კითხვები'}</h2>
        </div>
        <div className="questions">
          {english
            ? questionsEng.map((question) => {
                return (
                  <SingleQuestion
                    key={question.id}
                    {...question}
                  ></SingleQuestion>
                );
              })
            : questionsGe.map((question) => {
                return (
                  <SingleQuestion
                    key={question.id}
                    {...question}
                  ></SingleQuestion>
                );
              })}
        </div>
      </section>
    </Wrapper>
  );
}

export default Faq