import { useState } from "react";

export default function RegisterPage() {
  const [bandName, setBandName] = useState("");
  const [genre, setGenre] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Registered ${bandName} from ${location} (${genre})`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Register Your Band</h1>
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
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-600 text-white rounded"
        >
          Register
        </button>
      </form>
    </div>
  );
}
