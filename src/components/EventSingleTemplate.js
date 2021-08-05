import React from 'react';
import Events from './EventSidePanel';

const Template = event => {

  const {
    title,
    messageTop,
    messageBottom,
    image,
    videoEmbed,
    videos,
    optionalSideContent,
    additionalPhotos,
    photos,
  } = event.data;

  const AttachVideos = (vid) => (
    <div className="videoWrapper h-100">
      <h3>{vid.title}</h3>
      <iframe src={vid.link}
      scrolling="no"
      frameborder="0"
      allowfullscreen="true"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen="true"
      title="embeded video"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      // height="476"
      controls="1"
      alt="embeded video"
      ></iframe>
      {/* <a href={vid.link} target="_blank" rel="noreferrer">video link</a> */}
    </div>
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
          <p><img src={image.source} alt={image.source.alt} className="img-fluid"></img></p>
          {messageBottom()}
          {additionalPhotos ?
           <div className="row sm-images">
              {photos.map(AttachPhotos)}
           </div> :
           null
          }
        </div>

        <div className="col-lg-4 sidebar pl-md-4">
          <div className="sidebar-box">
            <div>
              {optionalSideContent ?
                event.data.sideContent() :
                null
              }
              <h3 className="mt-4">More Updates</h3>
              <Events numOfEvents={7} />
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
