import React, { useState } from "react";
import {
  FaBars,
  FaBoxes,
  FaChartBar,
  FaShoppingCart,
  FaSignOutAlt,
  FaTimes,
  FaUserMd,
  FaUsers,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Navigation hook
// 
  // ✅ Handle Logout
  const handleLogout = () => {
    localStorage.removeItem("token"); // Destroy Token
    localStorage.removeItem("user"); // Remove user data (optional)
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span className="sr-only">Open sidebar</span>
        {isOpen ? <FaTimes className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
      </button>

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 w-64 h-screen bg-[#1E2A38] text-white transition-transform sm:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full px-4 py-6 flex flex-col justify-between">
          {/* Navigation Links */}
          <div>
            {/* <h2 className="text-xl font-bold text-white mb-6 text-center">Admin Panel</h2> */}

            <ul className="space-y-4 font-medium">
              <li>
                <Link to="/admin" className="flex items-center p-3 rounded-lg hover:bg-[#2C3E50]">
                  <FaChartBar className="w-5 h-5 text-gray-400" />
                  <span className="ml-3">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/doctors" className="flex items-center p-3 rounded-lg hover:bg-[#2C3E50]">
                  <FaUserMd className="w-5 h-5 text-gray-400" />
                  <span className="ml-3">Manage Mechanics</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/users" className="flex items-center p-3 rounded-lg hover:bg-[#2C3E50]">
                  <FaUsers className="w-5 h-5 text-gray-400" />
                  <span className="ml-3">Manage Users</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/product" className="flex items-center p-3 rounded-lg hover:bg-[#2C3E50]">
                  <FaBoxes className="w-5 h-5 text-gray-400" />
                  <span className="ml-3">Manage Products</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/orders" className="flex items-center p-3 rounded-lg hover:bg-[#2C3E50]">
                  <FaShoppingCart className="w-5 h-5 text-gray-400" />
                  <span className="ml-3">Manage Orders</span>
                </Link>
              </li>
              <li>
                <Link to="/admin/appointment" className="flex items-center p-3 rounded-lg hover:bg-[#2C3E50]">
                  <FaChartBar className="w-5 h-5 text-gray-400" />
                  <span className="ml-3">Sales Reports</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ✅ Styled Logout Button */}
          <button
            onClick={handleLogout}
            className="mt-auto w-full flex items-center justify-center p-3 rounded-lg bg-[#2C3E50] hover:bg-[#37495E] text-white font-semibold transition"
          >
            <FaSignOutAlt className="w-5 h-5 text-white" />
            <span className="ml-3">Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
