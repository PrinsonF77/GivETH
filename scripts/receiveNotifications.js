import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = 'b1e3202f87d62bd790616ba299747f3ba13f650c57dc9fa4fe7ac4ff7f2c7a19';
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);


const optIn = async(req, res, next) => {
    await PushAPI.channels.subscribe({
        signer: signer,
        channelAddress: 'eip155:5:0x7Cb5523065692139eB4c34177C43d9270E9E323A', // channel address in CAIP
        userAddress: `eip155:5:${req.body.wallet_address}`, // user address in CAIP
        onSuccess: () => {
        console.log('opt in success');
        },
        onError: () => {
        console.error('opt in error');
        },
        env: 'staging'
    })
    next();
}

const optOut = async(req, res, next) => {
    await PushAPI.channels.unsubscribe({
        signer: signer,
        channelAddress: 'eip155:5:0x7Cb5523065692139eB4c34177C43d9270E9E323A', // channel address in CAIP
        userAddress: `eip155:5:${req.body.wallet_address}`, // user address in CAIP
        onSuccess: () => {
         console.log('opt out success');
        },
        onError: (e) => {
            console.log(e);
          console.error('opt out error');
        },
        env: 'staging'
    })
    next();
}

const receiveNoti = async(req, res, next) => {
    const notifications = await PushAPI.user.getFeeds({
        user: `eip155:5:${req.body.wallet_address}`, // user address in CAIP
        env: 'staging'
      });

      const spam = await PushAPI.user.getFeeds({
        user: `eip155:5:${req.body.wallet_address}`, // user address in CAIP
        spam: true,
        env: 'staging'
      });

    req.data = {"notification": notifications,"spam":spam};
    next();
}


export { optIn, optOut, receiveNoti};
