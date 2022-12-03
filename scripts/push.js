import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = 'b1e3202f87d62bd790616ba299747f3ba13f650c57dc9fa4fe7ac4ff7f2c7a19'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async() => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `[SDK-TEST] notification TITLE:`,
        body: `[sdk-test] notification BODY`
      },
      payload: {
        title: `[sdk-test] payload title`,
        body: `sample msg body`,
        cta: '',
        img: ''
      },
      recipients: 'eip155:5:0xaBd24466e35fDD8cA2a182D319b7d922a5760652', // recipient address
      channel: 'eip155:5:0x7Cb5523065692139eB4c34177C43d9270E9E323A', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    console.log('API repsonse: ', apiResponse);
  } catch (err) {
    console.error('Error: ', err);
  }
}

//sendNotification();

export default sendNotification