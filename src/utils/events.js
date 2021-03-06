import bgYos from '../images/events/yos_banner.png';
import yos1 from '../images/events/yos_sierra.png';
import yos2 from '../images/events/yos_liberia.png';
import yos3 from '../images/events/yos_togo.png';
import bgNsp from '../images/events/nspSL.png';
import nspSierrrra from '../images/events/nsp-bg.jpeg';
import three from '../images/gallery/16.jpeg';
import ivn from '../images/events/yos_ivorycoast.jpg';
import camer from '../images/events/yos_cameroon.png';
import tog from '../images/events/yos_togo.jpg';
import liberia from '../images/events/liberia.png';
import sierra from '../images/events/yos_sierra1.jpg';
import two from '../images/about.jpg';
import four from '../images/gallery/14.jpeg';
import five from '../images/gallery/15.jpeg';
import six from '../images/gallery/17.jpeg';
import fofanah from '../images/events/100.png';
import seven from '../images/events/yos_ivory1.png';
import eight from '../images/events/yos_ivory2.jpg';
import nine from '../images/events/yos_ivory3.jpg';
import img1 from '../images/events/yos_cameroon.png';
import img2 from '../images/events/yos_cameroon2.jpg';
import img3 from '../images/events/yos_cameroon3.jpg';
import img4 from '../images/events/yos_togo.jpg';
import img6 from '../images/events/yos_togo3.jpg';
import img5 from '../images/events/yos_guinea.png';
import img7 from '../images/events/yos_guinea1.jpg';
import img8 from '../images/events/yos_guinea2.jpg';
import img9 from '../images/events/yos_guinea3.jpg';
import img10 from '../images/events/yos_liberia1.jpg';
import img11 from '../images/events/yos_liberia2.jpg';
import img12 from '../images/events/yos_liberia3.jpg';
import img14 from '../images/events/yos_sierra2.jpg';
import img15 from '../images/events/yos_sierra3.jpg';
import { yosApplicationUrl, nspApplicationUrl } from './Forms';

