import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    setSuccess("Your message has been submitted successfully.");

    setForm({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-3">Contact Us</h1>

      <p className="text-gray-500 mb-8">
        Have a question? Get in touch with us.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-5 border rounded-xl p-8"
      >
        <div>
          <label className="block font-medium mb-2">Full Name</label>

          <input
            type="text"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full border rounded-md p-3"
            placeholder="Your name"
            required
            minLength={2}
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Email</label>

          <input
            type="email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className="w-full border rounded-md p-3"
            placeholder="Your email"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Message</label>

          <textarea
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full border rounded-md p-3"
            rows="5"
            placeholder="Write your message"
            required
            minLength={10}
          />
        </div>

        <button className="bg-black text-white px-8 py-3 rounded-md">
          Send Message
        </button>

        {success && <p className="text-green-600">{success}</p>}
      </form>
    </section>
  );
}

export default Contact;