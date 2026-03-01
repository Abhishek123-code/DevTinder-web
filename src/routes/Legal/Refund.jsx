const Refund = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 pt-24 pb-24 text-base-content">
      <h1 className="text-3xl font-bold mb-6 text-primary">
        Refund & Cancellation Policy
      </h1>
      <div className="space-y-4 opacity-80">
        <p>
          <strong>Last updated:</strong> {new Date().toLocaleDateString()}
        </p>

        <h2 className="text-xl font-semibold mt-4">Cancellations</h2>
        <p>
          You may cancel your DevConnect premium subscription at any time
          through your account settings. The cancellation will take effect at
          the end of your current billing cycle.
        </p>

        <h2 className="text-xl font-semibold mt-4">Refunds</h2>
        <p>
          Due to the digital nature of our services, payments once made are
          strictly non-refundable. We do not offer prorated refunds for canceled
          subscriptions. If you believe there has been a billing error, please
          contact our support team within 7 days of the transaction.
        </p>
      </div>
    </div>
  );
};
export default Refund;
