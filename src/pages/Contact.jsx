const Contact = () => {
  return (
    <section className="py-36 text-center">
      <h2 className="text-3xl font-bold">Contact Page</h2>

      {/* Google Map Embed */}

      {/* Contact Form */}
      <div className="container mx-auto mt-16 max-w-lg">
        <form
          action="https://formspree.io/f/xeqdgwnq"
          method="POST"
          className="flex flex-col gap-6"
        >
          {/* Username Input */}
          <input
            type="text"
            placeholder="Username"
            name="username"
            required
            autoComplete="off"
            className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />

          {/* Email Input */}
          <input
            type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
            className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          />

          {/* Message Input */}
          <textarea
            name="Message"
            cols="30"
            rows="5"
            required
            autoComplete="off"
            placeholder="Enter your message"
            className="p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
          ></textarea>

          {/* Submit Button */}
          <input
            type="submit"
            value="Send"
            className="py-3 px-6 bg-blue-500 text-white rounded-md cursor-pointer transition-transform transform hover:scale-95"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
