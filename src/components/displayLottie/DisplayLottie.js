import React, { Suspense, useState, useEffect } from "react";
import Lottie from "lottie-react";
import Loading from "../../containers/loading/Loading";

const DisplayLottie = ({ animationData }) => {
  const [lottieData, setLottieData] = useState(
    typeof animationData === "object" ? animationData : null
  );

  useEffect(() => {
    if (typeof animationData === "string") {
      fetch(animationData)
        .then((res) => res.json())
        .then((data) => setLottieData(data))
        .catch((err) => console.error("Lottie Load Error:", err));
    } else {
      setLottieData(animationData);
    }
  }, [animationData]);

  if (!lottieData) return <Loading />;

  return (
    <Suspense fallback={<Loading />}>
      <Lottie animationData={lottieData} loop={true} autoplay={true} />
    </Suspense>
  );
};

export default DisplayLottie;
