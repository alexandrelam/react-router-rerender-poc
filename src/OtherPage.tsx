import { useNavigate } from "react-router-dom";

const OtherPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Other page</h1>
      <button onClick={() => navigate(-1)}>back</button>
    </div>
  );
};

export default OtherPage;
