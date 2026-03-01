const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-24 pb-24 text-base-content">
      <h1 className="text-3xl font-bold mb-6 text-primary">Contact Us</h1>
      <div className="space-y-4 opacity-80">
        <p>
          If you have any questions, concerns, or need assistance regarding your
          account or payments, please reach out to us.
        </p>

        <div className="mt-6 p-6 bg-base-200 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">DevConnect Support</h2>
          <ul className="space-y-2">
            <li>
              <strong>Email:</strong> aojha6159@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 8777090144
            </li>
            <li>
              <strong>Operating Address:</strong> [1004/2 Sri Krishna Nagar,
              Rishra, Hooghly,712249]
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Contact;
