import { useEffect, useState } from "react";

import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";

function Quiz() {

  const [data ,setData] = useState([]);
  const [num, setNum] = useState(0);

  //fetch 가져오기
  useEffect(()=>{
    fetch('http://localhost:8080/quiz')
    .then((res)=>res.json())
    .then((data)=>{
      setData(data);
    })
  },[])

  //버튼 이벤트
  const prevBtn = ()=>{
    if(num>0){
      setNum(num-1);
    }
  }
  const nextBtn = ()=>{
    if(num<data.length-1){
      setNum(num+1);
    }
  }

  //정답확인


  return (
    <div className="w-full">
      <QuizCard quizData={data[num]}/>
      <QuizButton nextBtn={()=>nextBtn()} prevBtn={()=>prevBtn()} data={data[num]}/>
    </div>
  );
}

export default Quiz;
