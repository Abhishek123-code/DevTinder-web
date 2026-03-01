const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-24 pb-24 text-base-content">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Terms & Conditions
      </h1>
      <div className="space-y-4 opacity-80">
        <p>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>
        <p>
          Welcome to DevConnect. By accessing or using our platform, you agree
          to be bound by these Terms & Conditions.
        </p>

        <h2 className="text-xl font-semibold mt-4">1. User Eligibility</h2>
        <p>
          You must be at least 18 years old to use DevConnect. By using our
          service, you warrant that you have the legal capacity to enter into
          this agreement.
        </p>

        <h2 className="text-xl font-semibold mt-4">2. Content & Conduct</h2>
        <p>
          Users are solely responsible for the content, code, and profiles they
          share. You agree not to upload malicious code, spam, or scrape data
          from other users. We reserve the right to terminate accounts that
          violate these rules.
        </p>

        <h2 className="text-xl font-semibold mt-4">3. Payments</h2>
        <p>
          All payments made on DevConnect are securely processed via Razorpay.
          We do not store your payment details on our servers.
        </p>
      </div>
    </div>
  );
};
export default Terms;
