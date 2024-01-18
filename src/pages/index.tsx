import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import HeroImage from "../components/HeroImage";
import Commissions from "../components/Commissions";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col dark:bg-gray-900">
      <Head>
        <title>Stella Roloff</title> {/* Set your custom title here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/HR-PhotoRoom.png" /> {/* Favicon link */}
      </Head>

      <div className="flex flex-col dark:bg-gray-900">
        <Nav />
        <HeroImage />
        <Profile />
        <Projects />
        <Commissions />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
