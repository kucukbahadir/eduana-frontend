import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const Game = () => {
  const { unityProvider, sendMessage, isLoaded } = useUnityContext({
    loaderUrl: "builds/clone_game/BlockGame.loader.js",
    dataUrl: "builds/clone_game/BlockGame.data",
    frameworkUrl: "builds/clone_game/BlockGame.framework.js",
    codeUrl: "builds/clone_game/BlockGame.wasm",
  });

  function handleGameStart() {
    sendMessage(
      "EduanaManager",
      "GiveStudentId",
      import.meta.env.VITE_STUDENT_JWT_TOKEN
    );
  }

  useEffect(() => {
    if (isLoaded) handleGameStart();
  }, [isLoaded]);

  return (
    <div className="flex flex-col w-full max-w-7xl mx-auto mt-4 rounded-xl overflow-clip">
      <Unity unityProvider={unityProvider} />
    </div>
  );
};

export default Game;
