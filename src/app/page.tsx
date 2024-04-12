'use client'
import Image from "next/image";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";


export default function Home() {
  
  return (
    <div className="pt-40">
      <Navbar></Navbar>
      <section className="mb-8 ">
        <div className="flex flex-col justify-center items-center h-[60vh] bg-pink-50">
          <h2 className="text-[72px] font-semibold mb-2 px-5">Welcome to Event Organizer</h2>
          <p className="text-lg text-gray-700 mb-4 font-bold font-sans">Organize and manage events for your college or school effortlessly!</p>
          <a href="#" className="inline-block px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition-all font-bold">Get Started</a>
        </div>
        <br></br>
        <Slider></Slider>
      </section>
      {/* <section>
        <h2 className="text-2xl font-semibold mb-4">College Admin Login</h2>
        <form>
          <input type="text" name="username" placeholder="Username/Email" className="block w-full px-4 py-2 border border-gray-300 rounded mb-4" required />
          <input type="password" name="password" placeholder="Password" className="block w-full px-4 py-2 border border-gray-300 rounded mb-4" required />
          <button type="submit" className="block w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
        </form>
        <a href="#" className="block text-blue-500 hover:underline mb-2">Forgot password?</a>
        <a href="#" className="block text-blue-500 hover:underline">Register</a>
      </section> */}
    </div>
  );
}
