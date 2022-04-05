export class PaymentDetails {
    private billing: string;
    private shipping: string;
    private paymentInfo: string;
    constructor() {}
    
    private async ContactBank(cardNumber: string, cvv: string, [month, year]: string[]) {
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

    public async VerifyPaymentInformation() {
        let [CardNumber, CVV, CardExpiry, PinCode] = this.paymentInfo.split(" -- ");
        let [month, year] = CardExpiry.split("/");
        return await this.ContactBank(CardNumber, CVV, [month, year]);
    }
    
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