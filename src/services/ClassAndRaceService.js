const baseURL = "https://heroes-demo-api.onrender.com";

const createClass = async (name, token) => {
  const response = await fetch(`${baseURL}/heroes/classes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const createRace = async (name, heroClass, abilities, token) => {
  const response = await fetch(`${baseURL}/heroes/races`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, heroClass, abilities }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const getAllClasses = async (page, limit, token) => {
  const response = await fetch(`${baseURL}/heroes/classes/list`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ page, limit }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const getAllRaces = async (page, limit, token) => {
  const response = await fetch(`${baseURL}/heroes/races/list`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
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
