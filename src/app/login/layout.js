const { default: Link } = require("next/link");

function Layout({ children }) {
  return (
    <div className="">
      <ul className="flex ml-12 mt-8">
        <h2 className="font-bold">Login Navbar</h2>
        <li className="ml-8 text-blue-950 font-semibold">
          <Link href="/login">Login</Link>
        </li>
        <li className="ml-8 text-blue-950 font-semibold">
          <Link href="/login/loginstudent">Student Login</Link>
        </li>
        <li className="ml-8 text-blue-950 font-semibold">
          <Link href="/login/loginteacher">Teacher Login</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

export default Layout;
