import React, { useState, useEffect } from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import Education from "../components/Education";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col dark:bg-gray-900">
      <Head>
        <title>Harrison Roloff</title> {/* Set your custom title here */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/HR-PhotoRoom.png" /> {/* Favicon link */}
      </Head>

      <div className="flex flex-col dark:bg-gray-900">
        <Nav />
        <Profile />
        <Projects />
        <Education />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
