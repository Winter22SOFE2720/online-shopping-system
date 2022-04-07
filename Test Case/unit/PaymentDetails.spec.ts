import { describe, expect, it } from 'vitest';
import PaymentDetails from "../../Code/src/classes/PaymentDetails";
import { fetch as Fetch } from 'undici';
const fetch = Fetch;

// @ts-ignore
globalThis.fetch = fetch;

describe("PaymentDetails class", () => {
    const newPaymentDetails = new PaymentDetails();

    it("RecieveUserInformation()", () => {
        let result = newPaymentDetails.RecieveUserInformation(
            // Billing & Shipping are the same location
            "2000 Simcoe St N, Oshawa, ON L1G 0C5",
            "2000 Simcoe St N, Oshawa, ON L1G 0C5",

            // Payment Info.
            "5425233430109903 -- 123 -- 04/23 -- 1234"
        );

        expect(result).toBeInstanceOf(PaymentDetails);
    });

    it("getBilling(),getShipping(),getPaymentInformation()", () => {
        expect(newPaymentDetails.getBilling()).to.be.equal("2000 Simcoe St N, Oshawa, ON L1G 0C5");
        expect(newPaymentDetails.getShipping()).to.be.equal("2000 Simcoe St N, Oshawa, ON L1G 0C5");
        expect(newPaymentDetails.getPaymentInformation()).to.be.equal("5425233430109903 -- 123 -- 04/23 -- 1234");
    });

    it("VerifyPaymentInformation()", async () => {
        expect(await newPaymentDetails.VerifyPaymentInformation()).to.be.equal(false);
    });
});