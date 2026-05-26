"use client";

import { SignInButton } from "@clerk/nextjs";

export default function SignIn() {
    return (
        <div>
            <SignInButton>
              <button className="font-semibold text-gray-600 hover:text-black transition-colors duration-200">
                Login
              </button>
            </SignInButton>
        </div>
    )
}