import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section className="contact-short bg-gray-100 py-10 px-20 rounded-lg shadow-md transform translate-y-10 max-w-5xl mx-auto">
        <div className="grid grid-cols-2">
          <div>
            <h3 className="text-2xl font-bold">Ready to get started?</h3>
            <h3 className="text-2xl font-bold">Talk to us today</h3>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-gray-100 py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* About Section */}
          <div className="footer-about">
            <h3 className="text-lg font-semibold">Rishabh singh</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          {/* Subscribe Section */}
          <div className="footer-subscribe">
            <h3 className="text-lg font-semibold">
              Subscribe to get important updates
            </h3>
            <form action="#" className="mt-4">
              <input
                type="email"
                name="email"
                placeholder="YOUR E-MAIL"
                className="p-2 w-full rounded-lg text-black"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Social Section */}
          <div className="footer-social">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="footer-social-icons flex gap-4 mt-4">
              <div className="p-3 rounded-full border border-gray-100 cursor-pointer">
                <FaDiscord className="text-2xl" />
              </div>
              <div className="p-3 rounded-full border border-gray-100 cursor-pointer">
                <FaInstagram className="text-2xl" />
              </div>
              <div className="p-3 rounded-full border border-gray-100 cursor-pointer">
                <a
                  href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-2xl" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-contact">
            <h3 className="text-lg font-semibold">Call Us</h3>
            <h3 className="text-lg font-bold mt-2">+91 12345678978</h3>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom-section mt-20 border-t border-gray-600 pt-6">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2">
            <p className="text-center md:text-left">
              &copy; {new Date().getFullYear()} Rishabh singh. All Rights
              Reserved
            </p>
            <div className="flex gap-4 justify-center md:justify-end mt-4 md:mt-0">
              <p className="cursor-pointer">Privacy Policy</p>
              <p className="cursor-pointer">Terms & Conditions</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
