import banner from '../../images/events/1000.png';
import img1 from '../../images/gallery/14.jpeg';
import img2 from '../../images/gallery/15.jpeg';
import img3 from '../../images/gallery/17.jpeg';
import { nspApplicationUrl } from '../Forms';
import { Link } from 'react-router-dom';
import '../../css/utils.css';
import fofanah from '../../images/events/100.png';
import Events from '../events';

const AttachEvents = (ev, index) =>{
  if(index < 7 && ev.link !== '100_percent_scholarship') {
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
  formExtrasEduc: true,
  FORMSPARK_ACTION_URL: nspApplicationUrl,
  formName: "nkhangfi scholarship program application",
  pathName: '100_percent_scholarship',
  bg: 'nk-events-activities',
  name: 'scholarship',
  theme: 'success story',
  parent: 'events',
  image: banner,
  title: '100% scholarship candidate',
  messageTop: "Mr Fofanah Mohamed Funkuba participated in the Nkhangfi scholarship program of 2020 in Sierra Leone. He performed extremely well in the scholarship exams conducted by the Nkhangfi Team and for that reason, he was awarded 100% scholarship to study computer engineering in Kyrenia University.",
  messageBottom: () => (
    <>
    <img src={fofanah} alt="scholarship letter from kyrenia university" className="w-100">
    </img>
    <p>Fofanah is currently in Cyprus and his story serves as an inspiration to those who work hard. Nothing is impossible.</p>

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


      <h3>Watch Fofanah's acknowledgement video</h3>
      <iframe src="https://www.youtube.com/embed/SFUoQtE_qDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>

      <iframe src="https://www.youtube.com/embed/_H401jGujj4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
      </iframe>
    </>
  ),
}

export default Event;
