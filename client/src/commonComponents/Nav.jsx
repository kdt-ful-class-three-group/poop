import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [animationState, setAnimationState] = useState('closed');
  const navigate = useNavigate();
  
  // 메뉴 열기 함수
  const openMenu = () => {
    setIsMenuOpen(true);
    setAnimationState('opening');
    
    // 애니메이션 완료 후 상태 업데이트
    setTimeout(() => {
      setAnimationState('open');
    }, 300);
  };
  
  // 메뉴 닫기 함수 - 즉시 닫히도록 수정
  const closeMenu = () => {
    setIsMenuOpen(false);
    setAnimationState('closed');
  };

  // 페이지 이동 함수
  const navigateTo = (path) => {
    closeMenu();
    navigate(path);
  };
  
  // 로그인 또는 마이페이지 이동
  const handleLoginClick = () => {
    if (isLoggedIn) {
      navigateTo('/mypage');
    } else {
      navigateTo('/login');
    }
  };

  // 메뉴 아이템 정의 - 퀴즈 항목 제거
  const menuItems = [
    { id: 1, name: '유머', position: 'left-8 bottom-2', onClick: () => navigateTo('/Quiz'), icon: "🤣" },
    { id: 2, name: '커뮤니티', position: 'left-44 bottom-25', onClick: () => navigateTo('/community'), icon: "💬" },
    { id: 3, name: '메뉴 접기', position: 'right-43 bottom-2', onClick: closeMenu, icon: "🚪" },
    { id: 4, name: isLoggedIn ? '마이페이지' : '로그인', position: 'right-8 bottom-2', onClick: handleLoginClick, icon: "👤" },
  ];

  return (
    <div className="relative">
      {/* 홈버튼 및 방사형 메뉴 */}
      <div className="fixed bottom-0 left-0 w-full">
        {/* 방사형 메뉴 */}
        {isMenuOpen && (
          <div 
            className={`absolute bottom-0 left-0 right-0 h-48 bg-gray-200 rounded-t-full 
                      transition-all duration-300 ease-in-out origin-bottom-left
                      ${animationState === 'opening' ? 'scale-x-100' : ''}
                      ${animationState === 'open' ? 'scale-x-100' : ''}`}
            style={{ transformOrigin: 'bottom left' }}
          >
            <div className="relative w-full h-full">
              {menuItems.map((item) => (
                <div 
                  key={item.id} 
                  className={`absolute ${item.position} flex flex-col items-center cursor-pointer
                            transition-opacity duration-300
                            ${animationState === 'open' ? 'opacity-100' : 'opacity-0'}
                            transition-delay-100`}
                  onClick={item.onClick}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full text-white shadow-md">
                    {item.icon || item.id}
                  </div>
                  <div className="mt-1 text-xs font-medium">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* 홈버튼 */}
        {!isMenuOpen && (
          <div className="flex justify-center pb-4 pt-2">
            <button 
              onClick={openMenu}
              className="flex items-center justify-center w-16 h-16 bg-gray-300 rounded-full focus:outline-none shadow-lg hover:bg-gray-500 transition-colors"
            >
              <span className="text-2xl">🏠</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Nav;