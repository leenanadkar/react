// src/App.js
import Header from "./components/Header";
import Profile from "./components/Profile";
import Footer from "./components/Footer";

function App() {
  const users = [
    { name: "Leena", age: 30, profession: "Developer" },
    { name: "John", age: 25, profession: "Designer" },
    { name: "Sophia", age: 28, profession: "Project Manager" },
  ];

  return (
    <div>
      <Header />
      <main style={styles.main}>
        {users.map((user, index) => (
          <Profile
            key={index}
            name={user.name}
            age={user.age}
            profession={user.profession}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
}

const styles = {
  main: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default App;
