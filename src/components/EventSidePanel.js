import { Link } from 'react-router-dom';
import Events from '../utils/events';

const EventUpdates = props => {
  const numOfEvents = props.numOfEvents;

  const AttachEvents = (ev, index) => {
    if(index < numOfEvents) {
      return (
        <div className="block-21 mb-4 d-flex align-items-center" key={index}>
          <Link to={`/event/${ev.link}`} className="blog-img img rounded mr-2" style={{backgroundImage: `url(${ev.image.source})`}}></Link>
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

  return (
    <>
      {Events.map(AttachEvents)}
    </>
  );
};

export default EventUpdates;
