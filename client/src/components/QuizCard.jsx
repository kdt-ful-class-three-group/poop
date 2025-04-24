function QuizCard({quizData}) {
  return(
    <div className="shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px]  mb-[30px] p-4" key={quizData.quiz_id}>
      <p>{quizData.question}</p>
    </div>
  )
}

export default QuizCard;