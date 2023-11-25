import { useEffect } from "react";
import "./App.css";
import { BlogView } from "./components/blog";
import { useUiStore } from "./components/hooks/ui/useUiStore";

function App() {
  const { changeModeConection } = useUiStore();
  const checkOnlineStatus = () => {
    if (navigator.onLine) {
      changeModeConection(true);
    } else {
      changeModeConection(false);
    }
  };

  useEffect(() => {
    checkOnlineStatus();
    const intervalId = setInterval(checkOnlineStatus, 3000);
    return () => clearInterval(intervalId); /* eslint-disable-next-line */
  }, []);
  return <BlogView />;
}

export default App;
