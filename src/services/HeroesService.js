const baseURL = "http://localhost:5000";

const GetAllHeroes = async () => {
  const response = await fetch(`${baseURL}/heroes/list`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTUzMTYwMTEsImV4cCI6MTcwMzA5MjAxMX0.kJ73L8aUAstWxdS7bYYtMKON9n0SmmVqlCUambDKyMc",
    },
  });

  let result = await response.json();

  if (response.ok) {
    try {
      return result.payload.docs;
    } catch (err) {
      console.log(err);
    }
  }
};

const getHero = async (heroId) => {
  const response = await fetch(`${baseURL}/heroes/${heroId}`, {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTUzMTYwMTEsImV4cCI6MTcwMzA5MjAxMX0.kJ73L8aUAstWxdS7bYYtMKON9n0SmmVqlCUambDKyMc",
    },
  });

  let result = await response.json();

  if (response.ok) {
    try {
      return result.payload;
    } catch (err) {
      console.log(err);
    }
  }
};

const createHero = async (name, race, avatar, extraAbilities) => {
  const response = await fetch(`${baseURL}/heroes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTBjNzgyOWQ2N2ZiYzRiNTFmYTVhMzAiLCJpYXQiOjE2OTUzMTYwMTEsImV4cCI6MTcwMzA5MjAxMX0.kJ73L8aUAstWxdS7bYYtMKON9n0SmmVqlCUambDKyMc",
    },
    body: JSON.stringify({ name, race, avatar, extraAbilities }),
  });

  const jsonResult = await response.json();

  return jsonResult;
};

const heroesService = {
  GetAllHeroes,
  getHero,
  createHero,
};

export default heroesService;
