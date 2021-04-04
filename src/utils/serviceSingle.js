import imgVisa from '../images/visas1.jpg';
import imgVisa2 from '../images/visas2.jpeg';
import imgVisa3 from '../images/visas3.jpeg';

const services = [
  {
    name: 'visa',
    parent: 'nkhangfi travel',
    bg: 'nk-travel-hero-bg',
    theme: 'visa processing',
    title: "VISA ASSISTANCE | DOCUMENTATIONS | consultation",
    catchphrase: "visa support packages to most countries worldwide",
    message: () => (
      <>
        <p>Nkhangfi Travel offer visa assistance services to clients from anywhere in the world. We have built a trusted corporate portfolio accross embassies and consulates in different part of Africa. Our suucess rate speaks for itself as we have succesfully assisted clients in getting visas in the following countries
        </p>

        <ul className="text-left">
          <li>Cyprus</li>

          <li>China</li>

          <li>Belarus</li>

          <li>Norway</li>

          <li>Netherland</li>

          <li>Poland</li>

          <li>Croatia</li>

          <li>Canada</li>

          <li>Dubai</li>

          & more
        </ul>
      </>
    ),
    images: () => (
      <>
        <img src={imgVisa} alt="visa" className="img-show"></img>
        <img src={imgVisa2} alt="visa" className="img-show"></img>
        <img src={imgVisa3} alt="visa" className="img-show"></img>
      </>
    ),
  }
];

export default services;
