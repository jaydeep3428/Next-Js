"use Client";
export default function Lecture({ params }) {
  return (
    <div className="h-screen p-8">
      <h1 className="text-3xl font-bold">{params.lecture[0]}</h1>
      <h1 className="text-3xl font-bold">{params.lecture[1]}</h1>
      <h1 className="text-3xl font-bold">{params.lecture[2]}</h1>
      <h1 className="text-3xl font-bold">{params.lecture[3]}</h1>
    </div>
  );
}
