import { useState } from "react";
const forbiddenPattern = /[`<>\/]|script|onerror|onload|alert|<|>|\\/gi;
function Input({ className, type, placeholder, name, value, onChange }) {
  const [inputPattern, setInputPattern] = useState(true);
  const inputForbiddenPattern = (e) => {
    let inputValue = e.target.value;
    const hasInputForbiddenPattern = forbiddenPattern.test(inputValue);
    if (hasInputForbiddenPattern) {
      setInputPattern(false);
      inputValue = inputValue.replace(forbiddenPattern, "");
      // return;
    } else {
      setInputPattern(true);
    }
    onChange({ target: { name, value: inputValue } });
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
