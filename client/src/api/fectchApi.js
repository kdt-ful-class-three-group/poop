export const fetchLogin = async (user_id, password) => {
  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ user_id, password }),
  });
  if (!response.ok) throw new Error("로그인 실패");
  return await response.json();
}

export const checkUserId = async (user_id) => {
  const response = await fetch(`http://localhost:8080/register?user_id=${encodeURIComponent(user_id)}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  const data = await response.json();
  return { status: response.status, data };
};

export const verifyEmail = async (email) => {
  const response = await fetch("http://localhost:8080/verifyCode", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email }),
  });
  const data = await response.json();
  return { status: response.status, data };


}

export const verifyCode = async (email, code) => {
  const response = await fetch("http://localhost:8080/verifyCode/Check", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, code }),
  });

  if (!response.ok) throw new Error("인증 실패");
  const data = await response.json();
  return { status: response.status, data };
}