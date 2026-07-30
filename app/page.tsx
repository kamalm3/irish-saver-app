"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [query, setQuery] = useState("");
  const [apiData, setApiData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/tesco")
      .then((res) => res.json())
      .then((data) => {
        console.log("Tesco API:", data);
        setApiData(data);
      })
      .catch(console.error);
  }, []);

  return (
    <main style={{ padding: 20 }}>
      <h1 className="text-6xl font-extrabold text-green-700 tracking-wide">
        IrishSaver
      </h1>

      <input
        placeholder="Search milk, chicken..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          width: "100%",
          padding: 12,
          marginTop: 10,
          marginBottom: 20,
        }}
      />

      <div
        style={{
          border: "1px solid #ddd",
          padding: 12,
          borderRadius: 8,
          background: "#f5f5f5",
        }}
      >
        <h2>Tesco API Response</h2>

        {apiData?.data?.results?.[0]?.data?.product && (
  <div
    style={{
      border: "1px solid #ddd",
      borderRadius: 12,
      padding: 16,
      maxWidth: 500,
      marginTop: 20,
    }}
  >
    <img
      src={apiData.data.results[0].data.product.defaultImageUrl}
      alt={apiData.data.results[0].data.product.title}
      style={{
        width: "100%",
        maxWidth: 250,
        borderRadius: 8,
      }}
    />

    <h2>
      {apiData.data.results[0].data.product.title}
    </h2>

    <p>
      Brand:{" "}
      {apiData.data.results[0].data.product.brandName}
    </p>

    <p>
      Department:{" "}
      {apiData.data.results[0].data.product.departmentName}
    </p>

    <p
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        color: "green",
      }}
    >
      £
      {
        apiData.data.results[0].data.product.price
          .actual
      }
    </p>
  </div>
)}
      </div>
    </main>
  );
}