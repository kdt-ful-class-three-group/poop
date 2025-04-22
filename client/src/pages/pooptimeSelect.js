async function pooptimeSelect(url) {
  // const response = await fetch(`http://localhost:8000/${url}`);
  const response = await fetch(`http://localhost:8000/horror`);
  const data = await response.json();
  console.log(data);
}
export default pooptimeSelect;
