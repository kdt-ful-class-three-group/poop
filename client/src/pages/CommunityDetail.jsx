import Input from "../components/Input.jsx";



function CommunityDetail() {




  const commentWrite = async ({content, user_id, board_id,user_nick})=>{
    const response = await fetch("http://localhost:8080/comment/write", {
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        user_nick:user_nick ,
        content:content ,
        user_id:user_id ,
        board_id:board_id
      })
    });
    if (!response.ok) throw new Error("댓글 작성 실패");
    return await response.json();
  }


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
        />
        <button onClick={commentWrite} className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap text-sm cursor-pointer">
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
