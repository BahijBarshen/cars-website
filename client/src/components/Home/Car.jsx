// import Book from "./Book";
import React, { useState } from "react";
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import Client from "./Clients";
import Step from "./Step";
import ChooseUs from "./ChooseUs";
import Testimonial from "./Testimonial";
import BasicAccordion from "./Faq";
import MobileApp from "./MobileApp";
import Footer from "../Footer";

const Car = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");

  const paymentUrls = {
    "Jaguar F-TYPE": "/payment/jaguar",
    "Ferrari F430": "/payment/ferrari",
    "Tesla Model S": "/payment/tesla-s",
    "Hyundai Elite": "/payment/hyundai-elite",
    "Tesla Model S75": "/payment/tesla-s75",
    "Tesla Model X": "/payment/tesla-x",
    "Tesla Model P90": "/payment/tesla-p90",
    default: "/payment/checkout",
  };

  function openPayment(carName) {
    // open modal and set price via mapping
    const url = paymentUrls[carName] || paymentUrls.default;
    setModalUrl(url);
    setSelectedCar(carName);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setModalUrl("");
  }

  const stripe = useStripe();
  const elements = useElements();
  const [selectedCar, setSelectedCar] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState("");

  const carPrices = {
    "Jaguar F-TYPE": 7415000,
    "Ferrari F430": 14184500,
    "Tesla Model S": 7499000,
    "Hyundai Elite": 3069000,
    "Tesla Model S75": 5588000,
    "Tesla Model X": 7999000,
    "Tesla Model P90": 7999000,
    default: 1000,
  };

  async function handlePay(e) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setProcessing(true);
    setMessage("");

    const amount = carPrices[selectedCar] || carPrices.default;

    try {
      const res = await fetch('/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount }),
      });
      const data = await res.json();
      if (!data.clientSecret) throw new Error(data.error || 'No clientSecret');

      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: { card: elements.getElement(CardElement) },
      });

      if (result.error) {
        setMessage(result.error.message || 'Payment failed');
      } else if (result.paymentIntent && result.paymentIntent.status === 'succeeded') {
        setMessage('Payment successful — thank you!');
        // close modal after short delay
        setTimeout(() => closeModal(), 1500);
      }
    } catch (err) {
      console.error(err);
      setMessage(err.message || 'Payment error');
    }
    setProcessing(false);
  }

  return (
    <div
      className="type-car type"
      style={{
        opacity: props.clickState ? "1" : "0",
        zIndex: props.clickState ? "10" : "",
      }}
    >
      <div className="cars-main">
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Jaguar F-TYPE</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod1" src="prod1.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>2.5ft / 100km</p>
            </div>
            <div className="buy" onClick={() => openPayment("Jaguar F-TYPE")} style={{ cursor: "pointer" }}>
              <a href="#booking"></a>
              <p>$74,150</p>
              <p>BUY</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Ferrari F430</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod6" src="prod6.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>5.5ft / 100km</p>
            </div>
            <div className="buy" onClick={() => openPayment("Ferrari F430")} style={{ cursor: "pointer" }}>
              <a href="#booking"></a>
              <p>$141,845</p>
              <p>BUY</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model S</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod3" src="prod3.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>5ft / 100km</p>
            </div>
            <div className="buy" onClick={() => openPayment("Tesla Model S")} style={{ cursor: "pointer" }}>
              <a href="#booking"></a>
              <p>$74,990</p>
              <p>BUY</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Hyundai Elite</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod4" src="prod4.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>8ft / 100km</p>
            </div>
            <div className="buy" onClick={() => openPayment("Hyundai Elite")} style={{ cursor: "pointer" }}>
              <a href="#booking"></a>
              <p>$30,690</p>
              <p>BUY</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model S75</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod5" src="prod5.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="auto.png" alt="" />
              <p>Auto</p>
              <img src="speed.png" alt="" />
              <p>6.5ft / 100km</p>
            </div>
            <div className="buy" onClick={() => openPayment("Tesla Model S75")} style={{ cursor: "pointer" }}>
              <a href="#booking"></a>
              <p>£55,880</p>
              <p>BUY</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model X</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod2" src="prod2.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>4.5ft / 100km</p>
            </div>
            <div className="buy" onClick={() => openPayment("Tesla Model X")} style={{ cursor: "pointer" }}>
              <a href="#booking"></a>
              <p>$79,990</p>
              <p>BUY</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model S75</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod7" src="prod7.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Diesel</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>3.5ft / 100km</p>
            </div>
            <div className="buy" onClick={() => openPayment("Tesla Model S75")} style={{ cursor: "pointer" }}>
              <a href="#booking"></a>
              <p>135,500$</p>
              <p>BUY</p>
            </div>
          </div>
        </div>
        <div className="cars-cont">
          <div className="car-info-cont1">
            <h1>Tesla Model P90</h1>
            <div>
              <img src="charge.png" alt="" />
              <p>Free Supercharging</p>
            </div>
          </div>
          <img className="prod prod8" src="prod8.png" alt="" />
          <div className="car-info-cont2">
            <div className="car-info">
              <i className="fa-solid fa-gas-pump"></i>
              <p>Gasoline</p>
              <img src="manual2.png" alt="" />
              <p>Manual</p>
              <img src="speed.png" alt="" />
              <p>8.5ft / 100km</p>
            </div>
            <div className="buy" onClick={() => openPayment("Tesla Model P90")} style={{ cursor: "pointer" }}>
              <a href="#booking"></a>
              <p>$79,990</p>
              <p>BUY</p>
            </div>
          </div>
        </div>
      </div>
      <Client />
      {modalOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '90%', maxWidth: 540, background: '#fff', borderRadius: 8, overflow: 'hidden', position: 'relative', padding: 20 }}>
            <button onClick={closeModal} style={{ position: 'absolute', right: 8, top: 8, zIndex: 10 }}>Close</button>
            <h3 style={{ marginTop: 0 }}>{selectedCar || 'Checkout'}</h3>
            <p>Amount: ${(carPrices[selectedCar] || carPrices.default) / 100}</p>
            <form onSubmit={handlePay} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ padding: 12, border: '1px solid #ddd', borderRadius: 6 }}>
                <CardElement />
              </div>
              <button type="submit" disabled={!stripe || processing} style={{ padding: '10px 16px' }}>
                {processing ? 'Processing…' : `Pay $${((carPrices[selectedCar] || carPrices.default) / 100).toFixed(2)}`}
              </button>
              {message && <div style={{ marginTop: 8 }}>{message}</div>}
            </form>
          </div>
        </div>
      )}
      <Step />
      <ChooseUs />
      <Testimonial />
      <BasicAccordion />
      <MobileApp />
      <Footer />
    </div>
  );
};

export default Car;
