import React from 'react';
import '../css/testimonial.css'
import bgImgFofanah from '../images/testimonial/fofanah.jpeg';
import bgImgAbdul from '../images/testimonial/jelil.jpeg';
import bgImgPatrick from '../images/testimonial/kondjo.jpeg';
import bgImgAntone from '../images/testimonial/antoinette.jpeg';

const Testimonial = () => {
  const tts = [
    {
    name: "fofanah funkuba",
    dept: "computer engineering, north cyprus",
    message: "I benefited from the Nkhangfi Scholarship Program which was held in Sierra Leone 2019. I was awarded 100% scholarship to study at Kyrenia University all thanks to the Nkhangfi Team.",
    img: bgImgFofanah,
  },
  {
    name: "abdul jelil",
    dept: "student, belarus",
    message: "I am a huge benefactor of the Nkhangfi Scholarship Program. Thanks to them i am now continuing my studies in Belarus.",
    img: bgImgAbdul,
  },
  {
    name: "patrick kondjo",
    dept: "student, serbia",
    message: "Nkhangfi Travel is the real deal. Their services were outstanding and i do not know how i would have done it without them. I am in Serbia now thanks to Nkhangfi",
    img: bgImgPatrick,
  },
  {
    name: "Antoinette M.",
    dept: "worker, dubai",
    message: "Nkangfi Travel is amazing!!!.  there really wasn’t a single hiccup and today, I am legally working in Dubai.",
    img: bgImgAntone,
  }
]
  const Attach = testimony => (
    <div className="item col-md-5" key={testimony.name}>
    <div className="testimony-wrap">
      <div className="text">
        <div className="d-flex align-items-center mb-4">
          <div className="user-img" style={{backgroundImage: `url(${testimony.img})`}}>
            <div className="icon d-flex align-items-center justify-content-center"><span className="fa fa-quote-left"></span></div>
          </div>
          <div className="ps-3 tx">
            <p className="name">{testimony.name}</p>
            <span className="position">{testimony.dept}</span>
          </div>
        </div>
        <p className="mb-4 msg">{testimony.message}</p>
      </div>
    </div>
  </div>
  );

  return (
    <section className="ftco-section testimony-section bg-light">
      <div className="container-xl">
        <div className="row justify-content-center pb-4">
          <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-5">Our Successes</h2>
          </div>
        </div>

        <div className="row border justify-content-center">
          {tts.map(Attach)}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
