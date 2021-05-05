import banner from '../../images/events/yos_banner.png';
import { Link } from 'react-router-dom';
import { yosApplicationUrl } from '../Forms';

const isFirefox = typeof InstallTrigger !== 'undefined';

const Event = {
  formExtrasEduc: true,
  FORMSPARK_ACTION_URL: yosApplicationUrl,
  formName: "yös application",
  pathName: 'yos',
  bg: 'nk-events-yos-bg',
  name: 'yos',
  theme: 'turkish foreign student entrance exam',
  parent: 'events',
  title: 'register for the yos program 2021',
  messageTop: "The Turkish entrance examination is organized by some of the Universities in Turkey to select students who wish to study in Turkey for as low as $150 USD to $250 USD. This exam will be conducted by the University representative and the Nkhangfi Team. In most cases, the exam has 80 questions. Most of the 45 exam questions are so-called IQ questions (general ability questions, intelligence questions). The remaining 35 questions are maths questions. You can compare the maths in the YÖS exam with the math questions in grade 10 high school.",
  image: banner,
  messageBottom: () => (
    <>
      <p>The best part of the exam is that it is not an exam for a pass or fail, it is an exam that will be used by the university to evaluate the students and to enable them to make the correct placement of the student in their respective department.</p>

      <p>This examination will give you an opportunity to make your dream of studying abroad a reality with a 90% scholarship tuition wavier and also a possibility of studying for free with the 100% scholarship we will be offering. With this exam you can get one month free accommodation and feeding coupled with the fact that you get quality education at a very affordable rate, low cost of living and freedom to work if you decide to do so.</p>
      <ul>
        <h4>Requirements</h4>
        <li>Waec/WASSCE/Neco/GCE/BACC</li>
        <li>Highschool Result/Testimonial/Diploma & Transcript</li>
        <li>Bachelors/Masters Diploma & Transcript for post-graduate students</li>
        <li>Passport</li>
        <li>Application fee of $200 USD</li>
      </ul>

      <ul>
        <h4>Visa Requirements</h4>
        <li>Waec/WASSCE/Neco/GCE/BACC</li>
        <li>Highschool Result/Testimonial/Diploma & Transcript</li>
        <li>Bachelors/Masters Diploma & Transcript for post-graduate students</li>
        <li>Passport</li>
        <li>Birth Certificate</li>
        <li>Medical Insurance for 1 year ($50 USD)</li>
        <li>Bank Statement (at least $3,000 USD)</li>
        <li>Sponsorship Letter (if not self-sponsored)</li>
        <li>Flight Reservation</li>
      </ul>
    </>
  ),
  sideContent: () => (
    <>
      <h3>Examination Dates</h3>
      <ul className="no-list-style categories me-md-4">
        <li><span className="font-weight-bold mr-3"><i className="far fa-flag"></i> Cameroon:</span>May 26th, 2021</li>
        <li><span className="font-weight-bold mr-3"><i className="far fa-flag"></i> Côte d'Ivoire:</span>May 31st, 2021</li>
        <li><span className="font-weight-bold mr-3"><i className="far fa-flag"></i> Togo:</span>May 29th, 2021</li>
        <li><span className="font-weight-bold mr-3"><i className="far fa-flag"></i> Guinea:</span>June 3rd, 2021</li>
        <li><span className="font-weight-bold mr-3"><i className="far fa-flag"></i> Liberia:</span>June 6th, 2021</li>
        <li><span className="font-weight-bold mr-3"><i className="far fa-flag"></i> Sierra Leone:</span>June 9th, 2021</li>
      </ul>

      <div>
        <h3>Application Deadline</h3>
        May 14th, 2021
      </div>


      <div>
        <h3>Application Fee</h3>
        $200 USD
      </div>

      {/* <div className="mb-3">
        <h3 className="mb-0">Payment Account</h3>
        <div>
          <span className="d-block font-weight-bold">Bank Name</span>
          <span className="text-dark font-weight-bold">United Bank for Africa Plc (UBA)</span>

          <span className="d-block font-weight-bold">Bank Account Name</span>
          <span className="text-dark font-weight-bold">Nkhangfi Foundation</span>

          <span className="d-block font-weight-bold">Bank Account Number</span>
          <span className="text-dark font-weight-bold">540110110000766</span>
        </div>

        <p>Please note that you must forward your receipt of payment to <span className="font-weight-bold text-dark">info@nkhangfitravel.com</span>. As well as your name, phone number & country of residence</p>
      </div> */}

      <div>
        <h3>Venues</h3>
        TBA
      </div>

      <hr></hr>

      <h3>Watch our Interview with AYV Media Empire</h3>

      {
        isFirefox ?
        <Link to={{pathname: "https://fb.watch/5iHAn1nDz-/"}} target="_blank" rel="noopener noreferrer"><span className="fas fa-link"> Link</span></Link>
        :
        <div>
        <iframe src="https://www.facebook.com/plugins/video.php?&href=https%3A%2F%2Fwww.facebook.com%2FAYVSierraLeone%2Fvideos%2F145463617500853%2F"
        title="embeded video"
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        />
      </div>
      }
    </>
  ),
}

export default Event;
