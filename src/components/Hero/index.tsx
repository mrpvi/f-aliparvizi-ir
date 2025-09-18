import Image from "next/image";
import ContainerCard from "@/components/ContainerCard";

export default function Hero() {
  return (
    <section>
      <ContainerCard className="rounded-b-none">
        <div className="flex items-center justify-between">
          <h2 className="text-gray-50 flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-gray-50 rounded"></div>
            Software Engineer
          </h2>

          <div className="relative p-1 px-2 rounded-full text-[12px]">
            <div className="absolute inset-0 bg-green-500 opacity-50 rounded-full"></div>
            <div className="relative z-10 text-white text-nowrap">
              Available for New Opportunities
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between gap-8">
          <div className="flex flex-col items-start justify-center gap-4">
            <h1 className="text-4xl font-bold text-center relative text-white">
              I&apos;m Ali Parvizi
            </h1>
            <p className="text-gray-50">
              I&apos;m a software engineer with a knack for building{" "}
              <b className="text-[#c5c5c5]">Front-end</b> applications and a
              passion for helping others. I enjoy tackling complex problems and
              crafting solutions that keep things running smoothly. In my free
              time, I contribute to open source projects to support the
              community and grow my skills.
            </p>
          </div>

          <Image
            src="/images/profile.webp"
            alt="Ali Parvizi"
            width={150}
            height={150}
            className="rounded-full shadow-lg border-4 border-white"
          />
        </div>
      </ContainerCard>
    </section>
  );
}
