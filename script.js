const ageCheck = (age)=> {
    return age >= 18;
};
const adultCheck = (age)=> {
    const check = ageCheck(age);
    if (check == true){
        return "Hello there";
    } else {
        return "Hey kiddo";
    };
};
console.log(adultCheck(10));
console.log(adultCheck(20));

const calcVAT = (amount, percentage) => {
    const percentageNumber = percentage / 100;
    const VAT =  amount * percentageNumber;
    return amount + VAT;
};
const calcTotalPrice = (amount, percentage) => {
    const totalAmount = calcVAT(amount, percentage);
    return totalAmount;
};
console.log(calcTotalPrice(100, 21));
console.log(calcTotalPrice(100, 9));
console.log(calcTotalPrice(100, 0));

const seperatePrice = (totalPrice, vat)=> {
   vatWorkAround = 100 + vat;
   return (totalPrice / vatWorkAround) * 100
};
const PriceNoVat = (totalPrice, vat)=> {
    const vatAmount = seperatePrice(totalPrice, vat);
    return totalPrice - vatAmount;
};
console.log(PriceNoVat(1000, 21));
