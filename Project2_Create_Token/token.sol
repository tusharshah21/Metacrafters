
// SPDX-License-Identifier: MIT
pragma solidity 0.8.18;

/*
       REQUIREMENTS
    1. Your contract will have public variables that store the details about your coin (Token Name, Token Abbrv., Total Supply)
    2. Your contract will have a mapping of addresses to balances (address => uint)
    3. You will have a mint function that takes two parameters: an address and a value. 
       The function then increases the total supply by that number and increases the balance 
       of the “sender” address by that amount
    4. Your contract will have a burn function, which works the opposite of the mint function, as it will destroy tokens. 
       It will take an address and value just like the mint functions. It will then deduct the value from the total supply 
       and from the balance of the “sender”.
    5. Lastly, your burn function should have conditionals to make sure the balance of "sender" is greater than or equal 
       to the amount that is supposed to be burned.
*/

contract MyToken {
    // Public variables to store the details about the coin
    string public tokenname = "MyToken"; // The name of the token
    string public tokenabb = "MTK";      // The abbreviation of the token
    uint256 public totalSupply;          // The total supply of the token

    // Mapping of addresses to balances
    mapping(address => uint256) public balances; // Maps each address to its balance

    // Mint function to increase total supply and the balance of the given address
    function mint(address _address, uint256 _value) public {
        totalSupply += _value;            // Increase the total supply by the specified value
        balances[_address] += _value;     // Increase the balance of the specified address
    }

    // Burn function to decrease total supply and the balance of the given address
    function burn(address _address, uint256 _value) public {
        // Check if the balance of the specified address is greater than or equal to the value to be burned
        if(balances[_address] >= _value) {
            totalSupply -= _value;        // Decrease the total supply by the specified value
            balances[_address] -= _value; // Decrease the balance of the specified address
        }
    }
}