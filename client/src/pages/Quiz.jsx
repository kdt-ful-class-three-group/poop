function Quiz() {
  return (
    <div className="w-[calc(100%-80px)]">
      <div className="shadow-[0px_0px_4px_rgba(0,0,0,0.25)] rounded-[6px]">
        <p>문제</p>
      </div>
      <div className="border-[1px] flex border-[#D9D9D9]/70">
        <input
          className="w-full"
          type="text"
          placeholder="정답을 입력해주세요."
        />
        <button className="bg-[#8E5E43] border-[#8E5E43] p-2 rounded-[0px_3px_3px_0px] text-white whitespace-nowrap">
          확인
        </button>
      </div>
      <div className="">
        <button>정답확인</button>
      </div>
      <div className="">
        <button>다음 문제</button>
      </div>
    </div>
  );
}

export default Quiz;
