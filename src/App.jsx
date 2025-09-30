// File: App.jsx located in src folder
import "./App.css"; /*importing stylesheet*/
function App() {
  return (
    <div>
      <div>
        {/*outer-container*/}
        <div
          style={{ width: "107px", height: "142px", border: "1px solid black" }}
        >
          {/*image-container*/}
          <img
            src="../src/assets/images/react_logo.png"
            alt="React Logo"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
