import React from 'react';
import { Link } from 'react-router-dom';
import Events from '../utils/events';

const Template = event => {

  const {
    title,
    messageTop,
    messageBottom,
    image,
    link,
    videoEmbed,
    videos,
    optionalSideContent,
    sideContent,
    additionalPhotos,
    photos,
  } = event.data;

  console.log(link);

  const AttachEvents = (ev, index) =>{
    if(index < 7 && ev.link !== link ) {
      return (
        <div className="block-21 mb-4 d-flex align-items-center" key={index}>
          <Link to={`/event/${ev.link}`} className="blog-img img rounded mr-2" style={{backgroundImage: `url(${ev.image})`}}></Link>
          <div className="text">
            <div className="meta">
              <div><Link to={`/event/${ev.link}`}><i className="fa fa-calendar me-1"></i>{ev.startdate} &nbsp;
              {
                ev.enddate ?
                <>- &nbsp; <i className="fa fa-calendar me-1"></i>{ev.enddate}</>
                : ''
              }
              </Link></div></div>
            <h3 className="heading"><Link to={`/event/${ev.link}`}>{ev.title}</Link></h3>
          </div>
        </div>
      );
    }
  };

  const AttachVideos = (vid) => (
    <>
      <h3>{vid.title}</h3>
      <iframe src={vid.link}
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen="true"
      title="embeded video"
      height="476"
      className="fb-embed"
      controls="1"
      alt="embeded video"
      ></iframe>
    </>
  );

  const AttachPhotos = photo => (
    <img src={photo.source} alt={photo.alt} className="col-sm-3" />
  );

  return (
    <section className="ftco-section">
    <div className="container">
      <div className="row">

        <div className="col-lg-8 blog-single">
          <h2 className="mb-3 text-capitalize">{title}</h2>
          <p>{messageTop}</p>
          <p><img src={image} alt="event" className="img-fluid"></img></p>
          {messageBottom()}
          {additionalPhotos ?
           <div className="row sm-images justify-content-center">
              {photos.map(AttachPhotos)}
           </div> :
           null
          }
        </div>

        <div className="col-lg-4 sidebar pl-md-4">
          <div className="sidebar-box">
            <div>
              {optionalSideContent ?
                sideContent() :
                null
              }
              <h3 className="mt-4">More Updates</h3>
              {Events.map(AttachEvents)}
            </div>

            <hr></hr>

            { videoEmbed ?
            <div className="text-center">
              {videos.map(AttachVideos)}
            </div>
          : null }
            </div>
          </div>
        </div>

      </div>
  </section>
  );
}

export default Template;
