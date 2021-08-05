import React, { useState } from 'react';
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

  const displayVideoModal = vidIndex => {
    setVidLinkIndex(vidIndex)
    setIsVisible(true);
  };

  const AttachVideos = (vid, index) => (
    <>
      <button onClick={() => displayVideoModal(index)} className="event-video-iframe d-block">
        <i class="fas fa-video mr-2"></i>
        {vid.title}
      </button>
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
          <p><img src={image.source} alt={image.source.alt} className="img-fluid"></img></p>
          {messageBottom()}
          {additionalPhotos ?
           <div className="row sm-images">
              {photos.map(AttachPhotos)}
           </div> :
           null
          }
            <hr></hr>

            { videoEmbed ?
            <div>
              {videos.map(AttachVideos)}
              <Modal show={isVisible} onHide={handleClose} className="popup-modal" aria-labelledby="contained-modal-title-vcenter" centered>
              <Modal.Header closeButton className="popup-closeBtn">
              </Modal.Header>
              <div className="event-pop-modal">
              <iframe src={videos[vidLinkIndex].link}
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
                title="embeded video"
                webkitallowfullscreen="true"
                mozallowfullscreen="true"
                controls="1"
                alt="embeded video"
                ></iframe>
              </div>
              </Modal>
            </div>
          : null }

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
