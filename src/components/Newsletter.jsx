import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full  py-5 px-2 md:px-20 rounded-xl mt-10">
      <h2 className="text-3xl font-bold text-center mb-4">Subscribe to Newsletter</h2>
      <p className="text-center mb-6">
        Stay informed about new products, market updates & company news.
      </p>

      <form
        action="https://yebongaagroplc.us19.list-manage.com/subscribe/post?u=f9a51b66fd94cf2ff6b5e047a&amp;id=c8cb66f588&amp;f_id=00b3a2e4f0"
        method="post"
        target="_blank"
        noValidate
        className="flex flex-row justify-center items-center "
      >
        <input
          type="email"
          name="EMAIL"
          required
          placeholder="Enter your email"
          className="px-3 py-2 rounded-l-2xl border border-gray-400 w-full md:w-2/3  "
        />

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 cursor-pointer  px-6 rounded-r-2xl hover:bg-white hover:text-blue-500 border font-semibold border-blue-500 transition duration-300"
        >
          Subscribe
        </button>

        {/* Invisible honeypot (spam prevention — do NOT remove) */}
        <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
          <input
            type="text"
            name="b_f9a51b66fd94cf2ff6b5e047a_c8cb66f588"
            tabIndex="-1"
            value=""
            readOnly
          />
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
