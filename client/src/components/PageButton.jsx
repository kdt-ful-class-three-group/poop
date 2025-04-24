function PageButton({ currentIndex, setCurrentIndex, length }) {






    return (
        <div className="flex justify-between mt-4 w-full max-w-md">
            <button
                onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
                이전
            </button>
            <button
                onClick={() =>
                    setCurrentIndex((prev) => Math.min(prev + 1, length - 1))
                }
                disabled={currentIndex === length - 1}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
                다음
            </button>





        </div>
    );
}

export default PageButton;
