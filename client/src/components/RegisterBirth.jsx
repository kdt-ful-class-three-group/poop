// RegisterBirth.jsx
import React from 'react';

const RegisterBirth = () => {
  const [gender, setGender] = React.useState('');
  const [birthdate, setBirthdate] = React.useState('');

  return (
    <div>
      {/* 1. 성별 */}
      <div className="mb-4">
        <label className="block font-bold mb-2 mt-3">성별</label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="gender"
              value="male"
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
    </div>
  );
};

export default RegisterBirth;