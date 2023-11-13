"use client"
import * as React from "react";
import { useState } from "react";
import {AiFillHeart} from 'react-icons/ai';




const NamesList = () => {

    return (
        <>
      
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3 relative" style={{ width: '18rem' }}>
                <AiFillHeart className="hover:-translate-y-1 transform transition duration-300 ease-in-out absolute text-3xl cursor-pointer  text-button top-0 right-0 m-2 text-red-500" />
                <img src="../../../assets/card/experts.png" className="card-img-top w-full h-56 object-cover object-center" alt="Expert Profile" />
                <div className="card-body p-2">
                    <h5 className="card-title text-lg font-bold mb-3">Card title</h5>
                    <p className="card-text text-gray-700 mb-4">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                    <div className="star-rating flex mb-4">
                        <div className="rating">
                            <span className="star text-yellow-500">&#9734;</span>
                            <span className="star text-yellow-500">&#9734;</span>
                            <span className="star text-yellow-500">&#9734;</span>
                            <span className="star text-yellow-500">&#9734;</span>
                            <span className="star text-yellow-500">&#9734;</span>
                        </div>
                        <input type="hidden" name="whatever" className="rating-value" value="2.56" />
                    </div>
                    <div className="card_footer flex justify-between items-center">
                        <span className="price text-xl font-semibold">$12 USD</span>
                        <a href="#" className="bg-button add-card bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div className="card bg-white shadow-lg rounded-lg overflow-hidden w-full md:w-1/2 lg:w-1/3 relative" style={{ width: '18rem' }}>
            <AiFillHeart className="hover:-translate-y-1 transform transition duration-300 ease-in-out cursor-pointer absolute text-button text-3xl top-0 right-0 m-2 text-red-500" />
            <img src="../../../assets/card/experts.png" className="card-img-top w-full h-56 object-cover object-center" alt="Expert Profile" />
            <div className="card-body p-2">
                <h5 className="card-title text-lg font-bold mb-3">Card title</h5>
                <p className="card-text text-gray-700 mb-4">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
                <div className="star-rating flex mb-4">
                    <div className="rating">
                        <span className="star text-yellow-500">&#9734;</span>
                        <span className="star text-yellow-500">&#9734;</span>
                        <span className="star text-yellow-500">&#9734;</span>
                        <span className="star text-yellow-500">&#9734;</span>
                        <span className="star text-yellow-500">&#9734;</span>
                    </div>
                    <input type="hidden" name="whatever" className="rating-value" value="2.56" />
                </div>
                <div className="card_footer flex justify-between items-center">
                    <span className="price text-xl font-semibold">$12 USD</span>
                    <a href="#" className="bg-button add-card bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</a>
                </div>
            </div>
        </div>
    
</>

    );
}

export default NamesList;




