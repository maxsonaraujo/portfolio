import { Portifolio } from "@/components/templates/portfolio";
import { DICTIONARIES, getDictionaries } from "@/lib/dictionary";
import { Metadata } from "next";

export const metadata = ((): Metadata => {
  const dictionary = getDictionaries(DICTIONARIES.default);
  const profile = dictionary.profile;
  const portifolio = dictionary.portifolio;

  return {
    title: profile.firstName + " " + profile.lastName + " - " + portifolio,
    description: dictionary.about.aboutMe
  }
})();

export default async function Home({ params }: { params: { lang: string } }) {

  const lang = params.lang;

  const dictionary = getDictionaries(lang);

  return (<>
    <Portifolio dictionary={dictionary} />
  </>
  );
}
