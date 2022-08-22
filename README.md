# EmotionArt-Marketplace-Contract
Polygon NFT Marketplace smart contract with NFT Trading and Auction

## Program Deployment
You can deploy the smart contract on Remix online tool 

or 

we can deploy in on the Hardhat Framework.

## Function Help

### updateTotalFee
Update the marketplace new Fee amount.(Initial amount is 5%)
```js
    /**
        @param _newFee This is new marketplace fee amount
    **/
    function updateTotalFee(
        uint256 _newFee
    ) external {}
```

### updateFeeAndRecipient
Update the Recipient addresses and fee amounts
```js
    /** 
        @param _recipient These are the updated recipient addresses of the fees.
        @param _fee These are the updated fees for the recipients to receive.
    **/
    function updateFeeAndRecipient(
        address[] memory _recipient, 
        uint256[] memory _fee
    ) external {}
```

### createList
Users can create the list of their NFTs to sell.
```js
    /** 
        @param _token This is the address of the ERC1155 token.
        @param _tokenId This is the ID of the token that's inside of the ERC1155 token.
        @param _amountOfToken This is the amount of tokens that are going to be sold in the offer.
        @param _deadline This is the final date in (seconds) so the offer ends.
        @param _price This is the full price for the amountOfToken that user passed as the param.
        @dev We are making some require for the parameters that needs to be required.
        @return Return true if the sell is created successfully.
    **/
    function createList(
        address _token,
        uint256 _tokenId,
        uint256 _amountOfToken,
        uint256 _deadline,
        uint256 _price
    ) external returns (bool) {}
```

### buyListToken
Users can buy the listed NFTs when they want.
```js
    /**
        @param _sellId This is the ID of the SellList that's stored in mapping function.
    **/
    function buyListToken(
        uint256 _sellId
    ) external payable returns (bool) {}
```

### cancelList
The lister can cancel the list with this function
```js
    /** 
        @param _sellId The ID of the sell that you want to cancel.
    **/
    function cancelList(
        uint256 _sellId
    ) external returns (bool) {}
```

### transfer
Users can transfer their NFTs to the specific wallet.
```js
    /**
        @param _receiver This is the address which will be receive the token.
        @param _token This is the address of the ERC1155 token.
        @param _tokenId This is the ID of the token that's inside of the ERC1155 token.
        @param _amountOfToken This is the amount of tokens that are going to be transferred.
        @dev We are making some require for the parameters that needs to be required.
        @return Return true if the sell is created successfully.
    **/
    function transfer(
        address _receiver,
        address _token,
        uint256 _tokenId,
        uint256 _amountOfToken
    ) external returns (bool) {}
```

### makeOffer
Users can make an offer for the listed NFT.
```js
    /**
        @param _sellId The ID of the sell that you want to make an offer.
        @param _price The offer price for _sellId.
    **/
    function makeOffer(
        uint256 _sellId,
        uint256 _price
    ) external payable returns (bool) {}
```

### acceptOffer
Users can accept the offer what they want.
```js
    /**
        @param _sellId The ID of the sell that you want to make an offer.
        @param _offerCount The offer count to be accepted from the seller.
    **/
    function acceptOffer(
        uint256 _sellId,
        uint256 _offerCount
    ) external returns (bool) {}
```

### cancelOffer
Users can cancel their offers if they are not accepted.
```js
    /**
        @param _sellId The ID of the sell that you want to make an offer.
        @param _offerCount The offer count to be cancelled from the offerAddress.
    **/
    function cancelOffer(
        uint256 _sellId,
        uint256 _offerCount
    ) external returns (bool) {}
```

### depositEscrow
Users can deposit the Matic amount to the marketplace as escrow.
```js
    /**
        @dev This function used to deposit the Matic on this platform 
    **/
    function depositEscrow() external payable returns (bool) {}
```

### withdrawEscrow
Users can escrow the Matic amount from the escrowVault(this smart contract).
```js
    /**
        @dev This function used to withdraw the Matic on this platform 
        @param _amount This is the amount of the Matic to withdraw from the marketplace
    **/
    function withdrawEscrow(
        uint256 _amount
    ) external returns (bool) {}
```

### createAuction
Users can create the auction with some variables.
```js
    /** 
        @param _token This is the address of the ERC1155 token.
        @param _tokenId This is the ID of the token that's inside of the ERC1155 token.
        @param _amountOfToken This is the amount of tokens that are going to be created in auction.
        @param _startPrice This is the start Price of the auction.
        @param _minIncrement This is the min increment of the bids in this auction.
        @param _startDate This is the start date in (seconds) so the auction starts.
        @param _duration This is the duration of this auction.
        @param _reserved 1: reserved acution 0: normal auction
        @dev We are making some require for the parameters that needs to be required.
        @return Return true if the auction is created successfully.
    **/
    function createAuction(
        address _token,
        uint256 _tokenId,
        uint256 _amountOfToken,
        uint256 _startPrice,
        uint256 _minIncrement,
        uint256 _startDate,
        uint256 _duration,
        bool _reserved
    ) external returns (bool) {}
```

### placeBid
Users can place bid to the _auctionId auction with value - payable function.
```js
    /*
        @param _auctionId Users can bid to the _auctionId with value
    */
    function placeBid(
        uint256 _auctionId
    ) external payable returns (bool) {}
```

### cancelAuction
The auction creator can cancel the auction if there is no highest bidder and auction ended.
```js
    /*
        @param _auctionId The auction Creator can cancel the auction
    */
    function cancelAuction(
        uint256 _auctionId
    ) external returns (bool) {}
```

### claimAuction
The highest bidder can claim the auction result - send NFT to the highest bidder, transfer bid to auction creator.
```js
    /*
        @param _auctionId The highest bidder can claim the _auctionId's result
    */
    function claimAuction(
        uint256 _auctionId
    ) external returns (bool) {}
```