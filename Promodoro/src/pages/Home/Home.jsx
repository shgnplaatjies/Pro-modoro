import Pomodoro from "../../components/Pomodoro/Pomodoro.jsx";
import { useCurrentPomodoroMode } from "../../services/hooks/useApplicationContext.js";

function Home() {
  const currentPomodoroMode = useCurrentPomodoroMode();

  return (
    <div className="home-screen">
      <Pomodoro mode={currentPomodoroMode} />
      <div className="pomodoro-section">
        <header></header>
        {/* <About />
        <Instructions />
        <Features />
        <DownloadCTA />
        <Footer /> */}
      </div>
    </div>
  );
}

export default Home;
