import React from "react";
import Lottie from "react-lottie";

interface LottieProps {
  animationData: object;
  height?: number;
  width?: number;
}

function LottieDisplayer({
  animationData,
  height = 400,
  width = 400,
}: LottieProps) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, // 구조 분해 할당을 사용하여 props를 받았기 때문에, 이렇게 사용할 수 있습니다.
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={height} width={width} />;
}

export default LottieDisplayer;
