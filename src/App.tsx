import BlueprintBuilder from "./features/blueprints/BlueprintBuilder";
import CreateContract from "./features/contracts/CreateContract";
import ContractDashboard from "./features/dashboard/ContractDashboard";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./features/Navbar";
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-100">
        <Navbar />

        <main className="max-w-7xl mx-auto p-6">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/blueprints" element={<BlueprintBuilder />} />
            <Route path="/contracts" element={<CreateContract />} />
            <Route path="/dashboard" element={<ContractDashboard />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
