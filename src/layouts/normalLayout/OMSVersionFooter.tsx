// OMSVersionFooter.tsx

import { useEffect } from "react";

const VERSION = "V-1.0";
const BUILD_DATE = "2026-05-12";
const ENVIRONMENT = "UI Template";

export default function OMSVersionFooter() {
  // Add body padding like original script
  useEffect(() => {
    const previousPadding = document.body.style.paddingBottom;

    document.body.style.paddingBottom = "28px";

    return () => {
      document.body.style.paddingBottom = previousPadding;
    };
  }, []);

  return (
    <footer
      id="oms-version-footer"
      title={`Build: ${BUILD_DATE} | Env: ${ENVIRONMENT}`}
      className="
        fixed bottom-0 left-0 right-0 z-[9000]
        h-7
        bg-[#0f1c36]
        flex items-center justify-between
        px-5
        border-t border-white/10
        text-[11px]
        tracking-[0.3px]
        text-white/55
        select-none
        pointer-events-none
        font-['Source_Sans_Pro','Roboto','Segoe_UI',sans-serif]
      "
    >
      {/* Left Section */}
      <div className="flex items-center gap-1.5">
        <span className="w-[5px] h-[5px] rounded-full bg-green-500 shrink-0" />

        <span>OMS Portal</span>

        <span className="text-white/20">|</span>

        <span className="font-bold text-white/80 tracking-[0.5px]">
          {VERSION}
        </span>

        <span className="text-white/20">|</span>

        <span>{ENVIRONMENT}</span>
      </div>

      {/* Right Section */}
      <div className="text-white/35">
        &copy; 2026 OMS (India) Limited. Build: {BUILD_DATE}
      </div>
    </footer>
  );
}