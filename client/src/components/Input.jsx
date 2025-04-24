function Input({type, placeholder,name}) {

    return(
        <div>
            <input className="bg-gray-300 h-10 w-full border-solid mb-8 p-2  "  autoFocus type={type} name={name} required  />
        </div>
    )
}

export default Input;