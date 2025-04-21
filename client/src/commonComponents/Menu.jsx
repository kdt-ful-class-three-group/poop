function Menu() {
  return (
    <div>
      <button onClick={() => console.log('quiz')}>퀴즈</button>
      <button onClick={() => console.log('common_sense')}>상식</button>
      <button onClick={() => console.log('horror')}>괴담</button>
    </div>
  )
}

export default Menu;