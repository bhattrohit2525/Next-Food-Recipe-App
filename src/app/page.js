
import Link from "next/link"; 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-purple-500 to-pink-500">
     <div>
      <h1 className="font-bold mb-5"> Welcome to Food Recipe App</h1>
      <Link className="mt-5" href={"/recipe-list"}>Explore Recipes</Link>
    </div>
    </main>
  );
}
