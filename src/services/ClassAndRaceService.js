const baseURL = "https://heroes-demo-api.onrender.com";

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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTgwNjAzNDQsImV4cCI6MTcwNTgzNjM0NH0.tZkOHoTXWtGsl0LP0NUNsVRVZnkob_uoZFGOm9JsnbI",
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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTgwNjAzNDQsImV4cCI6MTcwNTgzNjM0NH0.tZkOHoTXWtGsl0LP0NUNsVRVZnkob_uoZFGOm9JsnbI",
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
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTgwNjAzNDQsImV4cCI6MTcwNTgzNjM0NH0.tZkOHoTXWtGsl0LP0NUNsVRVZnkob_uoZFGOm9JsnbI",
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
