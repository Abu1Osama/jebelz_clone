import React from "react";

function Shipping() {
  return (
    <div id="Shipping" className="Shipping">
      <div className="container mx-auto p-8">
        <h2 className="text-3xl mb-6">Shipping</h2>
        <div className="Shipping-child mb-8">
          <h3 className="text-xl mb-4">1. Shipping & Delivery</h3>
          <p>
            We offer delivery to all regions of the United Arab Emirates. We will
            deliver within 1-3 working days. If you need more details about the
            delivery times to remote areas, please contact us.
          </p>
          <p>
            ELECTRONIC products can only be shipped within UAE and Gulf Countries
            only.
          </p>
        </div>
        <div className="Shipping-child mb-8">
          <h3 className="text-xl mb-4">2. Order Tracking</h3>
          <p>
            We will send you a tracking number that you can use to track the order
            online.
          </p>
        </div>
        <div className="Shipping-child mb-8">
          <h3 className="text-xl mb-4">3. Delivery Charge</h3>
          <p>Delivery charges would be calculated at the checkout.</p>
        </div>
        <div className="Shipping-child mb-8">
          <h3 className="text-xl mb-4">4. Missing/Damaged Items</h3>
          <p>Unfortunately, fragile items are sometimes damaged in shipping.</p>
          <p>
            <span className="font-bold">
              We ask that you report to Customer Service the receipt of a damaged
              product within 14 working days from the date of delivery and do not
              discard the damaged item and its packaging.{" "}
            </span>{" "}
            If you fail to report damages in this time frame, we won't be able to
            file a claim with the carrier which means we can't accept
            responsibility for the damages.
          </p>
          <p>
            Typically the shipper will be dispatched to pick the item up for
            inspection and processing. We'll need your help in making it available
            for pickup on the scheduled date and time.
          </p>
          <p>
            In most cases, we are able to order a replacement at no cost to you as
            soon as the damaged one has been delivered back to the supplier.
            Replacements are subject to availability.
          </p>
          <p>
            {" "}
            To help us claim the damage and speed up the reimbursement process we
            require that you perform the following steps:
          </p>
          <ol>
            <li>Always take photos of any damage</li>
            <li>
              Do not throw away any of the original inner or outer packaging
            </li>
            <li>
              Call customer service directly after discovering the problem. Please
              have your order number available so that we can assist you as
              quickly as possible
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