const eventts = [
  {
    startdate: "May 26, 2021",
    enddate: "June. 9, 2021",
    parent: 'events',
    name: 'yos',
    title: "Register for the yos program 2021",
    message: "Register for the Y.Ö.S exams to study in Turkey for as low as $150 USD - $250 USD. Examination will be conducted in Cameroon, Ivory Coast, Togo, Guinea, Liberia & Sierra Leone ",
    image:
      {
        source: bgYos,
        alt: "yos program flier"
      },

    additionalPhotos: true,
    photos: [
      {
        source: yos1,
        alt: "yos program sierra leone flier"
      },
      {
        source: yos2,
        alt: "yos program liberia"
      },
      {
        source: yos3,
        alt: "yoso program togo flier"
      }
    ],
    link: "yosSpring2021",
    extraContent: true,
    formExtrasEduc: true,
    FORMSPARK_ACTION_URL: yosApplicationUrl,
    formName: "yös application",
    bg: 'nk-events-yos-bg',
    theme: 'Turkish Foreign Student Entrance Exams (Y.Ö.S)',
    videoEmbed: true,
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
    theme: "Nkhangfi Scholarship Program (NSP) 2021",
    parent: 'events',
    name: 'nkhangfi scholarship program',
    link: "nspSpring2021",
    message: "The Nkhangfi Scholarship Program will consist of the following events, seminar, workfair, main exams, award ceremony & workshop. Scholarships ranging from 25% to 80% will be distributed to students based on merit",
    image:
    {
      source: two,
      alt: "nsp program flier sierra leone"
    },

  additionalPhotos: true,
  photos: [
    {
      source: liberia,
      alt: "nsp flier"
    },
    {
      source: bgNsp,
      alt: "nsp flier"
    },
    {
      source: nspSierrrra,
      alt: "nsp flier"
    }
  ],
  extraContent: true,
  formExtrasEduc: true,
  FORMSPARK_ACTION_URL: nspApplicationUrl,
  formName: "nkhangfi scholarship program application",
  bg: 'nk-events-nsp-bg',
  title: 'Register for the nkhangfi scholarship program in sierra leone & liberia',
  videoEmbed: true,
  optionalSideContent: true,
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

      <h3>Program Schedule</h3>
      <h4>Sierra Leone</h4>
      <ul className="no-list-style categories me-md-4">
        <li><span className="font-weight-bold mr-3">Seminar:</span>14th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Workshop:</span>15th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Work Abroad Fair:</span>16th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Exam:</span>17th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Award Ceremony:</span>19th June, 2021</li>
      </ul>

      <h4>Liberia</h4>
      <ul className="no-list-style categories me-md-4">
        <li><span className="font-weight-bold mr-3">Seminar & Workshop:</span>21th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Work Abroad Fair:</span>22nd June, 2021</li>
        <li><span className="font-weight-bold mr-3">Exam:</span>23rd June, 2021</li>
        <li><span className="font-weight-bold mr-3">Award Ceremony:</span>26th June, 2021</li>
      </ul>
    </>
  ),
  videos: [
    {
      title: "Interview with AYV Media Empire",
      link: "https://www.facebook.com/plugins/video.php?&href=https%3A%2F%2Fwww.facebook.com%2FAYVSierraLeone%2Fvideos%2F145463617500853%2F"
    }
  ],
  messageTop: "The Nkhangfi Scholarship Program is a project of the Nkhangfi Foundation. It will consist of the following events, seminar, workfair, main exams, award ceremony & workshop. Scholarships ranging from 25% to 100% will be distributed to students based on merit.",
  messageBottom: () => (
    <>
    <p>This Program will give students the opportunity to study in reputable private universities on scholarship. You can study in North Cyprus, Belarus, Ukraine, Poland, India, Australia & China through this program.</p>

    <ul>
    <h4>Requirements</h4>
        <li>Waec/WASSCE/Neco/GCE/BACC</li>
        <li>Highschool Result/Testimonial/Diploma & Transcript</li>
        <li>Bachelors/Masters Diploma & Transcript for post-graduate students</li>
        <li>Passport</li>
        <li>Application fee of $50 USD</li>
        <li>Age 17 - 35 years</li>
    </ul>
    </>
  ),
  },
  {
    startdate: "March 2, 2021",
    title: "100% scholarship awarded to Mr Fofanah from Sierra Leone",
    link: "100_percent_scholarship_fofanah_funkuba",
    image:
      {
        source: three,
        alt: "mr fofanah photo"
      },
    parent: 'events',
    theme: 'success story',
    message: "Mr Fofanah was awarded 100% tuition waiver scholarship to study in Cyprus",
    additionalPhotos: true,
    photos: [
      {
        source: four,
        alt: "flier"
      },
      {
        source: five,
        alt: "flier"
      },
      {
        source: six,
        alt: "flier"
      }
    ],
    extraContent: false,
    bg: 'nk-events-activities',
    optionalSideContent: false,
    videoEmbed: true,
    videos: [
      {
        title: "Watch Fofanah's acknowledgement video 1",
        link: "https://www.youtube.com/embed/SFUoQtE_qDE"
      },
      {
        title: "Watch Fofanah's acknowledgement video 2",
        link: "https://www.youtube.com/embed/_H401jGujj4"
      }
    ],
    messageTop: "Mr Fofanah Mohamed Funkuba participated in the Nkhangfi scholarship program of 2020 in Sierra Leone. He performed extremely well in the scholarship exams conducted by the Nkhangfi Team and for that reason, he was awarded 100% scholarship to study computer engineering in Kyrenia University.",
    messageBottom: () => (
      <>
      <img src={fofanah} alt="scholarship letter from kyrenia university" className="w-100">
      </img>
      <p>Fofanah is currently in Cyprus and his story serves as an inspiration to those who work hard. Nothing is impossible.</p>
      </>
    ),
  },
  {
    startdate: "May 31, 2021",
    title: "Yos Exam in Ivory Coast",
    link: "yos_ivory_coast_spring2021",
    image: {
      source: ivn,
      alt: "yos exam candidates in ivory coast"
    },
    message: "The Yos exam was succesfully conducted in Ivory Coast on May 31st, 2021",
    parent: 'events',
    theme: 'yös exam, ivory coast',
    additionalPhotos: true,
    name: 'yös exam',
    photos: [
      {
        source: seven,
        alt: "yos exam candidates in ivory coast"
      },
      {
        source: eight,
        alt: "yos exam candidates in ivory coast"
      },
      {
        source: nine,
        alt: "yos exam candidates in ivory coast"
      }
    ],
    bg: 'nk-events-exam',
    optionalSideContent: false,
    videoEmbed: true,
    videos: [
      {
        title: "Interview with one of the participants",
        link: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FNkhangfifoundation%2Fvideos%2F959477568201178%2F&show_text=false&width=226&t=0"
      },
    ],
    messageTop: "The Yös exam was a huge success in Ivory Coast thanks to our partners at Rights Consultancy Agency (RCA)",
    messageBottom: () => (
      <>
      <p>We are very proud of the students that participated in the exam and we are wishing them success.</p>
      </>
    ),
    extraContent: false,
  },
  {
    startdate: "May 26, 2021",
    title: "Yös exam was conducted in Cameroon",
    link: "yos_cameroon_spring2021",
    image: {
      source: camer,
      alt: "yos exam candidates in Cameroon"
    },
    message: "The Yos exam was succesfully conducted in  Cameroon on May 26th, 2021",
    parent: 'events',
    theme: 'yös exam, cameroon',
    additionalPhotos: true,
    name: 'yös exam',
    photos: [
      {
        source: img1,
        alt: "yos exam candidates in cameroon"
      },
      {
        source: img2,
        alt: "yos exam candidates in cameroon"
      },
      {
        source: img3,
        alt: "yos exam candidates in cameroon"
      }
    ],
    bg: 'nk-events-exam',
    optionalSideContent: false,
    videoEmbed: true,
    videos: [
      {
        title: "Examination video",
        link: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FNkhangfifoundation%2Fvideos%2F203146071633815%2F&show_text=false&width=267&t=0"
      },
    ],
    messageTop: "The Yös exam was succesfully conducted in Cameroon",
    messageBottom: () => (
      <>
    <p>We are very proud of the students that participated in the exam and we are wishing them success.</p>
      </>
    ),
    extraContent: false,
  },
  {
    startdate: "May 29, 2021",
    title: "Yös exam was conducted in Togo",
    link: "yos_togo_spring2021",
    image: {
      source: yos3,
      alt: "yos exam candidates in Togo"
    },
    message: "The Yos exam was succesfully conducted in  Cameroon on May 29th, 2021",
    parent: 'events',
    theme: 'yös exam, togo',
    additionalPhotos: true,
    name: 'yös exam',
    photos: [
      {
        source: img4,
        alt: "yos exam candidates in togo"
      },
      {
        source: tog,
        alt: "yos exam candidates in togo"
      },
      {
        source: img6,
        alt: "yos exam candidates in togo"
      }
    ],
    bg: 'nk-events-exam',
    optionalSideContent: false,
    videoEmbed: true,
    videos: [
      {
        title: "Examination video",
        link: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FNkhangfifoundation%2Fposts%2F2863032857344513&show_text=false&width=500"
      },
    ],
    messageTop: "The Yös exam was a success in Togo",
    messageBottom: () => (
      <>
    <p>We are very proud of the students that participated in the exam and we are wishing them success.</p>
      </>
    ),
    extraContent: false,
  },
  {
    startdate: "June 3, 2021",
    title: "Yös exam was conducted in Guinea",
    link: "yos_guinea_spring2021",
    image: {
      source: img5,
      alt: "yos exam candidates in Guinea"
    },
    message: "The Yos exam was succesfully conducted in Guinea on June 3rd, 2021",
    parent: 'events',
    theme: 'yös exam, guinea',
    additionalPhotos: true,
    name: 'yös exam',
    photos: [
      {
        source: img7,
        alt: "yos exam candidates in guinea"
      },
      {
        source: img8,
        alt: "yos exam candidates in guinea"
      },
      {
        source: img9,
        alt: "yos exam candidates in guinea"
      }
    ],
    bg: 'nk-events-exam',
    optionalSideContent: false,
    videoEmbed: true,
    videos: [
      {
        title: "Examination video",
        link: "https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2FNkhangfifoundation%2Fvideos%2F228660618736300%2F&show_text=false&width=560&t=0"
      },
    ],
    messageTop: "The Yös exam was succesfully conducted in Guinea thanks to dearest partner DIAMO HOLDINGS",
    messageBottom: () => (
      <>
    <p>We are very proud of the students that participated in the exam and we are wishing them success.</p>
      </>
    ),
    extraContent: false,
  },
  {
    startdate: "June 6, 2021",
    title: 'Yös exam was conducted in Liberia',
    link: "yos_liberia_spring2021",
    image: {
      source: liberia,
      alt: "yos exam candidates in Liberia"
    },
    message: "The Yos exam was succesfully conducted in Liberia on June 6th, 2021",
    parent: 'events',
    theme: 'yös exam, liberia',
    additionalPhotos: true,
    name: 'yös exam',
    photos: [
      {
        source: img10,
        alt: "yos exam candidates in liberia"
      },
      {
        source: img11,
        alt: "yos exam candidates in liberia"
      },
      {
        source: img12,
        alt: "yos exam candidates in liberia"
      }
    ],
    bg: 'nk-events-exam',
    optionalSideContent: false,
    videoEmbed: true,
    videos: [
      {
        title: "Examination video",
        link: "https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2FNkhangfifoundation%2Fvideos%2F228660618736300%2F&show_text=false&width=560&t=0"
      },
    ],
    messageTop: "The Yös exam was successfully conducted in Liberia thanks to our dearest partner Royal Destiny Multipurpose Consultancy",
    messageBottom: () => (
      <>
    <p>We are very proud of the students that participated in the exam and we are wishing them success.</p>
      </>
    ),
    extraContent: false,
  },
  {
    startdate: "June 9, 2021",
    title: 'Yös exam was conducted in Sierra Leone',
    link: "yos_sierraLeone_spring2021",
    image: {
      source: sierra,
      alt: "yos exam candidates in Sierra Leone"
    },
    message: "The Yos exam was succesfully conducted in Sierra Leone on June 9th, 2021",
    parent: 'events',
    theme: 'yös exam, Sierra Leone',
    additionalPhotos: true,
    name: 'yös exam',
    photos: [
      {
        source: bgNsp,
        alt: "yos exam flier in Sierra Leone"
      },
      {
        source: img14,
        alt: "yos exam candidates in liberia"
      },
      {
        source: img15,
        alt: "yos exam candidates in liberia"
      }
    ],
    bg: 'nk-events-exam',
    optionalSideContent: false,
    videoEmbed: true,
    videos: [
      {
        title: "Examination video",
        link: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FNkhangfifoundation%2Fvideos%2F216698156789762%2F&show_text=false&width=267&t=0"
      },
      {
        title: "Vote of thanks from the students",
        link: "https://www.facebook.com/plugins/video.php?height=308&href=https%3A%2F%2Fwww.facebook.com%2FNkhangfifoundation%2Fvideos%2F991681731660421%2F&show_text=false&width=560&t=0"
      }
    ],
    messageTop: "The Yös exam was successfully conducted in Sierra Leone thanks to the Nkhangfi team",
    messageBottom: () => (
      <>
    <p>We are very proud of the students that participated in the exam and we are wishing them success.</p>
      </>
    ),
    extraContent: false,
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
