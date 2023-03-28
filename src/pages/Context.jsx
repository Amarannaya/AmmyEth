import { ethers } from 'ethers';
import React from 'react';
import { useContract, useSigner } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../constants'

// this project uses the wagmi react hooks to connect the frontend with the smart contract
function Context() {
  
  const [depositInput, setDepositInput] = React.useState('')
  const [withdrawInput, setWithdrawInput] = React.useState('')
  const [balance, setBalance] = React.useState('')

  const [dLoading, setDloading] = React.useState(false)
  const [wLoading, setWloading] = React.useState(false)
 
  const { data: signer, isError, isLoading } = useSigner()
  const contract = useContract({
    address: CONTRACT_ADDRESS,
    abi: CONTRACT_ABI,
    signerOrProvider: signer,
  })

  async function depositEth(e) {
    try {
      e.preventDefault();
      console.log('deposit......', depositInput)

      setDloading(true)

      const tx = await contract.dropEth({value: ethers.utils.parseEther(depositInput)});
      const hash = await tx.wait();
      console.log(" hash:", hash)

      setDepositInput('')
      getBalance()
      setDloading(false)
    } catch (error) {
      console.log(" deposit ~ error:", error)
    }

  }

  async function withdrawEth(e) {
    try {
      e.preventDefault();
      console.log('withdrawing......', withdrawInput)

      setWloading(true)

      const tx = await contract.removeEth(ethers.utils.parseEther(withdrawInput.toString()));
      const hash = await tx.wait();
      console.log("🚀deposit ~ hash:", hash)

      setWithdrawInput('')
      getBalance()
      setWloading(false)
    } catch (error) {
      console.log(" withdraw ~ error:", error.data.message)
      
    }

  }

  async function getBalance() {
    try {
      console.log('getting balance......')

      const bal = await contract.getEthBalance();

      setBalance(ethers.utils.formatEther(bal))
    } catch (error) {
      console.log("getBalance ~ error:", error)
      
    }

  }

  return (
    <div id='form'  style={{ display: 'flex', justifyContent: 'space-between', margin: 100,backgroundColor:'#160F29',borderRadius:'20px' }}>

      <div style={{ display: 'flex', alignItems: 'center',paddingLeft:'20px'}}>
        <form>
          <label> </label>
          <input 
          style={{paddingLeft:'20px'}}
            type="text" 
            name="Amount" 
            placeholder='Amount to be withdrawn'
            value={withdrawInput}
            onChange={e=>setWithdrawInput(e.target.value)}
          />
          <button 
          style={{fontSize:'20px',borderRadius:'15px',padding:'5px',margin:'20px'}}
            onClick={(e) => withdrawEth(e)}
            type="submit"
          >{wLoading ? 'Withdrawing...' : 'Withdraw'}</button>
        </form>
      </div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form>
          <label> </label>
          <input 
            type="text" 
            name="Amount"
            placeholder='Deposit Amount' 
            size={20}
            value={depositInput}
            onChange={e=>setDepositInput(e.target.value)}
          />
          <button 
            style={{fontSize:'20px',borderRadius:'15px',padding:'5px',margin:'20px'}}
            onClick={(e) => depositEth(e)}
            type="submit"
          >{dLoading ? 'Depositing...' : 'Deposit'}</button>
        </form>
      </div>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <label style={{color:'white',fontSize:'18px'}}>{balance}ETH</label>
        <button
        style={{fontSize:'20px',borderRadius:'15px',padding:'5px',margin:'20px'}}
          onClick={()=>getBalance()}
        >Balance</button>
      </div>

    </div>
  );
}

export default Context;
