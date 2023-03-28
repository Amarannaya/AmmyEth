function Tab(){
    return(
        <div id="tab" style={{textAlign:'center'}}> <h1 class="title">Our Services</h1> 
        <div>
        <div class="columns">
        <div class="column" style={{color:'wheat',backgroundColor:'purple', borderRadius:'10px',margin:'5px',textAlign:'center'}}>
          Ethereum
        </div>
        <div class="column" style={{color:'wheat',backgroundColor:'#a77e9c', borderRadius:'10px',margin:'5px',textAlign:'center'}}>
          Cryptocurrency
        </div>
        <div class="column" style={{color:'wheat',backgroundColor:'purple', borderRadius:'10px',margin:'5px',textAlign:'center'}}>
          Blockchain
        </div>
        <div class="column" style={{color:'wheat',backgroundColor:'#a77e9c', borderRadius:'10px',margin:'5px',textAlign:'center'}}>
          Savings
        </div>
        <div>
            
        </div>
      </div>  
      <article class="message">
  <div id="usage" class="message-header" style={{backgroundColor:'#160F29'}}>
    <p style={{fontSize:'18px'}}>How To Use:</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
   
  <h4 style={{textAlign:'left'}}>Ensure you connect your metamask to your account and fund your account with anything more than 0 to allow you withdraw when need be.
  </h4>
  <h4 style={{textAlign:'left'}}>Your account balance must be more than you want to withdraw and you cannot withdraw more than 80 percent of your account balance.</h4>
  <h4 style={{textAlign:'left'}}>Send, withdraw and check your Ether balance without hassle. Also note that you have maximum of 2 withdrawals in a day. Happy Banking!</h4>
  </div>
</article>
      </div>
         </div>
    );
}

export default Tab;