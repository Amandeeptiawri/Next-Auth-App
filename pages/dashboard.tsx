"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session, router]);

  if (!session) return null;

  
  return (
    <div className="min-h-screen flex bg-gray-300">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-800 shadow-lg p-6 hidden md:block">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        <nav className="mt-6">
          <ul>
            <li className="py-2 px-4 hover:bg-gray-500 rounded-md cursor-pointer">Profile</li>
            <li className="py-2 px-4 hover:bg-gray-500 rounded-md cursor-pointer">Settings</li>
            <li
              onClick={() => signOut({ callbackUrl: "/" })}
              className="py-2 px-4 text-red-500 hover:bg-red-100 rounded-md cursor-pointer"
            >
              Logout
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-semibold text-gray-800">Welcome, {session.user?.name} 👋</h1>
          <p className="text-gray-500">Here’s what’s happening with your account.</p>
        </div>

        {/* User Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
            <p className="text-gray-500">{session.user?.email}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Role</h3>
            <p className="text-gray-500">Admin</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-700">Joined</h3>
            <p className="text-gray-500">January 10, 2024</p>
          </div>
        </div>

        {/* Activity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-blue-500 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold">Last Login</h3>
            <p className="text-lg">2 hours ago</p>
          </div>
          <div className="bg-green-500 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold">New Messages</h3>
            <p className="text-lg">5 Unread</p>
          </div>
          <div className="bg-yellow-500 p-6 rounded-lg shadow-md text-white">
            <h3 className="text-xl font-semibold">Notifications</h3>
            <p className="text-lg">3 Alerts</p>
          </div>
        </div>

        {/* Mobile Logout Button (always visible at bottom) */}
      <div className="bottom-0 mt-8 left-0 right-0 md:hidden flex justify-center">
        <button
          onClick={() => signOut({ callbackUrl: "/" })}
          className="w-11/12 max-w-xs py-3 text-white bg-red-500 hover:bg-red-600 rounded-md shadow-md"
        >
          Logout
        </button>
      </div>
      </main>
    </div>
  );
}
