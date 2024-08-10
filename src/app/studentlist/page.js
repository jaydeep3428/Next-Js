"use client";
import Link from "next/link";

export default function Studentlist() {
  return (
    <div className="h-screen p-8">
      <h1 className="text-3xl font-bold">Student List</h1>
      <ul className="mt-8 font-semibold">
        <li className="mb-5">
          <Link href="/studentlist/jaydeep">Jaydeep</Link>
        </li>
        <li className="mb-5">
          <Link href="/studentlist/bhaskar">Bhaskar</Link>
        </li>
        <li className="mb-5">
          <Link href="/studentlist/butcher">Butcher</Link>
        </li>
        <li className="mb-5">
          <Link href="/studentlist/john">John</Link>
        </li>
      </ul>
    </div>
  );
}
