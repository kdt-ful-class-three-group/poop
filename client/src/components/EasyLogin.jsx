function EasyLogin(){
  return(
    <div className="flex flex-col gap-2">
      <button 
        className="bg-gray-300 px-4 rounded-md py-2 cursor-pointer hover:bg-gray-400">
          카카오톡으로 계속하기
      </button>
      <button
        className="bg-gray-300 px-4 rounded-md py-2 cursor-pointer hover:bg-gray-400">
          네이버로 계속하기
      </button>
      <button
        className="bg-gray-300 px-4 rounded-md py-2 cursor-pointer hover:bg-gray-400">
          구글로 계속하기
      </button>
    </div>
  )
}

export default EasyLogin;