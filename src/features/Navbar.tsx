// export default function Navbar() {
//   return (
//     <header className="bg-white border-b shadow-sm">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo / App Name */}
//         <div className="flex items-center gap-2">
//           <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded font-bold">
//             C
//           </div>
//           <span className="text-lg font-semibold text-gray-800">
//             Contract Manager
//           </span>
//         </div>

//         {/* Navigation */}
//         <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
//           <span className="hover:text-black cursor-pointer">
//             Blueprints
//           </span>
//           <span className="hover:text-black cursor-pointer">
//             Contracts
//           </span>
//           <span className="hover:text-black cursor-pointer">
//             Dashboard
//           </span>
//         </nav>

//         {/* User Section */}
//         <div className="flex items-center gap-3">
//           <div className="text-right hidden sm:block">
//             <p className="text-sm font-medium text-gray-700">
//               Admin User
//             </p>
//             <p className="text-xs text-gray-400">
//               admin@company.com
//             </p>
//           </div>

//           <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center font-semibold text-gray-600">
//             A
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }



import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useContractStore } from "../store/contractStore";
import { ContractStatus } from "../models/contract";

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md text-sm font-medium transition
   ${isActive ? "bg-black text-white" : "text-gray-600 hover:text-black"}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { contracts } = useContractStore();

  // Status Counters
  const signed = contracts.filter(c => c.status === ContractStatus.SIGNED).length;
  const pending = contracts.filter(c =>
    [ContractStatus.CREATED, ContractStatus.APPROVED, ContractStatus.SENT].includes(c.status)
  ).length;

  return (
    <header className="bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 bg-black text-white rounded flex items-center justify-center font-bold">
            C
          </div>
          <span className="text-lg font-semibold text-gray-800">
            Contract Manager
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3">
          <NavLink to="/dashboard" className={linkClass}>
            Dashboard
          </NavLink>

          <NavLink to="/blueprints" className={linkClass}>
            Blueprints
          </NavLink>

          <NavLink to="/contracts" className={linkClass}>
            Contracts
          </NavLink>
        </nav>

        {/* Status Counters */}
        <div className="hidden md:flex gap-4 text-sm">
          <span className="text-gray-600">
            Pending: <b>{pending}</b>
          </span>
          <span className="text-green-600">
            Signed: <b>{signed}</b>
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white px-6 py-4 space-y-3">
          <NavLink to="/dashboard" className={linkClass} onClick={() => setOpen(false)}>
            Dashboard
          </NavLink>

          <NavLink to="/blueprints" className={linkClass} onClick={() => setOpen(false)}>
            Blueprints
          </NavLink>

          <NavLink to="/contracts" className={linkClass} onClick={() => setOpen(false)}>
            Contracts
          </NavLink>

          <div className="pt-3 border-t text-sm space-y-1">
            <p>Pending: {pending}</p>
            <p className="text-green-600">Signed: {signed}</p>
          </div>
        </div>
      )}
    </header>
  );
}
