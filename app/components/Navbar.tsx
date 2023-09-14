import Link from "next/link";

export const Navbar = () => {
  return (
    <div>
      <div>
        <Link href="/">
          <h1>Vivien</h1>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
