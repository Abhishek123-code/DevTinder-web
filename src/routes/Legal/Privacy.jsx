const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-24 pb-24 text-base-content">
      <h1 className="text-3xl font-bold mb-6 text-primary">Privacy Policy</h1>
      <div className="space-y-4 opacity-80">
        <p>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-xl font-semibold mt-4">
          1. Information We Collect
        </h2>
        <p>
          We collect information you provide directly to us when you create an
          account, such as your name, email address, GitHub profile links, and
          tech stack preferences.
        </p>

        <h2 className="text-xl font-semibold mt-4">
          2. How We Use Your Information
        </h2>
        <p>
          We use the collected data to provide, maintain, and improve
          DevConnect, allowing you to connect with other developers and access
          platform features.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Third-Party Services</h2>
        <p>
          We do not sell your personal data. Payment processing is securely
          handled by our third-party partner, Razorpay. We do not store your
          credit card or payment information.
        </p>
      </div>
    </div>
  );
};
export default Privacy;
