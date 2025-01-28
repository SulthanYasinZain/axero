"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const { id } = useParams();
  const [clientId, setClientId] = useState<string | null>(null);

  useEffect(() => {
    setClientId(typeof id === "string" ? id : null);
  }, [id]);

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Parent ID: {clientId}</p>
    </div>
  );
}
