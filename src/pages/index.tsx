import Header from "@/components/header";
import HomePage from "@/components/homepage";
import { geistMono, geistSans } from "@/utils/fonts";

export default function Home() {
  return (
    <div className={`${geistSans.className} ${geistMono.className} space-y-8`}>
      <Header />
      <div className="p-6">
      <HomePage />
      </div>
    </div>
  );
}
