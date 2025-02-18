        "use client";
        import Hero from "@/app/components/hero";
        import NextMatch from "@/app/components/nextmatch";
        import News from "@/app/components/news";
        import Videos from "@/app/components/videos";

        const Page = () => {
        return (
        <div className="bg-white text-black dark:bg-gray-900 dark:text-white transition-all duration-300">
        <Hero />
        <NextMatch />
        <Videos />
        <News />
        <section className="py-16 bg-indigo-600 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-manrope text-5xl text-white text-center font-bold mb-14">
        Subscribe To Our Newsletter
        </h2>
        <div className="flex items-center justify-center flex-col gap-4 sm:flex-row">
        <input
        type="text"
        name="email"
        className="py-2.5 px-5 h-14 w-full md:max-w-md border border-gray-300 bg-indigo-500 dark:bg-gray-700 shadow-sm rounded-full text-lg text-white focus:outline-none placeholder:text-indigo-200 dark:placeholder-gray-400"
        placeholder="Your mail id.."
        />
        <button className="h-14 py-3.5 px-7 bg-white shadow-sm rounded-full text-indigo-600 font-semibold dark:bg-gray-700 dark:text-white">
        Subscribe
        </button>
        </div>
        </div>
        </section>
        </div>
        );
        };

        export default Page;