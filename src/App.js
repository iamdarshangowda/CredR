import "./App.css";

function App() {
  return (
    <div className="App">
      <section>
        <div>
          <h2>Anim nulla laboris anim aute nulla adipisicing aute.</h2>
          <p>
            In nisi culpa et excepteur reprehenderit velit amet ullamco. Anim eu
            aliqua eu laboris aute sunt velit in mollit deserunt.
          </p>
          <div>
            <p>WHAT WE OFFER</p>
            <ul>
              <li>Anim nulla laboris</li>
              <li>Anim nulla laboris</li>
              <li>Anim nulla laboris</li>
              <li>Anim nulla laboris</li>
              <li>Anim nulla laboris</li>
              <li>Anim nulla laboris</li>
            </ul>
          </div>
        </div>
        <div>
          <form>
            <h3>Personal Details</h3>
            <label for="name">Name</label>
            <input type="text" id="name" placeholder="Saniyo Joseph" />
            <label for="phone">Mobile Number</label>
            <input type="text" id="phone" placeholder="827735748" />
            <select value="Select City">
              <option>Bengaluru</option>
              <option>Mumbai</option>
              <option>Delhi</option>
              <option>Kolkata</option>
            </select>
            <button>CONTINUE</button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default App;
