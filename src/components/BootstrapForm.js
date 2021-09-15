/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from 'react';
// import countries from '../utils/countries';
import courses from '../utils/courses';
import nationalities from '../utils/nationalities';
import loader from '../images/loading.gif';
import Alert from './Alert';
import '../css/form.css';

const Form = props => {
  const { formName, submissionLink, formType } = props.data;

  const [program, updateProgram] = useState("");
  // const [fullname, updateFullname] = useState("");
  // const [surname, updatesurname] = useState("");
  // const [fatherName, updatefatherName] = useState("");
  // const [motherName, updatemotherName] = useState("");
  const [alertProp, updateAlertProp] = useState({
    alertclassName: "d-none",
    message: "",
  });

  const [email, updateemail] = useState("");
  const [telephone, updatetelephone] = useState("");
  const [dob, updatedob] = useState("");
  const [nationality, updatenationality] = useState("");
  const [gender, updategender] = useState("");
  const [maritalStatus, updatemaritalStatus] = useState("");
  const [emergencyContact, updateemergencyContact] = useState("");
  const [address, updateaddress] = useState("");
  const [admissionType, updateadmissionType] = useState("");
  const [course, updatecourse] = useState("");
  const [studyFirstChoiceCountry, updatestudyFirstChoiceCountry] = useState("");
  const [studySecondChoiceCountry, updatestudySecondChoiceCountry] = useState("");
  const [workFirstChoiceCountry, updateworkFirstChoiceCountry] = useState("");
  const [workSecondChoiceCountry, updateworkSecondChoiceCountry] = useState("");
  const [workerHighestDegree, updateworkerHighestDegree] = useState("");
  const [jobExperience, updatejobExperience] = useState("");
  const [spokenLanguages, updatespokenLanguages] = useState("");
  const [visadenial, updatevisadenial] = useState("");
  const [visaDenialReason, updatevisaDenialReason] = useState("");
  const [repatration, updaterepatration] = useState("");
  const [repatrationReason, updaterepatrationReason] = useState("");
  const [felony, updatefelony] = useState("");
  const [felonyReason, updatefelonyReason] = useState("");
  const [travelledCountryList, updatetravelledCountryList] = useState("");
  const [applicationType, updateApplicationType] = useState("");

  const [formLanguage, updateFormLanguage] = useState("english");

  const englishForm = {
    personal_info: "Personal Information",
    name: "Name",
    surname: "Surname",
    fatherName: "Father's Name",
    motherName: "Mother's Name",
    email: "Email Address",
    telephone: "Telephone",
    dob: "Date of Birth",
    nationality: "Nationality",
    defaultSelect: "Select...",
    gender: {
      placeholder: "Select...",
      label: "Gender",
      male: "Male",
      female: "Female",
    },
    maritalStatus: {
      placeholder: "Select...",
      label: "Marital Status",
      single: "Single",
      married: "Married",
    },
    emergencyContact: "Emergency Contact",
    address: "Address",
    selectLevel: {
      label: "Program Level",
      placeholder: "Select Level...",
      vocationalLevel: "Vocational School (2 years)",
      undergradLevel: "Undergraduate",
      masterLevel: "Masters",
      phdLevel: "PhD",
    },
    admissionType: {
      placeholder: "Select Type...",
      label: "Direct/Transfer",
      directType: "Direct",
      transferType: "Transfer",
    },
    course: {
      placeholder: "e.g Business Administration",
      label: "Course",
    },
    country: {
      header: "Country of Choice",
      firstChoiceLabel: "First Choice",
      secondChoiceLabel: "Second Choice",
      placeholder: "Select...",
    },
    documents: {
      header: "Upload Documents",
      photoLabel: "Photo",
      passportLabel: "Passport or ID",
      highschoolDiplomaLabel: "Highschool Diploma",
      highschoolTranscriptLabel: "Highschool Transcript",
      UndergraduateDiplomaLabel: "Undergraduate Diploma",
      UndergraduateTranscriptLabel: "Undergraduate Transcript",
      MasterDiplomaLabel: "Master's Diploma",
      MasterTranscriptLabel: "Master's Transcript",
      AdditionalDocLlabel: "Additional Documents",
    },
    submit: "Submit",
    applicationType: {
      student: "Studies",
      header: "What are you applying for?",
      work: "Work"
    },
    highestDegree: {
      label: "Highest Degree",
      highschoolDegree: "Highschool",
      undergradLevel: "Undergraduate",
      masterLevel: "Masters",
      phdLevel: "PhD",
      none: "None",
    },
    jobExperiences: "List your previous job experiences if you have any",
    jobExperiencePlaceholder: "e.g plumber, waiter...",
    spokenLanguages: {
      label: "Spoken Languages",
      placeholder: "e.g french, english..."
    },
    travelHistory: "Travel History",
    visaDenial: "Have you ever been denied visa?",
    yes: "Yes",
    no: "No",
    visaDenialReason: "if yes, state reasons",
    repatration: "Have you ever been repatriated from a country?",
    felony: "Have you ever committed a felony at home or abroad?",
    visitedCountries: "Country(s) you have travelled to within the last 24 months:",
    visitedCountriesPlaceholder: "e.g Liberia, France...",
  }

  const frenchForm = {
    visitedCountriesPlaceholder: "Par exemple, le Libéria, la France...",
    visitedCountries: "Pays dans lesquels vous avez voyagé au cours des 24 derniers mois:",
    felony: "Avez-vous déjà commis un crime dans votre pays ou à l'étranger?",
    repatration: "Avez-vous déjà été expulsé d'un pays?",
    visaDenialReason: "si oui, motiver",
    yes: "Oui",
    no: "Non",
    visadenial: "Vous a-t-on déjà refusé un visa?",
    travelHistory: "Histoire de voyage",
    spokenLanguages: {
      label: "Langues parlées",
      placeholder: "par exemple français, anglais...",
    },
    jobExperiencePlaceholder: "par exemple plombier, serveur...",
    jobExperiences: "Faites la liste de vos expériences professionnelles précédentes si vous en avez",
    highestDegree: {
      label: "Plus haut degré",
      highschoolDegree: "Baccalauréat",
      undergradLevel: "Diplôme de premier cycle",
      masterLevel: "Une maîtrise",
      phdLevel: "Doctorat",
      none: "rien",
    },
    personal_info: "Informations Personnelles",
    name: "Nom",
    surname: "Nom de famille",
    fatherName: "Le nom du père",
    motherName: "Le nom de la mère",
    defaultSelect: "Sélectionner...",
    email: "E-mail",
    telephone: "Numéro de téléphone",
    dob: "Date de naissance",
    nationality: "Nationalité",
    gender: {
      placeholder: "Sélectionner...",
      label: "Sexe",
      male: "Homme",
      female: "Femme",
    },
    maritalStatus: {
      placeholder: "Sélectionner...",
      label: "État civil",
      single: "Célibataire",
      married: "Marié",
    },
    emergencyContact: "Personne à contacter en cas d'urgence",
    address: "Adresse",
    selectLevel: {
      label: "Niveau du programme",
      placeholder: "Sélectionner...",
      vocationalLevel: "Ecole professionnelle (2 ans)",
      undergradLevel: "Premier cycle",
      masterLevel: "Maîtrise",
      phdLevel: "Doctorat",
    },
    admissionType: {
      placeholder: "Sélectionner...",
      label: "Direct/Transfert",
      directType: "Direct",
      transferType: "Transfert",
    },
    course: {
      placeholder: "par exemple, administration des affaires",
      label: "Que veux-tu étudier",
    },
    country: {
      header: "Pays de choix",
      firstChoiceLabel: "1er choix",
      secondChoiceLabel: "2ème choix",
      placeholder: "Sélectionner...",
    },
    documents: {
      header: "Télécharger des documents",
      photoLabel: "Photo",
      passportLabel: "Passeport ou carte d'identité",
      highschoolDiplomaLabel: "Baccalauréat",
      highschoolTranscriptLabel: "Relevé de notes du secondaire",
      UndergraduateDiplomaLabel: "Diplôme de premier cycle",
      UndergraduateTranscriptLabel: "Relevé de notes de premier cycle",
      MasterDiplomaLabel: "Diplôme de maîtrise",
      MasterTranscriptLabel: "Relevé de notes de maîtrise",
      AdditionalDocLlabel: "Autres documents",
    },
    submit: "Soumettre",
    applicationType: {
      student: "Études",
      header: "Pourquoi postulez-vous?",
      work: "Travail"
    },
  }

  const [translate, updateTranslation] = useState(englishForm);


  const studyCountries = [
    "Belarus",
    "Canada",
    "Cyprus",
    "India",
    "Ireland",
    "Mexico",
    "Poland",
    "Ukraine",
  ];

  const workCountries = [
    "Canada",
    "Poland",
    "Romania",
  ];

  const AttachOptions = cts => (
    <option value={cts} key={cts}>{cts}</option>
  );

  const AttachUndergrad = () => (
    <>
      <div className="form-group col-md-6">
        <label htmlFor="inputHighschoolDiploma"
        data-toggle="tooltip"
        data-placement="top"
        title="If you are from West Africa (e.g Nigeria, Sierra Leone), upload your WAEC/WASSCE/NECO or NABTEB"
        >{translate.documents.highschoolDiplomaLabel} <i className="fa fa-info-circle" aria-hidden="true"></i></label>
        <input
          name="highschool diploma"
          // onChange={(e) => updatehighSchoolDiploma(e.target.value)} value={highSchoolDiploma}
          type="hidden"
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          className="form-control"
          data-multiple="true"
          data-multiple-min="1"
          id="inputHighschoolDiploma"
          multiple
          ></input>
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="inputHighschoolTranscript"
        data-toggle="tooltip"
        data-placement="top"
        title="Not required for West African students"
        >{translate.documents.highschoolTranscriptLabel} <i className="fa fa-info-circle" aria-hidden="true"></i></label>
        <input
          name="highschool transcript" type="hidden"
          // onChange={(e) => updatehighSchoolTranscript(e.target.value)} value={highSchoolTranscript}
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          data-multiple="true"
          data-multiple-min="1"
          className="form-control"
          id="inputHighschoolTranscript"
          multiple></input>
      </div>
    </>
  );

  const AttachMasters = () => (
    <>
      <div className="form-group col-md-6">
        <label htmlFor="inputUndergraduateDiploma"
        data-toggle="tooltip"
        data-placement="top"
        >{translate.documents.UndergraduateDiplomaLabel}</label>
        <input
          name="undergraduate diploma"
          // onChange={(e) => updateundergraduateDiploma(e.target.value)} value={undergraduateDiploma}
          type="hidden"
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          data-multiple="true"
          data-multiple-min="1"
          className="form-control"
          id="inputUndergraduateDiploma"
          multiple
          ></input>
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="inputUndergraduateTranscript"
        data-toggle="tooltip"
        data-placement="top"
        >{translate.documents.UndergraduateTranscriptLabel}</label>
        <input
          name="undergraduate transcript" type="hidden"
          // onChange={(e) => updateundergraduateTranscript(e.target.value)} value={undergraduateTranscript}
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          data-multiple="true"
          data-multiple-min="1"
          className="form-control"
          id="inputUndergraduateTranscript"
          multiple></input>
      </div>
    </>
  );

  const AttachPhD = () => (
    <>
    {AttachMasters()}
    <div className="form-group col-md-6">
        <label htmlFor="inputMasterDiploma"
        >{translate.documents.MasterDiplomaLabel}</label>
        <input
          name="master diploma"
          // onChange={(e) => updatemastersDiploma(e.target.value)} value={mastersDiploma}
          type="hidden"
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          data-multiple="true"
          data-multiple-min="1"
          className="form-control"
          id="inputMasterDiploma"
          multiple
          ></input>
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="inputMasterTranscript"
        data-toggle="tooltip"
        data-placement="top"
        >{translate.documents.MasterTranscriptLabel}</label>
        <input
          name="master transcript" type="hidden"
          // onChange={(e) => updatemastersTranscript(e.target.value)} value={mastersTranscript}
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          data-multiple="true"
          data-multiple-min="1"
          className="form-control"
          id="inputMasterTranscript"
          multiple></input>
      </div>
    </>
  );

  let formData = {};
  const AlertclassNameDefault = "alert position-fixed alert-dismissible fade py-2";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const displayWarning = (errorMessage, inp) => {
    //   updateAlertProp({
    //     alertclassName: `${AlertclassNameDefault} alert-warning show`,
    //     message: errorMessage,
    //   });

    //   setTimeout(() => {
    //     inp.focus();
    //     updateAlertProp({
    //       alertclassName: AlertclassNameDefault,
    //       message: "",
    //     });
    //   }, 3000);
    // };

    // const validateEmail= () => {
    //   const emailDOM = document.getElementById('inputEmail4');
    //   if (!emailDOM.checkValidity()) {
    //     // NOT VALID
    //     displayWarning("Invalid email address", emailDOM);
    //     return false;
    //   }

    //   return true;
    // };

    // const validateEmail = () => {
    //   const emailDOM = document.getElementById('inputEmail4');
    //   if (!Validator.isEmail(email)) {
    //     displayWarning("Invalid email address", emailDOM);
    //     return false
    //   }

    //   return true;
    // }

      const loadingGif = document.querySelector('.loading-gif');
      const appForm = document.getElementById('application-form-react');

      loadingGif.classNameList.remove('d-none');
      appForm.classNameList.add('unclickable');


      const FD = new FormData(appForm);

      // get form data as key-value pairs
      for(var pair of FD.entries()) {
        formData[pair[0]] = pair[1];
      }

      await fetch(submissionLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      }).then(() => {
        // succesful
        loadingGif.classNameList.add('d-none');
        updateAlertProp({
          alertclassName: `${AlertclassNameDefault} alert-success show`,
          message: "Votre candidature a été soumise avec succès",
        });

      setTimeout(() => {
        appForm.classNameList.remove('unclickable');
        updateAlertProp({
          alertclassName: AlertclassNameDefault,
          message: "",
        });
        appForm.reset();
        updateemail(" ");
        updatetelephone(" ");
        updatedob(" ");
        updatenationality(" ");
        updategender(" ");
        updatemaritalStatus(" ");
        updateemergencyContact(" ");
        updateaddress(" ");
        updateadmissionType(" ");
        updatecourse(" ");
        updatestudyFirstChoiceCountry(" ");
        updatestudySecondChoiceCountry(" ");
        updateworkFirstChoiceCountry(" ");
        updateworkSecondChoiceCountry(" ");
        updateworkerHighestDegree(" ");
        updatejobExperience(" ");
        updatespokenLanguages(" ");
        updatevisadenial(" ");
        updatevisaDenialReason(" ");
        updaterepatration(" ");
        updaterepatrationReason(" ");
        updatefelony(" ");
        updatefelonyReason(" ");
        updatetravelledCountryList(" ");
        updateApplicationType(" ");
      }, 3000);

      }).catch(Err => {
        // unsuccesful
        loadingGif.classNameList.add('d-none');
        updateAlertProp({
          alertclassName: `${AlertclassNameDefault} alert-danger show`,
          message: "Il semble y avoir un problème. Réessayer",
        });

        setTimeout(() => {
          appForm.classNameList.remove('unclickable');
          updateAlertProp({
            alertclassName: AlertclassNameDefault,
            message: "",
          });
        }, 3000);

      });
  };

  const studiesForm = () => (
    <div className="card-body">
      <div className="form-row">
        <div className="form-group col-md-4">
          <label htmlFor="inputProgramLevel">{translate.selectLevel.label}</label>
          <select name="program" id="inputProgramLevel" className="form-control" onChange={(e) => updateProgram(e.target.value)} value={program}>
            <option defaultValue>{translate.defaultSelect}</option>
            <option value="undergraduate">{translate.selectLevel.undergradLevel}</option>
            <option value="masters">{translate.selectLevel.masterLevel}</option>
            <option value="phd">{translate.selectLevel.phdLevel}</option>
            <option value="vocational">{translate.selectLevel.vocationalLevel}</option>
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputAdmissionType"
          data-toggle="tooltip"
          data-placement="top"
          title="Select 'Transfer' if you are currently admitted in a University and wish to continue from your current year. Select 'Direct' for a fresh admission"
          >{translate.admissionType.label} <i className="fa fa-info-circle" aria-hidden="true"></i></label>
          <select onChange={(e) => updateadmissionType(e.target.value)} value={admissionType} name="admission type" id="inputAdmissionType" className="form-control">
            <option defaultValue>{translate.admissionType.placeholder}</option>
            <option value="direct">{translate.admissionType.directType}</option>
            <option value="transfer">{translate.admissionType.transferType}</option>
          </select>
        </div>

        <div className="form-group col-md-5">
          <label htmlFor="inputProgram">{translate.course.label}</label>
          <input onChange={(e) => updatecourse(e.target.value)} value={course} name="course" list="programOptions" id="inputProgram" className="form-control" placeholder={translate.course.placeholder}/>
          <datalist id="programOptions">
            {courses.map(AttachOptions)}
          </datalist>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-12">
          <span>{translate.country.header}</span><br />
          <div className="col-md-4">
          <label htmlFor="inputNationality">{translate.country.firstChoiceLabel}</label>
          <select onChange={(e) => updatestudyFirstChoiceCountry(e.target.value)} value={studyFirstChoiceCountry} name="studies country 1" className="form-control">
            <option>{translate.defaultSelect}</option>
            {studyCountries.map(AttachOptions)}
          </select>
          </div>

          <div className="col-md-4">
          <label htmlFor="inputNationality">{translate.country.secondChoiceLabel}</label>
          <select onChange={(e) => updatestudySecondChoiceCountry(e.target.value)} value={studySecondChoiceCountry} name="studies country 2" id="inputNationality" className="form-control">
            <option>{translate.defaultSelect}</option>
            {studyCountries.map(AttachOptions)}
          </select>
          </div>
        </div>
      </div>

      <h5 className="mt-2"><small>{translate.documents.header}</small></h5>
      <div className="mb-2">

          <div className="form-row mt-2">
          <div className="form-group col-md-6">
            <label htmlFor="studentPhoto">{translate.documents.header}</label>
            <input
              name="student photo"
              // onChange={(e) => updatestudentPhoto(e.target.value)} value={studentPhoto}
              type="hidden"
              role="uploadcare-uploader"
              data-public-key="64c0a64485b8950cc40d"
              className="form-control"
              id="studentPhoto">
              </input>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="studentPassport">{translate.documents.passportLabel}</label>
            <input
              name="student passport"
              // onChange={(e) => updatestudentPassport(e.target.value)} value={studentPassport}
              type="hidden"
              role="uploadcare-uploader"
              data-multiple="true"
              data-multiple-min="1"
              data-public-key="64c0a64485b8950cc40d"
              className="form-control"
              id="studentPassport">
              </input>
          </div>

          {AttachUndergrad()}
          {program === "masters" ? AttachMasters() : null}
          {program === "phd" ? AttachPhD() : null}

          <div className="form-group col-md-6">
            <label htmlFor="studentAdditionalDocs">*{translate.documents.AdditionalDocLlabel}</label>
            <input
              name="student additional documents"
              // onChange={(e) => updateotherStudentDocs(e.target.value)} value={otherStudentDocs}
              type="hidden"
              role="uploadcare-uploader"
              data-multiple="true"
              data-multiple-min="1"
              data-public-key="64c0a64485b8950cc40d"
              className="form-control"
              id="studentAdditionalDocs"
              multiple></input>
          </div>
          </div>

      </div>
    </div>
  );

  const workForm = () => (
    <div className="card-body">
      <div className="form-row">

      <div className="form-group col-md-12">
        <span>{translate.country.header}</span><br />
        <div className="col-md-4">
        <label htmlFor="inputNationality">{translate.country.firstChoiceLabel}</label>
        <select onChange={(e) => updateworkFirstChoiceCountry(e.target.value)} value={workFirstChoiceCountry}
        name="work country 1" id="inputNationality" className="form-control">
          <option>{translate.defaultSelect}</option>
          {workCountries.map(AttachOptions)}
        </select>
        </div>

        <div className="col-md-4">
        <label htmlFor="inputNationality">{translate.country.secondChoiceLabel}</label>
        <select onChange={(e) => updateworkSecondChoiceCountry(e.target.value)} value={workSecondChoiceCountry}
        name="work country 2" id="inputNationality" className="form-control">
          <option>{translate.defaultSelect}</option>
          {workCountries.map(AttachOptions)}
        </select>
        </div>
      </div>

      <div className="form-group col-md-5">
          <label htmlFor="inputProgramLevel">Plus haut degré</label>
          <select onChange={(e) => updateworkerHighestDegree(e.target.value)} value={workerHighestDegree}
          name="highest degree" id="inputProgramLevel" className="form-control">
            <option defaultValue>{translate.defaultSelect}</option>
            <option value="highschool">{translate.highestDegree.highschoolDegree}</option>
            <option value="undergraduate">{translate.highestDegree.undergradLevel}</option>
            <option value="masters">{translate.highestDegree.masterLevel}</option>
            <option value="phd">{translate.highestDegree.phdLevel}</option>
            <option value="none">{translate.highestDegree.none}</option>
          </select>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="job-experience">{translate.jobExperiences}</label>
          <input onChange={(e) => updatejobExperience(e.target.value)} value={jobExperience}
          name="job experience" id="job-experience" className="form-control" placeholder={translate.jobExperiencePlaceholder}/>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="inputProgram">{translate.spokenLanguages.label}</label>
          <input onChange={(e) => updatespokenLanguages(e.target.value)} value={spokenLanguages}
          name="spoken languages" id="inputProgram" className="form-control" placeholder={translate.spokenLanguages.placeholder}/>
        </div>
      </div>

      <h5 className="mt-2"><small>{translate.travelHistory}</small></h5>
      <div className="form-row">
        <div className="form-group col-md-12">
        <label htmlFor="visa-denial">{translate.visaDenial}</label><br></br>
        <input onChange={(e) => updatevisadenial(e.target.value)} checked={visadenial === "yes"}
        type="radio" value="yes" name="Have you ever been denied visa?" /> {translate.yes}<br></br>
        <input onChange={(e) => updatevisadenial(e.target.value)} checked={visadenial === "no"}
        type="radio" value="no" name="Have you ever been denied visa?" /> {translate.no}
          <textarea onChange={(e) => updatevisaDenialReason(e.target.value)} value={visaDenialReason}
          name="reason i was denied visa" className="form-control" placeholder={translate.visaDenialReason} />
      </div>

        <div className="form-group col-md-12">
        <label>{translate.repatration}</label><br></br>
        <input onChange={(e) => updaterepatration(e.target.value)} checked={repatration === "yes"}
        type="radio" value="yes" name="Have you ever been repatriated from a country" /> {translate.yes}<br></br>
        <input onChange={(e) => updaterepatration(e.target.value)} checked={repatration === "no"}
        type="radio" value="no" name="Have you ever been repatriated from a country" /> {translate.no}
          <textarea onChange={(e) => updaterepatrationReason(e.target.value)} value={repatrationReason}
          name="reason i was repatriated" className="form-control" placeholder={translate.visaDenialReason} />
      </div>

      <div className="form-group col-md-12">
        <label>{translate.felony}</label><br></br>
        <input onChange={(e) => updatefelony(e.target.value)} checked={felony === "yes"}
        type="radio" value="yes" name="Have you ever committed a felony at home or abroad" /> {translate.yes}<br></br>
        <input onChange={(e) => updatefelony(e.target.value)} checked={felony === "no"}
        type="radio" value="no" name="Have you ever committed a felony at home or abroad" /> {translate.no}
          <textarea onChange={(e) => updatefelonyReason(e.target.value)} value={felonyReason}
          name="reason i commited a felony" className="form-control" placeholder={translate.visaDenialReason} />
      </div>

      <div className="form-group col-md-12">
          <label htmlFor="inputProgram">{translate.visitedCountries}</label>
          <input onChange={(e) => updatetravelledCountryList(e.target.value)} value={travelledCountryList}
          name="countries you have travelled to within the last 24 months" id="inputProgram" className="form-control" placeholder={translate.visitedCountriesPlaceholder}/>
        </div>
      </div>


      <h5 className="mt-2"><small>{translate.documents.header}</small></h5>
      <div className="mb-2">

          <div className="form-row mt-2">
          <div className="form-group col-md-6">
            <label htmlFor="workerPhoto">{translate.documents.photoLabel}</label>
            <input
              name="worker photo"
              // onChange={(e) => updateworkerPhoto(e.target.value)} value={workerPhoto}
              type="hidden"
              role="uploadcare-uploader"
              data-public-key="64c0a64485b8950cc40d"
              className="form-control"
              id="workerPhoto"
              multiple
              >
              </input>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="workerPassport">{translate.documents.passportLabel}</label>
            <input
              name="worker passport"
              // onChange={(e) => updateworkerPassport(e.target.value)} value={workerPassport}
              type="hidden"
              role="uploadcare-uploader"
              data-public-key="64c0a64485b8950cc40d"
              className="form-control"
              data-multiple="true"
              data-multiple-min="1"
              id="workerPassport"
              multiple
              >
              </input>
          </div>


          <div className="form-group col-md-6">
            <label htmlFor="workerAdditionalDocs">{translate.documents.AdditionalDocLlabel}</label>
            <input
              name="worker additional documents"
              // onChange={(e) => updateworkerAdditionalDocs(e.target.value)} value={workerAdditionalDocs}
              type="hidden"
              role="uploadcare-uploader"
              data-public-key="64c0a64485b8950cc40d"
              className="form-control"
              data-multiple="true"
              data-multiple-min="1"
              id="workerAdditionalDocs"
              multiple></input>
          </div>
          </div>

      </div>
    </div>
  );


  return (
    <>
    <Alert data={
      {alertPropclassName: alertProp.alertclassName,
       message: alertProp.message,
      }
    } />
    <img src={loader} alt="loading gif" className="position-fixed d-none loading-gif">
    </img>
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header bt-form-header-conainer">
        <h4 className="modal-title" id="exampleModalLongTitle">{formName}</h4>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input onChange={() => {
            updateFormLanguage("english");
            updateTranslation(englishForm);
          }}
           type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked={formLanguage==="english"} />
          <label className={formLanguage==="english" ? "btn btn-outline-success" : "btn"} htmlFor="btnradio1">EN</label>


          <input onChange={() => {
            updateFormLanguage("french");
            updateTranslation(frenchForm);
          }}
           type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" checked={formLanguage==="french"} />
          <label className={formLanguage==="french" ? "btn btn-outline-success" : "btn"} htmlFor="btnradio2">FR</label>
        </div>
        </div>

        <div className="modal-body">
        <form id="application-form-react">
      <h5 className="mt-2">{translate.personal_info}</h5>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="stdName">{translate.name}</label>
          <input
          // onChange={(e) => updateFullname(e.target.value)} value={fullname}
          type="text" name="name" className="form-control" id="stdName" placeholder={translate.name}></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="stdSurname">{translate.surname}</label>
          <input
          // onChange={(e) => updatesurname(e.target.value)} value={surname}
          type="text" name="surname" className="form-control" id="stdSurname" placeholder={translate.surname}></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="stdFatherName">{translate.fatherName}</label>
          <input
          // onChange={(e) => updatefatherName(e.target.value)} value={fatherName}
          type="text" name="father name" className="form-control" id="stdFatherName" placeholder={translate.fatherName}></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="stdMotherName">{translate.motherName}</label>
          <input
          // onChange={(e) => updatemotherName(e.target.value)} value={motherName}
          type="text" name="mother name" className="form-control" id="stdMotherName" placeholder={translate.motherName}></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">{translate.email}</label>
          <input onChange={(e) => updateemail(e.target.value)} value={email} type="email" name="email address" className="form-control" id="inputEmail4" placeholder={translate.email}></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="inputTelephone">{translate.telephone}</label>
          <input onChange={(e) => updatetelephone(e.target.value)} value={telephone} type="tel" name="phone number" className="form-control" id="inputTelephone" placeholder={translate.telephone}></input>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="inputDOB">{translate.dob}</label>
          <input onChange={(e) => updatedob(e.target.value)} value={dob} type="date" name="date of birth" className="form-control" id="inputDOB" placeholder={translate.dob}></input>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputNationality">{translate.nationality}</label>
          <select onChange={(e) => updatenationality(e.target.value)} value={nationality} name="nationality" id="inputNationality" className="form-control">
            <option>{translate.defaultSelect}</option>
            {nationalities.map(AttachOptions)}
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputGender">{translate.gender.label}</label>
          <select onChange={(e) => updategender(e.target.value)} value={gender} name="gender" id="inputGender" className="form-control">
            <option defaultValue>{translate.defaultSelect}</option>
            <option value="male">{translate.gender.male}</option>
            <option value="female">{translate.gender.female}</option>
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputMaritalStatus">{translate.maritalStatus.label}</label>
          <select onChange={(e) => updatemaritalStatus(e.target.value)} value={maritalStatus} name="marital status" id="inputMaritalStatus" className="form-control">
            <option defaultValue>{translate.defaultSelect}</option>
            <option value="single">{translate.maritalStatus.single}</option>
            <option value="married">{translate.maritalStatus.married}</option>
          </select>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="emergencyContact">{translate.emergencyContact}</label>
          <input onChange={(e) => updateemergencyContact(e.target.value)} value={emergencyContact} type="tel" name="emergency contact" className="form-control" id="emergencyContact" placeholder={translate.emergencyContact}></input>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="inputAddress">{translate.address}</label>
          <input onChange={(e) => updateaddress(e.target.value)} value={address} name="address" type="text" className="form-control" id="inputAddress" placeholder="12 Main Street..."></input>
        </div>
      </div>

      {/* studies or work */}
      <hr />
      { function () {
        if (formType === "all") {
          return (
          <div>
        <h5 className="mt-2">{translate.applicationType.header}</h5>
        <input onChange={(e) => updateApplicationType(e.target.value)} checked={applicationType === "studies"}
        type="radio" value="studies" name="application type" /> {translate.applicationType.student}
        <input onChange={(e) => updateApplicationType(e.target.value)} checked={applicationType === "work"}
        type="radio" value="work" name="application type" className="ml-3" /> {translate.applicationType.work}
        <div id="accordion">
          {/* studeies */}
          <div className={applicationType === "studies" ? "card m-0" : "unclickable"}>
          <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button type="button" className="btn btn-link text-dark text-small" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                {translate.applicationType.student}
                </button>
              </h5>
            </div>

            {/* stud */}
            <div id="collapseOne" className={applicationType === "studies" ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordion">
              {studiesForm()}
            </div>

          </div>
          {/* work */}
          <div className={applicationType === "work" ? "card m-0" : "unclickable"}>
          <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button type="button" className="btn btn-link text-dark text-small" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                {translate.applicationType.work}
                </button>
              </h5>
            </div>

            {/* wor */}
            <div id="collapseTwo" className={applicationType === "work" ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordion">
              {workForm()}
            </div>

          </div>
        </div>
      </div>
          )
        } else if (formType === "work") {
          return (workForm());
        } else {
          return (studiesForm());
        }
        }() }
      <div className="mt-2">
        <button type="submit" className="btn btn-primary mt-2" id="application-form-submit" onClick={handleSubmit}>{translate.submit}</button>
      </div>
    </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Form;
