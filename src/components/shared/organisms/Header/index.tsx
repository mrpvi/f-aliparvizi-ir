import Link from "next/link";

export default function Header() {
  return (
    <header>
        <div className="container mx-auto my-6">
            <Link href="/">
                <h1 className="text-3xl font-bold font-bitcount">Ali Parvizi</h1>
            </Link>
        </div>
    </header>
  );
}