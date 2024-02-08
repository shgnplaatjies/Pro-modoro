import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import Pomodoro from "../../components/Pomodoro/Pomodoro.jsx";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="pomodoro-section">
        <AppHeader />
        <Pomodoro />
      </section>
      <section className="info-section">
        <header>A cool Pomodoro Tool for Pro React developers.</header>
        <p>A cool Pomodoro Tool for Pro React developers.</p>
        {/* <About />
        <Instructions />
        <Features />
        <DownloadCTA />
        <Footer /> */}
      </section>
    </div>
  );
}

export default Home;
