import Image from "next/image";
import { Inter } from "next/font/google";

import LeftSideContent from "./components/DisplayLeftside/LeftSideContent";
import RightSideContent from "./components/DisplayRightSide/RightSideContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="display">
        <div className="display-left">
          <LeftSideContent />
        </div>
        <div className="display-right">
          <RightSideContent />
        </div>
      </div>
    </main>
  );
}
