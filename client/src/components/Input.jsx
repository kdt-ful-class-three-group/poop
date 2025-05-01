function Input({type, placeholder,name, autoFocus, formData, setFormData}) {

    return(
        <div>
            <input className="bg-gray-300 h-10 w-full border-solid mb-8 p-2  " value={formData} autoFocus={autoFocus}  type={type} name={name}   />
        </div>
    )
}

export default Input;