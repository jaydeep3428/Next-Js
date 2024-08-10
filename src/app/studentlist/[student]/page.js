"use client";
export default function Student({ params }) {
  return (
    <div className="h-screen p-8">
      <h1 className="font-bold text-3xl mb-8">Student Details</h1>
      <h3>Name: {params.student}</h3>
    </div>
  );
}
