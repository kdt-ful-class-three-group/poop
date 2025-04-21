function Menu() {

  const quiz = () => {
    console.log('quiz');
  }
  
  const common_sense = () => {
    console.log('common_sense');
  }

  const horror = () => {
    console.log('horror');
  }

  return (
    <div className="border-1 flex justify-around">
      <button className="" onClick={() => quiz()}>퀴즈</button>
      <button className="" onClick={() => common_sense()}>상식</button>
      <button className="" onClick={() => horror()}>괴담</button>
    </div>
  )
}

export default Menu;