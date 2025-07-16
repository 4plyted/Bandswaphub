import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function RegisterPage() {
  const [bandName, setBandName] = useState("");
  const [genre, setGenre] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered ${bandName} from ${location} (${genre})`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Register Your Band</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <input
          type="text"
          placeholder="Band Name"
          value={bandName}
          onChange={(e) => setBandName(e.target.value)}
          className="w-full px-4 py-2 rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full px-4 py-2 rounded text-black"
          required
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-4 py-2 rounded text-black"
          required
        />
        <Button type="submit" className="w-full">Register</Button>
      </form>
    </div>
  );
}
