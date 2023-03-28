// SPDX-License-Identifier:MIT

pragma solidity ^0.8.0;

contract AmmyEth {
    // A mapping that associates an address with a balance of ether
    mapping(address => uint) balances;
    
    // A mapping that associates an address with the number of withdrawals made within a day
    mapping(address => uint) withdrawals;
    
    // An event that is emitted when a deposit is made, including the user's address and the amount deposited
    event Deposit(address indexed user, uint amount);
    
    // An event that is emitted when a withdrawal is made, including the user's address and the amount withdrawn
    event removal(address indexed user, uint amount);

    // A function that allows users to deposit ether into their account
    function dropEth() public payable {
        // Require that the amount deposited is greater than or equal to 0.001 ether
        require(msg.value >= 0.001 ether, "Deposit amount must be greater than or equal to 0.001 ethers");
        
        // Add the amount deposited to the user's balance
        balances[msg.sender] += msg.value;
        
        // Emit the Deposit event with the user's address and the amount deposited
        emit Deposit(msg.sender, msg.value);
    }

    // A function that allows users to withdraw ether from their account
    function removeEth(uint amount) public {
        // Require that the amount to withdraw is greater than zero
        require(amount > 0, "Amount must be greater than zero");
        
        // Require that the amount to withdraw does not exceed 80% of the user's available balance
        require(amount <= balances[msg.sender] * 8 / 10, "Cannot withdraw more than 80% of available balance");
        
        // Require that the user has sufficient balance to make the withdrawal
        require(balances[msg.sender] >= amount, "Insufficient balance");
        
        // Require that the user has not made more than two withdrawals within a day
        require(withdrawals[msg.sender] < 2, "Cannot withdraw more than twice in a day");
        
        // Subtract the amount withdrawn from the user's balance
        balances[msg.sender] -= amount;
        
        // Increment the number of withdrawals made by the user within a day
        withdrawals[msg.sender]++;
        
        // Transfer the withdrawn ether to the user's address
        (bool success, ) = payable(msg.sender).call{value: amount, gas: 2300}("");
        require(success, "Transfer failed.");
        
        // Emit the Withdrawal event with the user's address and the amount withdrawn
        emit removal(msg.sender, amount);
    }

    // A function that returns the balance of the calling address
    function getEthBalance() public view returns (uint) {
        return balances[msg.sender];
    }
}
