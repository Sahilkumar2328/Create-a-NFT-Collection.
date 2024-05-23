// create a variable to hold your NFT's
let nftCollection = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (uid,name,section) {
    let nft = [uid, name, section];
    nftCollection.push(nft)
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()

function listNFTs () {
    for(let i=0;i<nftCollection.length;i++){
        console.log("uid is " + nftCollection[i][0]);
        console.log("name is " + nftCollection[i][1]);
        console.log("section is " +nftCollection[i][2]);
    
}
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nftCollection.length
}

// call your functions below this line
mintNFT(22,"Sahil",612);
mintNFT(23,"subh",601);
listNFTs ();
console.log(getTotalSupply());


  