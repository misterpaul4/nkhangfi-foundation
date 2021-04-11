import img1 from '../../images/study/flyerPoland.jpg';
import img2 from '../../images/study/prop1.jpg';

const poland = {
  name: "poland",
  bg: "nk-poland-bg",
  theme: "study in poland",
  parent: "study abroad",
  tuition: "€2,000 EUR",
  flyer: img1,
  image: img2,
  message1: () => (
    <>
      <p>International students can study in our partner universities
        in Poland. Thanks to the partial tuition waiver scholarships offered
        by these universities an international student can pay an average
        cost of 2,500 EUR to 3500 EUR per year for undergraduate,
        postgraduate, and Vocational courses. Poland's cost of living is
        also surprisingly low and lower than in most other
        European countries.
      </p>
    </>
  ),
  advantages: [
    "Higher education quality",
    "Affordable cost of living",
    "Student-friendly environment ",
    "Affordable tuition",
    "Excellent living conditions"
  ],
  visaIsRequired: true,
  visaRequirements: [
    "Passport",
    "Birth certificate",
    "Bank statement",
    "Sponsorship letter (if not self-sponsored)",
    "Flight reservation",
    "Travel medical insurance",
    "School documents (Waec/WASSCE/Neco/GCE e.t.c)",
  ]
};

export default poland;
