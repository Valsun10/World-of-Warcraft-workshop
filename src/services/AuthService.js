const baseURL = "https://heroes-demo-api.onrender.com";

const loginURL = baseURL + "/auth/sign-in";
const registerURL = baseURL + "/auth/sign-up";
const getCurrentUserURL = baseURL + "/users/current";
const getAllUsersURL = baseURL + "/users/list";

const options = {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
};

const login = async (email, password) => {
  options.body = JSON.stringify({ email, password });
  const response = await fetch(loginURL, options);

  const jsonResult = await response.json();

  return jsonResult;
};

const register = async (name, email, password, gender) => {
  options.body = JSON.stringify({ name, email, password, gender });
  const response = await fetch(registerURL, options);

  const jsonResult = await response.json();

  return jsonResult;
};

const getCurrentUser = async (token) => {
  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await fetch(getCurrentUserURL, options);

  const jsonResult = await response.json();

  if (response.ok) {
    return jsonResult.payload;
  }
};

const GetAllUsers = async (page, limit) => {
  const response = await fetch(getAllUsersURL, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTgyNDA1MDMsImV4cCI6MTcwNjAxNjUwM30.KKcg8HOMUFlaqpWrF7VZMc4WqhipArv8KLcVDvEe4hk",
    },
    body: JSON.stringify({ page, limit }),
  });

  const jsonResult = await response.json();

  if (response.ok) {
    return jsonResult.payload.docs;
  }
};

const authService = {
  login,
  register,
  getCurrentUser,
  GetAllUsers,
};

export default authService;
