'use client'

import React, { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 w-full">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="hover:text-gray-300">
            Inicio
          </Link>
          <div className="ml-4">
            <input
              type="text"
              placeholder="Buscar productos..."
              className="bg-gray-700 px-2 py-1 text-white rounded"
            />
          </div>
        </div>
        <div className="flex items-center space-x-6">
          <Link href="/cuenta" className="hover:text-gray-300">
            Mi Cuenta
          </Link>
          <Link href="/carrito" className="hover:text-gray-300">
            Carrito
          </Link>
          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            Menú
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <ul className="mt-2 md:hidden text-white">
          <li>
            <Link href="/" className="hover:text-gray-300">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/cuenta" className="hover:text-gray-300">
              Mi Cuenta
            </Link>
          </li>
          <li>
            <Link href="/carrito" className="hover:text-gray-300">
              Carrito
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
