// import {useState} from "react";
// import { CiCircleQuestion } from "react-icons/ci";
// import { AiOutlineGlobal } from "react-icons/ai";
// import { FaRegUserCircle } from "react-icons/fa";
// import ModelS from '../assets/Model S.avif';
// import Model3 from '../assets/Model 3.avif'; 
// import ModelY from '../assets/Model Y.avif'; 
// import ModelX from '../assets/Model X.avif'; 
// import Cybertruck from '../assets/Cybertruck.png'; 
// import Inventory from '../assets/Inventory.avif'; 


// const navLinks = [
//   {name: "Vehicles"},
//   {name: "Energy"},
//   {name: "Charging"},
//   {name: "Discover"},
//   {name: "Shop"},
// ]

// const vehicles = [
//   {name: "Model S" , img: ModelS},
//   {name: "Model 3" , img: Model3},
//   {name: "Model Y" , img: ModelY},
//   {name: "Model X" , img: ModelX},
//   {name: "Cybertruck" , img: Cybertruck},
//   {name: "Inventory" , img: Inventory},
// ]

// const vehicleLinks = [
//   'Full Self-Driving (Supervised)',
//     'Current Offers',
//     'Demo Drive',
//     'Trade-In',
//     'Vehicle Safety Report',
//     'Pre-Owned',
//     'Features',
//     'Help Me Charge',
//     'Help Me Choose',
//     'Compare',
//     'Safety',
//     'Fleet',
//     'Semi',
//     'Roadster',
//     'Robotaxi'
// ]

// function Navbar() {
//   const [menuOpen , setMenuOpen] = useState(false);
//   const [vehicleOpen , setVehicleOpen] = useState(false);
//   const [energyOpen , setEnergyOpen] = useState(false);
//   const [chargingOpen , setChargingOpen] = useState(false);
//   const [DiscoverOpen , setDiscoverOpen] = useState(false);
//   const [shopOpen , setShopOpen] = useState(false);
//   return (
//     <header className="fixed top-0 w-full z-50">
//     <nav className="relative flex items-center justify-between px-16 py-4 font-semibold">
//       <div className="shrink-0">
//         <svg className="w-28 h-7" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"/>
//          </svg>
//       </div>

//       <div className="flex items-center gap-9"
//       onMouseEnter={() => setVehicleOpen(true)}
      
//       >
//         {navLinks.map((link , idx)=>(
//           <div key={idx} className="text-sm">
//             {link.name}
//           </div>
//         ))}
//       </div>

//       <div className="flex items-center gap-5 text-2xl">
//         <div>
//           <CiCircleQuestion />
//         </div>
//         <div>
//           <AiOutlineGlobal />
//         </div>
//         <div>
//           <FaRegUserCircle />
//         </div>
//       </div>
//     </nav>

//     {/* Vehicles Dropdown */}
//     {vehicleOpen && (
//       <div className=" hidden lg:block absolute top-full left-0 right-0 bg-white">
//         <div className="max-w-7xl mx-auto px-8 py-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//             {vehicles.map((vehicle , idx)=>(
//               <div key={idx}>
//                 <div className="overflow-hidden">
//                   <img src={vehicle.img} alt="" className="h-auto max-w-[220px]"/>
//                 <h3>{vehicle.name}</h3>
//                 </div>
//                 <div>
//                   <a href="#">Learn</a>
//                   <a href="#">Order</a>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div>
//             <span className="w-px h-full bg-gray-200"/>
//           </div>

//           {/* Side Links */}
          
//           <div>
//             {vehicleLinks.map((link, idx)=>(
//               <a href='#' key={idx}>
//                 {link}
//               </a>
//             ))}
//           </div>

//         </div>

//       </div>
//     )}
//     </header>
//   );
// }

// export default Navbar;






import { useState } from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import ModelS from '../assets/Model S.avif';
import Model3 from '../assets/Model 3.avif'; 
import ModelY from '../assets/Model Y.avif'; 
import ModelX from '../assets/Model X.avif'; 
import Cybertruck from '../assets/Cybertruck.png'; 
import Inventory from '../assets/Inventory.avif';
import SolarPanels from '../assets/SolarPanel.avif';
import SolarRoof from '../assets/SolarRoof.avif';
import Powerwall from '../assets/Powerwall.avif';
import Megapack from '../assets/Megapack.avif';
import Charging from '../assets/Charging.avif';
import SuperCharging from '../assets/SuperCharging.avif';
import HomeCharging from '../assets/HomeCharging.avif';
import WallConnectorForBusiness from '../assets/WallConnectorForBusiness.avif';
import SuperChargingForBusiness from '../assets/SuperChargingForBusiness.avif';



