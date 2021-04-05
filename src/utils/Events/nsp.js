import banner from '../../images/events/yos_banner.png';

const Event = {
  pathName: 'nsp',
  bg: 'nk-events-nsp-bg',
  name: 'nkhangfi scholarship program',
  theme: 'nkhangfi scholarship program',
  parent: 'events',
  image: banner,
  title: 'register for the nkhangfi scholarship program in sierra leone, liberia and guinea',
  messageTop: "The Nkhangfi Scholarship Program will consist of the following events, seminar, workfair, main exams, award ceremony & workshop. Scholarships ranging from 25% to 80% will be distributed to students based on merit.",
  messageBottom: () => (
    <>
    <p>This Program will give students the opportunity to study in reputable private universities for as low as $995.</p>

    <ul>
    <h4>Requirements</h4>
        <li>Waec/WASSCE/Neco/GCE/BACC</li>
        <li>Highschool Result/Testimonial/Diploma & Transcript</li>
        <li>Bachelors/Masters Diploma & Transcript for post-graduate students</li>
        <li>Passport</li>
        <li>Application fee of $50 USD</li>
        <li>Age 17 - 35 years</li>
    </ul>
    </>
  ),
  sideContent: () => (
    <>
      <div>
        <h3>Application Deadline</h3>
        May 15th, 2021
      </div>

      <div className="mb-3">
        <h3>Application Fee</h3>
        $50 USD
      </div>

      <h3>Program Schedule</h3>
      <h4>Sierra Leone</h4>
      <ul class="no-list-style categories me-md-4">
        <li><span className="font-weight-bold mr-3">Seminar:</span>31st May, 2021</li>
        <li><span className="font-weight-bold mr-3">Workshop:</span>1st June, 2021</li>
        <li><span className="font-weight-bold mr-3">Exam:</span>2nd June, 2021</li>
        <li><span className="font-weight-bold mr-3">Work Fair:</span>3rd June, 2021</li>
        <li><span className="font-weight-bold mr-3">Award Ceremony:</span>5th June, 2021</li>
      </ul>

      <h4>Liberia</h4>
      <ul class="no-list-style categories me-md-4">
        <li><span className="font-weight-bold mr-3">Seminar & Workshop:</span>7th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Exam:</span>8th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Work Fair:</span>9th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Award Ceremony:</span>11th June, 2021</li>
      </ul>


      <h4>Guinea</h4>
      <ul class="no-list-style categories me-md-4">
      <li><span className="font-weight-bold mr-3">Work Fair:</span>12th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Seminar & Workshop:</span>14th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Exam:</span>15th June, 2021</li>
        <li><span className="font-weight-bold mr-3">Award Ceremony:</span>19th June, 2021</li>
      </ul>
    </>
  ),
}

export default Event;
