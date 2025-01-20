"use client";  // Add this directive to mark the component as a client component

import { useParams } from "next/navigation"; // Use `useParams` instead of `useRouter`
import React from "react";

// Example blog data
const blogData = [
    {
        id: "1",
        title: "The Dos and Don’ts of Buying Land",
        image: "/assets/blog/1.png", // Replace with an actual image path or URL
        content: `
            <p>Buying land is a dream for many people. Purchasing land is also one of the important investments one can make. The Dos and Don’ts of Buying Land Purchasing a plot tailored for your dream home may seem like the perfect investment. Whether you are purchasing a home, ranch property, or farm, there are things to consider that may prevent you from making your land purchase a success. The Dos and Don’ts of Buying Land will make the process easier and save you time, money, and heartache before you ever visit your dream home site. We are here to assist you in making the greatest decision possible. Here are some dos and don’ts for buying land:</p>
            <h2>1. DO: Research the neighborhood</h2>
            <p>
            Before you make an offer, it's important to do your research on the neighborhood. This will help you determine whether or not it's a good fit for you and your family. Researching the area will also give you a better idea of how much money you can afford to spend on the home and property. You might even find out that there are plans in place for new businesses and developments that could potentially increase the value of your property in years to come.
            </p>
            <h2>2. DON'T: Buy without a realtor</h2>
            <p>
            When it comes time to buy land, having a realtor by your side can be extremely helpful—especially if this is your first time buying property! A realtor will work with you throughout the process, which can be daunting at times when it seems like there are so many things to consider before making an offer on any given piece of land. They'll also make sure all documents are signed correctly and quickly so that you don't have to worry about any legal issues later down the road (which could ultimately cost more money than paying for an agent upfront)
            </p>
            <h2>3. DO: Investigate zoning laws and making plans controls</h2>
            <p>
            It is essential to understand the regulations associated with a specific piece of land, such as zoning laws and planning controls. These factors will influence the costs of owning and building property, the dimensions and specifications of your property, and whether or not you can even build property. Carrying out this due diligence before purchasing a piece of vacant land will help to avoid a slew of problems
            </p>
            <h2>4. DON'T: Let emotions cloud your judgement</h2>
            <p>
            It's important not to let emotion influence your decision when buying land. For example, if your family has always wanted to live on a particular piece of property and it's up for sale, it may be tempting to buy it even if it isn't within your budget or doesn't meet any other criteria that would make it an ideal investment opportunity (like being near schools or shopping).
            </p>
        `,
    },
    {
        id: "2",
        title: "Why Thane is good for investment in Plots?",
        image: "/assets/blog/2.jpg", // Replace with an actual image path or URL
        content: `
            <p>
            Thane is an emerging cosmopolitan city in the Mumbai Metropolitan Area and the most preferred real estate investment destination. Affordable lifestyle with necessary amenities at value-oriented pricing and Infrastructural development have been the key differentiation factors that set Thane apart from the other real estate markets in the nearby adjoining areas Its rise in the last few years has been supremely phenomenal and has made Thane an undisputed hotshot of real estate properties and one of the best investment destinations. This implies the fact that Thane is good for investment.
            </p>
            <p?
            Its rise in the last few years has been supremely phenomenal and has made Thane an undisputed hotshot of real estate properties and one of the best investment destinations. This implies the fact that Thane is good for investment.
            </p>
            Before you make an offer, it's important to do your research on the neighborhood. This will help you determine whether or not it's a good fit for you and your family. Researching the area will also give you a better idea of how much money you can afford to spend on the home and property. You might even find out that there are plans in place for new businesses and developments that could potentially increase the value of your property in years to come.
            </p>
            <p>
            Testified data tells us that it has not only made its image as an industrial town but has evolved as a lone real estate destination blooming with prime exponential growth. Thane accounted for almost 65% of the city’s overall property supply between 2012 to 17. Property experts believe that real estate buyers here have benefited from 300% growth in the past five years. Economists and analytic advisors suggest an estimated 40% increase in employment opportunities in the MMR, which includes Thane. Such a perfectly predicted hike in jobs would be followed by a large increase in the demand for housing facilities and return, which could generate further capital elevation for real estate and property investments in Thane which implies the fact that Thane is good for investment. In the past year alone, Thane held 18% of the entire supply of residential projects launched in MMR. What is more interesting is the fact that of the 70,000 housing units that hit the Thane market in the last five years, 53% have already been sold out. Today, with its excellent geographical and social infrastructure and the presence of major official complexes and malls, Thane is no longer implied to be a distant cousin of Mumbai. On the real estate investment records, Thane proves to be on top and therefore is considered a good option for investment. The ability for spatial expansion gives Thane a fairly competitive edge over the other severely space-constrained and congested regions of Mumbai which again makes Thane good for investment. Thane also enjoys superb connectivity to Navi Mumbai as well as to the Eastern and Western Suburbs of Mumbai which indicates the fact that Thane is good for investment.
            </p>
           
        `,
    },
    {
        id: "3",
        title: "The Dos and Don’ts of Buying Land",
        image: "/assets/blog/2.jpg", // Replace with an actual image path or URL
        content: `
            <p>
            Buying land is a dream for many people. Purchasing land is also one of the important investments one can make. The Dos and Don’ts of Buying Land Purchasing a plot tailored for your dream home may seem like the perfect investment. Whether you are purchasing a home, ranch property, or farm, there are things to consider that may prevent you from making your land purchase a success. The Dos and Don’ts of Buying Land will make the process easier and save you time, money, and heartache before you ever visit your dream home site. We are here to assist you in making the greatest decision possible. Here are some dos and don’ts for buying land:
            </p>
            <h3>
            1. DO: Research the neighborhood
            </h3>
            <p>
           Before you make an offer, it's important to do your research on the neighborhood. This will help you determine whether or not it's a good fit for you and your family. Researching the area will also give you a better idea of how much money you can afford to spend on the home and property. You might even find out that there are plans in place for new businesses and developments that could potentially increase the value of your property in years to come.
            </p>
            <h3>
           2. DON'T: Buy without a realtor
            </h3>>
            <p>
            When it comes time to buy land, having a realtor by your side can be extremely helpful—especially if this is your first time buying property! A realtor will work with you throughout the process, which can be daunting at times when it seems like there are so many things to consider before making an offer on any given piece of land. They'll also make sure all documents are signed correctly and quickly so that you don't have to worry about any legal issues later down the road (which could ultimately cost more money than paying for an agent upfront)
            </p>

            2. DON'T: Buy without a realtor
            </h3>>
            <p>
            When it comes time to buy land, having a realtor by your side can be extremely helpful—especially if this is your first time buying property! A realtor will work with you throughout the process, which can be daunting at times when it seems like there are so many things to consider before making an offer on any given piece of land. They'll also make sure all documents are signed correctly and quickly so that you don't have to worry about any legal issues later down the road (which could ultimately cost more money than paying for an agent upfront)
            </p>

2. DON'T: Buy without a realtor
            </h3>
           2. DON'T: Buy without a realtor

When it comes time to buy land, having a realtor by your side can be extremely helpful—especially if this is your first time buying property! A realtor will work with you throughout the process, which can be daunting at times when it seems like there are so many things to consider before making an offer on any given piece of land. They'll also make sure all documents are signed correctly and quickly so that you don't have to worry about any legal issues later down the road (which could ultimately cost more money than paying for an agent upfront)
            <p>
            Testified data tells us that it has not only made its image as an industrial town but has evolved as a lone real estate destination blooming with prime exponential growth. Thane accounted for almost 65% of the city’s overall property supply between 2012 to 17. Property experts believe that real estate buyers here have benefited from 300% growth in the past five years. Economists and analytic advisors suggest an estimated 40% increase in employment opportunities in the MMR, which includes Thane. Such a perfectly predicted hike in jobs would be followed by a large increase in the demand for housing facilities and return, which could generate further capital elevation for real estate and property investments in Thane which implies the fact that Thane is good for investment. In the past year alone, Thane held 18% of the entire supply of residential projects launched in MMR. What is more interesting is the fact that of the 70,000 housing units that hit the Thane market in the last five years, 53% have already been sold out. Today, with its excellent geographical and social infrastructure and the presence of major official complexes and malls, Thane is no longer implied to be a distant cousin of Mumbai. On the real estate investment records, Thane proves to be on top and therefore is considered a good option for investment. The ability for spatial expansion gives Thane a fairly competitive edge over the other severely space-constrained and congested regions of Mumbai which again makes Thane good for investment. Thane also enjoys superb connectivity to Navi Mumbai as well as to the Eastern and Western Suburbs of Mumbai which indicates the fact that Thane is good for investment.
            </p>
            <
           
        `,
    },
    {
        id: "4",
        title: "Advantages of owning a Plots.",
        image: "/assets/blog/4.jpg", // Replace with an actual image path or URL
        content: `
            <p>
           There is no doubt that real estate is one of the most fruitful and stable forms of investment. While residential homes have become almost synonymous with real estate investments, they aren’t the only option available. If you are considering making a real estate investment, here’s why purchasing a plot of land should top your list.
            </p>
            <h3 classname="text-lg font-medium md:text-xl lg:text-2xl ">
            1. It offers greater flexibility
            </h3>
            <p>
          When purchasing an apartment, buyers are often limited to the architect’s vision of the home. They can only make a few customizations to the property and changing the layout of the home is completely out of the question. A plot of land, in contrast, is like a blank canvas to build your dream home upon. You can design your home from scratch, add elements that are important to you and even use your choice of materials. A house lasts you a lifetime, therefore it’s important that you have the power to design it in a way that matches your personality and lifestyle.
            </p>
            <h3 classname="text-lg font-medium md:text-xl lg:text-2xl ">
           2. Initial investment is low
            </h3>
            <p>
           Residential homes, even the most affordable ones, are typically priced much higher than a plot of land. Because of this, most potential investors use a home loan to finance their purchase. A plot of land, on the other hand, is much more cost-effective. They have low entry ticket size means that even young investors can purchase them without any financial obstacle in their way. Many investors, in fact, choose to purchase land early in life and build a home on it later, when they have more savings. This can work out to be much cheaper than purchasing a home and paying EMIs for it.
            </p>
            <h3 classname="text-lg font-medium md:text-xl lg:text-2xl ">
            3. Land is appreciating quickly
            </h3>
            <p>
          The most attractive feature of real estate investments is that they are almost guaranteed to appreciate. But while land and residential homes both have this in common, investing in a plot might give you an edge. Over the last few years, land has been appreciating much faster than residential property. The value of land is also dependent on the surrounding infrastructure. Improvements in the latter will guarantee a direct increase in the former. When clubbed together with the low investment required to purchase it, land offers much higher returns in a shorter period.
            </p>

        `,
    },
    // Add more blogs here if necessary
];

const BlogPage = () => {
    const { blogId } = useParams(); // Automatically extracts the blogId from the URL

    console.log(blogId); // Check the blogId in the console

    // Find the blog post by ID
    const blog = blogData.find((item) => item.id === blogId);

    // Handle case where blog is not found
    if (!blog) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h1 className="text-2xl font-bold text-gray-600">Blog not found</h1>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">{blog.title}</h1>
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-auto rounded-lg shadow-md mb-8"
            />
            <div
                className="prose prose-lg prose-gray max-w-none"
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
        </div>
    );
};

export default BlogPage;
