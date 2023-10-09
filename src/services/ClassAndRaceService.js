const baseURL = "http://localhost:5000";

const createClass = async (name, token) => {
  const response = await fetch(`${baseURL}/heroes/classes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify({ name }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const createRace = async (name, heroClass, abilities) => {
  const response = await fetch(`${baseURL}/heroes/races`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTUzMTYwMTEsImV4cCI6MTcwMzA5MjAxMX0.kJ73L8aUAstWxdS7bYYtMKON9n0SmmVqlCUambDKyMc",
    },
    body: JSON.stringify({ name, heroClass, abilities }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const getAllClasses = async (page, limit) => {
  const response = await fetch(`${baseURL}/heroes/classes/list`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTUzMTYwMTEsImV4cCI6MTcwMzA5MjAxMX0.kJ73L8aUAstWxdS7bYYtMKON9n0SmmVqlCUambDKyMc",
    },
    body: JSON.stringify({ page, limit }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const getAllRaces = async (page, limit) => {
  const response = await fetch(`${baseURL}/heroes/races/list`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTUzMTYwMTEsImV4cCI6MTcwMzA5MjAxMX0.kJ73L8aUAstWxdS7bYYtMKON9n0SmmVqlCUambDKyMc",
    },
    body: JSON.stringify({ page, limit }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const classAndRaceService = {
  createClass,
  createRace,
  getAllClasses,
  getAllRaces,
};

export default classAndRaceService;
