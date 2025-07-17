import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-blue-900 text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold mb-4">BandSwapHub</h1>
      <p className="text-xl mb-6 max-w-2xl">
        Welcome to the global gig swapping platform for bands and solo artists. 🎸
      </p>

      <div className="space-y-4">
        <Button onClick={() => router.push("/register")}>Register Your Band</Button>
        <Button variant="outline" onClick={() => router.push("/app")}>Enter App</Button>
      </div>

      <div className="mt-16 text-sm text-gray-300">
        <p>Find and connect with compatible musicians based on genre, style, and location.</p>
        <p>BandSwapHub is free for musicians, forever.</p>
      </div>
    </div>
  );
}
