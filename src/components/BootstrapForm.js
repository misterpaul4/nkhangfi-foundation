/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from 'react';
// import countries from '../utils/countries';
import courses from '../utils/courses';
import nationalities from '../utils/nationalities';
import loader from '../images/loading.gif';
import Alert from './Alert';
import '../css/form.css';

const Form = props => {
  const { formName, submissionLink } = props.data;

  const [program, updateProgram] = useState("");
  // const [fullname, updateFullname] = useState("");
  // const [surname, updatesurname] = useState("");
  // const [fatherName, updatefatherName] = useState("");
  // const [motherName, updatemotherName] = useState("");
  const [alertProp, updateAlertProp] = useState({
    alertClassName: "",
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
        >*Baccalauréat <i className="fa fa-info-circle" aria-hidden="true"></i></label>
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
        >*Relevé de notes du secondaire <i className="fa fa-info-circle" aria-hidden="true"></i></label>
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
        >*Diplôme de premier cycle</label>
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
        >*Relevé de notes de premier cycle</label>
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
        >*Diplôme de Master</label>
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
        >*Relevé de notes de maîtrise</label>
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
  const AlertClassDefault = "alert position-fixed alert-dismissible fade py-2";

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const displayWarning = (errorMessage, inp) => {
    //   updateAlertProp({
    //     alertClassName: `${AlertClassDefault} alert-warning show`,
    //     message: errorMessage,
    //   });

    //   setTimeout(() => {
    //     inp.focus();
    //     updateAlertProp({
    //       alertClassName: AlertClassDefault,
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

      loadingGif.classList.remove('d-none');
      appForm.classList.add('unclickable');


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
        loadingGif.classList.add('d-none');
        updateAlertProp({
          alertClassName: `${AlertClassDefault} alert-success show`,
          message: "Votre candidature a été soumise avec succès",
        });

      setTimeout(() => {
        appForm.classList.remove('unclickable');
        updateAlertProp({
          alertClassName: AlertClassDefault,
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
        loadingGif.classList.add('d-none');
        updateAlertProp({
          alertClassName: `${AlertClassDefault} alert-danger show`,
          message: "Il semble y avoir un problème. Réessayer",
        });

        setTimeout(() => {
          appForm.classList.remove('unclickable');
          updateAlertProp({
            alertClassName: AlertClassDefault,
            message: "",
          });
        }, 3000);

      });
  };


  return (
    <>
    <Alert data={
      {alertPropClass: alertProp.alertClassName,
       message: alertProp.message,
      }
    } />
    <img src={loader} alt="loading gif" className="position-fixed d-none loading-gif">
    </img>
    <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div className="modal-content">
        <div className="modal-header bt-form-header-conainer">
        <h4 className="modal-title" id="exampleModalLongTitle">{formName} Form</h4>
        </div>

        <div className="modal-body">
        <form id="application-form-react">
      <h5 className="mt-2">Informations personnelles</h5>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="stdName">Nom</label>
          <input
          // onChange={(e) => updateFullname(e.target.value)} value={fullname}
          type="text" name="name" className="form-control" id="stdName" placeholder="Nom"></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="stdSurname">Nom de famille</label>
          <input
          // onChange={(e) => updatesurname(e.target.value)} value={surname}
          type="text" name="surname" className="form-control" id="stdSurname" placeholder="Nom de famille"></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="stdFatherName">Le nom du père</label>
          <input
          // onChange={(e) => updatefatherName(e.target.value)} value={fatherName}
          type="text" name="father name" className="form-control" id="stdFatherName" placeholder="Le nom du père"></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="stdMotherName">Le nom de la mère</label>
          <input
          // onChange={(e) => updatemotherName(e.target.value)} value={motherName}
          type="text" name="mother name" className="form-control" id="stdMotherName" placeholder="Le nom de la mère"></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">E-mail</label>
          <input onChange={(e) => updateemail(e.target.value)} value={email} type="email" name="email address" className="form-control" id="inputEmail4" placeholder="E-mail"></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="inputTelephone">Numéro de téléphone</label>
          <input onChange={(e) => updatetelephone(e.target.value)} value={telephone} type="tel" name="phone number" className="form-control" id="inputTelephone" placeholder="Numéro de téléphone"></input>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="inputDOB">Date de naissance</label>
          <input onChange={(e) => updatedob(e.target.value)} value={dob} type="date" name="date of birth" className="form-control" id="inputDOB" placeholder="Date de naissance"></input>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputNationality">Nationalité</label>
          <select onChange={(e) => updatenationality(e.target.value)} value={nationality} name="nationality" id="inputNationality" className="form-control">
            <option>Choose...</option>
            {nationalities.map(AttachOptions)}
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputGender">Sexe</label>
          <select onChange={(e) => updategender(e.target.value)} value={gender} name="gender" id="inputGender" className="form-control">
            <option defaultValue>Sélectionnez...</option>
            <option value="male">Homme</option>
            <option value="female">Femme</option>
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputMaritalStatus">État civil</label>
          <select onChange={(e) => updatemaritalStatus(e.target.value)} value={maritalStatus} name="marital status" id="inputMaritalStatus" className="form-control">
            <option defaultValue>Sélectionner...</option>
            <option value="single">Célibataire</option>
            <option value="married">Marié</option>
          </select>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="emergencyContact">Personne à contacter en cas d'urgence</label>
          <input onChange={(e) => updateemergencyContact(e.target.value)} value={emergencyContact} type="tel" name="emergency contact" className="form-control" id="emergencyContact" placeholder="Personne à contacter en cas d'urgence"></input>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="inputAddress">Adresse</label>
          <input onChange={(e) => updateaddress(e.target.value)} value={address} name="address" type="text" className="form-control" id="inputAddress" placeholder="12 Main Street..."></input>
        </div>
      </div>

      <h5 className="mt-2">Pourquoi postulez-vous?</h5>
      <input onChange={(e) => updateApplicationType(e.target.value)} checked={applicationType === "studies"}
      type="radio" value="studies" name="application type" /> Études
      <input onChange={(e) => updateApplicationType(e.target.value)} checked={applicationType === "work"}
      type="radio" value="work" name="application type" className="ml-3" /> Travail
      <div id="accordion">
        {/* studeies */}
        <div className={applicationType === "studies" ? "card m-0" : "unclickable"}>
        <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button type="button" className="btn btn-link text-dark text-small" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
              Études
              </button>
            </h5>
          </div>

          <div id="collapseOne" className={applicationType === "studies" ? "collapse show" : "collapse"} aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <div className="form-row">
								<div className="form-group col-md-4">
									<label htmlFor="inputProgramLevel">Niveau du programme</label>
                  <select name="program" id="inputProgramLevel" className="form-control" onChange={(e) => updateProgram(e.target.value)} value={program}>
                    <option defaultValue>Sélectionner...</option>
                    <option value="undergraduate">Premier cycle</option>
                    <option value="masters">Maîtrise</option>
                    <option value="phd">Doctorat</option>
                    <option value="vocational">Ecole professionnelle (2 ans)</option>
                  </select>
                </div>

								<div className="form-group col-md-3">
									<label htmlFor="inputAdmissionType"
									data-toggle="tooltip"
									data-placement="top"
									title="Select 'Transfer' if you are currently admitted in a University and wish to continue from your current year. Select 'Direct' for a fresh admission"
									>Direct/Transfert <i className="fa fa-info-circle" aria-hidden="true"></i></label>
									<select onChange={(e) => updateadmissionType(e.target.value)} value={admissionType} name="admission type" id="inputAdmissionType" className="form-control">
										<option defaultValue>Sélectionner...</option>
										<option value="direct">Direct</option>
										<option value="transfer">Transfert</option>
									</select>
								</div>

                <div className="form-group col-md-5">
									<label htmlFor="inputProgram">Que veux-tu étudier</label>
									<input onChange={(e) => updatecourse(e.target.value)} value={course} name="course" list="programOptions" id="inputProgram" className="form-control" placeholder="par exemple, administration des affaires"/>
									<datalist id="programOptions">
                    {courses.map(AttachOptions)}
									</datalist>
								</div>
              </div>

              <div className="form-row">
                <div className="form-group col-md-12">
                  <span>Pays de choix</span><br />
                  <div className="col-md-4">
                  <label htmlFor="inputNationality">1er choix</label>
                  <select onChange={(e) => updatestudyFirstChoiceCountry(e.target.value)} value={studyFirstChoiceCountry} name="studies country 1" className="form-control">
                    <option>Sélectionner...</option>
                    {studyCountries.map(AttachOptions)}
                  </select>
                  </div>

                  <div className="col-md-4">
                  <label htmlFor="inputNationality">2ème choix</label>
                  <select onChange={(e) => updatestudySecondChoiceCountry(e.target.value)} value={studySecondChoiceCountry} name="studies country 2" id="inputNationality" className="form-control">
                    <option>Sélectionner...</option>
                    {studyCountries.map(AttachOptions)}
                  </select>
                  </div>
                </div>
              </div>

              <h5 className="mt-2"><small>Télécharger des documents</small></h5>
              <div className="mb-2">

                  <div className="form-row mt-2">
                  <div className="form-group col-md-6">
                    <label htmlFor="studentPhoto">Photo</label>
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
                    <label htmlFor="studentPassport">Passeport ou carte d'identité</label>
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
                    <label htmlFor="studentAdditionalDocs">*Autres documents</label>
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
          </div>
        </div>
        {/* work */}
        <div className={applicationType === "work" ? "card m-0" : "unclickable"}>
        <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button type="button" className="btn btn-link text-dark text-small" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Travail
              </button>
            </h5>
          </div>

          <div id="collapseTwo" className={applicationType === "work" ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
              <div className="form-row">

              <div className="form-group col-md-12">
                <span>Pays de choix</span><br />
                <div className="col-md-4">
                <label htmlFor="inputNationality">1er choix</label>
                <select onChange={(e) => updateworkFirstChoiceCountry(e.target.value)} value={workFirstChoiceCountry}
                name="work country 1" id="inputNationality" className="form-control">
                  <option>Sélectionner...</option>
                  {workCountries.map(AttachOptions)}
                </select>
                </div>

                <div className="col-md-4">
                <label htmlFor="inputNationality">2ème choix</label>
                <select onChange={(e) => updateworkSecondChoiceCountry(e.target.value)} value={workSecondChoiceCountry}
                name="work country 2" id="inputNationality" className="form-control">
                  <option>Sélectionner...</option>
                  {workCountries.map(AttachOptions)}
                </select>
                </div>
              </div>

              <div className="form-group col-md-5">
									<label htmlFor="inputProgramLevel">Plus haut degré</label>
                  <select onChange={(e) => updateworkerHighestDegree(e.target.value)} value={workerHighestDegree}
                  name="highest degree" id="inputProgramLevel" className="form-control">
                    <option defaultValue>Sélectionner...</option>
                    <option value="highschool">Baccalauréat</option>
                    <option value="undergraduate">Diplôme de premier cycle</option>
                    <option value="masters">Une maîtrise</option>
                    <option value="phd">Doctorat</option>
                  </select>
                </div>

                <div className="form-group col-md-12">
									<label htmlFor="job-experience">Faites la liste de vos expériences professionnelles précédentes si vous en avez</label>
									<input onChange={(e) => updatejobExperience(e.target.value)} value={jobExperience}
                  name="job experience" id="job-experience" className="form-control" placeholder="par exemple plombier, serveur..."/>
								</div>

                <div className="form-group col-md-12">
									<label htmlFor="inputProgram">Langues parlées</label>
									<input onChange={(e) => updatespokenLanguages(e.target.value)} value={spokenLanguages}
                  name="spoken languages" id="inputProgram" className="form-control" placeholder="par exemple français, anglais..."/>
								</div>
              </div>

              <h5 className="mt-2"><small>Histoire de voyage</small></h5>
              <div className="form-row">
                <div className="form-group col-md-12">
                <label htmlFor="visa-denial">Vous a-t-on déjà refusé un visa?</label><br></br>
                <input onChange={(e) => updatevisadenial(e.target.value)} checked={visadenial === "yes"}
                type="radio" value="yes" name="Have you ever been denied visa?" /> Oui<br></br>
                <input onChange={(e) => updatevisadenial(e.target.value)} checked={visadenial === "no"}
                type="radio" value="no" name="Have you ever been denied visa?" /> Non
                  <textarea onChange={(e) => updatevisaDenialReason(e.target.value)} value={visaDenialReason}
                  name="reason i was denied visa" className="form-control" placeholder="si oui, motiver" />
              </div>

                <div className="form-group col-md-12">
                <label>Avez-vous déjà été expulsé d'un pays?</label><br></br>
                <input onChange={(e) => updaterepatration(e.target.value)} checked={repatration === "yes"}
                type="radio" value="yes" name="Have you ever been repatriated from a country" /> Oui<br></br>
                <input onChange={(e) => updaterepatration(e.target.value)} checked={repatration === "no"}
                type="radio" value="no" name="Have you ever been repatriated from a country" /> Non
                  <textarea onChange={(e) => updaterepatrationReason(e.target.value)} value={repatrationReason}
                  name="reason i was repatriated" className="form-control" placeholder="si oui, motiver" />
              </div>

              <div className="form-group col-md-12">
                <label>Avez-vous déjà commis un crime dans votre pays ou à l'étranger?</label><br></br>
                <input onChange={(e) => updatefelony(e.target.value)} checked={felony === "yes"}
                type="radio" value="yes" name="Have you ever committed a felony at home or abroad" /> Oui<br></br>
                <input onChange={(e) => updatefelony(e.target.value)} checked={felony === "no"}
                type="radio" value="no" name="Have you ever committed a felony at home or abroad" /> Non
                  <textarea onChange={(e) => updatefelonyReason(e.target.value)} value={felonyReason}
                  name="reason i commited a felony" className="form-control" placeholder="si oui, motiver" />
              </div>

              <div className="form-group col-md-12">
									<label htmlFor="inputProgram">Pays dans lesquels vous avez voyagé au cours des 24 derniers mois:</label>
                  <input onChange={(e) => updatetravelledCountryList(e.target.value)} value={travelledCountryList}
                  name="countries you have travelled to within the last 24 months" id="inputProgram" className="form-control" placeholder="ex. Libéria, France..."/>
								</div>
              </div>


              <h5 className="mt-2"><small>Télécharger des documents</small></h5>
              <div className="mb-2">

                  <div className="form-row mt-2">
                  <div className="form-group col-md-6">
                    <label htmlFor="workerPhoto">Photo</label>
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
                    <label htmlFor="workerPassport">Passeport ou carte d'identité</label>
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
                    <label htmlFor="workerAdditionalDocs">*Documents supplémentaires</label>
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
          </div>
        </div>
      </div>

      <div className="mt-2">
        <button type="submit" className="btn btn-primary mt-2" id="application-form-submit" onClick={handleSubmit}>Soumettre</button>
      </div>
    </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Form;
