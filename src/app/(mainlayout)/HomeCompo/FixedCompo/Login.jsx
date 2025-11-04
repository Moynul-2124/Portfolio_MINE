



"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function HomePage() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full space-y-6 text-center animate-fade-in-up">
        {session ? (
          <div className="flex flex-col items-center gap-4">
            <img
              src={session.user?.image}
              alt="Profile"
              className="w-20 h-20 rounded-full border-4 border-green-500 shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <p className="text-xl font-semibold">Welcome, {session.user?.name}</p>
            <button
              onClick={() => signOut()}
              className="bg-red-500 hover:bg-red-600 px-6 py-2 rounded-full font-medium transition duration-300"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <button
              onClick={() => signIn("google")}
              className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full font-medium transition duration-300 w-full"
            >
              Login with Google
            </button>
            <button
              onClick={() => signIn("github")}
              className="bg-gray-800 hover:bg-gray-700 px-6 py-2 rounded-full font-medium transition duration-300 w-full"
            >
              Login with GitHub
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
