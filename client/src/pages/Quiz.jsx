import QuizCard from "../components/QuizCard";

function Quiz() {


  return (
    <div>
      <QuizCard />
      <div>
        <div>
          <input placeholder="정답 작성하기"></input>
          <button>확인</button>
        </div>
        <p>다시 입력해주세요</p>
      </div>
      <div>
        <button>정답보기</button>
      </div>
      <div>
        <button>다음 문제로 넘어가기</button>
      </div>
    </div>
  );
}

export default Quiz;