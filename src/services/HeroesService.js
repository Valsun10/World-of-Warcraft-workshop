const baseURL = "https://heroes-demo-api.onrender.com";

const GetAllHeroes = async (token) => {
  const response = await fetch(`${baseURL}/heroes/list`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const jsonResult = await response.json();

  return jsonResult.payload.docs;
};

const getHero = async (heroId, token) => {
  const response = await fetch(`${baseURL}/heroes/${heroId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const createHero = async (name, race, avatar, extraAbilities, token) => {
  const response = await fetch(`${baseURL}/heroes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ name, race, avatar, extraAbilities }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const deleteHero = async (heroID, token) => {
  const response = await fetch(`${baseURL}/heroes/${heroID}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  const jsonResult = response.json();

  return jsonResult;
};

const heroesService = {
  GetAllHeroes,
  getHero,
  createHero,
  deleteHero,
};

export default heroesService;
