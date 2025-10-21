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
                <div className="flex flex-col justify-center items-center bg-blue-50 px-5 md:px-20 py-10 rounded-xl mt-10">
                  <input type="text" name="name" placeholder="Name*" required className="border-b-1 p-2 border-gray-500 w-full md:w-1/2 my-4"></input>
                  <input type="email" name="email" placeholder="Email*" required className="border-b-1 p-2 border-gray-500 w-full md:w-1/2 my-4"></input>
                  <textarea type="text" name="message" placeholder="Message*" required className="border-1 p-2 rounded-lg border-gray-500 w-full md:w-1/2 my-4"></textarea>
                  <button className="bg-blue-400 text-white rounded-lg px-4 py-2 w-1/4 font-semibold hover:bg-white hover:text-blue-400 duration-300 cursor-pointer border-1 border-blue-400">Send</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 md:gap-40 gap-5 text-center my-8 py-8 md:px-20 px-2 w-full">
            <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg ">
              <ion-icon name="call-outline" size="large"></ion-icon>
              <h2 className="text-4xl font-bold">Call</h2>
              <p className="my-5">For urgent matters, please call us directly.</p>
              <h5 className="text-sm font-light">+251-911-258-379</h5>
            </div>
            <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg ">
              <ion-icon name="mail-outline" size="large"></ion-icon>
              <h2 className="text-4xl font-bold">Email</h2>
              <p className="my-5">We are always happy to hear from you and assist with any inquiries.</p>
              <h5 className="text-sm font-light">info@yebongaagroplc.org.et</h5>
                            
            </div>
            <div className="flex flex-col items-center gap-2 bg-white p-8 rounded-lg ">
              <ion-icon name="location-outline" size="large"></ion-icon>
              <h2 className="text-4xl font-bold">Location</h2>
              <p className="my-5">Visit our office at our physical address.</p>
              <h5 className="text-sm font-light">123 Main Street, Addis Ababa, Ethiopia</h5>
            </div>
        </div>
              </section>
        </div>
    )
}
export default Contact;