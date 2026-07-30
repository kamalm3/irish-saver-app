// app/route.js

export async function GET() {
    const response = await fetch(
      "https://tesco8.p.rapidapi.com/health",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "x-rapidapi-host": "tesco8.p.rapidapi.com",
          "x-rapidapi-key": process.env.RAPIDAPI_KEY!,
        },
      }
    );
  
    const data = await response.json();
  
    return Response.json(data);
  }