import React, { useEffect, useState } from "react";
import Loader2 from "./Loader";
import Navbar from "./Navbar";
import Countdown from "./countdown";

const Home = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <Loader2 />;
  }

  return (
    <div>
      <Navbar />
      <Countdown />
    </div>
  );
};

export default Home;
