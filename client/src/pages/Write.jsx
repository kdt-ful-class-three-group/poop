// pages/Write.jsx
import { useState } from "react";
import Input from "../components/Input";
import QuillEditor from "../components/QuilEditor";

function Write() {
  const [form, setForm] = useState({ title: "", content: "" });

  // 제목 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "title" && value.length > 64) return;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 내용 변경 핸들러
  const handleContentChange = (value) => {
    if (value.length > 1500) return;
    setForm((prev) => ({ ...prev, content: value }));
  };

  // HTML 태그 제거 함수
  function stripHtml(html) {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  }

  const rawContent = stripHtml(form.content);

  // 제출 핸들러
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // 유효성 검사
    if (!form.title.trim()) return alert("제목을 입력해주세요!");
    if (!form.content.trim()) return alert("내용을 입력해주세요!");
  
    const now = new Date().toISOString().slice(0, 19).replace("T", " ");
    
    try {
      const response = await fetch("http://localhost:8080/community/write", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: form.title,
            content: rawContent,
            user_id: 1,
            date: now,
          }),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("글이 성공적으로 등록되었습니다!");
      } else {
        alert(result.msg || "글 등록 실패");
      }
    } catch (err) {
      console.error("글 등록 오류:", err);
      alert("서버 오류가 발생했어요.");
    }
  };
  

  return (
    <div className="w-full min-h-screen flex flex-col">
      <h1 className="mt-5 font-bold">게시글 작성</h1>
      <div className="flex flex-col items-center justify-center w-full mt-7.5 mb-auto">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4 flex flex-col gap-4 w-full">
            <Input
              className="border-2 border-solid rounded-lg w-full h-10 mb-4"
              type="text"
              name="title"
              placeholder="제목"
              value={form.title}
              onChange={handleChange}
            />
            <QuillEditor value={form.content} onChange={handleContentChange} />
          </div>
          <button
            className=" w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            등록하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Write;
