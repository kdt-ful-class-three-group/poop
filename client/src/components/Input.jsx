function Input({ className, type, placeholder, name, value, onChange }) {
  return (
    <div>
      <input
        className={className}
        autoFocus
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

export default Input;
