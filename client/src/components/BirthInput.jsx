import React from 'react';

const BirthDateInput = ({ value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block font-bold mb-2">생년월일</label>
      <input
        type="text"
        name="birthdate"
        placeholder="예: 19990101"
        maxLength="8"
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded bg-gray-200"
      />
    </div>
  );
};

export default BirthDateInput;
