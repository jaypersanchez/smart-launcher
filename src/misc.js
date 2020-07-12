// let data = {

    //     "address": "9ffa5312bdf10da18793f3a90fb6b637f1f50d32",
    //     "crypto": {

    //         "cipher": "aes-128-ctr",
    //         "ciphertext": "0c132ccce41d1b711fa6ef71e475c304e4c8cbbc24e89b3a3bbac0050e23a256",
    //         "cipherparams": {
    //             "iv": "efa1b042846137ec138997f124f6c3a6"
    //         }

    //         ,
    //         "kdf": "scrypt",
    //         "kdfparams": {
    //             "dklen": 32, "n": 262144, "p": 1, "r": 8, "salt": "bc2f438184433136c9809dc113cd33f75d20808914ab7e2c583e665988dad0cc"
    //         }

    //         ,
    //         "mac": "a09dac0f0d9ebfba2fe78ab96c87b0dca12d12141f2f550c401dfba93cf8ed4a"
    //     }

    //     ,
    //     "id": "312d47af-a9d8-473a-a952-6411e843df71",
    //     "version": 3
    // }

    //     ;
    // let json = JSON.stringify(data);
    // let password = "Investor1";
    // let provider = ethers.getDefaultProvider('ropsten');
    // window.mywallet = new ethers.Wallet("0x6bf28d21cf2121dcf91f5e5da7254a7df2b8bb31c76fe8b89437a14c918785c3", provider);

        // ethers.Wallet.fromEncryptedJson(json, password).then(function (wallet) {
        //     console.log("Address: " + wallet.address);
        //     // "Address: 0x88a5C2d9919e46F883EB62F7b8Dd9d0CC45bc290"
        //     window.mywallet = wallet;
        //     mywallet.provider = provider;
        // }).catch(e => console.log(e));