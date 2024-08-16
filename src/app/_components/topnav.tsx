import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
import { SimpleUploadButton } from "./simple-upload-button";
import Link from 'next/link'

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
      <Link href="/">Gallery</Link>
      <div className="flex flex-row gap-5 content-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
