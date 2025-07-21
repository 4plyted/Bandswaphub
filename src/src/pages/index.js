import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-5xl font-bold mb-4">🎸 Welcome to BandSwapHub</h1>
      <p className="text-xl mb-8 max-w-2xl">
        A global platform for musicians to swap gigs, grow audiences, and connect by genre and location.
      </p>
      <div className="space-y-4">
        <Button onClick={() => navigate("/register")}>Register Your Band</Button>
        <Button variant="outline" onClick={() => navigate("/app")}>Enter App</Button>
      </div>
    </div>
  );
}
