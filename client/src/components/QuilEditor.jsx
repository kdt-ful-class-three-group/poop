import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// Quill 툴바 구성
const modules = {
    toolbar: [
        [{ header: [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['link', 'image'],
        ['clean'],
    ],
};

// 글꼴
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike',
    'list', 'bullet',
    'link', 'image',
];

const QuillEditor = ({ value, onChange }) => {
    return (
        <div className="h-[50vh] max-h-125 min-h-50 mb-8">
            <ReactQuill
                theme="snow"
                value={value}
                onChange={onChange}
                modules={modules}
                formats={formats}
                className="h-full"
                placeholder="내용을 입력하세요..."
            />
        </div>
    );
};




export default QuillEditor;