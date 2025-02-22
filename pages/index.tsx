import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai"; 

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session) {
      router.push("/dashboard");
    }
  }, [session, router]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    const result = await signIn("credentials", { email, password, redirect: false });

    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Login</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <form onSubmit={handleLogin} className="space-y-4">
          
          <div className="flex items-center border rounded-lg p-2 bg-gray-50 text-black">
            <AiOutlineMail className="text-gray-400 mx-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>
          <div className="flex items-center border rounded-lg p-2 text-black bg-gray-50">
            <AiOutlineLock className="text-gray-400 mx-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full bg-transparent outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded text-white font-medium transition ${
              loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
            }`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="border-t flex-grow"></div>
          <span className="mx-2 text-gray-400">OR</span>
          <div className="border-t flex-grow"></div>
        </div>
        <button
          type="button"
          onClick={() => signIn("google")}
          className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded font-medium hover:bg-red-600 transition"
        >
          <FcGoogle className="text-xl mr-2" />
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
