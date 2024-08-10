import Link from "next/link";

function About() {
  return (
    <div className="h-screen p-12">
      <h1 className="text-3xl font-bold mb-8">About Page</h1>
      <Link href="/" className="p-2 bg-blue-300">
        Go To Home Page
      </Link>
      <br />
      <br />
      <Link href="/about/aboutstudent" className="p-2 bg-blue-300">
        Go To About Students
      </Link>
      <br />
      <br />
      <Link href="/about/aboutteacher" className="p-2 bg-blue-300">
        Go To About Teacher
      </Link>
    </div>
  );
}

export default About;
