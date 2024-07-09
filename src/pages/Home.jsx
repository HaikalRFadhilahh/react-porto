import React from "react";
import Layout from "../components/Layout";
import Typed from "react-typed";

const Home = () => {
  return (
    <Layout title={"Home"} textcolor={"text-black"}>
      <div
        className={"w-screen min-h-screen h-fit bg-center bg-cover"}
        style={{ backgroundImage: `url('/IMG/setup.jpg')` }}>
        <div className='container mx-auto flex justify-center items-center flex-col min-h-screen h-full gap-6 py-20'>
          <div
            className={
              "w-32 aspect-square bg-red-300 rounded-full bg-cover bg-center overflow-hidden"
            }>
            <img src='/IMG/self.jpg' alt='' className={"w-full h-full"} />
          </div>
          {/* <h2 className={"text-4xl font-semibold font-serif text-center selection:bg-teal-400 selection:text-slate-900"}>
            I'm Haikal R Fadhilah
          </h2> */}
          <Typed
            strings={[
              "I'm Haikal R Fadhilah",
              // "I'm Web Developer",
              "I'm DevOps Engineer",
              "I'm CTF Player",
              // "I'm Cyber Security Ethusiast",
            ]}
            typeSpeed={150}
            backSpeed={70}
            loop
            className={
              "text-3xl lg:text-4xl font-semibold text-black font-serif text-center selection:bg-teal-400 selection:text-slate-900"
            }
          />
          <p
            className={
              "text-center w-3/4 text-slate-800 text-lg selection:bg-teal-400 selection:text-slate-900"
            }>
            With my interest and experience in the world of programming, I have
            worked for several organizations related to programming, to be
            precise, namely web programming and data analysts and have made
            several products.
            <span className={"hidden lg:block"}>
              {" "}
              By forming a team, we can develop an application even better.
            </span>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
