import banner from '../../images/about.jpg';
import img1 from '../../images/events/nspSL.png';
import img2 from '../../images/events/liberia.png';
import img3 from '../../images/events/guinea.png';
import { nspApplicationUrl } from '../Forms';


const Event = {
  formExtrasEduc: true,
  FORMSPARK_ACTION_URL: nspApplicationUrl,
  formName: "nkhangfi scholarship program application",
  pathName: 'nsp',
  bg: 'nk-events-nsp-bg',
  name: 'nkhangfi scholarship program',
  theme: 'nkhangfi scholarship program',
  parent: 'events',
  image: banner,
  title: 'register for the nkhangfi scholarship program in sierra leone, liberia and guinea',
  messageTop: "The Nkhangfi Scholarship Program will consist of the following events, seminar, workfair, main exams, award ceremony & workshop. Scholarships ranging from 25% to 80% will be distributed to students based on merit.",
  messageBottom: () => (
    <>
    <p>This Program will give students the opportunity to study in reputable private universities for as low as $995.</p>

    <ul>
    <h4>Requirements</h4>
        <li>Waec/WASSCE/Neco/GCE/BACC</li>
        <li>Highschool Result/Testimonial/Diploma & Transcript</li>
        <li>Bachelors/Masters Diploma & Transcript for post-graduate students</li>
        <li>Passport</li>
        <li>Application fee of $50 USD</li>
        <li>Age 17 - 35 years</li>
    </ul>

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
        <h3>Application Deadline</h3>
        May 15th, 2021
      </div>

      <div className="mb-3">
        <h3>Application Fee</h3>
        $50 USD
      </div>

      <div className="mb-3">
        <h3>Payment Account</h3>
        <div>
          <span className="d-block font-weight-bold">Bank Name</span>
          <span className="text-dark font-weight-bold">United Bank for Africa Plc (UBA)</span>

          <span className="d-block font-weight-bold">Bank Account Name</span>
          <span className="text-dark font-weight-bold">Nkhangfi Foundation</span>

          <span className="d-block font-weight-bold">Bank Account Number</span>
          <span className="text-dark font-weight-bold">540110110000766</span>
        </div>

        <p>Please note that you must forward your receipt of payment to <span className="font-weight-bold text-dark">info@nkhangfitravel.com</span>. As well as your name, phone number & country of residence</p>
      </div>

      <h3>Program Schedule</h3>
      <h4>Sierra Leone</h4>
      <ul className="no-list-style categories me-md-4">
        <li><span className="font-weight-bold mr-3">Seminar:</span>31st May, 2021</li>
        <li><span className="font-weight-bold mr-3">Workshop:</span>1st June, 2021</li>
        <li><span className="font-weight-bold mr-3">Exam:</span>2nd June, 2021</li>
        <li><span className="font-weight-bold mr-3">Work Fair:</span>3rd June, 2021</li>
        <li><span className="font-weight-bold mr-3">Award Ceremony:</span>5th June, 2021</li>
      </ul>

      <h4>Liberia</h4>
      <ul className="no-list-style categories me-md-4">
        <li><span className="font-weight-bold mr-3">Seminar & Workshop:</span>7th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Exam:</span>8th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Work Fair:</span>9th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Award Ceremony:</span>11th June, 2021</li>
      </ul>


      <h4>Guinea</h4>
      <ul className="no-list-style categories me-md-4">
      <li><span className="font-weight-bold mr-3">Work Fair:</span>12th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Seminar & Workshop:</span>14th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Exam:</span>15th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Award Ceremony:</span>19th June, 2021</li>
      </ul>
    </>
  ),
}

export default Event;
