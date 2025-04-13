import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";
import { products } from "~/server/db/schema";

  async function getProducts(): Promise<typeof products.$inferSelect[]> {
	return db.select().from(products).limit(4);
}

export default async function HomePage() {
	const featuredProducts = await getProducts();
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
        <section className="featured-products mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded shadow p-4">
                <Image
                  src={product.imageUrl || '/placeholder.jpg'}
                  alt={product.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover mb-2 rounded"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="mt-2 inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </section>
		</main>
	);
}
