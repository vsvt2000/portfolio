"use client";

import { navigation } from '@/utils/constants';
import { geistMono, geistSans } from '@/utils/fonts';
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useState } from 'react'



export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className={`${geistSans.className} ${geistMono.className} sticky top-0 z-50 bg-[#f5f7b5] shadow`}>
      <div className="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 md:text-xl font-bold text-gray-700">
            Vishnusai Viswajith Tharoor
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-700 hover:text-gray-900 font-medium">
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Slide In) */}
      <Dialog as="div" className="relative z-60 md:hidden" open={mobileMenuOpen} onClose={()=>setMobileMenuOpen(false)}>
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={()=>setMobileMenuOpen(false)}/>

        <div className="fixed inset-y-0 right-0 w-64 bg-[#fcf0cc] p-6 shadow-lg transform transition-transform ease-in-out duration-300">
          <div className="flex items-center justify-between">
            <div className="text-xl text-gray-700 font-bold">Menu</div>
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-gray-900 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </Dialog>
    </header>
  )
}