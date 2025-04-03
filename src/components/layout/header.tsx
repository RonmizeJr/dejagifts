import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
	return (
		<header className="bg-background shadow">
			<div className="container mx-auto py-4 px-5 flex items-center justify-between">
				<Link href="/" className="text-2xl font-bold text-primary">
            Dejagifts
          </Link>
          <nav className="space-x-4">
            <Link href="/products" className="text-foreground hover:text-gray-800">
              Products
            </Link>
            <Link href="/categories" className="text-foreground hover:text-gray-800">
              Categories
            </Link>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in" className="bg-primary hover:bg-gray-800 rounded-md px-4 py-2 text-foreground">
                Sign In
              </Link>
              <Link href="/sign-up" className="bg-primary hover:bg-gray-800 rounded-md px-4 py-2 text-foreground">
                Sign Up
              </Link>
					</SignedOut>
				</nav>
			</div>
		</header>
	);
}
