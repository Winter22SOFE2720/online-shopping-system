export class PaymentDetails {
    /**
     * Location to bill the incoming order from
     */
    private billing: string;
    
    /**
     * Location to deliever the final product to
     */
    private shipping: string;
    
    /**
     * Payment info is stored as a string with `--` as a seperator between the different card payment information
     * 
     * e.g. "card-number -- cvv -- month/year -- pin-code" 
     * e.g. "5425233430109903 -- 123 -- 04/23 -- 1234" 
     */
    private paymentInfo: string;
    constructor() {}

    /**
     * Location to bill the incoming order from
     */
    public getBilling() { 
        return this.billing;
    }
    
    /**
     * Location to deliever the final product to
     */
    public getShipping() { 
        return this.shipping;
    }

    /**
     * Payment info is stored as a string with `--` as a seperator between the different card payment information
     * 
     * e.g. "card-number -- cvv -- month/year -- pin-code" 
     * e.g. "5425233430109903 -- 123 -- 04/23 -- 1234" 
     */
    public getPaymentInformation() { 
        return this.paymentInfo;
    }
    
    /**
     * Sends a POST request to a bank representative to verify the card details are valid
     * 
     * @returns either a JSON result or an error that needs to be caught  
     */
    private async ContactBank(cardNumber: string, cvv: string, [month, year]: string[]) {
        // This isn't valid but for a proper site we'd use vaalid credentials
        let response = await fetch(`https://api.test.paysafe.com/cardpayments/v1/accounts/89987201/verifications`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                'card': {
                    'cardNum': cardNumber,
                    'cardExpiry': {
                        'month': parseInt(month),
                        'year': 2000 + parseInt(year)
                    },
                    'cvv': cvv
                },
                'merchantRefNum': 'merchant ABC-444',
            })
        });

        return await response.json();
    }

    
    /**
     * Sends a POST request to a bank representative to verify the card details are valid
     * 
     * @returns true or false depending on whether the POST request was successful 
     */
    public async VerifyPaymentInformation() {
        try {
            let [CardNumber, CVV, CardExpiry, PinCode] = this.paymentInfo.split(" -- ");
            let [month, year] = CardExpiry.split("/");
            let results = await this.ContactBank(CardNumber, CVV, [month, year]);
            if ("error" in results) {
                console.log(results)
                throw results;
            }
            
            return true;
        } catch (e) {
            console.error(e);
        }

        return false;
    }
    
    /**
     * Collect user payment information
     * 
     * @param billing Location to bill the incoming order from
     * @param shipping Location to deliever the final product to
     * @param paymentInfo Payment info is stored as a string with `--` as a seperator between the different card payment information
     * 
     * e.g. "card-number -- cvv -- month/year -- pin-code" 
     * e.g. "5425233430109903 -- 123 -- 04/23 -- 1234" 
     */
    public RecieveUserInformation(
        billing: string,
        shipping: string,
        paymentInfo: string
    ) {
        this.billing = billing;
        this.shipping = shipping;
        this.paymentInfo = paymentInfo;
        return this;
    }
}

export default PaymentDetails;