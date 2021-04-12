import img1 from '../../images/study/flyerUkraine.jpg';
import img2 from '../../images/study/prop2.jpg';

const ukraine = {
  name: "ukraine",
  bg: "nk-ukraine-bg",
  theme: "study in ukraine",
  parent: "study abroad",
  tuition: "$1,200 USD",
  flyer: img1,
  image: img2,
  message1: () => (
    <>
      <p>International Students traveling to study in our partner
universities in Ukraine enjoy 25% to 50% discount on the tuition fee.
Discounted tuition fees range from USD 1200 to USD 4000 per year depending on the courses and universities. Ukraine medical universities are amongst the top class universities.
      </p>

      <p>
      International students in Ukraine get their higher education
in universities, academies, and institutes, that are not only
accredited but also have a special license to teach foreign
students. All our partner universities have licenses.
      </p>

      <p>
      Ukraine is a European country that is very accommodating to foreign
students, a lot of job opportunities. Cost of living is extremely low and student
accommodation including feeding can costs as low as $350usd
per year.
      </p>

      <p>
      We take great care to make sure you have all the information and support you need to start your studies in Ukraine. This includes advice on immigration, travel, accommodation, flight, and any other information you might need.
      </p>
    </>
  ),
  advantages: [
    "Job Prospects",
    "Quality Education",
    "Globally Recognized Courses (WHO, UNESCO, EUROPEAN COUNCIL)",
    "100% VISA Assured to deserving candidates",
    "Affordable tuition fees",
    "Low cost of living",
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

export default ukraine;
