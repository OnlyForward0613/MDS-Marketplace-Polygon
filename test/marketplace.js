const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Marketplace Listing", function () {
  it("Create list and buy", async function () {
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Marketplace = await ethers.getContractFactory("Marketplace");
    const TestNFT = await ethers.getContractFactory("TestNFT");

    const hardhatMarketplace = await Marketplace.deploy();
    const hardhatNFT = await TestNFT.connect(addr1).deploy();

    const tokenAddr = hardhatNFT.address;

    await hardhatNFT.connect(addr1).setApprovalForAll(hardhatMarketplace.address,true)
    await hardhatMarketplace.connect(addr1).createList(tokenAddr, 1, 5, 4000, ethers.utils.parseEther("0.1"));
    await hardhatMarketplace.connect(addr2).buyListToken(0, {value: ethers.utils.parseEther("0.1")});
    // console.log(await hardhatNFT.balanceOf(addr2.address, 1));
  });

  it("Create list and cancel", async function () {
    const [addr1, addr2] = await ethers.getSigners();

    const Marketplace = await ethers.getContractFactory("Marketplace");
    const TestNFT = await ethers.getContractFactory("TestNFT");

    const hardhatMarketplace = await Marketplace.deploy();
    const hardhatNFT = await TestNFT.connect(addr1).deploy();

    const tokenAddr = hardhatNFT.address;

    await hardhatNFT.connect(addr1).setApprovalForAll(hardhatMarketplace.address,true)
    await hardhatMarketplace.connect(addr1).createList(tokenAddr, 1, 5, 4000, ethers.utils.parseEther("0.1"));
    await hardhatMarketplace.connect(addr1).cancelList(0);
  });

  it("Create list and Make offer", async function () {
    const [addr1, addr2, addr3] = await ethers.getSigners();

    const Marketplace = await ethers.getContractFactory("Marketplace");
    const TestNFT = await ethers.getContractFactory("TestNFT");

    const hardhatMarketplace = await Marketplace.deploy();
    const hardhatNFT = await TestNFT.connect(addr1).deploy();

    const tokenAddr = hardhatNFT.address;

    await hardhatNFT.connect(addr1).setApprovalForAll(hardhatMarketplace.address,true)
    await hardhatMarketplace.connect(addr1).createList(tokenAddr, 1, 5, 4000, ethers.utils.parseEther("0.1"));
    await hardhatMarketplace.connect(addr2).makeOffer(0, ethers.utils.parseEther("0.05"), {value: ethers.utils.parseEther("0.05")});
    await hardhatMarketplace.connect(addr3).makeOffer(0, ethers.utils.parseEther("0.06"), {value: ethers.utils.parseEther("0.06")});
  
  });

  it("Create list, Make offers and Accept offer", async function () {
    const [addr1, addr2, addr3, addr4] = await ethers.getSigners();

    const Marketplace = await ethers.getContractFactory("Marketplace");
    const TestNFT = await ethers.getContractFactory("TestNFT");

    const hardhatMarketplace = await Marketplace.deploy();
    const hardhatNFT = await TestNFT.connect(addr1).deploy();

    const tokenAddr = hardhatNFT.address;

    await hardhatNFT.connect(addr1).setApprovalForAll(hardhatMarketplace.address,true)
    await hardhatMarketplace.connect(addr1).createList(tokenAddr, 1, 5, 4000, ethers.utils.parseEther("0.1"));
    await hardhatMarketplace.connect(addr2).makeOffer(0, ethers.utils.parseEther("0.05"), {value: ethers.utils.parseEther("0.05")});
    await hardhatMarketplace.connect(addr3).makeOffer(0, ethers.utils.parseEther("0.065"), {value: ethers.utils.parseEther("0.065")});
    await hardhatMarketplace.connect(addr4).makeOffer(0, ethers.utils.parseEther("0.06"), {value: ethers.utils.parseEther("0.06")});
    
    await hardhatMarketplace.connect(addr1).acceptOffer(0, 1);

    // console.log(await hardhatNFT.balanceOf(addr3.address, 1));

  });

  it("Create list, Make offers and Cancel offer", async function () {
    const [addr1, addr2, addr3, addr4] = await ethers.getSigners();

    const Marketplace = await ethers.getContractFactory("Marketplace");
    const TestNFT = await ethers.getContractFactory("TestNFT");

    const hardhatMarketplace = await Marketplace.deploy();
    const hardhatNFT = await TestNFT.connect(addr1).deploy();

    const tokenAddr = hardhatNFT.address;

    await hardhatNFT.connect(addr1).setApprovalForAll(hardhatMarketplace.address,true)
    await hardhatMarketplace.connect(addr1).createList(tokenAddr, 1, 5, 4000, ethers.utils.parseEther("0.1"));
    await hardhatMarketplace.connect(addr2).makeOffer(0, ethers.utils.parseEther("0.05"), {value: ethers.utils.parseEther("0.05")});
    await hardhatMarketplace.connect(addr3).makeOffer(0, ethers.utils.parseEther("0.065"), {value: ethers.utils.parseEther("0.065")});
    await hardhatMarketplace.connect(addr4).makeOffer(0, ethers.utils.parseEther("0.06"), {value: ethers.utils.parseEther("0.06")});
    
    await hardhatMarketplace.connect(addr2).cancelOffer(0, 0);

    // console.log(await hardhatNFT.balanceOf(addr3.address, 1));

  });
  


});


