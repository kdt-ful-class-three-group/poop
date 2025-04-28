function ToastPopup({text, isShow, textColor}){
  return(
    <div className={`${isShow ? 'block' : 'hidden'}` }>
      <p className={textColor}>{text}</p>
    </div>
  )
}

export default ToastPopup