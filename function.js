window.function = function (body_input) {

// const glideamount = in_amount.value;
// const gliderecip = String(in_recip.value) ?? "";
const body = String(body_input.value) ?? "";

const secret = 't4KsvMyC3fEE8SXKiqeFnSGHa72NwV87IkDE5ntRVZFZDSUBhs9lFU91axWApEod62pdy712wagKmEnfHydR2ZDJlMliIGmG2mcnI6rJUQJdwH81t6bXqIKv1nIEAYVW6O61DAGImxxDjn7l2UbBjzY2pQhC6qbeRgRYMSDLw2pYcucx5pLJUSwPMUGKtVCOrtXfPCWY6i3vA8cjEI5vFSL0EJ4thd9VDj8sYIB0XOwmcEgqFzYtsVRIJSz40BZi';
// const data = {
//   currencyID: 3,
//   amount: glideamount,
//   recipientTypeID: 1,
//   recipient: `${glideorder}`,
//   clientOrderID: `${gliderecip}`,
//   webhookURL: 'https://webhook.site/6c2fa6fa-ec9f-47ca-a2c2-18505a6dec9b'
// };
// const data = {
//   amount: glideamount,
//   currencyID: 3,
//   typeID: 4,
//   clientOrderID: gliderecip,
//   TTL: 999,
//   webhookURL: "https://webhook.site/c7e3b35d-3e0b-42e7-a46b-e51b98e865c4",
//   extra: {
//     comment: "KrossBeri",
//     allowedPaymentTypeIDs: [
//       3
//     ],
//     allowedPaymentSystemIDs: [
//       1,
//       2
//     ],
//     allowedCardIssuerIDs: [
//       1,
//       2,
//       3,
//       4,
//       5,
//       6,
//       7,
//       8
//     ],
//     failedRedirectURL: "https://krossberi.glide.page/dl/failure",
//     successRedirectURL: "https://krossberi.glide.page/dl/success"
//   }
// }

//const raw = JSON.stringify(body_input);
const hash = CryptoJS.HmacSHA512(body, secret).toString();

return hash;

}
