function ToastPopup({text, isShow}){
  return(
    <div className={`${isShow ? 'block' : 'hidden'}`}>
      {text}
    </div>
  )
}

export default ToastPopup