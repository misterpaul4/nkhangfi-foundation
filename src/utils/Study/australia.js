import img1 from '../../images/study/flyerAustralia.jpg';
import img2 from '../../images/study/prop3.jpg';

const australia = {
  name: "australia",
  bg: "nk-australia-bg",
  theme: "study in australia",
  parent: "study abroad",
  tuition: "$3,000 USD",
  flyer: img1,
  image: img2,
  message1: () => (
    <>
      <p>Australia has a strong reputation for education across the world. They have one of the world’s highest educated populations. The country also continues to record high literacy and education rates to date. Australia boasts a world-class education system, offering high-quality education for fair tuition fees.</p>
    </>
  ),
  advantages: [
    "Global Academic Recognition",
    "scholarship opportunities",
    "work & study opportunities",
    "english is the main language",
    "high standard of living",
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
    "English language proficiency",
    "electronic Confirmation of Enrolment (eCoE) certificate",
  ],
  documentRequired: [
    "Passport",
    "Highschool certificate (Waec/WASSCE/NECO/Diploma & Transcript etc)",
    "Bachelor degree certificate & Transcript (for masters students)",
    "Masters degree certificate & Transcript (for PHD students)",
    "Translated Copy of school documents listed above (for non-english speaking countries)",
    "Waec/WASSCE/Neco Scratch card (for West African students e.g nigeria, sierra leone)"
  ]
};

export default australia;
