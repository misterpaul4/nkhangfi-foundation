import img1 from '../../images/study/flyerBelarus.jpg';
import img2 from '../../images/study/prop5.jpg';

const belarus = {
  name: "belarus",
  bg: "nk-belarus-bg",
  theme: "study in belarus",
  parent: "study abroad",
  tuition: "$3,500 USD",
  flyer: img1,
  image: img2,
  message1: () => (
    <>
      <p>
      Studying in Belarus will be one of the most perfect decision you
will ever make in your academic career because
your degree earned at any Belarus university is
recognized wherever you go in the world.
Students may get up to 25% to 50% tuition
waiver scholarships.
      </p>

      <p>
      A very wide range of courses are available at
Belarussian universities so
 International students do not need to think
about it and they may select any course. Highly
recommended for future medical personnel.
      </p>
    </>
  ),
  advantages: [
    "The Education Standard in Belarus is very high",
    "The environment is very safe compared to other parts of Europe",
    "IELTS or TOEFL is not required for admission",
    "high chance of Permanent Residence & Settlement in belarus after completion of study",
    " you can study in English in almost all courses",
    "Cost of Education and living cost is relatively low compared to other European countries"
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

export default belarus;
