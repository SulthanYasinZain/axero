"use client";

import { LayoutDashboard } from "lucide-react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Sidebar() {
  const { id } = useParams();
  const [clientId, setClientId] = useState<string | null>(null);

  useEffect(() => {
    setClientId(typeof id === "string" ? id : null);
  }, [id]);

  const navigationList = [
    {
      name: "Dashboard",
      path: clientId ? `/${clientId}/dashboard` : "/dashboard",
      icon: <LayoutDashboard />,
    },
    {
      name: "Inventory",
      path: clientId ? `/${clientId}/inventory` : "/inventory",
      icon: null,
    },
    {
      name: "Orders",
      path: clientId ? `/${clientId}/orders` : "/orders",
      icon: null,
    },
    {
      name: "Customers",
      path: clientId ? `/${clientId}/customers` : "/customers",
      icon: null,
    },
  ];

  return (
    <div className="w-[200px] h-screen bg-background">
      <p className="">Ini Sidebar</p>
      <ul>
        {navigationList.map(({ name, path, icon }) => (
          <li key={name}>
            <a href={path} className="flex items-center p-4">
              {icon} {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
