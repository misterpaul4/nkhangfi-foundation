import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import FAQuestions from '../utils/faqs';

const FAQ = () => {
  const Attach = (item, index) => {
    return (
    <Card key={index}>
      <Accordion.Toggle as={Card.Header} eventKey={`${index}`} className="text-uppercase faqs">
      {item.question}
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={`${index}`}>
        <Card.Body>{item.answer}</Card.Body>
      </Accordion.Collapse>
    </Card>
    );
  };

  return (
    <section className="ftco-section ftco-no-pt my-5" id="f-a-q">
        <div className="row justify-content-center pb-5">
            <div className="col-md-7 text-center heading-section" data-aos="fade-up" data-aos-duration="1000">
              <span className="subheading">FAQs</span>
              <h2 className="mb-3">Frequesntly Ask Question</h2>
          </div>

        <div className="row justify-content-center">
          <div className="col-md-8" data-aos="fade-up" data-aos-duration="1000">
            <Accordion defaultActiveKey="0">
              {FAQuestions.map(Attach)}
            </Accordion>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
