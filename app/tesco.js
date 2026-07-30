// app/tesco.js

export async function checkTescoHealth() {
  const response = await fetch(
    'https://tesco8.p.rapidapi.com/health',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'tesco8.p.rapidapi.com',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY
      }
    }
  );

  return response.json();
}