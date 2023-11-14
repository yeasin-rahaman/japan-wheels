import React from "react";
import Image from "next/image";

function PurchaseFlow() {
  return (
    <div className="steps">
      <div className="main-title text-center">
        <h2>Purchase Flow</h2>
      </div>
      <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center">
        <div className="step1">
          <div className="step-left">
            <div>
              <Image
                width={60}
                height={60}
                className="step-icon"
                src="/images/purchaseFlow/step1-1.svg"
                alt="step1-1.svg"
              ></Image>
              <div className="step-segment">STEP 1</div>
              <div className="step-title">ORDER</div>
            </div>
          </div>
          <div className="step-right">
            <div
              style={{
                backgroundColor: "#052c65",
                color: "white",
                padding: "10px",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              GET A PRICE QUOTE
            </div>
            <div className="sentence-zone">
              Receive a quote and confirm your order
            </div>
          </div>
        </div>
        <Image
          alt="test"
          width={35}
          height={35}
          className="arrow"
          src="/images/purchaseFlow/right-angle.svg"
        />
        <div className="step1">
          <div className="step-left">
            <div>
              <Image
                width={60}
                height={60}
                className="step-icon"
                src="/images/purchaseFlow/step2-1.svg"
                alt="step2-1.svg"
              ></Image>
              <div className="step-segment">STEP 2</div>
              <div className="step-title">PAYMENT</div>
            </div>
          </div>
          <div className="step-right">
            <Image
              alt="test"
              width={60}
              height={40}
              src="/images/purchaseFlow/credit-card.svg"
            />
            <div className="sentence-zone">Pay via your preferred method</div>
          </div>
        </div>
        <Image
          alt="test"
          width={35}
          height={35}
          className="arrow"
          src="/images/purchaseFlow/right-angle.svg"
        />
        <div className="step1">
          <div>
            <div>
              <Image
                width={60}
                height={60}
                className="step-icon"
                src="/images/purchaseFlow/step3.svg"
                alt="step3.svg"
              />
              <div className="step-segment">STEP 3</div>
              <div className="step-title">SHIPMENT</div>
            </div>
          </div>
        </div>

        <Image
          alt=""
          width={35}
          height={35}
          className="arrow"
          src="/images/purchaseFlow/right-angle.svg"
        />

        <div className="step1">
          <div>
            <div>
              <Image
                width={60}
                height={60}
                className="step-icon"
                src="/images/purchaseFlow/step4.svg"
                alt="step4.svg"
              />
              <div className="step-segment">STEP 4</div>
              <div className="step-title">DELIVERY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PurchaseFlow;
