"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Application = dynamic(() => import("./form/appform"), {
  ssr: false,
});

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Application />
    </Suspense>
  );
}
