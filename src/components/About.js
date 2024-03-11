import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component{
    constructor(props){
        super(props)
        // console.log("parent constructor")
    }
    render(){

    return(
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Adarsh Kumar Singh</h1>
        <p className="mb-2">Location: Noida, Uttar Pradesh</p>
        <p className="mb-2">Phone: +91-8172802169</p>
        <p className="mb-2">Email: <a href="mailto:thakuradarsh439@gmail.com">thakuradarsh439@gmail.com</a></p>
        <p className="mb-4">Links: <a href="https://www.linkedin.com/in/adarsh-kumar-singh/" className="mr-2">LinkedIn</a> | <a href="https://github.com/adarshsingh29">Github</a></p>

        <h2 className="text-2xl font-semibold mb-2">Experience</h2>
        <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">ElectrifAi | December 2022 – November 2023</h3>
            <p>Associate Software Engineer, Noida, UP</p>
            <ul className="list-disc pl-8">
                <li>Led the development of FarmAi as a Full Stack Developer in React and Redux for frontend and used dropwizard framework in Java and SQL for efficient data retrieval from tables to power RESTful APIs.</li>
                <li>Developed highly interactive and visually appealing front-end functionalities using React.js, including Animations and user interface design, to enhance user engagement and experience.</li>
                {/* Add other points from your experience */}
            </ul>
        </div>

        <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Axtria | Jan 2022 – November 2022</h3>
            <p>Software Trainee, Noida, UP</p>
            <ul className="list-disc pl-8">
                <li>Managed the Frontend development using React for DataMAx™ Emerging Pharma which was a SaaS solution to pharmaceutical companies and also gave my ideas for design and on conceptualization and design phase.</li>
                {/* Add other points from your experience */}
            </ul>
        </div>

        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <div className="mb-4">
            <h3 className="text-lg font-semibold mb-2">Movie Recommendation System | React, Redux, Tailwind CSS, Firebase | November 2021</h3>
            <p>Developed a Swiggy-inspired application using React and Redux to streamline food delivery services and enhance user experience.</p>
            {/* Add other projects if any */}
        </div>

        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <p>Programming Languages: JavaScript, HTML/CSS, SQL, C++, Python, Core Java, PHP, C</p>
        <p>Developer Tools: Postman, Google Cloud Platform, Android Studio, Docker, AWS S3, Matilion ETL</p>
        <p>Technologies/Frameworks: ReactJS, React Native (Beginner), MySQL, Bootstrap, Tailwind, GitHub, Amazon Redshift</p>

        <h2 className="text-2xl font-semibold mb-2">Education</h2>
        <p>Galgotia College Of Engineering and Technology | May 2022</p>
        <p>Bachelor of Science in Information Technology, Secured an aggregate of 7.7 CGPA, Greater Noida, UP</p>

        <h2 className="text-2xl font-semibold mb-2">Logged in User</h2>
        <UserContext.Consumer>
            {({loggedInUser}) => <p className="font-semibold">{loggedInUser}</p>}
        </UserContext.Consumer>

        <h2 className="text-2xl font-semibold mb-2">Additional Information</h2>
        {/* You can add any additional information here */}
        <UserClass name="adarsh" />
    </div>
);
    }
}

export default About;