import Input from "../components/Input.jsx";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../context/loginContext";
import Button from "../components/Button";
function CommunityDetail() {
  const navigate = useNavigate();
  const [user_nick, setUserNick] = useState(null);
  const [user_pk, setUserPk] = useState(null);
  const [content, setContent] = useState("");
  // params
  const params = useParams();
  //데이터
  const [data, setData] = useState({});
  //날짜
  const [day, setDay] = useState("");
  //로그인 상태
  const { isLogin } = useContext(LoginContext);
  //로그인 > 닉네임 가져오기
  const [nick, setNick] = useState(sessionStorage.getItem("user_nick"), "");
  //동일한지
  const [isSame, setIsSame] = useState(false);

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("user_id");
    const storedUserNick = sessionStorage.getItem("user_nick");
    const id = sessionStorage.getItem("id");

    if (!storedUserId || !storedUserNick) {
      alert("로그인 후 이용해주세요.");
      navigate("/login");
    } else {
      setUserNick(storedUserNick);
      setUserPk(id);
      console.log("세션 유저 pk", id);
      console.log("세션 유저 닉네임", storedUserNick);
    }
  }, []);

  const commentWrite = async () => {
    if (!content || content.trim() === "") {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    const response = await fetch("http://localhost:8080/comment/write", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        content: content,
        user_id: user_pk,
        recommend_amount: 0,
        board_id: 3,
      }),
    });
    if (!response.ok) throw new Error("댓글 작성 실패");
    await response.json();

    alert("댓글 작성 성공");
    setContent("");
  };

  useEffect(() => {
    fetch(`http://localhost:8080/community/post/${params.board_id}`)
      .then((response) => response.json())
      .then((i) => {
        setData(i[0]);
      });
  }, [params]);

  useEffect(() => {
    setDay((data.date || "").split("T")[0].replace(/-/g, "."));
    console.log(data);
    console.log("로그인 nick", nick);
    console.log("작성자 nick", data.nickname);
    setIsSame(nick === data.nickname);
    // setData(location.state)
  }, [data, isLogin]);

  //삭제 함수
  const deleteBtn = async (e) => {
    e.preventDefault();

    console.log("삭제 요청", data.board_id);

    //fetch
    const response = await fetch(
      `http://localhost:8080/community/delete/${data.board_id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      // 삭제 후 목록으로 이동
      navigate("/community");
    } else {
      alert("삭제 실패했습니다");
    }
    // const result = await response.json()
  };

  return (
    <div className="w-full">
      <div>
        <h2 className="text-xl">커뮤니티 상세</h2>
      </div>
      <div className="mt-6 mb-1">
        <h4 className="text-xl">커뮤 제목</h4>
      </div>
      <div className="flex items-center border-b border-[#d9d9d9] pb-1 mb-1">
        <p className="text-sm mr-2">닉네임</p>
        <span className="text-xs">2025.04.02</span>
      </div>
      <div className="flex items-center mb-5">
        <div className="mr-3">
          <img src="" alt="" />
          <p className="text-sm">76</p>
        </div>
        <div>
          <img src="" alt="" />
          <p className="text-sm">76</p>
        </div>
      </div>
      <div>
        <p className="text-base">커뮤내용</p>
      </div>
      <div className="flex items-center mt-3 mb-3">
        <button className="text-sm">
          <img src="" alt="" />
          <p>추천</p>
        </button>
        <button className="text-sm">
          <img src="" alt="" />
          <p>즐찾</p>
        </button>
      </div>

      {/*댓글영역*/}

      <div className="border-[1px] flex border-[#D9D9D9]/70 mb-3">
        <Input
          className="w-full outline-none p-2 text-sm"
          type="text"
          placeholder="댓글을 입력해주세요."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          onClick={commentWrite}
          className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap text-sm cursor-pointer"
        >
          확인
        </button>
      </div>
      <div>
        <p className="text-lg">댓글</p>

        <div className="flex items-center border-b border-[#d9d9d9] pb-1 mb-1">
          <p className="text-sm mr-2">닉네임</p>
          <span className="text-xs">2025.04.02</span>
        </div>
      </div>
    </div>
  );
}

export default CommunityDetail;
