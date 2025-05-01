function Input({type, placeholder,name, autoFocus, formData, setFormData}) {

  const handleChange = (e) => {
    const { password, name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

    return(
        <div>
            <input className="bg-gray-300 h-10 w-full border-solid mb-8 p-2  " value={formData[name] || ""} autoFocus={autoFocus} onChange={handleChange} type={type} name={name}   />
        </div>
    )
}

export default Input;