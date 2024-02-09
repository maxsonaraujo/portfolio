import { Portifolio } from "@/components/templates/portfolio";
import { getDictionaries } from "@/lib/dictionary";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { lang: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = params.lang

  const dictionary = getDictionaries(lang);
  const profile = dictionary.profile;
  const portifolio = dictionary.portifolio;

  return {
    title: profile.firstName + " " + profile.lastName + " - " + portifolio,
    description: dictionary.about.aboutMe,
    openGraph: {
      title: profile.firstName + " " + profile.lastName + " - " + portifolio,
      description: dictionary.about.aboutMe,
      images: [dictionary.profile.avatar]
    }

  }

}

export default async function Home({ params }: Props) {

  const lang = params.lang;

  const dictionary = getDictionaries(lang);

  return (<>
    <Portifolio dictionary={dictionary} />
  </>
  );
}
