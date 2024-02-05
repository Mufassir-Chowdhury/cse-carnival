//add the name of the makers of the project in card, showing there role, image, facebook, github, linkedin id, get the contributors from a array of objects
//don't use material ui card, use a custom card
//no fetch request
//no search bar
import React, { useState, useEffect } from 'react';

//make dummy data for the contributors
const Contributor = [
    {
        id: 1,
        name: "Anurag",
        role: "Frontend Developer",
        image: "https://avatars.githubusercontent.com/u/72213826?v=4",
        facebook: "https://www.facebook.com/anurag.kumar.165470",
        github: "ernfiuerbfiebr",
        linkedin: "https://www.linkedin.com/in/anurag-kumar-8b5b4b1a7/"
    },
    {
        id: 2,
        name: "Anurag",
        role: "Frontend Developer",
        image: "https://avatars.githubusercontent.com/u/72213826?v=4",
        facebook: "https://www.facebook.com/anurag.kumar.165470",
        github: "ernfiuerbfiebr",
        linkedin: "https://www.linkedin.com/in/anurag-kumar-8b5b4b1a7/"
    },
    {
        id: 3,
        name: "Anurag",
        role: "Frontend Developer",
        image: "https://avatars.githubusercontent.com/u/72213826?v=4",
        facebook: "https://www.facebook.com/anurag.kumar.165470",
        github: "ernfiuerbfiebr",
        linkedin: "https://www.linkedin.com/in/anurag-kumar-8b5b4b1a7/"
    },
    {
        id: 4,
        name: "Anurag",
        role: "Frontend Developer",
        image: "https://avatars.githubusercontent.com/u/72213826?v=4",
        facebook: "https://www.facebook.com/anurag.kumar.165470",
        github: "ernfiuerbfiebr",
        linkedin: "https://www.linkedin.com/in/anurag-kumar-8b5b4b1a7/"
    },
    {
        id: 5,
        name: "Anurag",
        role: "Frontend Developer",
        image: "https://avatars.githubusercontent.com/u/72213826?v=4",
        facebook: "https://www.facebook.com/anurag.kumar.165470",
        github: "ernfiuerbfiebr",
        linkedin: "https://www.linkedin.com/in/anurag-kumar-8b5b4b1a7/"
    },
    {
        id: 6,
        name: "Anurag",
        role: "Frontend Developer",
        image: "https://avatars.githubusercontent.com/u/72213826?v=4",
        facebook: "https://www.facebook.com/anurag.kumar.165470",
        github: "ernfiuerbfiebr",
        linkedin: "https://www.linkedin.com/in/anurag-kumar-8b5b4b1a7/"
    },
]

//make a card component image on top in a circle, name and role below it, then the social media links
const Card = ({ name, role, image, facebook, github, linkedin }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-4 ">
            <div className="flex justify-center">
                <img src={image} alt="profile" className="h-24 w-24 rounded-full" />
            </div>
            <h1 className="text-xl font-semibold text-center mt-4">{name}</h1>
            <h2 className="text-lg font-semibold text-center mt-2">{role}</h2>
            <div className="flex justify-center gap-2 mt-4">
                <a href={facebook} target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-square text-3xl text-blue-600">F</i>
                </a>
                <a href={github} target="_blank" rel="noreferrer">
                    <i className="fab fa-github-square text-3xl text-black">G</i>
                </a>
                <a href={linkedin} target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin text-3xl text-blue-800">L</i>
                </a>
            </div>
        </div>
    )
}

//make the contributor component showing all the items
const Contributors = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 pt-28 sm:py-28">
            {Contributor.map((contributor) => {
                return (
                    <Card key={contributor.id} {...contributor} />
                )
            })}
        </div>
    )
}

export default Contributors;

