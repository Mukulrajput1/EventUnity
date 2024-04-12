import Image from "next/image"
import Link from "next/link"

function Navbar() {
  return (
    <div className="fixed top-0 right-0 w-full z-50">
        <div className="h-20 bg-gray-800 flex justify-between px-24 items-center">
            <div></div>
            <div className="text-white text-;g font-bold flex rounded-full ">
                <div><Link className="bg-purple-500 hover:bg-purple-600 px-5 py-3 " href="/account/login">Login</Link></div>
               <div> <Link className="bg-white px-5 py-3 text-gray-800 hover:bg-gray-200" href="/account/register">Register</Link></div>
            </div>
        </div>
      <nav className="h-20">
        <div className="bg-white container mx-auto flex justify-between items-center px-4 overflow-hidden h-full pr-16">
        <Image src="/logocopy.png" alt="EventUnity Logo" width={200} height={100} />
          <ul className="flex space-x-10 font-medium">
            <li><a href="#" className="hover:text-gray-300 focus:text-purple-400 focus:border-b-[2px] border-purple-400">Home</a></li>
            <li><a href="#" className="hover:text-gray-300 focus:text-purple-400 focus:border-b-[2px] border-purple-400">About</a></li>
            <li><a href="#" className="hover:text-gray-300 focus:text-purple-400 focus:border-b-[2px] border-purple-400">Events</a></li>
            <li><a href="#" className="hover:text-gray-300 focus:text-purple-400 focus:border-b-[2px] border-purple-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
