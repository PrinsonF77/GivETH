import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = 'b1e3202f87d62bd790616ba299747f3ba13f650c57dc9fa4fe7ac4ff7f2c7a19'; // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const sendNotification = async(req, res, next) => {
  try {
    const ngo_name = req.body.ngo_name;
    const wallet_address = req.body.wallet_address;
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 3, // target
      identityType: 2, // direct payload
      notification: {
        title: `NFT REceived`,
        body: `Congratulations!!! You have received an NFT from ${ngo_name} for volunteering! Check out your NFT on OpenSea or GivETH`
      },
      payload: {
        title: `NFT Received`,
        body: `Congratulations!!! You have received an NFT from ${ngo_name} for volunteering! Check out your NFT on OpenSea or GivETH`,
        cta: '',
        img: ''
      },
      recipients: `eip155:5:${wallet_address}`, // recipient address
      channel: 'eip155:5:0x7Cb5523065692139eB4c34177C43d9270E9E323A', // your channel address
      env: 'staging'
    });
    
    // apiResponse?.status === 204, if sent successfully!
    //console.log('API repsonse: ', apiResponse);
    next();
  } catch (err) {
    console.error('Error: ', err);
    next(err);
  }

  
}

//sendNotification();

export default sendNotification