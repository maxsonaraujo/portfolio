import { Portifolio } from "@/components/templates/portfolio";
import { getDictionary, getProfile } from "@/lib/dictionary";

export default async function Home({ params }: { params: { lang: string } }) {

  const lang = params.lang;

  const dictionary = getDictionary(lang);
  const profile = getProfile();

  return (
    <Portifolio dictionary={dictionary} profile={profile} />
  );
}
