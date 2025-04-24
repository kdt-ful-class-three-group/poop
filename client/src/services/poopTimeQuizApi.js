async function quizApi(url) {
  const response = await fetch(`http://localhost:8000/${url}`);
  const data = await response.json();
  console.log(data);
}
export default quizApi;


