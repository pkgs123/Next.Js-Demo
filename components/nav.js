import Link from "next/link";

export default function Nav({ props }) {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a className="">Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a className="">About</a>
          </Link>
        
        </li>
        <li>
          <Link href="/contact">
            <a className="">Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/news">
            <a className="">News</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
