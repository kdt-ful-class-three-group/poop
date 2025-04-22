import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";

function Quiz() {


  return (
    <div className="max-w-[450px] m-auto w-full flex flex-col gap-10">
      <QuizCard questTion={'문제보임'}/>
      <QuizButton />
    </div>
  );
}

export default Quiz;