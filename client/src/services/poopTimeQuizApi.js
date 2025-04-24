async function poopTimeQuizApi(category) {
  try {
    // const response = await fetch(`http://localhost:8000/${url}`);
    const response = await fetch(`http://localhost:8080/${category}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log("에러발생", err);
    return [];
  }
}
export default poopTimeQuizApi;
