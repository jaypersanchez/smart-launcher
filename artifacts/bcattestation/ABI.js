export const ABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "_accountId",
				"type": "address"
			}
		],
		"name": "AttestationCreated",
		"type": "event"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "accountIds",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"internalType": "address",
				"name": "_accountId",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_hashId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hashType",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_hash",
				"type": "uint256"
			}
		],
		"name": "createAttestationData",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"internalType": "address",
				"name": "_accountId",
				"type": "address"
			}
		],
		"name": "getAttestationData",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
];

