import img1 from '../images/gallery/1.jpeg';
import img2 from '../images/gallery/2.jpeg';
import img3 from '../images/gallery/3.jpeg';
import img4 from '../images/gallery/4.jpeg';
import img5 from '../images/gallery/5.jpeg';
import img6 from '../images/gallery/6.jpeg';
import img7 from '../images/gallery/7.jpeg';
import img8 from '../images/gallery/8.jpeg';
import img9 from '../images/gallery/9.jpeg';
import img10 from '../images/gallery/10.jpeg';
import img11 from '../images/gallery/11.jpeg';
import img12 from '../images/gallery/12.jpeg';
import img13 from '../images/gallery/13.jpeg';
import img14 from '../images/gallery/14.jpeg';
import img15 from '../images/gallery/15.jpeg';
import img16 from '../images/gallery/16.jpeg';
import img17 from '../images/gallery/17.jpeg';
import img18 from '../images/gallery/18.jpeg';
import img19 from '../images/gallery/19.jpeg';
import img20 from '../images/gallery/20.jpeg';
import img21 from '../images/gallery/21.jpeg';
import img22 from '../images/gallery/22.jpeg';
import img23 from '../images/gallery/23.jpeg';
import img24 from '../images/gallery/24.jpeg';
import img25 from '../images/gallery/25.jpeg';
import img26 from '../images/gallery/26.jpeg';
import img27 from '../images/gallery/27.jpg';

import img28 from '../images/events/lauchinSierraLeone/2.jpeg';
import img29 from '../images/events/lauchinSierraLeone/1.jpeg';
import img30 from '../images/events/lauchinSierraLeone/3.jpeg';
import img31 from '../images/events/lauchinSierraLeone/4.jpeg';
import img32 from '../images/events/lauchinSierraLeone/5.jpeg';
import img33 from '../images/events/lauchinSierraLeone/7.jpeg';

const images = [
  {
    image: img33,
    alt: "Nkhangfi foundation members posing with some of the students",
  },
  {
    image: img32,
    alt: "Nkhangfi foundation members & partners",
  },
  {
    image: img31,
    alt: "happy students with their certificates",
  },
  {
    image: img30,
    alt: "Nkhangfi foundation members & partners",
  },
  {
    image: img29,
    alt: "student holding their scholarship award certificates",
  },
  {
    image: img28,
    alt: "students awarded scholarship certificates",
  },
  {
    image: img27,
    alt: "Satisfied student arrives Turkey to continue her studies thanks to Nkhangfi Foundation",
  },
  {
    image: img26,
    alt: "Ambassador of Cuba receives the Nkhangfi Foundation Team",
  },
  {
    image: img25,
    alt: "Attendees of the Nkhnagfi organized workshop in Sierra Leone",
  },
  {
    image: img24,
    alt: "Nkhangfi organized Workshop at Koffi Annan university in Guinea",
  },
  {
    image: img23,
    alt: "Nkhangfi team at the national TV in Guinea",
  },
  {
    image: img22,
    alt: "Nkhangfi team visits the ministry of technical and higher education",
  },
  {
    image: img21,
    alt: "Send off meeting for Nkhangfi scholarships beneficiaries at the ministry of technical and higher education",
  },
  {
    image: img20,
    alt: "Send off meeting for Nkhangfi scholarships beneficiaries at the ministry of technical and higher education",
  },
  {
    image: img1,
    alt: "Nkhangfi Foundation Candidates",
  },
  {
    image: img2,
    alt: "Nkhangfi Team",
  },
  {
    image: img3,
    alt: "our students on their way to Cyprus",
  },
  {
    image: img4,
    alt: "Cyprus candidates",
  },
  {
    image: img5,
    alt: "happy clients",
  },
  {
    image: img6,
    alt: "visa secured for our Turkey candidate",
  },
  {
    image: img7,
    alt: "happy day",
  },
  {
    image: img8,
    alt: "Ms Christie on her way to Cyprus",
  },
  {
    image: img9,
    alt: "Nkhangfi Foundation Beneficiaries",
  },
  {
    image: img10,
    alt: "Mr MacJ in Cyprus",
  },
  {
    image: img11,
    alt: "Nkhangfi team with the Permanent Secretary of the ministry of technical and higher education Sierra Leone",
  },
  {
    image: img12,
    alt: "Mr Endurance just secured a job in Cyprus",
  },
  {
    image: img13,
    alt: "Nkhangfi Foundation Beneficiaries at the airport",
  },
  {
    image: img14,
    alt: "Mr Fofanah & MacJ",
  },
  {
    image: img15,
    alt: "peace ✌️",
  },
  {
    image: img16,
    alt: "100% Scholarship candidate",
  },
  {
    image: img17,
    alt: "Bye Bye Sierra Leone ✌️",
  },
  {
    image: img18,
    alt: "Nkhangfi Scholarship Program 2020",
  },
  {
    image: img19,
    alt: "Nkhangfi Scholarship Program 2020",
  },
];

const shuffle = (array) => {
  var currentIndex = array.length,  randomIndex;

  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

const shuffledImages = shuffle(images);

export default shuffledImages;
