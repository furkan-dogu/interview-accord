import Ouestion from "./Question";
import questions from "../helper/data"

const InterviewAccord = () => {
  return (
    <div className="row">
      {questions.map((questions) =>(
        <Ouestion questions={questions} />
      ))}
    </div>
  );
};

export default InterviewAccord;
