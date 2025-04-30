async function poopTimeApi(url, method = "get", data = null) {
  // const response = await fetch(`http://localhost:8000/${url}`);
  const normalizedMethod = method.toUpperCase();
  const poopTimeApiOption = {
    method: normalizedMethod,
    headers: {
      "Content-Type": "application/json",
    },
  };
  if (data) {
    poopTimeApiOption.body = JSON.stringify(data);
  }
  const response = await fetch(
    `http://localhost:8080/${url}`,
    poopTimeApiOption
  );
  const poopTimeApidata = await response.json();
  console.log(poopTimeApidata);
  return poopTimeApidata;
}
export default poopTimeApi;
