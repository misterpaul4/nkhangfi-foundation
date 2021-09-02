import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
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

  const [isVisible, setIsVisible] = useState(false);
  const [vidLinkIndex, setVidLinkIndex] = useState(0);

  const handleClose = () => setIsVisible(false);

  // const ACCEPTED_EMBED_VIDEOS = ["youtube"];

  const displayVideoModal = vidIndex => {
    setVidLinkIndex(vidIndex)
    setIsVisible(true);
  };

  const AttachVideos = (vid, index) => {
      if (vid.link.includes("youtube")) {
        return(
            <button onClick={() => displayVideoModal(index)} className="event-video-iframe d-block" key={index}>
              <i className="fas fa-video mr-2"></i>
              {vid.title}
            </button>
          )
      } else {
        return(
            <Link
            to={{pathname: vid.link}}
            target="_blank"
            rel="noopener noreferrer"
            className="event-video-iframe d-block"
            data-toggle="tooltip"
            title="You will be re-directed to Facebook"
            key={index}
            ><i className="fab fa-facebook mr-2"></i>
            {vid.title}
            </Link>
          )
      }
  };

  const AttachPhotos = (photo, index) => (
    <img src={photo.source} alt={photo.alt} className="col-sm-3" key={index} />
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
          <hr />

            { videoEmbed ?

              <div className="video-modal-container mt-2">
              {videos.map(AttachVideos)}
              <Modal
              show={isVisible}
              onHide={handleClose}
              className="popup-modal"
              aria-labelledby="contained-modal-title-vcenter"
              size="lg"
              backdrop="static"
              centered
              >
              <Modal.Header closeButton className="popup-closeBtn">
              </Modal.Header>
              <div className="iframe-video-container embed-responsive embed-responsive-16by9">
                <iframe src={videos[vidLinkIndex].link}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="embeded video"
                  allowFullScreen="true"
                  webkitallowfullscreen="true"
                  mozallowfullscreen="true"
                  controls="1"
                  alt="embeded video"
                  className="embed-responsive-item"
                  ></iframe>
                </div>
              </Modal>
              </div>

          : null }
            {/* <hr></hr> */}
          {/* <div><Link><i class="fas fa-angle-double-right mr-2"></i>Link to next event</Link></div> */}

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



            </div>
          </div>
        </div>

      </div>
  </section>
  );
}

export default Template;
