"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import style from "./style.module.css";
import styles from "./styles.module.css";

export default function Home() {
  const [name, setName] = useState("MAKWANA");

  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };

  return (
    <main className="h-screen p-12">
      <h1 className={style.main}>1.Hello Word In Next-Js.</h1>
      <br />
      <h1 className={styles.main}>
        This is The Another css classname with same classname.
      </h1>
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <Compo name="Jaydeep" />
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <h1 className="text-red-500 text-3xl font-bold">3.Event</h1>
      <button
        className="bg-blue-400 text-orange-800 font-bold border-black p-2 mt-8"
        onClick={() => alert("onclick event called using use client")}
      >
        Click me!
      </button>
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <h1 className="text-red-500 text-3xl font-bold">4.State</h1>
      <p className="mt-8 mb-8 text-blue-300 text-2xl font-bold">{name}</p>
      <button
        className="bg-blue-400 text-orange-800 font-bold border-black p-2"
        onClick={() => setName("JAYDEEP")}
      >
        Update Name
      </button>
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <h1 className="text-red-500 text-3xl font-bold mb-8">5.Router</h1>
      <div className="flex gap-2">
        <div className="flex flex-col">
          <h1>Links:(Link)</h1>
          <Link className="p-2 mb-2 bg-blue-300" href="/login">
            Go To Login Page
          </Link>
          <Link className="p-2 bg-blue-300" href="/about">
            Go To About Page
          </Link>
        </div>
        <div className="flex flex-col">
          <h1>Buttons:(Navigation)</h1>
          <button
            onClick={() => navigate("/login")}
            className="p-2 mb-2 bg-blue-300"
          >
            Go To Login Page
          </button>
          <button
            onClick={() => navigate("/about")}
            className="p-2 bg-blue-300"
          >
            Go To About Page
          </button>
        </div>
      </div>
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <h1 className="text-red-500 text-3xl font-bold mb-8">
        6.Dynamic Routing
      </h1>
      <Link className="p-2 bg-blue-300" href="/studentlist">
        Go To Student List
      </Link>
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <h1 className="text-red-500 text-3xl font-bold mb-8">7.Grid Example</h1>
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-blue-300 p-10 col-span-2 font-bold rounded">1</div>
        <div className="bg-blue-300 p-10 font-bold rounded">2</div>
        <div className="bg-blue-300 p-10 font-bold rounded">3</div>
        <div className="bg-blue-300 col-span-2 p-10 font-bold rounded">4</div>
        <div className="bg-blue-300 p-10 col-span-2 row-span-2 font-bold rounded">
          5
        </div>
        <div className="bg-blue-300 p-10 font-bold row-span-4 rounded">6</div>
        <div className="bg-blue-300 p-10 font-bold rounded">7</div>
        <div className="bg-blue-300 p-10 font-bold rounded">8</div>
        <div className="bg-blue-300 p-10 font-bold rounded">9</div>
        <div className="bg-blue-300 p-10 font-bold rounded">10</div>
        <div className="bg-blue-300 p-10 font-bold rounded">11</div>
      </div>
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <h1 className="text-red-500 text-3xl font-bold mb-8">
        8.Catch All Segments In Routing
      </h1>
      <Link className="p-2 bg-blue-300" href="/study">
        Go To Study
      </Link>
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <h1 className="text-red-500 text-3xl font-bold mb-8">9.Z-Index</h1>
      <div className="flex relative mt-8">
        <div className="z-40 left-0 bottom-0 border-2 absolute bg-blue-300 rounded-full p-8">
          05
        </div>
        <div className="z-30 left-14 bottom-0 border-2 absolute bg-blue-300 rounded-full p-8">
          04
        </div>
        <div className="z-20 left-28 bottom-0 border-2 absolute bg-blue-300 rounded-full p-8">
          03
        </div>
        <div className="z-10 left-44 bottom-0 border-2 absolute bg-blue-300 rounded-full p-8">
          02
        </div>
        <div className="z-0 left-60 bottom-0 border-2 absolute bg-blue-300 rounded-full p-8">
          01
        </div>
      </div>
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <h1 className="text-red-500 text-3xl font-bold mb-8">
        10.API Data Fetch In Client Component
      </h1>
      <Link className="p-2 bg-blue-300" href="/productlist">
        Go To Product List
      </Link>
      <hr className="border-solid border-2 border-gray-500 mt-8 mb-8" />
      <h1 className="text-red-500 text-3xl font-bold mb-8">
        11.API Data Fetch In Server Component
      </h1>
      <Link className="p-2 bg-blue-300" href="/userlist">
        Go To User List
      </Link>
    </main>
  );
}

//Component
const Compo = (e) => {
  return (
    <main>
      <h1 className="text-red-500 text-3xl font-bold">
        2.This is Another Component.
      </h1>
      <br />
      <p className="text-blue-300 text-2xl font-bold">User Name Is {e.name}.</p>
    </main>
  );
};
