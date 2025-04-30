export const fetchLogin = async ({user_id, password, user_nick}) => {
  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ user_id, password, user_nick }),


  });
  if (!response.ok) throw new Error("로그인 실패");
  return await response.json();
}