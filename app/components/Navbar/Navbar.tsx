import { Disclosure } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";
import Signdialog from "./Signdialog";
import Registerdialog from "./Registerdialog";
import { BsLightbulb } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const languages = ['English', 'French', 'Spanish', 'Italian', 'Turkish', 'Swedish', 'Portuguese', 'Japanese', 'Korean'];

    return (
        <Disclosure as="nav" className="bg-header navbar">
            <>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex h-20 items-center justify-between">
                        
                        {/* Logo ve Başlık */}
                        <div className="flex items-center">
                            <BsLightbulb
                                className="block h-30px w-30px lg:hidden text-white"
                                size={24}
                            />
                            <BsLightbulb
                                className="hidden h-48px w-48px lg:block text-white"
                                size={30}
                            />
                            <h1 className="hidden h-48px w-48px lg:block text-white">Send Your Dream</h1>
                        </div>
    
                        {/* Dil Seçimi, Sign In/Register Dialogları ve Sepet İkonu */}
                        <div className="flex items-center">
                            {/* Dil Seçimi */}
                            <select
                                className="mr-6 bg-header text-white border border-white rounded py-2 px-4"
                                value={selectedLanguage}
                                onChange={(e) => setSelectedLanguage(e.target.value)}
                            >
                                {languages.map((language) => (
                                    <option key={language} value={language}>{language}</option>
                                ))}
                            </select>

                            <Registerdialog />

                            {/* Sepet İkonu */}
                            <AiOutlineShoppingCart className="ml-4 text-white" size={24} />
                        </div>
    
                        {/* Mobil Görünüm için Drawer Menü */}
                        <div className='block sm:hidden'>
                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>
    
                        {/* Drawer */}
                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata />
                        </Drawer>
    
                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
