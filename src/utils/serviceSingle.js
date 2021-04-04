import imgVisa from '../images/visas1.jpg';
import imgVisa2 from '../images/visas2.jpeg';
import imgVisa3 from '../images/visas3.jpeg';
import Cards from '../components/Cards';
import img4 from '../images/tours/mexico.jpg';
import img5 from '../images/tours/egypt.jpg';
import img6 from '../images/tours/georgia.jpg';
import img7 from '../images/tours/nicaragua.jpg';
import img8 from '../images/tours/dubai.jpg';
import img9 from '../images/tours/albania.jpg';

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
  },
  {
    name: 'tours',
    parent: 'nkhangfi travel',
    bg: 'nk-tours-bg',
    theme: 'tour packages',
    title: 'tourism | cruise | explore',
    catchphrase: "providing the best tourism experience",
    message: () => (
      <>
        <p>Nkhangfi Travel provides exquisite and adventurous locations for exploration. Our tour packages include some exotic and adventurous places. These packages will include visa processing and tours(boat cruise, historical places, city tours etc) for couples, singles and groups. Explore some of these packages below
        </p>
      </>
    ),
    images: () => (
      <>
        <Cards data={
          {
            theme: "tour packages",
            catchphrase: "explore",
            items: [
              {
              title: "explore mexico",
              image: img4,
              opt: () => (
                <>
                  <div className="d-flex justify-content-between align-items-center"><span><i className="fa fa-calendar me-1"></i>60days</span>  $3000 USD</div>
                </>
              ),
              message: () => (
                <>
                  <p>
                  People from ages 18 - 50 can benefit from this package. This package includes a work visa, 1 year work permit, paid language course, assistance to relocate to the US and jobs
                  </p>
                </>),
            },
            {
              title: "holidays in egypt",
              image: img5,
              opt: () => (
                <>
                  <div className="d-flex justify-content-between align-items-center"><span><i className="fa fa-calendar me-1"></i>6 days holiday package</span>  $1630 USD</div>
                </>
              ),
              message: () => (
                <>
                  <p>
                  Take advantage of your vacation to visit Egypt, the cradle of great civilizations, land of the pharaohs, the pyramids and the Nile, for an original stay of six days (06) at low very low cost. Your holidays in Egypt are an ideal opportunity to contemplate the vestiges of the past: in addition to the many testimonies left by ancient civilization, Egypt also has a rich heritage imbued with Arab and Mediterranean cultures. Package will include
                  </p>

                  <ul>
                      <li>3 months visa</li>
                      <li>Round trip plane ticket via Egypt air</li>
                      <li>4 star accomodation</li>
                      <li>Visits to museums, pyramids and some of the tourist attractions in Egypt</li>
                  </ul>
                </>
              ),
            },
            {
              title: "private tour of georgia",
              image: img6,
              opt: () => (
                <>
                  <div className="d-flex justify-content-between align-items-center"><span><i className="fa fa-calendar me-1"></i>5 days</span>  $600 USD for 2 persons</div>
                </>
              ),
              message: () => (
                <>
                  <p>
                  HURRY UP and book your this amazing vacation of 5 days and 4 nights. Two ski resort in one package(Gudauri ski resort and Bakuriani ski resort). Package includes
                  </p>
                  <ul>
                    <li>3 star hotel accomodation</li>
                    <li>Breakfast</li>
                    <li>Transfer</li>
                    <li>Comfortable car with driver</li>
                    <li>Daily private tours</li>
                    <li>Guide Services</li>
                    <li>Free sim card</li>
                  </ul>
                </>
              ),
            },
            {
              title: "7 days UNESCO tour of Albania",
              image: img9,
              opt: () => (
                <>
                  <div className="d-flex justify-content-between align-items-center"><span><i className="fa fa-calendar me-1"></i>7 days</span>  €1000 EUR</div>
                </>
              ),
              message: () => (
                <>
                  <p>
                    This offer includes
                  </p>
                  <ul>
                    <li>Transportation</li>
                    <li>Hotel accomodation</li>
                    <li>Breakfast, launch and dinners for 7 days</li>
                    <li>Museum tickets</li>
                    <li>Licenced guide</li>
                  </ul>
                  <p>
                    All inclusive visits to
                  </p>
                  <ul>
                    <li>Berat Castle</li>
                    <li>Onufri Museum</li>
                    <li>Church of Saint Mary</li>
                    <li>The old Mangalem neighborhood</li>
                    <li>Ethnographic Museum</li>
                    <li>Gjirokastra Castle</li>
                    <li>Ethnographic Museum (Enver Hoxha House)</li>
                    <li>Ismail Kadare Museum House</li>
                    <li>Blue eye</li>
                    <li>The ancient city of Butrint</li>
                    <li>Përmeti and Tepelena</li>
                    <li>Kelcyres Bridge</li>
                    <li>Thermal Baths</li>
                    <li>Langarice Canyons</li>
                    <li>Ali Pasha Castle</li>
                    <li>Porto Palermo</li>
                    <li>Borsh Waterfall</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Explore Nicaragua",
              image: img7,
              opt: () => (
                <>
                  <div className="d-flex justify-content-between align-items-center"><span><i className="fa fa-calendar me-1"></i>12 days</span>  $5,400 USD for 4 persons</div>
                </>
              ),
              message: () => (
                <>
                  <p>
                  Offer includes the following
                  </p>
                  <ul>
                    <li>Food</li>
                    <li>Transportation</li>
                    <li>Driver</li>
                    <li>Guide</li>
                    <li>Visits to some of the best tourist attractions in Nicaragua</li>
                    <li>Insurance</li>
                  </ul>
                </>
              ),
            },
            {
              title: "Dubai Exclusive",
              image: img8,
              opt: () => (
                <>
                  <div className="d-flex justify-content-between align-items-center"><span><i className="fa fa-calendar me-1"></i>10 days</span>  $850 USD</div>
                </>
              ),
              message: () => (
                <>
                  <p>
                  Offer includes the following
                  </p>
                  <ul>
                    <li>1 month Visa</li>
                    <li>City tour</li>
                    <li>Creek dhow cruise</li>
                    <li>Dessert safari with live shows & bbq dinner</li>
                    <li>Dubai mall & fountain show</li>
                    <li>Burj Khalifa, 124th floor</li>
                  </ul>
                </>
              ),
            },
          ]}
        } />
      </>
    ),
  }
];

export default services;
