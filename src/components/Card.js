function Card() {
  return (
    <div>
      <section className="services" id="services">
        <div className="top">
          <h2>
            <span className="green">Why</span> We are the Best
          </h2>
          <p>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
            Lorem ipsum is placeholder.
          </p>
        </div>

        <div className="bottom">
          <div className="box">
            <img src="./images/delivery-man.svg" alt="" />
            <h4>Free Delivery</h4>
            <p>
              Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet pellentesque
              cursus in netus.
            </p>
            <a href="#home">
              View More <img src="./images/btn-arrow.svg" alt="" />{" "}
            </a>
          </div>
          <div className="box">
            <img src="./images/fast-food.svg" alt="" />
            <h4>Healthy Foods</h4>
            <p>
              Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet pellentesque
              cursus in netus.
            </p>
            <a href="#home">
              View More <img src="./images/btn-arrow.svg" alt="" />{" "}
            </a>
          </div>
          <div className="box">
            <img src="./images/order-food.svg" alt="" />
            <h4>Online Ordering</h4>
            <p>
              Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
              porttitor consectetur pretium. Euismod imperdiet pellentesque
              cursus in netus.
            </p>
            <a href="#home">
              View More <img src="./images/btn-arrow.svg" alt="" />{" "}
            </a>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="image">
          <img src="./images/illus riding.svg" alt="" />
        </div>
        <div className="content">
          <h3>
            <span className="green">Order</span> anytime and anywhere
          </h3>
          <p>
            Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
            porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
            in netus.
          </p>
          <a href="#home" className="btn">
            Make an Offer
          </a>
        </div>
      </section>

      <section className="about about-2">
        <div className="content">
          <h3>
            <span className="green">Deliver</span> the products with best safety
          </h3>
          <p>
            Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
            porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
            in netus.
          </p>
          <a href="#home" className="btn">
            Make an Offer
          </a>
        </div>

        <div className="image">
          <img src="./images/illus deliver.svg" alt="" />
        </div>
      </section>

      <section className="about about-3">
        <div className="image">
          <img src="./images/buying online.svg" alt="" />
        </div>

        <div className="content">
          <h3>
            <span className="green">Track</span> your order very easily
          </h3>
          <p>
            Lorem ipsum dolor sit amet,adipiscing elit. Eu, montes, metus
            porttitor consectetur pretium. Euismod imperdiet pellentesque cursus
            in netus.
          </p>
          <a href="#home" className="btn">
            Track Now
          </a>
        </div>
      </section>

      <section className="app" id="contact">
        <div className="image">
          <img src="./images/splash with mobile.svg" alt="" />
        </div>
        <div className="content">
          <h3>Place your order through our app</h3>
          <p>
            You can easily place your order using our mobile app. Now you can
            download our app for both IOS and Android mobiles.
          </p>
          <div className="links">
            <img src="./images/app-store.png" alt="" />
            <img src="./images/google-play.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Card;
