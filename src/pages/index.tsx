import Image from "next/image";
import { Inter } from "next/font/google";
import LeftSideContent from "./components/LeftsideHeader/LeftSideContent";
import RightSideContent from "./components/RightSideContent";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="display-left">
        <LeftSideContent />
      </div>
      <div className="display-right">
        <RightSideContent />
      </div>
    </main>
  );
}
