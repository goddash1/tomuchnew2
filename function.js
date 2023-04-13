window.function = function (in_amount, in_recip, in_order) {

const glideamount = in_amount.value;
const gliderecip = String(in_recip.value) ?? "";
const glideorder = String(in_order.value) ?? "";

const secret = 'li86qXzVKltU3IOwrGddCtzoB6iVJ2BIHAUOVc6732tTtzOJunmkvxaqqyCci9rkIhzZPkVDp5MR46BH7QEyxt8Kqsz5yejPdiyia9n190m2PimUUJ24blraZYSmB4Ozcl5697f4WwFbkalRtzPJu3ILqF5Z1UngvRtY1MqZynKedgUXQaAcRzfeqGXUDTQEnO1veGTxwnWPa1IqftDeJrppb2KVUb5SYfBlhW5FWrsYGjuBqemvxy78dqzO9suP';
const data = {
  currencyID: 3,
  amount: glideamount,
  recipientTypeID: 4,
  recipient: `${gliderecip}`,
  clientOrderID: `${glideorder}`,
  webhookURL: 'https://webhook.site/6c2fa6fa-ec9f-47ca-a2c2-18505a6dec9b'
};
const raw = JSON.stringify(data);
const hash = CryptoJS.HmacSHA512(raw, secret).toString();

return hash;

}
