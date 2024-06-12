/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFTs
let nfts = []; // Array to store all NFT objects

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, description, owner) {
    const nft = {                               // Create an NFT object with metadata
        name: name,
        description: description,
        owner: owner,
    };
    nfts.push(nft);                             // Add the newly created NFT to the array
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let index = 0; index < nfts.length; index++) {         // Iterate through each NFT in the array
        const nft = nfts[index];                                // Get the current NFT
        console.log("NFT " + (index + 1));                      // Print the NFT number (starting from 1)
        console.log("Name: " + nft.name);                       // Print the name of the NFT
        console.log("Description: " + nft.description);         // Print the description of the NFT
        console.log("Owner: " + nft.owner);                     // Print the owner of the NFT
        console.log('---------------------');                   
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return nfts.length;                         // Return the total number of NFTs
}

// call your functions below this line
mintNFT("CryptoPunk", "A unique digital punk character", "Alice");      // Mint an NFT with specific metadata
mintNFT("Digital Art", "A piece of modern digital art", "Bob");         // Mint another NFT
mintNFT("Virtual Land", "A piece of virtual real estate", "Charlie");   // Mint yet another NFT

listNFTs();                                         // List all minted NFTs
console.log("Total NFTs: " + getTotalSupply());     // Print the total number of NFTs
