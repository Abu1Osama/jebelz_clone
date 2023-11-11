import React from "react";

function Payment() {
  return (
    <div id="payment" className="payment">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl mb-6">Payments</h2>
        <div className="payment-child mb-8">
          <h3 className="text-xl mb-4">1. Debit/Credit Cards:</h3>
          <p>
            You can pay by using your debit/credit card through a 100% safe &
            secure online transaction. Jebelz uses 256-bit encryption technology
            to protect your card information while securely transmitting it to the
            respective banks for payment processing.
          </p>
        </div>
        <div className="payment-child mb-8">
          <h3 className="text-xl mb-4">2. Cash On Delivery:</h3>
          <p>
            We are happy to be able to give you the convenience of paying for your
            order in cash as soon as you receive it. The Cash on Delivery (CoD)
            option can be chosen on checkout and the transaction can be completed
            on delivery of the order.
          </p>
        </div>
        <div className="payment-child mb-8">
          <h3 className="text-xl mb-4">3. Pay Later Option:</h3>
          <p>
            PostPay avails our customers to pay in 3 interest-free installments
            for transactions up to 4250.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Payment;
