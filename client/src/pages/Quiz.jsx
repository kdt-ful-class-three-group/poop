import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import QuizCard from "../components/QuizCard";
import QuizButton from "../components/QuizButton";


function Quiz() {
  const location = useLocation()

  const [data ,setData] = useState([]);
  const [num, setNum] = useState(Number(localStorage.getItem('Quiznum'))||0);

  const [category,setCategory] = useState('quiz')

  //버튼을 누를때마다 category가져오기
  useEffect(()=>{
    const selected = location.state?.category || 'quiz'
    setCategory(selected)
  },[location.state?.category])

  //로컬스토리지 - num이 변할 때마다 데이터 저장
  useEffect(()=>{
    localStorage.setItem('Quiznum',num.toString())
  },[num])

  //fetch 가져오기
  useEffect(()=>{
    fetch(`http://localhost:8080/${category}`)
    .then((res)=>res.json())
    .then((data)=>{
      setData(data);
    })

  },[category])

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
      <QuizButton nextBtn={()=>nextBtn()} prevBtn={()=>prevBtn()} data={data[num]} category={category}/>
    </div>
  );
}

export default Quiz;
