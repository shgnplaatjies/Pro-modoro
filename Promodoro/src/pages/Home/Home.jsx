import AppHeader from "../../components/AppHeader/AppHeader.jsx";
import Pomodoro from "../../components/Pomodoro/Pomodoro.jsx";
import { useCurrentPomodoroMode } from "../../services/hooks/useApplicationContext.js";
import "./Home.css";

function Home() {
  const currentPomodoroMode = useCurrentPomodoroMode();

  return (
    <div className="home-screen">
      <AppHeader />
      <section className="pomodoro-section">
        <Pomodoro mode={currentPomodoroMode} />
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
