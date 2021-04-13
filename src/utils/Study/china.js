import img1 from '../../images/study/flyerChina.jpg';
import img2 from '../../images/study/prop6.jpg';

const china = {
  name: "china",
  bg: "nk-china-bg",
  theme: "study in china",
  parent: "study abroad",
  tuition: "$2,600 USD",
  flyer: img1,
  image: img2,
  message1: () => (
    <>
      <p>
      Experience China and the Chinese language, which
is the third most popular language to
learn in the world, could give you a great
career boost. Our partner
universities in China offer partial tuition
waiver scholarships for undergraduate
students and fully funded tuition
including accommodation, feeding and
stipend for masters and Ph.D. students.
      </p>
    </>
  ),
  advantages: [
    "Quality of Education and international Recognition",
    "job opportunities",
    "Lower Tuition Cost and Scholarships",
    "high quality infrastructures and learning facilities",
    "China is a safe country",
    "Lots of beautiful places to travel"
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

export default china;
