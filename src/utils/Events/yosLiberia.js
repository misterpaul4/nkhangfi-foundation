import img1 from '../../images/events/yos_liberia1.jpg';
import img2 from '../../images/events/yos_liberia2.jpg';
import img3 from '../../images/events/yos_liberia3.jpg';
// import { nspApplicationUrl } from '../Forms';
import { Link } from 'react-router-dom';
import '../../css/utils.css';
import mainImg from '../../images/events/yos_liberia.png';
import Events from '../events';

// const isFirefox = typeof InstallTrigger !== 'undefined';

const AttachEvents = (ev, index) =>{
  if(index < 7 && ev.link !== 'yos_liberia') {
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

const Event = {
  extraContent: false,
  // formExtrasEduc: true,
  // FORMSPARK_ACTION_URL: nspApplicationUrl,
  // formName: "nkhangfi scholarship program application",
  pathName: 'yos_liberia',
  bg: 'nk-events-exam',
  name: 'yös exam',
  theme: 'yös exam, liberia',
  parent: 'events',
  image: mainImg,
  title: 'Yös exam was conducted in Liberia',
  messageTop: "The Yös exam was successfully conducted in Liberia thanks to our dearest partner Royal Destiny Multipurpose Consultancy",
  messageBottom: () => (
    <>
    <p>We are very proud of the students that participated in the exam and we are wishing them success.</p>

    <div className="row sm-images justify-content-center">
      <img src={img1} alt="nsp flyers" className="col-sm-3"></img>
      <img src={img2} alt="nsp flyers" className="col-sm-3"></img>
      <img src={img3} alt="nsp flyers" className="col-sm-3"></img>
    </div>
    </>
  ),
  sideContent: () => (
    <>
      <div>
        <h3>More Updates</h3>
        {Events.map(AttachEvents)}
      </div>

      <hr></hr>

      <div className="text-center">
      <h3>Examination video</h3>
      <iframe src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FNkhangfifoundation%2Fvideos%2F184234420370061%2F&show_text=false&width=269&t=0" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true" title="fb" height="476" className="fb-embed" controls="1"></iframe>
      </div>
    </>
  ),
}

export default Event;
