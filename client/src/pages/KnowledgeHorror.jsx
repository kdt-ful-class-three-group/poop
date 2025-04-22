<<<<<<< HEAD
import React from "react";
import { useLocation } from "react-router-dom";
import Menu from "../commonComponents/Menu";

function KnowledgeHorror() {
  const location = useLocation();
  const category = location.state?.category || "없음"; // 기본값 설정

  return (
    <div>
      <Menu />
      <h1>선택된 카테고리: {category}</h1>
    </div>
  );
}

export default KnowledgeHorror;
=======
import React from "react";
import { useLocation } from "react-router-dom";

function KnowledgeHorror() {
  const location = useLocation();
  const category = location.state?.category || "없음"; // 기본값 설정

  return (
    <div>
      <h1>선택된 카테고리: {category}</h1>
    </div>
  );
}

export default KnowledgeHorror;
>>>>>>> 779b470039e93bb92dc5ac87cb8386084a5c7e65