// Menu configuration - easily scalable
const menuConfig = {
  Vehicles: {
    type: "grid",
    items: [
      { name: "Model S", img: ModelS, links: ["Learn", "Order"] },
      { name: "Model 3", img: Model3, links: ["Learn", "Order"] },
      { name: "Model Y", img: ModelY, links: ["Learn", "Order"] },
      { name: "Model X", img: ModelX, links: ["Learn", "Order"] },
      { name: "Cybertruck", img: Cybertruck, links: ["Learn", "Order"] },
      { name: "Inventory", img: Inventory, links: ["View"] },
    ],
    sideLinks: [
      "Full Self-Driving (Supervised)",
      "Current Offers",
      "Demo Drive",
      "Trade-In",
      "Vehicle Safety",
      "Pre-Owned",
      "Compare",
      "Fleet",
      "Semi",
      "Roadster",
      "Robotaxi",
    ],
  },
  Energy: {
    type: "grid",
    items: [
      { name: "Solar Panels", img: SolarPanels, links: ["Learn", "Order"] },
      { name: "Solar Roof", img: SolarRoof, links: ["Learn", "Order"] },
      { name: "Powerwall", img: Powerwall, links: ["Learn", "Order"] },
      { name: "Megapack", img: Megapack, links: ["Learn", "Order"] },
    ],
    sideLinks: [
      "Schedule a Consultation",
      "Why Solar?",
      "Incentives",
      "Support",
      "Partner with Tesla",
      "Commercial Solar",
      "Utilities",
    ],
  },
  Charging: {
    type: "grid",
    items: [
      { name: "Charging", img: Charging, links: ["Learn"] },
      { name: "Home Charging", img: HomeCharging, links: ["Learn", "Shop"] },
      { name: "Supercharger", img: SuperCharging, links: ["Find", "Learn"] },
      { name: "Wall Connector for Business", img: WallConnectorForBusiness, links: ["Find", "Learn"] },
      { name: "Supercharger for Business", img: SuperChargingForBusiness, links: ["Learn", "Shop"] },
    ],
    sideLinks: [
      "Help Me Charge",
      "Charging Calculator",
      "Trip Planner",
      "Supercharger Map",
      "Host a Supercharger",
      "Commercial Charging",
      "Partnerships",
    ],
  },
  Discover: {
    type: "list",
    sections: [
      {
        title: "Resources",
        links: ["Demo Drive", "Insurance", "Military Purchase Program", "Video Guides", "Customer Stories", "Events"],
      },
      {
        title: "Location Services",
        links: ["Find Us", "Trip Planner", "Find a Collision Center"],
      },
      {
        title: "Company",
        links: ["About", "Careers", "Investor Relations"],
      },
    ],
  },
  Shop: {
    type: "list",
    sections: [
      {
        title: "Charging",
        links: ["Wall Connector", "Mobile Connector", "Adapters", "Supercharger"],
      },
      {
        title: "Vehicle Accessories",
        links: ["Model S", "Model 3", "Model X", "Model Y", "Cybertruck"],
      },
      {
        title: "Apparel",
        links: ["Men", "Women", "Kids", "Accessories"],
      },
      {
        title: "Lifestyle",
        links: ["Drinkware", "Outdoor", "Toys", "Collectibles"],
      },
    ],
  },
};

const navLinks = Object.keys(menuConfig);

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 lg:px-16 py-3 font-medium">
        {/* LOGO */}
        <a href="/" className="flex-shrink-0">
          <svg
            className="w-24 h-6 lg:w-28 lg:h-7"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0z"
              fill="currentColor"
            />
          </svg>
        </a>

        {/* NAV LINKS */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-9">
          {navLinks.map((link) => (
            <button
              key={link}
              className="text-sm hover:bg-gray-100 hover:bg-opacity-70 px-3 py-2 rounded transition-colors duration-200"
              onMouseEnter={() => handleMouseEnter(link)}
              aria-expanded={activeMenu === link}
              aria-haspopup="true"
            >
              {link}
            </button>
          ))}
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4 text-xl lg:text-2xl">
          <button aria-label="Help" className="hover:bg-gray-100 p-2 rounded transition-colors">
            <CiCircleQuestion />
          </button>
          <button aria-label="Language" className="hover:bg-gray-100 p-2 rounded transition-colors">
            <AiOutlineGlobal />
          </button>
          <button aria-label="Account" className="hover:bg-gray-100 p-2 rounded transition-colors">
            <FaRegUserCircle />
          </button>
        </div>
      </nav>

      {/* DROPDOWN MENUS */}
      {activeMenu && (
        <div
          className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-xl"
          onMouseEnter={() => setActiveMenu(activeMenu)}
          onMouseLeave={handleMouseLeave}
          role="menu"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 lg:py-12">
            {menuConfig[activeMenu].type === "grid" ? (
              <GridMenu config={menuConfig[activeMenu]} />
            ) : (
              <ListMenu config={menuConfig[activeMenu]} />
            )}
          </div>
        </div>
      )}
    </header>
  );
}

// Grid layout for Vehicles, Energy, Charging
function GridMenu({ config }) {
  return (
    <div className="flex gap-8 lg:gap-12">
      {/* LEFT: ITEM GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-x-12 lg:gap-y-10 flex-1">
        {config.items.map((item) => (
          <div key={item.name} className="text-center group">
            <div className="overflow-hidden rounded-lg mb-3">
              <img
                src={item.img}
                alt={item.name}
                className="mx-auto w-full max-w-[240px] group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <h3 className="font-semibold text-base mb-2">{item.name}</h3>
            <div className="flex justify-center gap-4 text-sm">
              {item.links.map((linkText) => (
                <a
                  key={linkText}
                  href="#"
                  className="text-gray-600 hover:text-black hover:underline underline-offset-4 transition-colors"
                >
                  {linkText}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* RIGHT: SIDE LINKS */}
      {config.sideLinks && (
        <aside className="w-[240px] lg:w-[280px] pl-6 lg:pl-8 border-l border-gray-200 hidden md:block">
          <ul className="space-y-3">
            {config.sideLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-700 hover:text-black hover:underline underline-offset-4 block transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </div>
  );
}

// List layout for Discover, Shop
function ListMenu({ config }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
      {config.sections.map((section) => (
        <div key={section.title}>
          <h3 className="font-semibold text-sm mb-4 text-gray-900">
            {section.title}
          </h3>
          <ul className="space-y-3">
            {section.links.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-black hover:underline underline-offset-4 block transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}