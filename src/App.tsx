import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Drawer } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const App = ({ basePath }: { basePath: string }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => () => console.log("unmouting"), []);

  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Page: {slug}</h1>
      <button onClick={() => navigate(`${basePath}/orga`)}>
        go to org page
      </button>
      <button onClick={() => navigate(`${basePath}/pratitionner`)}>
        go to pratitionner page
      </button>
      <button onClick={() => navigate("/other-page")}>go to new page</button>
      <button onClick={() => navigate(-1)}>back</button>
      <Button onClick={() => setOpen(true)}>open drawer</Button>
      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <button onClick={() => navigate(`${basePath}/orga`)}>
          go to org page
        </button>
        <button onClick={() => navigate(`${basePath}/pratitionner`)}>
          go to pratitionner page
        </button>
        <button onClick={() => navigate("/other-page")}>go to new page</button>
      </Drawer>
    </>
  );
};

export default App;

