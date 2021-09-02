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
      <div class="form-group col-md-6">
        <label for="inputHighschoolDiploma"
        data-toggle="tooltip"
        data-placement="top"
        title="If you are from West Africa (e.g Nigeria, Sierra Leone), upload your WAEC/WASSCE/NECO or NABTEB"
        >High School Diploma <i class="fa fa-info-circle" aria-hidden="true"></i></label>
        <input
          name="highschool diploma"
          type="hidden"
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          class="form-control"
          id="inputHighschoolDiploma"
          multiple
          ></input>
      </div>

      <div class="form-group col-md-6">
        <label for="inputHighschoolTranscript"
        data-toggle="tooltip"
        data-placement="top"
        title="Not required for West African students"
        >High School Transcript <i class="fa fa-info-circle" aria-hidden="true"></i></label>
        <input
          name="highschool transcript" type="hidden"
          role="uploadcare-uploader"
          data-public-key="65ff5cf3971550d38006"
          class="form-control"
          id="inputHighschoolTranscript"
          multiple></input>
      </div>
    </>
  );

  const AttachMasters = () => (
    <>
      <div class="form-group col-md-6">
        <label for="inputUndergraduateDiploma"
        data-toggle="tooltip"
        data-placement="top"
        >Undergraduate Diploma</label>
        <input
          name="undergraduate diploma"
          type="hidden"
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          class="form-control"
          id="inputUndergraduateDiploma"
          multiple
          ></input>
      </div>

      <div class="form-group col-md-6">
        <label for="inputUndergraduateTranscript"
        data-toggle="tooltip"
        data-placement="top"
        >Undergraduate Transcript</label>
        <input
          name="undergraduate transcript" type="hidden"
          role="uploadcare-uploader"
          data-public-key="65ff5cf3971550d38006"
          class="form-control"
          id="inputUndergraduateTranscript"
          multiple></input>
      </div>
    </>
  );

  const AttachPhD = () => (
    <>
    {AttachMasters()}
    <div class="form-group col-md-6">
        <label for="inputMasterDiploma"
        >Master's Diploma</label>
        <input
          name="master diploma"
          type="hidden"
          role="uploadcare-uploader"
          data-public-key="64c0a64485b8950cc40d"
          class="form-control"
          id="inputMasterDiploma"
          multiple
          ></input>
      </div>

      <div class="form-group col-md-6">
        <label for="inputMasterTranscript"
        data-toggle="tooltip"
        data-placement="top"
        >Master's Transcript</label>
        <input
          name="master transcript" type="hidden"
          role="uploadcare-uploader"
          data-public-key="65ff5cf3971550d38006"
          class="form-control"
          id="inputMasterTranscript"
          multiple></input>
      </div>
    </>
  );

  return (
      <form className="my-5 bt-form">
      <h3 className="mb-4 text-center">{formName} Form</h3>
      <h5 class="mt-2">Personal Information</h5>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="stdName">Name</label>
          <input type="text" name="name" class="form-control" id="stdName" placeholder="Name" required></input>
        </div>

        <div class="form-group col-md-6">
          <label for="stdSurname">Surname</label>
          <input type="text" name="surname" class="form-control" id="stdSurname" placeholder="Surname" required></input>
        </div>

        <div class="form-group col-md-6">
          <label for="stdFatherName">Father's Name</label>
          <input type="text" name="father name" class="form-control" id="stdFatherName" placeholder="Father's Name"></input>
        </div>

        <div class="form-group col-md-6">
          <label for="stdMotherName">Mother's Name</label>
          <input type="text" name="mother name" class="form-control" id="stdMotherName" placeholder="Mother's Name"></input>
        </div>

        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input type="email" name="email address" class="form-control" id="inputEmail4" placeholder="Email" required></input>
        </div>

        <div class="form-group col-md-6">
          <label for="inputTelephone">Phone Number</label>
          <input type="tel" name="phone number" class="form-control" id="inputTelephone" placeholder="Phone Number" required></input>
        </div>
      </div>

      <div className="form-row">
        <div class="form-group col-md-3">
          <label for="inputDOB">Date of Birth</label>
          <input type="date" name="date of birth" class="form-control" id="inputDOB" placeholder="D.O.B"></input>
        </div>

        <div class="form-group col-md-3">
          <label for="inputNationality">Nationality</label>
          <select name="nationality" id="inputNationality" class="form-control">
            <option>Choose...</option>
            {nationalities.map(AttachOptions)}
          </select>
        </div>

        <div class="form-group col-md-3">
          <label for="inputGender">Gender</label>
          <select name="gender" id="inputGender" class="form-control">
            <option selected>Select Gender...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div class="form-group col-md-3">
          <label for="inputMaritalStatus">Marital Status</label>
          <select name="marital status" id="inputMaritalStatus" class="form-control">
            <option selected>Choose...</option>
            <option value="single">Single</option>
            <option value="married">Married</option>
          </select>
        </div>

        <div class="form-group col-md-6">
          <label for="emergencyContact">Emergency Contact</label>
          <input type="tel" name="emergency contact" class="form-control" id="emergencyContact" placeholder="Emergency Number"></input>
        </div>

        <div class="form-group col-md-12">
          <label for="inputAddress">Address</label>
          <input name="address" type="text" class="form-control" id="inputAddress" placeholder="12 Main Street..."></input>
        </div>
      </div>

      <h5 class="mt-2">What are you applying for?</h5>
      <div id="accordion">
        {/* studeies */}
        <div className="card m-0">
        <div class="card-header" id="headingOne">
            <h5 class="mb-0">
              <button type="button" class="btn btn-link text-dark text-small" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                Studies
              </button>
            </h5>
          </div>

          <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
            <div class="card-body">
              <div class="form-row">
								<div class="form-group col-md-3">
									<label for="inputProgramLevel">Program Level</label>
                  <select name="program" id="inputProgramLevel" class="form-control" onChange={(e) => updateProgram(e.target.value)} value={program}>
                    <option selected>Select Level...</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="masters">Masters</option>
                    <option value="phd">PhD</option>
                    <option value="vocational">Vocational School (2 years)</option>
                  </select>
                </div>

								<div class="form-group col-md-3">
									<label for="inputAdmissionType"
									data-toggle="tooltip"
									data-placement="top"
									title="Select 'Transfer' if you are currently admitted in a University and wish to continue from your current year. Select 'Direct' for a fresh admission"
									>Direct/Transfer <i class="fa fa-info-circle" aria-hidden="true"></i></label>
									<select name="admission type" id="inputAdmissionType" class="form-control">
										<option selected>Select Type...</option>
										<option value="direct">Direct</option>
										<option value="transfer">Transfer</option>
									</select>
								</div>

                <div class="form-group col-md-5">
									<label for="inputProgram">Select Program</label>
									<input name="course" list="programOptions" id="inputProgram" class="form-control" placeholder="e.g Business Administration"/>
									<datalist id="programOptions">
                    {courses.map(AttachOptions)}
									</datalist>
								</div>
              </div>

              <h5 class="mt-2"><small>Upload Documents</small></h5>
              <div class="mb-2">
                  <small>
                    <em>
                      The maximum single file size is <strong>10MB</strong>
                      </em>
                  </small>

                  <div className="form-row mt-2">
                  <div class="form-group col-md-6">
                    <label for="inputPhoto">Photo</label>
                    <input
                      name="stdies-photo"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="64c0a64485b8950cc40d"
                      class="form-control"
                      id="inputPhoto">
                      </input>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputPassport">Passport or ID</label>
                    <input
                      name="passport"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="64c0a64485b8950cc40d"
                      class="form-control"
                      id="inputPassport">
                      </input>
                  </div>

                  {/* {() => {
                    if(program === "phd") {
                      AttachPhD();
                    } else if (program === "masters") {
                      AttachMasters();
                    } else {
                      AttachUndergrad();
                    }
                  }} */}


                  <div class="form-group col-md-6">
                    <label for="inputOther">Other</label>
                    <input
                      name="UG-others"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="65ff5cf3971550d38006"
                      class="form-control"
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
        <div class="card-header" id="headingTwo">
            <h5 class="mb-0">
              <button type="button" class="btn btn-link text-dark text-small" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Work
              </button>
            </h5>
          </div>

          <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
            <div class="card-body">
              <div class="form-row">

              <div class="form-group col-md-3">
                <label for="inputNationality">Country of choice</label>
                <select name="country 1" id="inputNationality" class="form-control">
                  <option>Choose...</option>
                  {countries.map(AttachOptions)}
                </select>
              </div>

              <div class="form-group col-md-5">
									<label for="inputProgramLevel">Highest Degree</label>
                  <select name="program" id="inputProgramLevel" class="form-control" onChange={(e) => updateProgram(e.target.value)} value={program}>
                    <option selected>Select...</option>
                    <option value="highschool">Highschool Diploma</option>
                    <option value="undergraduate">Undergraduate Degree</option>
                    <option value="masters">Masters Degree</option>
                    <option value="phd">PhD Degree</option>
                  </select>
                </div>

                <div class="form-group col-md-12">
									<label for="job-experience">List your previous job experiences if you have any</label>
									<input name="job experience" id="job-experience" class="form-control" placeholder="e.g plumber, waiter..."/>
								</div>

                <div class="form-group col-md-12">
									<label for="inputProgram">Spoken Languages</label>
									<input name="job experience" id="inputProgram" class="form-control" placeholder="e.g french, english..."/>
								</div>
              </div>

              <h5 class="mt-2"><small>Travel History</small></h5>
              <div className="form-row">
                <div className="form-group col-md-12">
                <label for="visa-denial">Have you ever been denied visa?</label><br></br>
                <input type="radio" value="yes" name="Have you ever been denied visa?" /> Yes<br></br>
                <input type="radio" value="no" name="Have you ever been denied visa?" /> No
                  <textarea name="reason i was denied visa" class="form-control" placeholder="if yes, state reasons" />
              </div>

                <div className="form-group col-md-12">
                <label>Have you ever been repatriated from a country?</label><br></br>
                <input type="radio" value="yes" name="Have you ever been repatriated from a country" /> Yes<br></br>
                <input type="radio" value="no" name="Have you ever been repatriated from a country" /> No
                  <textarea name="reason i was denied visa" class="form-control" placeholder="if yes, state reasons" />
              </div>

              <div className="form-group col-md-12">
                <label>Have you ever committed a felony at home or abroad?</label><br></br>
                <input type="radio" value="yes" name="Have you ever committed a felony at home or abroad" /> Yes<br></br>
                <input type="radio" value="no" name="Have you ever committed a felony at home or abroad" /> No
                  <textarea name="reason i was denied visa" class="form-control" placeholder="if yes, state reasons" />
              </div>

              <div class="form-group col-md-12">
									<label for="inputProgram">Country(s) you have travelled to within the last 24 months:</label>
                  <input name="job experience" id="inputProgram" class="form-control" placeholder="e.g Liberia, France..."/>
								</div>
              </div>


              <h5 class="mt-2"><small>Upload Documents</small></h5>
              <div class="mb-2">
                  <small>
                    <em>
                      The maximum single file size is <strong>10MB</strong>
                      </em>
                  </small>

                  <div className="form-row mt-2">
                  <div class="form-group col-md-6">
                    <label for="inputPhoto">Photo</label>
                    <input
                      name="stdies-photo"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="64c0a64485b8950cc40d"
                      class="form-control"
                      id="inputPhoto">
                      </input>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputPassport">Passport or ID</label>
                    <input
                      name="passport"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="64c0a64485b8950cc40d"
                      class="form-control"
                      id="inputPassport">
                      </input>
                  </div>


                  <div class="form-group col-md-6">
                    <label for="inputOther">Additional Documents</label>
                    <input
                      name="UG-others"
                      type="hidden"
                      role="uploadcare-uploader"
                      data-public-key="65ff5cf3971550d38006"
                      class="form-control"
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
        <button type="submit" class="btn btn-primary" id="application-form-submit">Submit</button>
      </div>
    </form>
  )
}

export default Form;
