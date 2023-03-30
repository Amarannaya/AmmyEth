## This contract was updated from the contract deployed on the sepolia network with address,0x69a77E15eeE40278649E58C31f8640B17E804E03 by me. This contract was updated to ensure that users can't withdraw more than twice on a particular day.

<br>
<div align="center">
    <img src="public/logo.gif" height="70" alt="">
    <h1>AMMYETH</h1>
    <strong align="center">Bank your way to freedom </strong>
</div>
<strong>This is a simple application of the blockchain technology. with some basic functionalities:</strong>
<br> 

**One**

This app allows users to deposit ether into their account, withdraw ether from their account, and to check their account balance. The amount to withdraw must be greater than zero, this condition ensures that a user cannot withdraw a negative amount.
<br>


**two**

The amount to withdraw must not exceed 80% of the user's available balance. This condition ensures that users cannot withdraw more than 80% of their account balance, which can help prevent a user from accidentally withdrawing more than they intended or from being targeted by attackers attempting to drain their entire account balance. The user must have sufficient balance to make the withdrawal. This condition ensures that the user has enough funds in their account to cover the withdrawal amount.


<br>

**three**

The user must have sufficient balance to make the withdrawal.

If any of these conditions are not met, the "withdraw" function will fail and the withdrawal will not be processed.

This condition ensures that the user has enough funds in their account to cover the withdrawal amount.

You can only withdraw twice a day too!!.

<br>

<br>

# Please test with a sepoliai account.
FEEL FREE TESTING!! 
<br> <br>

<br>
<br>
<br>

# FrontEnd

This is a [wagmi](https://wagmi.sh) + [RainbowKit](https://rainbowkit.com) + [Vite](https://vitejs.dev/) project bootstrapped with [`create-wagmi`](https://github.com/wagmi-dev/wagmi/tree/main/packages/create-wagmi)

# Getting Started

Run `npm run dev` in your terminal, and then open [localhost:5173](http://localhost:5173) in your browser.

Once the webpage has loaded, changes made to files inside the `src/` directory (e.g. `src/App.tsx`) will automatically update the webpage.

# Learn more

To learn more about [Vite](https://vitejs.dev/), [RainbowKit](https://rainbowkit.com) or [wagmi](https://wagmi.sh), check out the following resources:

- [wagmi Documentation](https://wagmi.sh) – learn about wagmi Hooks and API.
- [wagmi Examples](https://wagmi.sh/examples/connect-wallet) – a suite of simple examples using wagmi.
- [RainbowKit Documentation](https://rainbowkit.com/docs/introduction) – learn more about RainbowKit (configuration, theming, advanced usage, etc).
- [Vite Documentation](https://vitejs.dev/) – learn about Vite features and API.


# Smart Contract

**Styled using Bulma CSS**
- (https://bulma.io)


## 🔧 Technology Stack & Tools



- [Ethers](https://docs.ethers.io/)
<br/>

- [Hardhat](https://hardhat.org/)
<br/>

- [MetaMask]() (User Authentication)

## **Project Website Link**

- https://amyyeth.netlify.app




## **Site Overview**

**Home Page**

![Screenshot (82)](https://user-images.githubusercontent.com/93910020/228502525-3e56bb4e-7b00-424c-955f-f7dbcd956803.png)





<br/>

**Rainbow Wallet connect**

![Screenshot (85)](https://user-images.githubusercontent.com/93910020/228502599-acd4d5a8-d574-4c80-aa5c-78100bf05a81.png)


<br/>

**Rules of Engagement**

![Screenshot (84)](https://user-images.githubusercontent.com/93910020/228502659-8924f404-daea-4c81-96b4-2c2b0fcc018b.png)


<br/>
**Bank Section**

![Screenshot (83)](https://user-images.githubusercontent.com/93910020/228502750-7f44960d-740f-4384-896e-1db35acae811.png)


<br/>







## **Project Website Link**

- https://amyyeth.netlify.app

## **Project Authors**

- Amarannaya(https://github.com/amarannaya) 
<br/>


## 🤝 Contribute
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are <strong>greatly appreciated</strong>. 😊
<p>
&emsp;1. Fork Project

</p>
<p>

&emsp;2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
</p>

<p>

&emsp;3. Commit your changes(`git commit -m "Add Some Amazing Feature" `)
</p>

<p>

&emsp;4. Push to the Branch (`git push origin feature/AmazingFeature`)
</p>

<p>
&emsp;5. Open a Pull Request

</p>






<br/>
<br/>
<br/>


## **License**

MIT License

Copyright (c) [2023] [Amarannaya]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
