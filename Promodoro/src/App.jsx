import "./App.css";
import Loading from "./pages/Loading/Loading.jsx";
import Home from "./pages/Home/Home.jsx";
import { useEffect, useState } from "react";
import { ApplicationContextProvider } from "./services/context_providers/ApplicationContextProvider.jsx";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // TODO: Fetch data like user info, auth status, etc once backend is implemented
      setTimeout(() => setLoading(false), 1000);
    };

    fetchData();
  }, []);

  return (
    <div className="app-container">
      {loading ? (
        <Loading />
      ) : (
        <ApplicationContextProvider>
          <Home />
        </ApplicationContextProvider>
      )}
    </div>
  );
}

export default App;
