import Link from 'next/link';
import { RiPlantLine } from "react-icons/ri";

export default function Header() {
  return(
    <header>
      <nav className="bg-accent-green">
        {/*Logo*/}
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3">
            <RiPlantLine className="text-4xl" alt="plant.io logo" />
            <span className="self-center text-2xl whitespace-nowrap">plant.io</span>
          </Link>          
          {/*Nav Bar*/}
          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-accent-green md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-accent-green">
              <li>
                <Link href="/" className="block py-2 px-3 text-gray-900 bg-accent-green rounded hover:bg-cream md:hover:bg-transparent md:border-0 md:hover:text-dark-green">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="block py-2 px-3 text-gray-900 bg-accent-green rounded hover:bg-cream md:hover:bg-transparent md:border-0 md:hover:text-dark-green">
                  Profile
                </Link>
              </li>
              <li>
                <Link href="/" className="block py-2 px-3 text-gray-900 bg-accent-green rounded hover:bg-cream md:hover:bg-transparent md:border-0 md:hover:text-dark-green">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}