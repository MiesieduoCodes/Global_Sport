// components/NextMatch.js
"use client";
import Image from 'next/image';

export default function NextMatch() {
  return (
    <section className="bg-white py-12 text-center text-black">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Next Match</h2>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
        {/* Team 1 */}
        <div className="flex flex-col items-center">
          <Image
            src="/path-to-team1-logo.png"
            alt="Team 1 Logo"
            width={100}
            height={100}
            className="rounded-full border-4 border-yellow-500"
          />
          <p className="font-semibold text-lg mt-4">Team 1</p>
        </div>

        {/* Match Details */}
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl text-black font-medium mb-2">VS</p>
          <div className="text-sm text-gray-600">
            <p>Time: 18:00</p>
            <p>Venue: Stadium Name</p>
          </div>
        </div>

        {/* Team 2 */}
        <div className="flex flex-col items-center">
          <Image
            src="/path-to-team2-logo.png"
            alt="Team 2 Logo"
            width={100}
            height={100}
            className="rounded-full border-4 border-yellow-500"
          />
          <p className="font-semibold text-lg mt-4">Team 2</p>
        </div>
      </div>

      <div className="mt-8">
        <a href="/contact">
        <button className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300">
          Get Tickets
        </button>
        </a>
      </div>
    </section>
  );
}
