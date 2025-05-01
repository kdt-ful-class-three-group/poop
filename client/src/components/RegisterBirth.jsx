// RegisterBirth.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterBirth = () => {
  const navigate = useNavigate();
  const [gender, setGender] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');

  // 다음 버튼



  return (

    <div className="m-3 w-full ">
      <button  
      onClick={hadlePrev}
      className="mb-4 px-4 py-2 bg-gray-300 rounded"
      >
      이전
      </button>
    
      {/* 1. 성별 */}
      <div className="mb-4">
        <label className="block font-bold mb-2 mt-3">성별</label>
        <div className="flex gap-4">
          <label className="flex items-center">


            <input 
            type="radio" 
            name="gender" 
            value="male" 
            checked = {gender === 'male'}
            onClick={(e) => setGender(e.target.value)}
            className="mr-2" 
            />
            남자
          </label>


          <label className="flex items-center">
            <input 
            type="radio" 
            name="gender" 
            value="female" 
            className="mr-2"
            checked = {gender === 'female'}
            onClick={(e) => setGender(e.target.value)}
            />
            여자
          </label>
        </div>
      </div>

      {/* 2. 생년월일 */}
      <div className="mb-4">
        <label className="block font-bold mb-2">생년월일</label>
        <input
          type="text"
          name="birthdate"
          placeholder="예: 19990101"
          maxLength="8"
          className="w-full p-2 border rounded bg-gray-200"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
        />
      </div>

      {/* 3. 다음 버튼 */}
      <div>
        <button
        onClick={handeleNext}
        disabled = {!gender || !birthdate}
        className={`w-full py-2 rounded ${gender ? 'bg-yellow-900 text-white' : 'bg-gray-500 cursor-not-allowed'}`}
        >
      
        다음
        </button>


      </div>
    </div>
  );
};

export default RegisterBirth;
