import {useState} from "react";
import { CiCircleQuestion } from "react-icons/ci";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import ModelS from '../assets/Model S.avif';
import Model3 from '../assets/Model 3.avif'; 
import ModelY from '../assets/Model Y.avif'; 
import ModelX from '../assets/Model X.avif'; 
import Cybertruck from '../assets/Cybertruck.png'; 
import Inventory from '../assets/Inventory.avif'; 


const navLinks = [
  {name: "Vehicles"},
  {name: "Energy"},
  {name: "Charging"},
  {name: "Discover"},
  {name: "Shop"},
]

const vehicles = [
  {name: "Model S" , img: ModelS , link:['Learn' , 'Order']},
  {name: "Model 3" , img: Model3 , link:['Learn' , 'Order']},
  {name: "Model Y" , img: ModelY , link:['Learn' , 'Order']},
  {name: "Model X" , img: ModelX , link:['Learn' , 'Order']},
  {name: "Cybertruck" , img: Cybertruck , link:['Learn' , 'Order']},
  {name: "Inventory" , img: Inventory , link:['Learn' , 'Order']},
]

function Navbar() {
  const [menuOpen , setMenuOpen] = useState(false);
  const [vehicleOpen , setVehicleOpen] = useState(false);
  const [energyOpen , setEnergyOpen] = useState(false);
  const [chargingOpen , setChargingOpen] = useState(false);
  const [DiscoverOpen , setDiscoverOpen] = useState(false);
  const [shopOpen , setShopOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50">
    <nav className="relative flex items-center justify-between px-16 py-4 font-semibold">
      <div className="shrink-0">
        <svg className="w-28 h-7" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="currentColor"/>
         </svg>
      </div>

      <div className="flex items-center gap-9"
      onMouseEnter={() => setVehicleOpen(true)}
      
      >
        {navLinks.map((link , idx)=>(
          <div key={idx} className="text-sm">
            {link.name}
          </div>
        ))}
      </div>

      <div className="flex items-center gap-5 text-2xl">
        <div>
          <CiCircleQuestion />
        </div>
        <div>
          <AiOutlineGlobal />
        </div>
        <div>
          <FaRegUserCircle />
        </div>
      </div>
    </nav>

    {/* Vehicles Dropdown */}
    {vehicleOpen && (
      <div className="top-0 bg-white">
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {vehicles.map((vehicle , idx)=>(
              <div key={idx}>
                <div>
                  <img src={vehicle.img} alt="" className="h-auto max-w-[220px]"/>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    )}
    </header>
  );
}

export default Navbar;
