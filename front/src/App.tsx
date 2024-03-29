import { useEffect, useState } from "react";
import "./App.css";
import { useScript } from "./hooks/use-script";

function App() {
  const scriptStatus = useScript(
    "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"
  );

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const getScriptAndRun = async () => {
      requirejs.config({
        paths: {
          fetchData: "http://localhost:4000/script",
          axios: "https://cdn.jsdelivr.net/npm/axios/dist/axios.min",
        },
      });

      requirejs(["fetchData"], (mod: any) => {
        // @ts-ignore
        mod.func().then((data) => {
          setData(data);
        });
      });
    };

    if (scriptStatus === "ready") {
      getScriptAndRun();
    }
  }, [scriptStatus]);

  return (
    <>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </>
  );
}

export default App;
