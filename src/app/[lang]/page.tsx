import { Portifolio } from "@/components/templates/portfolio";
import { getDictionaries } from "@/lib/dictionary";
import Head from "next/head";

export default async function Home({ params }: { params: { lang: string } }) {

  const lang = params.lang;

  const dictionary = getDictionaries(lang);

  return (<>
    <Head>
      <title>Maxson Araújo - Portfolio</title>
      <meta name="description" content="Sou um Analista e Desenvolvedor de Sistemas Full Stack com ênfase em Typescript, Next.js e React Native, também proficientes em Python. Destaco minha experiência na criação de automações de processos bancários para Corbans, atuando em projetos desafiadores para diversos bancos. Além disso, sou o principal responsável pelo desenvolvimento do aplicativo Smart Signature, disponível na App Store e Play Store. Minha abordagem centrada no aprendizado fácil, adaptação a mudanças e busca constante por desenvolvimento profissional define meu perfil. Estou aberto a oportunidades que ofereçam crescimento e desafios estimulantes." />
      {/* Add more meta tags as needed */}

    </Head>
    <Portifolio dictionary={dictionary} />
  </>
  );
}
