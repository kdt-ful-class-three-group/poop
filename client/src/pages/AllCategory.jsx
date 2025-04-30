import { useEffect, useState } from "react";

import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";

function AllCategory() {

  const [data ,setData] = useState([]);
  const [num, setNum] = useState(Number(localStorage.getItem('Quiznum'))||0);

  //로컬스토리지 - num이 변할 때마다 데이터 저장
  useEffect(()=>{
    localStorage.setItem('Quiznum',num.toString())
  },[num])

  //fetch 가져오기
  useEffect(()=>{
    fetch('http://localhost:8081/quiz')
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

export default AllCategory;
