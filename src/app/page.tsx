import Link from "next/link";

export default function HomePage() {
	return (
		<main className="container mx-auto mt-8 px-5">
			<section className="hero">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-primary mb-4">
              Welcome to Dejagifts
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find the best products at the best prices.
            </p>
            <Link
              href="/products"
              className="bg-primary hover:bg-gray-800 rounded-md px-4 py-2 text-foreground"
            >
              Shop Now
            </Link>
          </div>
        </section>
		</main>
	);
}
