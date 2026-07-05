"use client";

import { useState } from "react";
import { deals } from "@/data/deals";

export default function Home() {
  const [query, setQuery] = useState("");

  const filtered = deals.filter((d) =>
    d.product.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main style={{ padding: 20 }}>

<h1 className="text-6xl font-extrabold text-green-700 tracking-wide">
        IrishSaver
      </h1>

      {/* SEARCH BAR */}
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

      {/* RESULTS */}
      {filtered.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            padding: 12,
            marginBottom: 10,
            borderRadius: 8,
          }}
        >
          <h3>{item.product}</h3>
          <p>{item.store}</p>
          <b>€{item.price}</b>
        </div>
      ))}

    </main>
  );
}