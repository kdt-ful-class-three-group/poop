import QuilEditor from "../components/QuilEditor.jsx";

function Write() {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <h1 className="mt-5 font-bold">게시글 작성</h1>

            <div className="flex flex-col items-center justify-center w-full mt-7.5 mb-auto">
                <form className="w-full">
                    <div className="mb-4 flex flex-col gap-4 w-full">
                        <input
                            className="border-2 border-solid rounded-lg w-full h-10 mb-4"
                            type="text"
                            id="title"
                            name="title"
                            required
                            placeholder="제목"
                        />
                        <QuilEditor />
                    </div>
                    <button
                        className="mt-10 w-full bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
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