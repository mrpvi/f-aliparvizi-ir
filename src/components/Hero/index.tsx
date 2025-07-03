import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto flex flex-col items-center justify-center gap-8">
                <Image 
                    src="/images/profile.webp" 
                    alt="Hero" 
                    width={150} 
                    height={150} 
                    className="rounded-full shadow-lg border-4 border-white" 
                />
                <div className="flex flex-col items-center gap-3">
                    <h1 className="text-4xl font-bold text-center relative">
                        Ali Parvizi
                        <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
                    </h1>
                    <p className="text-xl text-center text-gray-700 max-w-2xl leading-relaxed">
                        I'm a software engineer with a knack for building frontend applications and a passion for helping others. I enjoy tackling complex problems and crafting solutions that keep things running smoothly. In my free time, I contribute to open-source projects to support the community and grow my skills. 
                        <span className="font-bold me-2">So why not?</span>
                        <span className="font-bold text-blue-500">Let's learn a little together.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}