import Link from "next/link";
export default function Button({ href, children }) {
  return (
    <Link href={href} target="_blank" rel="noreferrer">
      <div className="border-2 rounded-full border-navy dark:border-white cursor-pointer px-6 py-2 max-w-min">
        {children}
      </div>
    </Link>
  );
}
