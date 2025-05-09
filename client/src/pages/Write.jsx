import { useLocation, useParams } from "react-router-dom";
import QuilEditor from "../components/QuilEditor.jsx";
import { useEffect, useState } from "react";

function Write() {
    //링크에 숫자가 있으면
    const params = useParams()
    const [page, setPage] = useState(params.board_id || null)
    //입력될 내용
    const location = useLocation()
    const [data,setData]= useState(location.state || {})


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
                            value={params ? data.title : '제목'}
                        />
                        <QuilEditor value={params ? data.content : null}/>
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