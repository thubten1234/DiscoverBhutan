import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contactus() {
  return (
    <>
      <Navbar />
      <div className="intro-banner">
        <img
          src="./image/Banner.webp"
          className="img-fluid intro-banner-image"
          alt="intro-banner"
        />
        <h1 className="intro-banner-title">GET IN TOUCH WITH US</h1>
      </div>
      <div className="contact-div">
        <img src="./image/contact-bg1.jpg" alt="contact background" />
        <div className="contact-form-outer">
          <div className="mycontainer">
            <div className="contact-form-left">
              <h1>DISCOVER BHUTAN</h1>
              <h1>HOLIDAYS</h1>
              <p className="d-none d-sm-block">
                Let us transform your journey into a masterpiece of
                unforgettable moments.
              </p>
              <p className="d-none d-sm-block">
                Where Dreams Meet the Himalayas.
              </p>
            </div>
            <div className="contact-form-right">
              <form>
                <label>Name</label>
                <input type="text" id="name" />
                <br />
                <br />
                <label>Email</label>
                <input type="email" id="email" />
                <br />
                <br />
                <label>Enquiry</label>
                <br />
                <textarea id="message" wrap="hard"></textarea>
                <a
                  href="#"
                  className="contact-form-button"
                  onClick={(e) => {
                    e.preventDefault();
                    const name =
                      (document.getElementById("name") as HTMLInputElement)
                        ?.value || "";
                    const email =
                      (document.getElementById("email") as HTMLInputElement)
                        ?.value || "";
                    const message =
                      (
                        document.getElementById(
                          "message"
                        ) as HTMLTextAreaElement
                      )?.value || "";
                    window.location.href = `mailto:discoverbhutanholidays@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
                  }}
                >
                  Submit
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
