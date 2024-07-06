import React from "react";
import Layout from "../components/Layout";
import Card from "../components/Card";
import data from "../data/data";

const Portofolio = () => {
  return (
    <Layout title={"Portofolio"} textcolor={"text-black"}>
      <article className={`w-screen h-fit min-h-screen bg-[#F0F0F0] `}>
        <div className='container mx-auto py-16 flex justify-center flex-wrap gap-4'>
          <h2
            className={
              "w-full text-3xl text-center font-extrabold font-mono my-3 tracking-tight text-slate-900"
            }>
            My Project Portofolio
          </h2>
          {data.map((val) => {
            return (
              <Card
                title={val.title}
                desc={val.desc}
                type1={val.type1}
                type2={val.type2}
                img={val.img}
                github={val.github}
              />
            );
          })}
        </div>
      </article>
    </Layout>
  );
};

export default Portofolio;
