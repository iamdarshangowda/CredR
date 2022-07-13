import "./App.css";
import {
  TbCircle1,
  TbCircle2,
  TbCircle3,
  TbCircle4,
  TbCircle5,
  TbCircle6,
} from "react-icons/tb";

function App() {
  return (
    <div>
      <section className="top-container">
        <div className="top-text">
          <h2>Anim nulla laboris anim aute nulla adipisicing aute.</h2>
          <p>
            In nisi culpa et excepteur reprehenderit velit amet ullamco. Anim eu
            aliqua eu laboris aute sunt velit in mollit deserunt.
          </p>
          <div className="offer-box">
            <p className="text-box">WHAT WE OFFER</p>
            <div className="offer-list">
              <p>
                <i class="fa-solid fa-circle-notch"></i>Anim nulla laboris
              </p>
              <p>
                <i class="fa-solid fa-circle-notch"></i>Anim nulla laboris
              </p>
              <p>
                <i class="fa-solid fa-circle-notch"></i>Anim nulla laboris
              </p>
              <p>
                <i class="fa-solid fa-circle-notch"></i>Anim nulla laboris
              </p>
              <p>
                <i class="fa-solid fa-circle-notch"></i>Anim nulla laboris
              </p>
            </div>
          </div>
        </div>
        <div className="input-container">
          <h3>Personal Details</h3>
          <label for="name" className="name-label">
            Name
          </label>
          <input
            className="user-input"
            type="text"
            id="name"
            placeholder="Saniyo Joseph"
          />
          <label for="phone" className="phone-label">
            Mobile Number
          </label>
          <input
            className="user-input"
            type="text"
            id="phone"
            placeholder="827735748"
          />
          <select value="Select City" className="user-input">
            <option>Bengaluru</option>
            <option>Mumbai</option>
            <option>Delhi</option>
            <option>Kolkata</option>
          </select>
          <button className="submit-btn">CONTINUE</button>
        </div>
      </section>
      <section className="middle-container">
        <div className="middle-text">
          <div className="middle-first-text">
            <h2>Minim velit labore consectetur ad est reprehenderit elit.</h2>
            <p>
              Non occaecat elit enim pariatur Lorem magna. Aute est sint commodo
              fugiat. Nisi magna sit Lorem reprehenderit nostrud nisi officia.
              Deserunt veniam voluptate consequat occaecat deserunt.
            </p>
          </div>
          <div className="middle-last-text">
            <h3>Dolor ad minim.</h3>
            <p>
              Labore velit et voluptate proident officia labore occaecat
              cupidatat in ullamco velit sint in anim. Qui nostrud labore minim
              dolor culpa. Officia eu est voluptate sit esse adipisicing quis
              est cupidatat irure do culpa laborum elit.
            </p>
            <p>
              Voluptate duis sunt consequat labore dolor commodo aliquip
              deserunt sint anim. Irure reprehenderit non qui proident
              incididunt occaecat est dolor pariatur. Labore laborum tempor
              commodo est. In dolore enim cillum nostrud.
            </p>
          </div>
        </div>
        <div>
          <img
            src={`${process.env.PUBLIC_URL}/images/Activa.png`}
            className="bike-img"
            alt="Honda Activa"
          />
        </div>
      </section>
      <section className="last-container">
        <h3>Cupidatat ullamco occaecat in Lorem.</h3>
        <p>
          Lorem deserunt aliqua sint mollit velit exercitation laboris eu non
          tempor veniam mollit exercitation occaecat.
        </p>
        <div className="last-lists-container">
          <div className="last-lists">
            <div className="icon-list">
              <TbCircle1 size={56} />
              <span>Lorem ipsum dolor</span>
            </div>
            <div className="icon-list">
              <TbCircle2 size={56} />
              <span>Lorem ipsum dolor</span>
            </div>
            <div className="icon-list">
              <TbCircle3 size={56} />
              <span>Lorem ipsum dolor</span>
            </div>
          </div>
          <div className="last-lists">
            <div className="icon-list">
              <TbCircle4 size={56} />
              <span>Lorem ipsum dolor</span>
            </div>
            <div className="icon-list">
              <TbCircle5 size={56} />
              <span>Lorem ipsum dolor</span>
            </div>
            <div className="icon-list">
              <TbCircle6 size={56} />
              <span>Lorem ipsum dolor</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
