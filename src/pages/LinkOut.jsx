import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { logEvent } from "../utils/analytics";

export default function LinkOut() {
  const [searchParams] = useSearchParams();
  const url = searchParams.get("url");

  useEffect(() => {
    if (url) {
      logEvent("external_redirect", { destination: url });
      // Give GA time to record before redirect
      setTimeout(() => {
        window.location.href = url;
      }, 400);
    }
  }, [url]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-950 text-white">
      <h1 className="text-2xl font-semibold mb-4">Redirecting...</h1>
      <p className="text-gray-400 text-sm">Taking you to the mission resource.</p>
    </div>
  );
}

