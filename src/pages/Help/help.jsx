import React from 'react'
import './help.css'

function help() {
  return (
    <>
      <div className="helpmain">
        <h1>How Can We Help?</h1>
        <p>Chat with us <br />
          Send us a text: 1-814-251-9966 <br />
          Give us a call: 1-888-963-8944 <br />
          Monday - Thursday: 5AM - 5PM PST <br />
          Friday: 5AM - 3PM PST
        </p>
      </div>
      <div className="help-query">

        <div className="helpinput">
          <input type="text" placeholder='What can we help you with?' />
        </div>
        <div className="helptext">
          <h1>Frequently Asked Questions</h1>
        </div>

        <div className="help-Frequently">
          <div className="help-Frequently-card">
            <h1>Products & Fit</h1>
            <p>Do Allbirds run true to size?</p>
            <p>Will my shoes stretch?</p>
            <p>Are Allbirds good for flat feet?</p>
            <p>Are Allbirds waterproof?</p>
            <p>Can you wash Allbirds insoles?</p>
            <p>Are Allbirds washable?</p>
          </div>
          <div className="help-Frequently-card">
            <h1>Returns & Exchanges</h1>
            <p>Can I return or exchange an in store purchase online?</p>
            <p>How do I make a gift exchange?</p>
            <p>What is Allbirds' return policy?</p>
          </div>
          <div className="help-Frequently-card">
            <h1>Orders, Shipping & Tracking</h1>
            <p>Do you offer gift wrapping?</p>
            <p>Can I expedite my order?</p>
            <p>How do you ship?</p>
            <p>What if I want to cancel or change my order?</p>
          </div>
          <div className="help-Frequently-card">
            <h1>Payments & Refunds</h1>
            <p>When can I expect my refund?</p>
            <p>Does Allbirds offer discount codes or coupons?</p>
            <p>How do I send a gift card?</p>
          </div>
          <div className="help-Frequently-card">
            <h1>Company</h1>
            <p>What is your commitment to sustainability?</p>
            <p>Where are Allbirds products made?</p>
            <p>How do you ensure fair and safe working conditions at factories?</p>
          </div>

        </div>

      </div>
                  <div className="Allbirds-Approach">
                <h1>The Allbirds Approach</h1>
                <div className="Allbirds-Approach-Card">
                    <div className="Allbirds-Approach-Cards">
                        <h1>Wear-All-Day Comfort</h1>
                        <p>Lightweight, bouncy, and wildly comfortable, Allbirds shoes make any outing feel effortless. Slip in, lace up, or slide them on and enjoy the comfy support.</p>
                        <a href="">Learn More</a>

                    </div>
                    <div className="Allbirds-Approach-Cards">
                        <h1>Sustainability In Every Step</h1>
                        <p>From materials to transport, we’re working to reduce our carbon footprint to near zero. Holding ourselves accountable and striving for climate goals isn’t a 30-year goal—it’s now.</p>
                        <a href="">Learn More</a>

                    </div>
                    <div className="Allbirds-Approach-Cards">
                        <h1>Materials From The Earth</h1>
                        <p>We replace petroleum-based synthetics with natural alternatives wherever we can. Like using wool, tree fiber, and sugar cane. They’re soft, breathable, and better for the planet—win, win, win.</p>
                        <a href="">Learn More</a>

                    </div>
                </div>

            </div>


    </>

  )
}

export default help
