/* eslint-disable jsx-a11y/aria-role */
import React, { useState } from 'react';
import countries from '../utils/countries';
import courses from '../utils/courses';
import nationalities from '../utils/nationalities';
import '../css/form.css';

const Form = props => {
  const { formName } = props.data;

  const [program, updateProgram] = useState("");

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
        >*High School Diploma <i className="fa fa-info-circle" aria-hidden="true"></i></label>
        <input
          name="highschool diploma"
          type="hidden"
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          className="form-control"
          id="inputHighschoolDiploma"
          multiple
          ></input>
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="inputHighschoolTranscript"
        data-toggle="tooltip"
        data-placement="top"
        title="Not required for West African students"
        >*High School Transcript <i className="fa fa-info-circle" aria-hidden="true"></i></label>
        <input
          name="highschool transcript" type="hidden"
          role="uploadcare-uploader"
          data-public-key="65ff5cf3971550d38006"
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
        >*Undergraduate Diploma</label>
        <input
          name="undergraduate diploma"
          type="hidden"
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          className="form-control"
          id="inputUndergraduateDiploma"
          multiple
          ></input>
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="inputUndergraduateTranscript"
        data-toggle="tooltip"
        data-placement="top"
        >*Undergraduate Transcript</label>
        <input
          name="undergraduate transcript" type="hidden"
          role="uploadcare-uploader"
          data-public-key="65ff5cf3971550d38006"
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
        >*Master's Diploma</label>
        <input
          name="master diploma"
          type="hidden"
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          className="form-control"
          id="inputMasterDiploma"
          multiple
          ></input>
      </div>

      <div className="form-group col-md-6">
        <label htmlFor="inputMasterTranscript"
        data-toggle="tooltip"
        data-placement="top"
        >*Master's Transcript</label>
        <input
          name="master transcript" type="hidden"
          role="uploadcare-uploader"
          data-public-key="65ff5cf3971550d38006"
          className="form-control"
          id="inputMasterTranscript"
          multiple></input>
      </div>
    </>
  );

  return (
      <form className="my-5 bt-form">
      <h3 className="mb-4 text-center">{formName} Form</h3>
      <h5 className="mt-2">Personal Information</h5>

      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="stdName">Name</label>
          <input type="text" name="name" className="form-control" id="stdName" placeholder="Name" required></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="stdSurname">Surname</label>
          <input type="text" name="surname" className="form-control" id="stdSurname" placeholder="Surname" required></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="stdFatherName">Father's Name</label>
          <input type="text" name="father name" className="form-control" id="stdFatherName" placeholder="Father's Name"></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="stdMotherName">Mother's Name</label>
          <input type="text" name="mother name" className="form-control" id="stdMotherName" placeholder="Mother's Name"></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input type="email" name="email address" className="form-control" id="inputEmail4" placeholder="Email" required></input>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="inputTelephone">Phone Number</label>
          <input type="tel" name="phone number" className="form-control" id="inputTelephone" placeholder="Phone Number" required></input>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="inputDOB">Date of Birth</label>
          <input type="date" name="date of birth" className="form-control" id="inputDOB" placeholder="D.O.B"></input>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputNationality">Nationality</label>
          <select name="nationality" id="inputNationality" className="form-control">
            <option>Choose...</option>
            {nationalities.map(AttachOptions)}
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputGender">Gender</label>
          <select name="gender" id="inputGender" className="form-control">
            <option defaultValue>Select Gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="form-group col-md-3">
          <label htmlFor="inputMaritalStatus">Marital Status</label>
          <select name="marital status" id="inputMaritalStatus" className="form-control">
            <option defaultValue>Choose...</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="emergencyContact">Emergency Contact</label>
          <input type="tel" name="emergency contact" className="form-control" id="emergencyContact" placeholder="Emergency Number"></input>
        </div>

        <div className="form-group col-md-12">
          <label htmlFor="inputAddress">Address</label>
          <input name="address" type="text" className="form-control" id="inputAddress" placeholder="12 Main Street..."></input>
        </div>
      </div>

      <h5 className="mt-2">What are you applying for?</h5>
      <div id="accordion">
        {/* studeies */}
        <div className="card m-0">
        <div className="card-header" id="headingOne">
            <h5 className="mb-0">
              <button type="button" className="btn btn-link text-dark text-small" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Studies
              </button>
            </h5>
          </div>

          <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div className="card-body">
              <div className="form-row">
								<div className="form-group col-md-3">
									<label htmlFor="inputProgramLevel">Program Level</label>
                  <select name="program" id="inputProgramLevel" className="form-control" onChange={(e) => updateProgram(e.target.value)} value={program}>
                    <option defaultValue>Select Level...</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PhD</option>
                    <option value="vocational">Vocational School (2 years)</option>
                  </select>
                </div>

								<div className="form-group col-md-3">
									<label htmlFor="inputAdmissionType"
									data-toggle="tooltip"
									data-placement="top"
									title="Select 'Transfer' if you are currently admitted in a University and wish to continue from your current year. Select 'Direct' for a fresh admission"
									>Direct/Transfer <i className="fa fa-info-circle" aria-hidden="true"></i></label>
									<select name="admission type" id="inputAdmissionType" className="form-control">
										<option defaultValue>Select Type...</option>
										<option value="direct">Direct</option>
										<option value="transfer">Transfer</option>
									</select>
								</div>

                <div className="form-group col-md-5">
									<label htmlFor="inputProgram">Select Program</label>
									<input name="course" list="programOptions" id="inputProgram" className="form-control" placeholder="e.g Business Administration"/>
									<datalist id="programOptions">
                    {courses.map(AttachOptions)}
									</datalist>
								</div>
              </div>

              <h5 className="mt-2"><small>Upload Documents</small></h5>
              <div className="mb-2">
                  <small>
                    <em>
                      The maximum single file size is <strong>10MB</strong>
                      </em>
                  </small>

                  <div className="form-row mt-2">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPhoto">Photo</label>
                    <input
                      name="stdies-photo"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="64c0a64485b8950cc40d"
                      className="form-control"
                      id="inputPhoto">
                      </input>
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassport">Passport or ID</label>
                    <input
                      name="passport"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="64c0a64485b8950cc40d"
                      className="form-control"
                      id="inputPassport">
                      </input>
                  </div>

                  {AttachUndergrad()}
                  {program === "masters" ? AttachMasters() : null}
                  {program === "phd" ? AttachPhD() : null}

                  <div className="form-group col-md-6">
                    <label htmlFor="inputOther">*Other</label>
                    <input
                      name="UG-others"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="65ff5cf3971550d38006"
                      className="form-control"
                      id="inputOther"
                      multiple></input>
                  </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
        {/* work */}
        <div className="card m-0">
        <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button type="button" className="btn btn-link text-dark text-small" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Work
              </button>
            </h5>
          </div>

          <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div className="card-body">
              <div className="form-row">

              <div className="form-group col-md-3">
                <label htmlFor="inputNationality">Country of choice</label>
                <select name="country 1" id="inputNationality" className="form-control">
                  <option>Choose...</option>
                  {countries.map(AttachOptions)}
                </select>
              </div>

              <div className="form-group col-md-5">
									<label htmlFor="inputProgramLevel">Highest Degree</label>
                  <select name="program" id="inputProgramLevel" className="form-control" onChange={(e) => updateProgram(e.target.value)} value={program}>
                    <option defaultValue>Select...</option>
                    <option value="highschool">Highschool Diploma</option>
                    <option value="undergraduate">Undergraduate Degree</option>
                    <option value="masters">Masters Degree</option>
                    <option value="phd">PhD Degree</option>
                  </select>
                </div>

                <div className="form-group col-md-12">
									<label htmlFor="job-experience">List your previous job experiences if you have any</label>
									<input name="job experience" id="job-experience" className="form-control" placeholder="e.g plumber, waiter..."/>
								</div>

                <div className="form-group col-md-12">
									<label htmlFor="inputProgram">Spoken Languages</label>
									<input name="job experience" id="inputProgram" className="form-control" placeholder="e.g french, english..."/>
								</div>
              </div>

              <h5 className="mt-2"><small>Travel History</small></h5>
              <div className="form-row">
                <div className="form-group col-md-12">
                <label htmlFor="visa-denial">Have you ever been denied visa?</label><br></br>
                <input type="radio" value="yes" name="Have you ever been denied visa?" /> Yes<br></br>
                <input type="radio" value="no" name="Have you ever been denied visa?" /> No
                  <textarea name="reason i was denied visa" className="form-control" placeholder="if yes, state reasons" />
              </div>

                <div className="form-group col-md-12">
                <label>Have you ever been repatriated from a country?</label><br></br>
                <input type="radio" value="yes" name="Have you ever been repatriated from a country" /> Yes<br></br>
                <input type="radio" value="no" name="Have you ever been repatriated from a country" /> No
                  <textarea name="reason i was denied visa" className="form-control" placeholder="if yes, state reasons" />
              </div>

              <div className="form-group col-md-12">
                <label>Have you ever committed a felony at home or abroad?</label><br></br>
                <input type="radio" value="yes" name="Have you ever committed a felony at home or abroad" /> Yes<br></br>
                <input type="radio" value="no" name="Have you ever committed a felony at home or abroad" /> No
                  <textarea name="reason i was denied visa" className="form-control" placeholder="if yes, state reasons" />
              </div>

              <div className="form-group col-md-12">
									<label htmlFor="inputProgram">Country(s) you have travelled to within the last 24 months:</label>
                  <input name="job experience" id="inputProgram" className="form-control" placeholder="e.g Liberia, France..."/>
								</div>
              </div>


              <h5 className="mt-2"><small>Upload Documents</small></h5>
              <div className="mb-2">
                  <small>
                    <em>
                      The maximum single file size is <strong>10MB</strong>
                      </em>
                  </small>

                  <div className="form-row mt-2">
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPhoto">Photo</label>
                    <input
                      name="stdies-photo"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="64c0a64485b8950cc40d"
                      className="form-control"
                      id="inputPhoto">
                      </input>
                  </div>

                  <div className="form-group col-md-6">
                    <label htmlFor="inputPassport">Passport or ID</label>
                    <input
                      name="passport"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="64c0a64485b8950cc40d"
                      className="form-control"
                      id="inputPassport">
                      </input>
                  </div>


                  <div className="form-group col-md-6">
                    <label htmlFor="inputOther">*Additional Documents</label>
                    <input
                      name="UG-others"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="65ff5cf3971550d38006"
                      className="form-control"
                      id="inputOther"
                      multiple></input>
                  </div>
                  </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2">
        <button type="submit" className="btn btn-primary" id="application-form-submit">Submit</button>
      </div>
    </form>
  )
}

export default Form;
