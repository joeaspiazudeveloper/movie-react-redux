import { NavLink } from "react-router-dom";
import bgFooter from "../assets/images/footer-bg.webp"

function Header() {
  return (
    <nav className="px-10 h-15" style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.075), rgba(0,0,0,0.075)), 
        url(${bgFooter})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="relative flex h-16 items-center justify-between">
        
        <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex flex-shrink-0 items-center">
            <img
              className="h-8 w-auto mr-5"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div className="sm:ml-6 sm:block">
            <div className="flex space-x-4">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <NavLink to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" 
                  : isActive ? "active rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" 
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}>
                  Movies
                
              </NavLink>
              
              <NavLink to="/about"
                className={({ isActive, isPending }) =>
                  isPending ? "pending rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" 
                  : isActive ? "active rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white" 
                  : "rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"}>
                  About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
