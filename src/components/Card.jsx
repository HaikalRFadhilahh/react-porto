import React from "react";

const Card = ({ title, desc, type1, type2, img, github }) => {
  return (
    <div className='card min-w-[320px] w-[30%] max-w-[350px] bg-base-100 shadow-xl bg-slate-800'>
      <figure>
        <img src={img} alt={title} className={'aspect-[5/4] object-cover'} />
      </figure>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p>{desc}</p>
        <div className='card-actions justify-end'>
          <div className='badge badge-outline'>{type1}</div>
          <div className='badge badge-outline'>{type2}</div>
        </div>
        <a
          href={github}
          className={"btn bg-slate-600 text-white"}
          target={"_blank"}
          rel='noreferrer'>
          See On Github
        </a>
      </div>
    </div>
  );
};

export default Card;
