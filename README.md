<p align="center">
  <a href="" rel="noopener">
 <img width=300px src="./image/logo.png" alt="Fundchain-logo"></a>
</p>


A block-chain based startup funding website for Global BlockChain Hackathon using
------------------------------------------

<pre><code>
1. node
2. npm
3. npm dependences
   1. fs-extra
   2. ganache-cli
   3. mocha
   4. next
   5. next-routes
   6. react
   7. react-dom
   8. semantic-ui-css
   9. semantic-ui-react
   10. solidity
   11. truffle-hdwallet-provider
   12. web3
4. metamask extension
 </code></pre>
 
 ------------------------------------------
## Getting Started

**Startup Manager** : The Startup Manager posts an advertisement for fund sourcing, sets the minimum contribution for a campaign, sends requests for spending the money recieved as contribution and finalize the request if majority of contributers approve.

**Contributer** : The Contributer contributes money to the a campaign and decides to send an approval to a request.

------------------------------------------
## **Roll of BlockChain** :
  As we know using blockchain we can create contracts that no one can tamper (i.e **High Security**) so using this fact we tried to create a website where every transaction can happen on blockchain.
  
  
  What usually happens in any funding websites like [KickStarter](https://www.kickstarter.com) is some fruad user takes money from investors and never returns back  or that fraud user do not use that money for the project.So to solve that problem we made a website in which we created a system where investor will donate money for some project but that money won't be directly transfered to users account but rather it will be present in system and user will have to send request for that money (**RFM : Request for Money**) . Request will contain amount of money and for what pupose that money is going to be used. Now if this requset is approved in majority by investors (**Voting**) his money will be directly transfered to vendor's account and now vendor will transfer whatever project requires to user physically. Here because there is no connection between start-up guy and vendor (They don't know each other) hence they can not con investor. Every transaction will be written on blockchain hence there will be always proof of work .
  
![diag](https://github.com/Kadam-Tushar/FundChain/blob/master/diag_FundChain.png)  
  







### Prerequisites
<pre><code>
What things you need to install the software and how to install them

**NODE** 
    Link to download: [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
 
As you install node, npm is installed too.
 </code></pre>
 
------------------------------------------
### Installation
 <pre><code>
A step by step series to installing NODE.js:
 
Link: [https://nodesource.com/blog/installing-nodejs-tutorial-windows/](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)
 
Installing all the dependencies in cmd after node is installed with the **specific versions** as specified:
 
 1.  npm install fs-extra@5.0.0
 2.  npm install ganache-cli@6.0.3
 3.  npm install mocha@4.1.0
 4.  npm install next@4.1.4
 5.  npm install next-routes@1.2.0
 6.  npm install react@16.2.0
 7.  npm install react-dom@16.2.0
 8.  npm install semantic-ui-css@2.2.12
 9.  npm install semantic-ui-react@0.77.1
 10. npm install solc@0.4.25
 11. npm install truffle-hdwallet-provider@0.0.3
 12. npm install web3@1.0.0-beta.26

A step by step series to add and setup of Metamask extension on Google Chrome:

Link : [https://medium.com/@followcoin/how-to-install-metamask-88cbdabc1d28](https://medium.com/@followcoin/how-to-install-metamask-88cbdabc1d28)
 </code></pre>


------------------------------------------
### Contributing

 We're are open to `enhancements` & `bug-fixes` :smile: Also do have a look [here](./CONTRIBUTING.md)
 

### Note

- This project was done under `24 hours with minimal pre-preparation`

------------------------------------------
### Contributors

- [@sangramdesai123](https://github.com/sangramdesai123)
- [@Kadam-Tushar](https://github.com/Kadam-Tushar)
- [@chheda-r](https://github.com/chheda-r)

------------------------------------------
### Recognition

This repository / project was a part of [@BlockchainHackathon](https://github.com/XinFinOrg/Open-Hackathon/issues/68) 2018

------------------------------------------

### Home Page

![home page](https://github.com/Kadam-Tushar/FundChain/blob/master/image/homepage.JPG)

### Ad Campaign

<p>
   
![CreateAds](https://github.com/Kadam-Tushar/FundChain/blob/master/image/create%20ad.JPG)
   
</p>
 
<p>
 
 **On Ad creation and deployment** 
   
![metamask](https://github.com/Kadam-Tushar/FundChain/blob/master/image/meta%20mask.JPG)

</p>

<p>
  
**Transaction info**  
   
![Transaction](https://github.com/Kadam-Tushar/FundChain/blob/master/image/Capture2.JPG) 
</p>

### Contributer page

![Contributer](https://github.com/Kadam-Tushar/FundChain/blob/master/image/contributer.JPG)

### Request pages

<p>
  
 **Requests generated by Startup Manager** 
  
![ViewRequest](https://github.com/Kadam-Tushar/FundChain/blob/master/image/viewRequest.JPG)
</p>

<p>

**Creating Request**

![CreateRequest](https://github.com/Kadam-Tushar/FundChain/blob/master/image/createRequest.JPG)

</p>
