const baseURL = "http://localhost:5000";

const loginURL = baseURL + "/auth/sign-in";
const registerURL = baseURL + "/auth/sign-up";
const getCurrentUserUrl = baseURL + "/users/current";

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
      Authorization: "Bearer " + token,
    },
  };

  const response = await fetch(getCurrentUserUrl, options);

  const jsonResult = await response.json();

  if (response.ok) {
    try {
      return jsonResult.payload;
    } catch (err) {
      console.log(err);
    }
  }
};

const authService = {
  login,
  register,
  getCurrentUser,
};

export default authService;
