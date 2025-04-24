function PageButton({ setCurrentIndex, currentIndex, length, prevLabel = "이전", nextLabel = "다음", onNext, onPrev  }) {


    return (
        <div className="flex justify-between mt-4 w-full max-w-md">
            <button
                onClick={() => {setCurrentIndex((prev) => Math.max(prev - 1, 0))
                    if(onPrev) onPrev()
            }}
                disabled={currentIndex === 0}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"

            >
                {prevLabel}
            </button>
            <button
                onClick={() =>{
                    setCurrentIndex((prev) => Math.min(prev + 1, length - 1));
                    if(onNext) onNext()
                }}
                disabled={currentIndex === length - 1}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"


            >
                {nextLabel}
            </button>





        </div>
    );
}

export default PageButton;
