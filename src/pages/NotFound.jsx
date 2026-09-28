import { ArrowLink } from '../components/Links';
import { useT } from '../i18n';

export default function NotFound() {
  const t = useT();

  return (
    <section className="px-5 pb-40 pt-32 text-center md:pt-44">
      <h1 className="text-4xl font-medium tracking-[-0.035em] md:text-6xl">{t.notFound.title}</h1>
      <p className="mt-6 text-lg text-graphite md:text-xl">{t.notFound.body}</p>
      <ArrowLink to="/" className="mt-8">{t.notFound.back}</ArrowLink>
    </section>
  );
}
