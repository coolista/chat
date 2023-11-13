"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/assets/slickCompany/airbnb.svg"
    },
    {
        imgSrc: "/assets/slickCompany/hubspot.svg"
    },
    {
        imgSrc: "/assets/slickCompany/microsoft.svg"
    },
    {
        imgSrc: "/assets/slickCompany/google.svg"
    },
    {
        imgSrc: "/assets/slickCompany/walmart.svg"
    },
    {
        imgSrc: "/assets/slickCompany/fedex.svg"
    },
]


// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (

            <div className='bg-lightpink'>
            <div className="mx-auto max-w-2xl py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                {/* Textarea başlığı */}
                <h2 className="text-3xl font-bold text-gray-900 mb-4 text-left">
                    Write Your Dream
                </h2>
        
                {/* Textarea */}
                <textarea
                    className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
                    rows={10}
                    placeholder="Type Your Dream Here..."
                ></textarea>
        
                {/* Gönder butonu */}
                <div className="text-right mt-4">
                    <button
                        className="px-4 py-2 bg-header bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700"
                    >
                        Next:Choose Dream Experts
                    </button>
                </div>
            </div>
        </div>

        )
    }
}
