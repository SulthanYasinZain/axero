"use client";
import { useParams } from "next/navigation";

export default function Dashboard() {
  const { id } = useParams(); // Extract 'id' from the route

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Parent ID: {id}</p>
    </div>
  );
}
