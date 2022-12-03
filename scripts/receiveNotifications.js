import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";


const PK = 'b1e3202f87d62bd790616ba299747f3ba13f650c57dc9fa4fe7ac4ff7f2c7a19';
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);


const optIn = async() => {
    await PushAPI.channels.subscribe({
        signer: signer,
        channelAddress: 'eip155:5:0x7Cb5523065692139eB4c34177C43d9270E9E323A', // channel address in CAIP
        userAddress: 'eip155:5:0xaBd24466e35fDD8cA2a182D319b7d922a5760652', // user address in CAIP
        onSuccess: () => {
        console.log('opt in success');
        },
        onError: () => {
        console.error('opt in error');
        },
        env: 'staging'
    })
}

const receiveNoti = async() => {
    const notifications = await PushAPI.user.getFeeds({
        user: 'eip155:5:0xaBd24466e35fDD8cA2a182D319b7d922a5760652', // user address in CAIP
        env: 'staging'
      });

    console.log(notifications);
}

optIn();
receiveNoti();

export { optIn, receiveNoti};