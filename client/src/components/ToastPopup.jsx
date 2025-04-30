function ToastPopup({text, isShow, textColor}){
  return(
    <div
      className={`${isShow ? 'block' : 'hidden'} absolute top-40 left-1/2 bg-black/70 transform -translate-x-1/2 rounded-md px-4 py-2`}
    >
      <p className={textColor}>{text}</p>
    </div>
  )
}

export default ToastPopup