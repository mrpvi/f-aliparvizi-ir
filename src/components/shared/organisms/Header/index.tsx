import ContainerCard from "@/components/ContainerCard";
import { Home, Papear } from "@/icons";
import Link from "next/link";
import Button from "@/components/shared/molecules/Button";

export default function Header() {
  return (
    <header className="text-white">
      <ContainerCard className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/" className="bg-gray-100 rounded-full p-3 shadow-2xl">
            <Home />
          </Link>
          <Papear />
        </div>

        <Link href="mailto:aliparvizidev@gmail.com">
          <Button className="text-[12px] flex items-center gap-2">
            <div className="relative">
              <div
                className="w-[6px] h-[6px] bg-green-500 rounded-full animate-pulse shadow-lg"
                style={{ animationDuration: "2s" }}
              >
                <div
                  className="absolute inset-0 w-[6px] h-[6px] bg-green-400 rounded-full animate-ping opacity-60"
                  style={{ animationDuration: "2s" }}
                ></div>
              </div>
            </div>
            Contact Me!
          </Button>
        </Link>
      </ContainerCard>
    </header>
  );
}
