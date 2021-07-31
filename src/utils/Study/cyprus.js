import img1 from '../../images/study/flyerCyprus.jpg';
import img2 from '../../images/study/prop4.jpeg';

const cyprus = {
  name: "cyprus",
  bg: "nk-cyprus-bg",
  theme: "study in North cyprus",
  parent: "study abroad",
  tuition: "$995 USD per semester",
  flyer: img1,
  image: img2,
  message1: () => (
    <>
      <p>North Cyprus draws attention to its universities as it does with tourism.
This lovely island offers an opportunity to study, with the bonus of
the taste of holiday with its sun, sea and natural life. Growing larger each
day with their modern campuses.
      </p>

      <p>
      The universities in North Cyprus play
host to thousands of students who want to study in a peaceful and reliable
country. More than 40 thousand students from different countries around
the world are studying in North Cyprus, one of the most significant
educational centers of the Mediterranean. The educational system in the
Turkish Republic of Northern Cyprus (T.R.N.C.) is fast becoming one of
the best in the whole of Europe.
      </p>
    </>
  ),
  advantages: [
    "Universities in North Cyprus are known for quality Education at International standards in English",
    "North Cyprus Universities are Internationally recognized and accepted worldwide",
    "International Students have the opportunity to enjoy qualified faculty members at international standards",
    "There are hundreds of courses available, all in English Medium of study",
    "Affordable tuition fees and moderate living expenses. The tuition fees are moderate and cheaper than most parts of Europe",
    "Very high standard of Education with Excellent facilities for social, cultural and sports activities",
    "Students tend to enjoy the peaceful and safe environment of Northern Cyprus",
  ],
  visaIsRequired: false,
  documentRequired: [
    "Passport",
    "Highschool certificate (Waec/WASSCE/NECO/Diploma & Transcript etc)",
    "Bachelor degree certificate & Transcript (for masters students)",
    "Masters degree certificate & Transcript (for PHD students)",
    "Translated Copy of school documents listed above (for non-english speaking countries)",
    "Waec/WASSCE/Neco Scratch card (for West African students e.g nigeria, sierra leone)"
  ]
};

export default cyprus;
