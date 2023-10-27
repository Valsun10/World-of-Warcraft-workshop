const baseURL = "https://heroes-demo-api.onrender.com";

const GetAllHeroes = async () => {
  const response = await fetch(`${baseURL}/heroes/list`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTgwNjAzNDQsImV4cCI6MTcwNTgzNjM0NH0.tZkOHoTXWtGsl0LP0NUNsVRVZnkob_uoZFGOm9JsnbI",
    },
  });

  let jsonResult = await response.json();

  return jsonResult;
};

const getHero = async (heroId) => {
  const response = await fetch(`${baseURL}/heroes/${heroId}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTgwNjAzNDQsImV4cCI6MTcwNTgzNjM0NH0.tZkOHoTXWtGsl0LP0NUNsVRVZnkob_uoZFGOm9JsnbI",
    },
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const createHero = async (name, race, avatar, extraAbilities) => {
  const response = await fetch(`${baseURL}/heroes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTgwNjAzNDQsImV4cCI6MTcwNTgzNjM0NH0.tZkOHoTXWtGsl0LP0NUNsVRVZnkob_uoZFGOm9JsnbI",
    },
    body: JSON.stringify({ name, race, avatar, extraAbilities }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const deleteHero = async (heroID) => {
  const response = await fetch(`${baseURL}/heroes/${heroID}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTgwNjAzNDQsImV4cCI6MTcwNTgzNjM0NH0.tZkOHoTXWtGsl0LP0NUNsVRVZnkob_uoZFGOm9JsnbI",
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
