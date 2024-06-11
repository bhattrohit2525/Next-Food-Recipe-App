import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-r from-purple-500 to-pink-500">
      <h1>This page can not be found.</h1>
      <Link href={"/"}>Go to home</Link>
    </div>
  );
}