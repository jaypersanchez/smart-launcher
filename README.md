# Overview

The Blockcert Smart Launcher is a tool to make deployment of smart contracts in Ethereum's public network.  It supports Main net and Rinkeby.  It will support deployment to Blockcert's private Ethereum Node but this is still under development at the time of this writing.

## Installation

After cloning the smart launcher repo run the following command

```
npm install
```

After NPM is installed, run the command to start the Express Web Server locally

```
npm start
```

Once you see the message `Server listening at http://localhost:8080`, you are ready to use the deployment tool.

## Requirements

You will need a public wallet address and the corresponding private key.  The wallet address must be funded with ether.  Once you have these two pieces of information open your browser and enter the URI in the address field.

```
http://localhost:8080
```

From the screen, do the following:

1. Select Rinkeby or Homestead which is the Main Net, Ethereum's live network.  
2. You must select the ABI file from the "Choose File" option.  The ABI file are located in the "artifacts" folder.  Select the ABI file that is in one of the sub-folder.  Remember to select the "Get ABI" button.
3. You must select the Byte file from the "Choose File" option.  The ByteCode file are located in the "artifacts" folder.  Select the ByteCode file that is in one of the sub-folder.  Remember to select the "Get Byte Code" button.
4. Then click on "Deploy Contract"

If the deployment is successful, the contract address and the transaction hash will be returned in the result text area below the "Deploy Contract" button.  The second line is the transaction hash.  If, for example, you deployed to Rinkeby, you can go to [inkeby Etherescan]("https://rinkeby.etherscan.io/") and paste the transaction hash to show the details of the deployed contract.