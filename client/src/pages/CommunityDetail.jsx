// pages/CommunityDetail.jsx

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function CommunityDetail() {
const { board_id } = useParams();
const [post, setPost] = useState(null);
const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  const fetchPost = async () => {
    try {
      const res = await fetch(`http://localhost:8080/community/post/${board_id}`);
      const data = await res.json();
      setPost(data);
    } catch (err) {
      console.error("글 불러오기 실패", err);
    } finally {
      setIsLoading(false);
    }
  };

  fetchPost();
}, [board_id]);

if (isLoading) return <div className='p-4'> 로딩 중... </div>;
if (!post) return <div className='p-4'>게시글을 찾을 수 없습니다. </div>;

// post.Date를 제대로 처리하려면, 날짜 형식 확인 후 변환
const formattedDate = post.Date ? new Date(post.Date).toLocaleDateString() : "날짜 정보 없음";

  return (
    <div className="w-full p-4">
      <h2 className="text-xl font-semibold mb-4">커뮤니티 상세</h2>

      {/* 제목 */}
      <h3 className="text-lg font-bold mb-2">{post.title}</h3>

      {/* 작성자와 날짜 */}
      <div className="flex items-center text-sm text-gray-600 border-b border-[#d9d9d9] pb-1 mb-2">
        <p className="mr-2">{post.user_account_id}</p>
        <span>{formattedDate}</span>
      </div>

      {/* 좋아요, 북마크 수 */}
      <div className="flex items-center mb-5 gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span>❤️</span>
          <p>76</p>
        </div>
        <div className="flex items-center gap-1">
          <span>📌</span>
          <p>45</p>
        </div>
      </div>

      {/* 내용 */}
      <div className="bg-[#f5f5f5] p-4 rounded-md mb-5">
        <p className="whitespace-pre-wrap">{post.content}</p>
      </div>

      {/* 추천/즐찾 버튼 */}
      <div className="flex items-center gap-4 mb-5">
        <button className="flex flex-col items-center text-sm text-gray-700">
          <span>❤️</span>
          <p>추천</p>
        </button>
        <button className="flex flex-col items-center text-sm text-gray-700">
          <span>📌</span>
          <p>즐찾</p>
        </button>
      </div>

      {/* 댓글 입력창 */}
      <div className="flex border border-[#D9D9D9]/70 rounded-md overflow-hidden mb-6">
        <input
          className="w-full outline-none p-2 text-sm bg-[#f2f2f2]"
          type="text"
          placeholder="댓글을 입력해주세요."
        />
        <button className="bg-[#686868] px-4 text-white text-sm whitespace-nowrap">
          댓글 입력
        </button>
      </div>

      {/* 댓글 목록 */}
      <div>
        <p className="text-lg mb-3">댓글</p>
        {[1, 2].map((_, idx) => (
          <div key={idx} className="bg-[#f2f2f2] p-2 mb-2 rounded-md shadow-sm">
            <div className="flex items-center border-b border-[#d9d9d9] pb-1 mb-1">
              <p className="text-sm mr-2">user_id</p>
              <span className="text-xs">2025.04.02</span>
            </div>
            <p className="text-sm">여기에 댓글 내용이 들어갑니다.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommunityDetail;
