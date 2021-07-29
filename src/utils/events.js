import bgYos from '../images/events/yos1.png';
import bgNsp from '../images/events/nsp1.png';
import fof from '../images/gallery/16.jpeg';
import ivn from '../images/events/yos_ivorycoast.jpg';
import camer from '../images/events/yos_cameroon.png';
import tog from '../images/events/yos_togo.jpg';
import guinea from '../images/events/yos_guinea1.jpg';
import liberia from '../images/events/yos_liberia1.jpg';
import sierra from '../images/events/yos_sierra1.jpg';
import { yosApplicationUrl } from './Forms';



const eventts = [
  {
    startdate: "May 26, 2021",
    enddate: "June. 9, 2021",
    parent: 'events',
    name: 'yos',
    title: "Turkish Foreign Student Entrance Exams (Y.Ö.S)",
    message: "Register for the Y.Ö.S exams to study in Turkey for as low as $150 USD - $250 USD. Examination will be conducted in Cameroon, Ivory Coast, Togo, Guinea, Liberia & Sierra Leone ",
    image: bgYos,
    link: "yosSpring2021",
    extraContent: true,
    formExtrasEduc: true,
    FORMSPARK_ACTION_URL: yosApplicationUrl,
    formName: "yös application",
    bg: 'nk-events-yos-bg',
    theme: 'turkish foreign student entrance exam',
    videoEmbed: true,
    additionalPhotos: false,
    optionalSideContent: true,
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
          <h3>Venues</h3>
          TBA
        </div>
      </>
    ),
    videos: [
      {
        title: "Interview with AYV Media Empire",
        link: "https://www.facebook.com/plugins/video.php?&href=https%3A%2F%2Fwww.facebook.com%2FAYVSierraLeone%2Fvideos%2F145463617500853%2F"
      }
    ],
    videoEmbed_link: "https://www.facebook.com/plugins/video.php?&href=https%3A%2F%2Fwww.facebook.com%2FAYVSierraLeone%2Fvideos%2F145463617500853%2F",
    titleHeader: 'register for the yos program 2021',
    messageTop: "The Turkish entrance examination is organized by some of the Universities in Turkey to select students who wish to study in Turkey for as low as $150 USD to $250 USD. This exam will be conducted by the University representative and the Nkhangfi Team. In most cases, the exam has 80 questions. Most of the 45 exam questions are so-called IQ questions (general ability questions, intelligence questions). The remaining 35 questions are maths questions. You can compare the maths in the YÖS exam with the math questions in grade 10 high school.",
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
  },
  {
    startdate: "June 14, 2021",
    enddate: "July. 3, 2021",
    title: "Nkhangfi Scholarship Program (NSP) 2021",
    link: "nsp",
    image: bgNsp,
    message: "The Nkhangfi Scholarship Program will consist of the following events, seminar, workfair, main exams, award ceremony & workshop. Scholarships ranging from 25% to 80% will be distributed to students based on merit",
  },
  {
    startdate: "March 2, 2021",
    title: "100% scholarship awarded to Mr Fofanah from Sierra Leone",
    link: "100_percent_scholarship",
    image: fof,
    message: "Mr Fofanah was awarded 100% tuition waiver scholarship to study in Cyprus",
  },
  {
    startdate: "May 31, 2021",
    title: "Yos Exam in Ivory Coast",
    link: "yos_ivory_coast",
    image: ivn,
    message: "The Yos exam was succesfully conducted in Ivory Coast on May 31st, 2021",
  },
  {
    startdate: "May 26, 2021",
    title: "Yos Exam in Cameroon",
    link: "yos_cameroon",
    image: camer,
    message: "The Yos exam was succesfully conducted in Cameroon on May 26th, 2021",
  },
  {
    startdate: "May 29, 2021",
    title: "Yos Exam in Togo",
    link: "yos_togo",
    image: tog,
    message: "The Yos exam was succesfully conducted in Togo on May 29th, 2021",
  },
  {
    startdate: "June 3, 2021",
    title: "Yos Exam in Guinea",
    link: "yos_guinea",
    image: guinea,
    message: "The Yos exam was succesfully conducted in Guinea on June 3rd, 2021",
  },
  {
    startdate: "June 6, 2021",
    title: "Yos Exam in Liberia",
    link: "yos_liberia",
    image: liberia,
    message: "The Yos exam was succesfully conducted in Liberia on June 6th, 2021",
  },

  {
    startdate: "June 9, 2021",
    title: "Yos Exam in Sierra Leone",
    link: "yos_sierra",
    image: sierra,
    message: "The Yos exam was succesfully conducted in Sierra Leone on June 9th, 2021",
  },
];


let dateObj1;
let dateObj2;

const sortEventts = eventts.sort((a,b) => {
  dateObj1 = new Date(a.startdate);
  dateObj2 = new Date(b.startdate);
  if(dateObj1.valueOf() < dateObj2.valueOf()) { return 1; }
  else if(dateObj1.valueOf() > dateObj2.valueOf()) { return -1; }
  else return a - b;
});

export default sortEventts;
