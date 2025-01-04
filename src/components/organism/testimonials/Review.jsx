'use client';

import React, { useState } from 'react';

const Review = () => {
  // State to manage the visibility of each review's extra content
  const [expanded, setExpanded] = useState(null);

  // Function to toggle the visibility of content
  const toggleContent = (index) => {
    // Toggle between showing and hiding the content
    setExpanded(expanded === index ? null : index);
  };

  const reviews = [
    {
      name: "Sumeet Sawlani",
      location: "Bhopal",
      text: "Our group has reached a huge number of people throughout the country through Magicbricks. The response is tremendous and we are glad to be a part of your website. Thank you. Keep up ...",
      additionalText: "the good work. We have seen a significant increase in our customer base.",
      image: "https://storage.googleapis.com/a1aa/image/yXGOZNRAfr2MBKQ1KiskBEnIZVk32TYVnhoIXuol83IUF1AKA.jpg"
    },
    {
      name: "Milind Desai",
      location: "Delhi",
      text: "Magicbricks.com comes across as one of the most organised & informative websites in the country for real estate news, views, trends & much more. Personally I found a rented house wit...",
      additionalText: "h ease and the process was very smooth.",
      image: "https://storage.googleapis.com/a1aa/image/LjER4LIU0f39U67L1ytf7krthtFeDePblKaiQ0SM5ogWqoGQB.jpg"
    },
    {
      name: "Rumpa Dutta",
      location: "Ahmedabad",
      text: "I have been using Magicbricks.com as an individual since its launch, and as a real estate professional since a few years. It has helped give sound advice to aspiring property buyers ...",
      additionalText: "and has been a great platform for my business.",
      image: "https://storage.googleapis.com/a1aa/image/UBqM1YCkNNK0BpaJwU4fedIBhrcMfiazHDnhim9cUGQMVUDoA.jpg"
    },
    {
      name: "Ravindra Chavan",
      location: "Pune",
      text: "Excellent Portal and very good quality service. Magicbricks is providing great service to everyone looking for real estate. Anyone can easily find the property of their choice. Six m...",
      additionalText: "onths ago, I found my dream home through this platform.",
      image: "https://storage.googleapis.com/a1aa/image/yhXNAiaqsF5OBh5gX6OfchMXjNlQo7wLJHuUPTBKeeNVVUDoA.jpg"
    },
    {
      name: "Hem Batra",
      location: "Delhi",
      text: "Magicbricks.com and I started in the Real Estate business at almost the same time. This web portal just provided the best platform I needed to make a launch. After 5 year, I have a...",
      additionalText: "long list of satisfied clients provided by Magicbricks.com, as it really provides the best way to advertise with numerous listing packages, least online errors and maximum online visibility. I thank the whole team of MagicBricks for providing the best tool to young and aspiring consultants like me, and hope many more success stories can be made with your help. I wish MagicBricks all the best for coming future.",
      image: "https://storage.googleapis.com/a1aa/image/yXGOZNRAfr2MBKQ1KiskBEnIZVk32TYVnhoIXuol83IUF1AKA.jpg"
    }
    ,
    {
      name: "Dalip Singh",
      location: "Kolkata",
      text: "It is with great pleasure that I am writing this letter to endorse MagicBricks.com. If you want a wide reach and top notch service, make MagicBricks your first choice. Their rates are...",
      additionalText: " reasonable and customer service is excellent with a group of true professionals, who are sensitive to your needs and keen to resolve any issues that you need addressed. I plan to continue utilizing their services and would recommend MagicBricks for any real estate needs you might have. I am so happy with the response, that despite solicitation calls from other property sights, I frankly donbt feel the need of their services.",
      image: "https://storage.googleapis.com/a1aa/image/UBqM1YCkNNK0BpaJwU4fedIBhrcMfiazHDnhim9cUGQMVUDoA.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Customer Stories</h1>
      <div className="grid px-11 grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-gray-500 border-2">
            <p className="text-gray-700 mb-4">
              {review.text}
              {expanded === index && (
                <span className="inline">{review.additionalText}</span>
              )}
              <a
                href="#"
                className="text-blue-500 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();  // Prevent the default anchor behavior
                  toggleContent(index);
                }}
                aria-expanded={expanded === index}
              >
                {expanded === index ? "Less" : "More"}
              </a>
            </p>
            <div className="flex items-center">
              <img alt={`Profile picture of ${review.name}`} className="w-12 h-12 rounded-full mr-4" height="50" src={review.image} width="50" />
              <div>
                <p className="font-bold">{review.name}, <span className="text-gray-500">{review.location}</span></p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, starIndex) => (
                    <i key={starIndex} className="fas fa-star text-yellow-500"></i>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
