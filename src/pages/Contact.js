function Contact() {
  return (
    <div className="container my-5">
      <h1>Contact Us</h1>

      <form>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Your Name" />
        </div>

        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Your Email" />
        </div>

        <div className="mb-3">
          <textarea className="form-control" placeholder="Message"></textarea>
        </div>

        <button className="btn btn-primary">Send Message</button>
      </form>

      <div className="mt-4">
        <p><b>Phone:</b> +91 9876543210</p>
        <p><b>Email:</b> info@clinic.com</p>
      </div>
    </div>
  );
}
export default Contact;