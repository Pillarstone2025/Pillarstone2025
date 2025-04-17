import React from "react";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <header style={{ backgroundColor: "#166534", color: "white", padding: "1em", textAlign: "center" }}>
        <h1>Pillarstone</h1>
      </header>

      <section style={{ padding: "2em", textAlign: "center", background: "#f4f4f4" }}>
        <h2>We Are Here To Erase Poverty</h2>
        <p>Our journey began in 2010 in Florida, USA. We empower people to grow their money safely.</p>
      </section>

      <section style={{ padding: "2em", textAlign: "center" }}>
        <h3>How It Works</h3>
        <p>Invest PHP 1,000 today, and receive PHP 2,000 in less than 24 hours.</p>
      </section>

      <section style={{ padding: "2em", textAlign: "center", background: "#f4f4f4" }}>
        <h3>Register / Login</h3>
        <input type="text" placeholder="Full Name" /><br /><br />
        <input type="email" placeholder="Email" /><br /><br />
        <input type="password" placeholder="Password" /><br /><br />
        <button>Submit</button>
      </section>

      <section style={{ padding: "2em", textAlign: "center" }}>
        <h3>Contact Us</h3>
        <p>WhatsApp: +639649598597</p>
        <p>Email: Pillarstoneworldwide@gmail.com</p>
      </section>

      <footer style={{ backgroundColor: "#166534", color: "white", padding: "1em", textAlign: "center" }}>
        <p>&copy; 2025 Pillarstone. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
