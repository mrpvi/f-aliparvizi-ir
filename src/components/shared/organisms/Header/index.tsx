import Link from "next/link";

export default function Header() {
  return (
    <header>
      <div className="container mx-auto px-4 md:px-0 my-6">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-3xl font-bold font-bitcount">Ali Parvizi</h1>
          </Link>

          <div className="flex items-center gap-4 text-xl text-blue-500 font-bold underline">
            <Link href="/">About</Link>
            <Link href="mailto:aliparvizidev@gmail.com">Contact</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
