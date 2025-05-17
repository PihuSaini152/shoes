import React from "react";
import "./watch2.css";


const Watch2 = () => {
  return (
    <>
    <div className="watch2-wrapper">
      {/* Section 1 - Series Preview */}
      <div className="watch2-section">
        <div className="watch2-left">
          <h4>Series Preview:</h4>
          <h2>Stanley Tucci Sets The Table</h2>
          <p>
            What does it take to throw a great dinner party? Hint: It’s less
            about the food, more about the company. Stanley Tucci introduces
            our new series, greets his guests, and gives us a taste of what’s
            to come.
          </p>
        </div>
        <div className="watch2-right">
          <img src="/watch_now/epp.jpg" alt="watch preview" />
          <button className="watch-btn">▶ WATCH</button>
        </div>
      </div>

      {/* Episode 1 - image left */}
      <div className="watch2-section">
        <div className="watch2-left">
          <img src="/watch_now/ep1.jpg" alt="episode 01" />
          <button className="watch-btn">▶ WATCH</button>
        </div>
        <div className="watch2-right">
          <h4>Episode 01:</h4>
          <h2>Fiction, Fear, & Gratitude</h2>
          <p>
            What’s a rule you’re often tempted to break? In the series premiere,
            Stanley hosts designer <strong>Tan France</strong>, Formula 1 driver{" "}
            <strong>Carlos Sainz</strong>, and musical artist{" "}
            <strong>Melanie C</strong>. Over dinner, they share stories of
            cherished heritage, big ambitions, and roads not taken.
          </p>
        </div>
      </div>

      {/* Episode 2 - image right */}
      <div className="watch2-section reverse">
        <div className="watch2-left">
          <h4>Episode 02:</h4>
          <h2>Art, Identity & Unexpected Paths</h2>
          <p>
            In this episode, Stanley is joined by <strong>Billy Porter</strong>,
            <strong> Naomi Osaka</strong>, and <strong>Rupi Kaur</strong>. They
            dive deep into how their identities shape their art and how
            vulnerability became a superpower.
          </p>
        </div>
        <div className="watch2-right">
          <img src="/watch_now/ep2.jpg" alt="episode 02" />
          <button className="watch-btn">▶ WATCH</button>
        </div>
      </div>

      {/* Episode 3 - image left */}
      <div className="watch2-section">
        <div className="watch2-left">
          <img src="/watch_now/ep3.jpg" alt="episode 03" />
          <button className="watch-btn">▶ WATCH</button>
        </div>
        <div className="watch2-right">
          <h4>Episode 03:</h4>
          <h2>Breaking Barriers & Finding Balance</h2>
          <p>
            In episode 3, Stanley welcomes <strong>Mindy Kaling</strong>,{" "}
            <strong>Lewis Hamilton</strong>, and <strong>Padma Lakshmi</strong>.
            Topics include fame, mental health, and maintaining balance while
            challenging stereotypes.
          </p>
        </div>
      </div>

      {/* Episode 4 - image right */}
      <div className="watch2-section reverse">
        <div className="watch2-left">
          <h4>Episode 04:</h4>
          <h2>Legacy, Love & Letting Go</h2>
          <p>
            In the final episode, Stanley sits with <strong>Zendaya</strong>,{" "}
            <strong>David Beckham</strong>, and <strong>Michelle Yeoh</strong>
            to explore how past experiences shape their futures, the pressure of
            legacy, and what they’ve learned to let go.
          </p>
        </div>
        <div className="watch2-right">
          <img src="/watch_now/ep4.jpg" alt="episode 04" />
          <button className="watch-btn">▶ WATCH</button>
        </div>
      </div>
    </div>
    <div className="email-signup-section">
  <h3>Curious?</h3>
  <p>Join our email list and be the first to learn about each new episode.</p>
  <form className="email-form" onSubmit={e => e.preventDefault()}>
    <input
      type="email"
      placeholder="Enter Your Email Address"
      required
      className="email-input"
    />
    <button type="submit" className="signup-btn">Sign Up</button>
  </form>
  <label className="checkbox-label">
    <input type="checkbox" />
    Keep me updated on other news and exclusive offers
  </label>
  <p className="note-text">
    Note: You can opt-out at any time. See our <a href="/privacy-policy">Privacy Policy</a> and <a href="/terms">Terms</a>.
  </p>
</div>

</>
  );
};

export default Watch2;
