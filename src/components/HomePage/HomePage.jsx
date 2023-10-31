import React from "react";

import '../HomePage/HomePage.css';

import Header from "./Header/Header";
import Section1 from "./Section/Section1";
import Section2 from "./Section/Section2";
import Section3 from "./Section/Section3";
import Footer from "./Footer/Footer";

function HomePage() {
    return (
        <div className="div-wrapper">
            <Header />
            <Section1 />
            <Section2 />
            <img className="group-9" alt="Group" src="https://c.animaapp.com/p2Qtp7t2/img/group-14.png" />
            <Section3 />
            <Footer />
        </div>
    );
};

export default HomePage;