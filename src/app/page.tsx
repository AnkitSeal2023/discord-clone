import { NextPage } from "next";

const LandingPage:NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to My App</h1>
      <p className="text-lg mb-8">This is a simple landing page.</p>
      <a href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">
        Go to Login
      </a>
    </div>
  );
}
export default LandingPage;