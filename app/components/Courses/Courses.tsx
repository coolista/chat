"use client"
import * as React from "react";
import { useState } from "react";
import { GlobeAltIcon, DevicePhoneMobileIcon, CircleStackIcon, CloudIcon } from '@heroicons/react/24/outline';
import {FiFilter} from 'react-icons/fi';
import {MdFavoriteBorder} from 'react-icons/md';
import Card from './Card';

interface Name {
    course: string;
    imageSrc: string;
    profession: string
    price: string
    category: 'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing';
}

const names: Name[] = [
    {
        course: 'HTML, CSS, JS',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'HTML, CSS, Javascript Development',
        price: '40',
        category: 'webdevelopment'
    },
    {
        course: 'Node.js',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Backend with Node.js and Express.js',
        price: '21',
        category: 'webdevelopment'
    },
    {
        course: 'Database',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Learn Mongodb with Mongoose',
        price: '21',
        category: 'webdevelopment'
    },
    {
        course: 'React.js',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'Learn React with Redux toolkit',
        price: '99',
        category: 'webdevelopment'
    },
    {
        course: 'React Native',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Learn React Native with Node.js',
        price: '89',
        category: 'mobiledevelopment'
    },
    {
        course: 'Swift',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Learn Swift from Scratch',
        price: '89',
        category: 'mobiledevelopment'
    },
    {
        course: 'Flutter',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'Flutter App Development',
        price: '69',
        category: 'mobiledevelopment'
    },
    {
        course: 'Onsen UI',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Learn Onsen Ui with HTML, CSS',
        price: '69',
        category: 'mobiledevelopment'
    },
    {
        course: 'TensorFlow',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Learn TensorFlow with SQL',
        price: '99',
        category: 'datascience'
    },
    {
        course: 'AWS',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'AWS Deep Learning AMI',
        price: '99',
        category: 'datascience'
    },
    {
        course: 'Bokeh',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Learn Bokeh with Python',
        price: '99',
        category: 'datascience'
    },
    {
        course: 'Scikit',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Scikit with Python Development',
        price: '89',
        category: 'datascience'
    },
    {
        course: 'Laas',
        imageSrc: '/assets/courses/coursesThree.svg',
        profession: 'Infra-as-a-Service',
        price: '21',
        category: 'cloudcomputing'
    },
    {
        course: 'Iaas',
        imageSrc: '/assets/courses/coursesFour.svg',
        profession: 'Info-as-a-Service',
        price: '29',
        category: 'cloudcomputing'
    },
    {
        course: 'Paas',
        imageSrc: '/assets/courses/coursesOne.svg',
        profession: 'Platform-as-a-Service',
        price: '99',
        category: 'cloudcomputing'
    },
    {
        course: 'Saas',
        imageSrc: '/assets/courses/coursesTwo.svg',
        profession: 'Software-as-a-Service',
        price: '58',
        category: 'cloudcomputing'
    }
];

const NamesList = () => {

    const [selectedButton, setSelectedButton] = useState<'mobiledevelopment' | 'webdevelopment' | 'datascience' | 'cloudcomputing' | 'all' | null>('webdevelopment');

    const mobileDevelopment = names.filter((name) => name.category === 'mobiledevelopment');
    const webDevelopment = names.filter((name) => name.category === 'webdevelopment');
    const dataScience = names.filter((name) => name.category === 'datascience');
    const cloudComputing = names.filter((name) => name.category === 'cloudcomputing');

    let selectedNames: Name[] = [];

    if (selectedButton === 'mobiledevelopment') {
        selectedNames = mobileDevelopment;
    } else if (selectedButton === 'webdevelopment') {
        selectedNames = webDevelopment;
    } else if (selectedButton === 'datascience') {
        selectedNames = dataScience;
    } else if (selectedButton === 'cloudcomputing') {
        selectedNames = cloudComputing
    }


    const nameElements = selectedNames.map((name, index) => (

        <div key={index}>
            <div className=" text-lg sm:text-sm py-5 lg:py-0">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                    <img
                        src={name.imageSrc}
                        alt={name.imageSrc}
                        className="h-full w-full object-cover object-center"
                    />
                </div>
                <div className='flex justify-between'>
                    <div className="mt-6 block font-normal text-gray-900">
                        {name.course}
                    </div>
                    <div className="mt-6 block text-lg font-semibold text-green border-solid border-2 border-green rounded-md px-1">
                        ${name.price}
                    </div>
                </div>
                <p aria-hidden="true" className="mt-2 mb-5 text-2xl font-semibold ">
                    {name.profession}
                </p>

                <div className='flex justify-between border-solid border-2 border-grey500 rounded-md p-2'>
                    <p>12 Classes</p>
                    <div className='flex flex-row space-x-4'>
                        <div className='flex'>
                            <img src={'/assets/courses/account.svg'} alt="circle" />
                            <p className='text-lightgrey ml-1'>120</p>
                        </div>
                        <div className='flex'>
                            <img src={'/assets/courses/Star.svg'} alt="star" />
                            <p className='ml-1'>4.5</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    ));


    return (
        <div>
    <div id='courses-section' className="mx-auto max-w-2xl py-16 px-4 sm:py-36 sm:px-6 lg:max-w-7xl lg:px-8">

        <div className='sm:flex justify-between items-center pb-12'>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-gray-900 my-4">Our Dream Experts</h2>
            <div className="flex space-x-4 items-center">
               
                <button className="flex items-center bg-transparent   hover:bg-header hover:bg-green-500 text-green-500 font-medium hover:text-white py-3 px-4 border border-green-500 hover:border-transparent rounded">
                    <FiFilter/> Filter
                </button>
                <div className="inline-block relative">
                    <select className="custom-select cursor-pointer hover:bg-header hover:text-white block appearance-none w-full border border-gray-300 rounded-md py-3 px-4 pr-8 leading-tight ">
                        <option>Sort by</option>
                        <option>Price</option>
                        <option>Rating</option>
                        <option>Newest</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path d="M5.59 7l5 5 5-5H5.59z"/>
                        </svg>
                    </div>
                </div>
                <button className="flex items-center bg-transparent hover:bg-header hover:text-white hover:bg-blue-500 text-blue-500 font-medium hover:text-white py-3 px-4 border border-blue-500 hover:border-transparent rounded">
                    <MdFavoriteBorder/>Favorites
                </button>
            </div>
        </div>

        <div>
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 py-12">
                    <Card/>
                </div>
            </div>
        </div>

    </div>
</div>

    );
}

export default NamesList;




