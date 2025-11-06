import React, {useMemo} from "react";

function useIsLargeScreen() {
    const [isLarge, setIsLarge] = React.useState(window.innerWidth >= 768);
    React.useEffect(() => {
      function handleResize() {
        setIsLarge(window.innerWidth >= 768);
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return isLarge;
  }
  
const Contact = () => {
    return (
        <div>
            <section id="contact" className="w-full my-8 pt-25 px-4 md:px-10">
                <h1 className="font-serif text-6xl text-center my-4">Contact Us</h1>
                <h5 className="text-center">Have a question or need a quote? Feel free to reach out to us!</h5>
                <form
    action="https://formsubmit.co/info@yebongaagroplc.org.et"
    method="POST"
    className="flex flex-col px-5 py-5 md:px-20 mb-12 gap-6 max-w-3xl mx-auto justify-center"
  >
    <input
      type="hidden"
      name="_subject"
      value="New Message from Website Contact Form"
    />
    <input
      type="hidden"
      name="_captcha"
      value="false"
    />
    <input
      type="hidden"
      name="_template"
      value="table"
    />

    <input
      type="text"
      name="name"
      placeholder="Name*"
      required
      className="border-b-1 border-gray-500 rounded-2xl px-4 py-2"
    />

    <input
      type="email"
      name="email"
      placeholder="Email*"
      required
      className="border-b-1 border-gray-500 rounded-2xl px-4 py-2"
    />

    <textarea
      name="message"
      placeholder="Message*"
      required
      className="border-1 border-gray-500 px-4 py-2 rounded-2xl"
    ></textarea>

    <button
      type="submit"
      className="bg-blue-500 cursor-pointer text-white w-1/4 px-4 py-2 mx-auto rounded-xl cta-btn font-semibold hover:bg-white hover:text-blue-400 border-1 border-blue-500 transition-all duration-300"
    >
      Send Message
    </button>
  </form>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 mx-5">
          <div className="elevated-card bg-white p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
              <ion-icon name="call-outline" size="large" className="text-blue-500 group-hover:text-white"></ion-icon>
            </div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Call Us</h2>
            <p className="text-gray-600 text-lg">+251-911-258-379</p>
          </div>
          <div className="elevated-card bg-white p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
              <ion-icon name="mail-outline" size="large" className="text-blue-400 group-hover:text-white"></ion-icon>
            </div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Email Us</h2>
            <div className="space-y-2">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@yebongaagroplc.org.et"
                target="blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
              >
                info@yebongaagroplc.org.et
              </a>
              
            </div>
          </div>
          <div className="elevated-card bg-white p-8 text-center group hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
              <ion-icon name="location-outline" size="large" className="text-blue-500 group-hover:text-white"></ion-icon>
            </div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Visit Us</h2>
            <p className="text-gray-600">Steet 123, Addis Ababa, Ethiopia</p>
          </div>
        </div>
              </section>
        </div>
    )
}
export default Contact;