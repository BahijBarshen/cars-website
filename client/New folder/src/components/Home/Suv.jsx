import Book from "./Book";
import Client from "./Clients";
import Step from "./Step";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import BasicAccordion from "./Faq";
import MobileApp from "./MobileApp";
import Footer from "../Footer";

const Suv = (props) => {
  return (
    <div
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
      className="type-suv type"
    >
      <div className="cars-main">
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mahindra Scorpio</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv1" src="suv1.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>61,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Jeep Wrangler</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv7 suv" src="suv7.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>5.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>13,440$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mercedes-Benz</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv6" src="suv6.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>7.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>50,100$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mahindra Thar</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv suv4" src="suv4.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>1.5ft / 100km</p>
            </div>
            <div className="buy">
              {" "}
              <a href="#booking"></a>
              <p>15,466$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Honda Elevate</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv suv5" src="suv5.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>6.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>105,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tata Harrier</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv suv2" src="suv2.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>9.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>33,500$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Maruti Suzuki Grand</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv suv3" src="suv3.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>3.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>12,620$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Mahindra Scorpio</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod suv8" src="suv8.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>2.5ft / 100km</p>
            </div>
            <div className="buy">
              <a href="#booking"></a>
              <p>13,090$</p>
              <p>Reserve</p>
            </div>
          </div>
        </div>
      </div>
      <Book />
      <Client />
      <Step />
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Suv;
