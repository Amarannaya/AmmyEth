function Tiles(){
    return(
      <div id="tiles" style={{backgroundColor:'#c97fbc'}}>
       <div id="usage" class="message-header" style={{backgroundColor:'#160F29'}}>
        <p style={{fontSize:'18px'}}>The App in Details:</p>
        <button class="delete" aria-label="delete"></button>
      </div>
      <div class="tile is-ancestor" style={{backgroundColor:'#c97fbc'}}>
      <div class="tile is-4 is-vertical is-parent" style={{backgroundColor:'#c97fbc'}}>
        <div class="tile is-child box" style={{backgroundColor:'#c97fbc'}}>
          <p class="title" style={{backgroundColor:'#c97fbc'}}>One</p>
          <p style={{backgroundColor:'#c97fbc',color:'wheat'}}>This app allows users to deposit ether into their account, withdraw ether from their account, and to check their account balance. The amount to withdraw must be greater than zero, this condition ensures that a user cannot withdraw a negative amount.</p>
        </div>
        <div class="tile is-child box" style={{backgroundColor:'#c97fbc'}}>
          <p class="title" style={{backgroundColor:'#c97fbc'}}>Two</p>
          <p style={{backgroundColor:'#c97fbc',color:'wheat'}}> The amount to withdraw must not exceed 80% of the user's available balance. 
          This condition ensures that users cannot withdraw more than 80% of their account balance, which can help prevent a user from accidentally
          withdrawing more than they intended or from being targeted by attackers attempting to drain their entire account balance.
          The user must have sufficient balance to make the withdrawal. This condition ensures that the user has enough funds in their account to cover the withdrawal amount.</p>
        
        </div>
      </div>
      <div class="tile is-parent" style={{backgroundColor:'#c97fbc'}}>
        <div class="tile is-child box" style={{backgroundColor:'#c97fbc'}}>
          <p class="title">Three</p>
          <p style={{color:'wheat'}}>  The user must have sufficient balance to make the withdrawal.</p>
          <p style={{color:'wheat'}}> If any of these conditions are not met, the "withdraw" function will fail and the withdrawal will not be processed. </p>
          <p style={{color:'wheat'}}> This condition ensures that the user has enough funds in their account to cover the withdrawal amount.</p>
          <p style={{color:'wheat'}}> You can only withdraw twice a day too!!.</p>
        
        </div>
      </div>
    </div>
    </div>
    );
}

export default Tiles;