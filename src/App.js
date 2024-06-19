import { useEffect, useState } from "react";
import Landingpage from "./components/Landingpage";
import Loadingpage from "./components/Loadingpage";

function App() {
  const [theme, setTheme] = useState("dark");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(()=>setLoading(false), 2000);
    return ()=> clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("theme changing...");
  };

  return (
    <div className={`App ${theme} `}>
      {loading ? (
        <Loadingpage />
      ) : (
        <Landingpage theme={theme} setTheme={toggleTheme} />
      )}
    </div>
  );
}

export default App;
