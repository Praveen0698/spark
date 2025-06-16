"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const AdminPanel = dynamic(() => import("@/components/AdminPanel"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AdminPanel />
    </Suspense>
  );
}
