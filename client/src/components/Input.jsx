import { useState } from "react";
const forbiddenPattern = /[`<>\/]|script|onerror|onload|alert|<|>|\\/gi; //* 정규식 패턴
function Input({ className, type, placeholder, name, value, onChange }) {
  const [inputPattern, setInputPattern] = useState(true);
  const inputForbiddenPattern = (e) => {
    let inputValue = e.target.value;
    const hasInputForbiddenPattern = forbiddenPattern.test(inputValue);
    if (hasInputForbiddenPattern) {
      setInputPattern(false);
      inputValue = inputValue.replace(forbiddenPattern, ""); //* 정규식 패턴 입력 시 value값을 지워줌
      // return;
    } else {
      setInputPattern(true);
    }
    onChange({ target: { name, value: inputValue } }); //* input에 name값과 value값을 넣어줌
  };
  return (
    <div>
      <input
        className={className}
        autoFocus
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={inputForbiddenPattern}
        required
      />
    </div>
  );
}

export default Input;