describe("Marketplace Transferring", function () {
    it("Transfer NFT", async function () {
      const [addr1, addr2] = await ethers.getSigners();
  
      const Marketplace = await ethers.getContractFactory("Marketplace");
      const TestNFT = await ethers.getContractFactory("TestNFT");
  
      const hardhatMarketplace = await Marketplace.deploy();
      const hardhatNFT = await TestNFT.connect(addr1).deploy();
  
      const tokenAddr = hardhatNFT.address;
  
      await hardhatNFT.connect(addr1).setApprovalForAll(hardhatMarketplace.address,true)
      await hardhatMarketplace.connect(addr1).transfer(addr2.address, tokenAddr, 1, 5);
    });
});


describe("Marketplace Deposit / Withdraw", function () {
    it("Deposit Escrow", async function () {
      const [addr1, addr2] = await ethers.getSigners();
  
      const Marketplace = await ethers.getContractFactory("Marketplace");
  
      const hardhatMarketplace = await Marketplace.deploy();
  
      await hardhatMarketplace.connect(addr1).depositEscrow({value: ethers.utils.parseEther("0.1")});
    });

    it("Withdraw Escrow", async function () {
        const [addr1, addr2] = await ethers.getSigners();
    
        const Marketplace = await ethers.getContractFactory("Marketplace");
    
        const hardhatMarketplace = await Marketplace.deploy();
    
        await hardhatMarketplace.connect(addr1).depositEscrow({value: ethers.utils.parseEther("1")});
        await hardhatMarketplace.connect(addr1).withdrawEscrow(ethers.utils.parseEther("0.5"));
        
      });
});


describe("Marketplace Auction", function () {
    it("Create Auction", async function () {
      const [addr1, addr2] = await ethers.getSigners();
  
      const Marketplace = await ethers.getContractFactory("Marketplace");
      const TestNFT = await ethers.getContractFactory("TestNFT");
  
      const hardhatMarketplace = await Marketplace.deploy();
      const hardhatNFT = await TestNFT.connect(addr1).deploy();

      const blockNumBefore = await ethers.provider.getBlockNumber();
      const blockBefore = await ethers.provider.getBlock(blockNumBefore);
      const timestampBefore = blockBefore.timestamp;
          
      const tokenAddr = hardhatNFT.address;
  
      await hardhatMarketplace.connect(addr1).createAuction(tokenAddr, 1, 5, ethers.utils.parseEther("0.5"), ethers.utils.parseEther("0.1"), timestampBefore+2, 100000, true);
    });

    it("Create Auction and Place Bid", async function () {
        const [addr1, addr2, addr3] = await ethers.getSigners();
    
        const Marketplace = await ethers.getContractFactory("Marketplace");
        const TestNFT = await ethers.getContractFactory("TestNFT");
    
        const hardhatMarketplace = await Marketplace.deploy();
        const hardhatNFT = await TestNFT.connect(addr1).deploy();

        const blockNumBefore = await ethers.provider.getBlockNumber();
        const blockBefore = await ethers.provider.getBlock(blockNumBefore);
        const timestampBefore = blockBefore.timestamp;
      
        const tokenAddr = hardhatNFT.address;
    
        await hardhatMarketplace.connect(addr1).createAuction(tokenAddr, 1, 5, ethers.utils.parseEther("0.5"), ethers.utils.parseEther("0.1"), timestampBefore+2, 100000, true);
        await hardhatMarketplace.connect(addr2).placeBid(0, {value: ethers.utils.parseEther("0.5")})
        await hardhatMarketplace.connect(addr3).placeBid(0, {value: ethers.utils.parseEther("0.6")})
    });
  
});