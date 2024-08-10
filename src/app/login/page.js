"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();

  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div className="h-screen p-12">
      <h1 className="text-3xl font-bold mb-8">Login Page</h1>
      <Link className="p-2 bg-blue-300" href="/">
        Go To Home Page
      </Link>
      <br />
      <br />
      <button
        onClick={() => navigate("/login/loginstudent")}
        className="p-2 bg-blue-300"
      >
        Go To Login Page For Students
      </button>
      <br />
      <br />
      <button
        onClick={() => navigate("/login/loginteacher")}
        className="p-2 bg-blue-300"
      >
        Go To Login Page For Teacher
      </button>
    </div>
  );
}

export default Login;
