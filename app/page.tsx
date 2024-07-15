"use client";

import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import { auth } from "@/firebase";
import { signOut } from "firebase/auth";
import Link from "next/link";

export default function Home() {
  const { user } = useAuth();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <main className="text-center">
      <h1 className="font-bold text-center mb-5">
        Login Using One-Time Password Phone Authentication
      </h1>

      {user ? (
        <>
          <h2>Welcome to the App as a logged in User {user?.uid}</h2>
          <Button onClick={handleSignOut} className="mt-10">
            Sign out
          </Button>
        </>
      ) : (
        <>
          <h2>You are not logged in</h2>
          <div className="mt-10">
            <Link href="/login">
              <Button className="mr-4">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </>
      )}
    </main>
  );
}
