import React, { useState, useEffect } from "react";
import Head from "next/head";

import Footer from "../components/Footer";
import Nav from "../components/Nav";

import Projects from "../components/Projects";
import Profile from "../components/Profile";

import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section5 from "../components/Section5";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col dark:bg-gray-900">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/HR-PhotoRoom.png" /> {/* Favicon link */}
      </Head>

      <div className="flex flex-col dark:bg-gray-900">
        <Nav />
        <Profile />
        <Projects />
        <Section2 />
        <Section3 />
        <Section5 />
        <Footer />
      </div>
    </div>
  );
}
export default Home;
