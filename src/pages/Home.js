import React from "react";

function Home() {
  return (
    <div>

      {/* Hero Section */}
      <section className="bg-light text-center p-5">
        <div className="container">
          <h1 className="fw-bold">Dr. Surjeet Kaur Bhullar</h1>
          <p className="lead">Expert Gynecologist & Women's Health Specialist</p>
          <button className="btn btn-primary">Book Appointment</button>
        </div>
      </section>

      {/* About Section */}
      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="/images/doctor-img.jpg" alt="doctor" className="img-fluid rounded" />
          </div>
          <div className="col-md-6">
            <h2>About Doctor</h2>
            <p>
              Dr. Amarjeet Kaur Bhullar is a highly experienced gynecologist 
              providing complete women's healthcare including pregnancy care, 
              infertility treatment, and advanced surgeries.
            </p>
            <button className="btn btn-outline-primary">Read More</button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2 className="mb-4">Our Services</h2>

          <div className="row">
            <div className="col-md-4">
              <div className="card p-3">
                <h5>Pregnancy Care</h5>
                <p>Complete prenatal & postnatal care.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <h5>Infertility Treatment</h5>
                <p>Advanced fertility solutions.</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card p-3">
                <h5>Gynec Surgery</h5>
                <p>Safe & modern surgical treatments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container my-5 text-center">
        <h2>Why Choose Us</h2>
        <div className="row mt-4">
          <div className="col-md-4">
            <h5>10+ Years Experience</h5>
          </div>
          <div className="col-md-4">
            <h5>Advanced Technology</h5>
          </div>
          <div className="col-md-4">
            <h5>Patient Care Focus</h5>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-white text-center p-5">
        <h2>Book Your Appointment Today</h2>
        <p>Call us or book online for consultation</p>
        <button className="btn btn-light">Contact Now</button>
      </section>

    </div>
  );
}

export default Home;