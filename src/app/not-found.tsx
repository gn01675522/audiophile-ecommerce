import Link from "next/link";

const NotFound = () => {
  return (
    <section className="flex flex-col w-full h-screen text-center p-10 justify-center items-center">
      <h1 className="text-3xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-6">
        Oops! The page you are looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="text-blue-500 underline">
        Go back home
      </Link>
    </section>
  );
};

export default NotFound;
