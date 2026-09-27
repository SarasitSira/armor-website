import { ArrowLink } from '../components/Links';

export default function NotFound() {

  return (
    <section className="px-5 pb-40 pt-32 text-center md:pt-44">
      <h1 className="text-5xl font-semibold tracking-[-0.035em] md:text-7xl">Page not found.</h1>
      <p className="mt-6 text-lg text-graphite md:text-xl">The page you’re looking for doesn’t exist.</p>
      <ArrowLink to="/" className="mt-8">Back to home</ArrowLink>
    </section>
  );
}
