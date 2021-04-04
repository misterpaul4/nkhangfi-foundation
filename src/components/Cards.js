import React from 'react';
import { Link } from 'react-router-dom';

const Cards = props => {
  const CardsData  = props.data.items;

  const Attach = item => (
    <div className="col-md-4" key={item.title}>
    <div className="blog-entry justify-content-end">
      <Link className="block-20 img" style={{backgroundImage: `url(${item.image})`}}>
      </Link>
      <div className="text">
        <p className="meta">{item.opt()}</p>
        <h3 className="heading mb-3">
          <Link className="text-capitalize">{item.title}</Link>
          </h3>
        <p className="spread-p">{item.message()}</p>
      </div>
    </div>
  </div>
  );

  return (
    <section className="ftco-section bg-light ftco-no-pt">
    <div className="container-xl">
      <div className="row justify-content-center mb-5">
        <div className="col-md-7 heading-section text-center">
          <span className="subheading">{props.data.theme}</span>
          <h2 className="text-capitalize">{props.data.catchphrase}</h2>
        </div>
      </div>
      <div className="row justify-content-center">
        {CardsData.map(Attach)}
        {/* optional content */}
      </div>
    </div>
  </section>
  );
};

export default Cards;
