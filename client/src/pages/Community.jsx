// pages/Community.jsx

import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LoginContext } from '../context/loginContext';
export default function Community() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const {isLogin} = useContext(LoginContext)
  const navigate = useNavigate();

  const postsPerPage = 6; // 한 페이지당 게시글 수


  // 게시글 더미데이터
  useEffect(() => {
   const fetchPosts = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/community/post');
      const data = await res.json();

      // console.log('가져온 게시글:', data); // 디버깅용
      setPosts(dummyPosts);

    // ✅ 총 페이지 수 계산 (최소 1페이지는 유지)
    const calculatedPages = Math.ceil(dummyPosts.length / postsPerPage);
    setTotalPages(Math.max(1, calculatedPages));
    } catch (err) {
      console.error('게시글 불러오기 실패:', err);
    }finally {
      setIsLoading(false);
    }
   };

   fetchPosts();
  }, []);

  // 글쓰기 페이지로 이동
  const goToWritePage = () => {
    navigate('/Community/Write');
  };

  //현재 페이지에 맞는 게시글 잘라내기
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const visiblePosts = posts.slice(startIndex, endIndex);

  // 페이지네이션 버튼 생성
  const renderPagination = () => {
    const maxPageButtons = 10; // 한 번에 보여줄 페이지 버튼 수
    const pageButtons = [];

    let startPage = Math.max(1, currentPage - Math.floor(maxPageButtons / 2));
    let endPage = Math.min(totalPages, startPage + maxPageButtons - 1);

    // 페이지 범위 조정
    if (endPage - startPage + 1 < maxPageButtons && startPage > 1) {
      startPage = Math.max(1, endPage - maxPageButtons + 1);
    }


    // 이전 페이지 버튼 
    if (totalPages >= 10 && currentPage > 1) {
      pageButtons.push(
        <button key="prev" onClick={() => setCurrentPage(currentPage - 1)} className="px-2 py-1 text-gray-600">
          &lt;
        </button>
      );
    }


    // 페이지 번호 버튼들
    for (let i = startPage; i <= endPage; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 mx-1 ${
            currentPage === i ? 'font-medium text-blue-600' : 'text-gray-600'
          }`}
        >
          {i}
        </button>
      );
    }

    // 다음 페이지 버튼
    if (totalPages >= 10 && currentPage < totalPages) {
      pageButtons.push(
        <button key="next" onClick={() => setCurrentPage(currentPage + 1)} className="px-2 py-1 text-gray-600">
          &gt;
        </button>
      );
    }

    return pageButtons;
  };

  // 실제 렌더링되는 부분
  return (
    <div className="w-full mx-auto bg-white">
      <div className="border-b border-gray-200">
        <div className="py-3 px-4">

          <div className="mt-3 relative">
          <h1 className="text-lg font-medium ">커뮤니티</h1>
            <div className='flex justify-end mb-2'>
              {isLogin === true && 
                <button type="button" onClick={goToWritePage} className="px-3 py-2 bg-gray-200 rounded-md text-xs">
                글쓰기
                </button>
              }
            </div>

              
            <form className="flex">
            
              <div className="relative flex-grow">
                <input
                  type="text"
                  className="w-full py-2 px-3 text-sm border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="검색"
                />
                <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  검색
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* 게시글 목록 */}
      <div className="divide-y divide-gray-200 h-90 ">
        {isLoading ? (
          <div className="flex justify-center py-6">
            <p className="text-sm">로딩 중...</p>
          </div>
        ) : visiblePosts.length > 0 ? (
          visiblePosts.map((post) => (
            <Link to={`/Community/CommunityDetail/${post.id}`} key={post.id} className="block px-4 py-2 hover:bg-gray-50">
              <div className="flex flex-col">
                <h2 className="text-base font-medium text-gray-900">{post.title}</h2>
                <div className="flex items-center text-xs text-gray-500 mt-1">
                  <span>{post.author}</span>
                  {/* <span className="mx-1">•</span> */}
                  <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                </div>   
              </div>
            </Link>
          ))
        ) : (
          <div className="py-6 text-center text-gray-500 text-sm">
            <p>게시글이 없습니다.</p>
          </div>
        )}
      </div>

      {/* 페이지네이션 */}
      {totalPages > 1 && (
        <div className="flex justify-center py-4 border-t border-gray-200">
          <nav className="inline-flex text-sm">{renderPagination()}</nav>
        </div>
      )}
    </div>
  );
}