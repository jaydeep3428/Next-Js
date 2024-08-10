const { default: Link } = require("next/link");

function Layout({ children }) {
  return (
    <div className="">
      <ul className="flex ml-12 mt-8">
        <h2 className="font-bold">About Navbar</h2>
        <li className="ml-8 text-blue-950 font-semibold">
          <Link href="/about">About</Link>
        </li>
        <li className="ml-8 text-blue-950 font-semibold">
          <Link href="/about/aboutstudent">About Student</Link>
        </li>
        <li className="ml-8 text-blue-950 font-semibold">
          <Link href="/about/aboutteacher">About Teacher</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Layout;
