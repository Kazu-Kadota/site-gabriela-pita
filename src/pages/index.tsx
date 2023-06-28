import Image from "next/image";
import {
  Accordion,
  Container,
  ImageCard,
  Info,
  ProfessionalInfo,
  TitledPhrases,
  Button,
} from "@/components";

export default function Home() {
  return (
    <>
      <header className="pt-8 pb-8 lg:pb-6 px-4 md:px-5">
        <Container className="flex flex-col items-center">
          <h1 className="-mx-3 md:mx-0 md:px-8">
            <Image
              src="/home-title.svg"
              alt="DOSES DE AMOR PRÓPRIO"
              priority
              width={1088}
              height={80}
            />
            <span className="sr-only">DOSES DE AMOR PRÓPRIO</span>
          </h1>
          <h2 className="text-black mt-5 lg:mt-9 font-bold text-lg sm:text-xl lg:text-2xl xl:text-2.5xl text-center">
            O <span className="text-primary">impulso</span> que você precisa
            para se tornar a{" "}
            <span className="text-primary">líder da própria vida</span>
          </h2>
          <Button className="mt-5">
            QUERO RECEBER UMA DOSE DE AMOR
            <br />
            PRÓPRIO
          </Button>
        </Container>
      </header>
      <main>
        <section className="relative py-10 lg:pt-5 lg:pb-6 px-4 md:px-5 lg:px-8">
          <Image
            src="/bg-woman.jpg"
            alt="DOSES DE AMOR PRÓPRIO"
            quality={100}
            fill
            priority
            className="object-cover object-[80%] sm:object-right"
          />
          <Container className="flex lg:border-l-[3px] lg:pl-6 border-primary lg:flex-row flex-col text-center lg:text-left relative gap-7 lg:gap-12">
            <TitledPhrases
              title="SE VOCÊ SE SENTE"
              phrases={[
                "Insegura;",
                "Cansada de ter vergonha de si mesma;",
                "Sem autoestima;",
                "Insuficiente;",
                "Incapaz de evoluir profissionalmente;",
                "Presa num ciclo de procrastinação;",
                "Uma farsa;",
              ]}
            />
            <TitledPhrases
              title="OU ATÉ MESMO"
              phrases={[
                "Acredita ser dependente emocional de outras\npessoas;",
                "Se julga e se critica o tempo inteiro;",
                "Não consegue encontrar relacionamentos\nsaudáveis;",
                "Desconta as emoções na comida;",
                "Está cansada de ter que fingir ser algo que\nnão é.",
              ]}
            />
          </Container>
        </section>
        <section className="bg-primary pb-10 pt-8 px-4 md:px-5">
          <Container size="6xl">
            <h3 className="text-white font-bold text-2xl sm:text-3xl md:text-4xl/snug xl:text-4.5xl leading-snug text-center">
              O Doses de Amor Próprio foi feito especialmente para{" "}
              <span className="font-extrabold">você!</span>
            </h3>
            <Button variant="accent" className="mx-auto mt-5 md:min-w-[25rem]">
              QUERO GARANTIR MINHA VAGA
            </Button>
          </Container>
        </section>
        <section className="relative pt-8 pb-10 lg:pt-18 lg:pb-32 px-4 md:px-5">
          <Image
            src="/bg-encounter.jpg"
            alt="Serão 2 meses de encontros semanais ao vivo"
            quality={100}
            fill
            className="object-cover object-top"
          />
          <h3 className="text-primary mb-6 max-w-3xl mx-auto md:mb-10 relative text-2.5xl sm:text-4xl md:text-4.5xl xl:text-[2.9rem] xl:leading-[1.1] text-center">
            Serão{" "}
            <span className="font-bold">
              2 meses de encontros semanais ao vivo,
            </span>{" "}
            além de
          </h3>
          <Container
            className="relative flex flex-col gap-5 sm:gap-7"
            size="2xl"
          >
            <Info text="Grupo de whatsapp para compartilhar sua evolução" />
            <Info text="4 bônus com profissionais que irão te impulsionar ainda mais " />
            <Info text="Material complementar" />
            <Info text="Acesso de 1 ano às gravações" />
          </Container>
        </section>
        <section className="relative py-9 lg:py-14 px-4 md:px-5">
          <Image
            src="/bg-light-gray.jpg"
            alt="Conheça cada uma das Doses:"
            fill
            className="opacity-80 z-0"
          />
          <div className="bg-white/30 absolute inset-0 z-10" />
          <h3 className="text-primary relative z-20 text-center font-bold mb-6 md:mb-10 text-2xl sm:text-3.5xl lg:text-4xl xl:text-4.5xl">
            Conheça cada uma das Doses:
          </h3>
          <Container className="relative z-20" size="7xl2">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6 gap-x-12 xl:gap-x-16 2xl:gap-x-20 justify-between">
              <ImageCard
                imageSrc="/card-image-1.jpg"
                title="Dose 1:"
                description="Por que o autoconhecimento é a chave de todos os outros “autos”"
              />
              <ImageCard
                imageSrc="/card-image-2.jpg"
                title="Dose 2:"
                description="A raiz da baixa autoestima"
              />
              <ImageCard
                imageSrc="/card-image-3.jpg"
                title="Dose 3:"
                description="O dilema entre me acolher ou passar pano para mim mesma"
              />
              <ImageCard
                imageSrc="/card-image-4.jpg"
                title="Dose 4:"
                description="Sou insegura, e agora?"
              />
              <ImageCard
                imageSrc="/card-image-5.jpg"
                title="Dose 5:"
                description="O fim da guerra contra o espelho"
              />
              <ImageCard
                imageSrc="/card-image-6.jpg"
                title="Dose 6:"
                description="Como vou ser autêntica se não tenho nada de especial?"
              />
              <ImageCard
                imageSrc="/card-image-7.jpg"
                title="Dose 7:"
                description="Eu não nasci para ser metade de ninguém"
              />
              <ImageCard
                imageSrc="/card-image-8.jpg"
                title="Dose 8:"
                description="A liberdade de ser você mesma"
              />
            </div>
          </Container>
        </section>
        <section className="bg-accent p-5">
          <h5 className="text-primary max-w-[70rem] xl:max-w-[78rem] mx-auto text-base sm:text-xl md:text-1.5xl lg:text-2xl xl:text-2.5xl/[1.4] text-center">
            Ser líder da própria vida significa saber todos os pilares da nossa
            vida se complementam. Por isso, você terá outras 4 profissionais
            para te impulsionar ainda mais:
          </h5>
        </section>
        <section className="py-10 md:py-16 lg:pb-24 px-4 md:px-5">
          <Container
            className="flex flex-col gap-12 md:gap-0 relative"
            size="6xl"
          >
            <ProfessionalInfo
              imageSrc="/juliana-lemos.jpg"
              title="Dose Extra 1"
              name="Juliana Lemos"
              occupation="Psicóloga"
              contentTitle="Além do Peso: regulação emocional e emagrecimento"
              contentDescription="Entenda porque as dietas milagrosas e os shakes não vão trazer resultados duradouros"
            />
            <ProfessionalInfo
              imageSrc="/leticia-ruba.jpg"
              title="Dose Extra 2"
              name="Letícia Ruba"
              occupation="Nutricionista"
              contentTitle="Descomplicando a Dieta"
              contentDescription="Comer saudável não é sinônimo de comer só frutas e salada"
              reverse
            />
            <ProfessionalInfo
              imageSrc="/eliana-pita.jpg"
              title="Dose Extra 3"
              name="Eliana Pita"
              occupation="Consultora de RH, Coach de Carreira e Criadora do Método LEV"
              contentTitle="Método LEV"
              contentDescription="Um encontro criado à partir das necessidades individuais do grupo"
            />
            <ProfessionalInfo
              imageSrc="/leticia-ruba.jpg"
              title="Dose Extra 4"
              name="Juliana Oliveira"
              occupation="Fisioterapeuta"
              contentTitle="Chega de Desculpas: exercícios que cabem na sua rotina"
              contentDescription="Ativação comportamental na palma da sua mão"
              reverse
            />
            <Button
              className="lg:absolute mx-auto mt-3 md:mt-12 md:min-w-[30rem] bottom-0 left-[10%] xl:left-[12%]"
              size="3xl"
              variant="primary2"
            >
              NÃO VOU FICAR DE FORA!
            </Button>
          </Container>
        </section>
        <section className="p-4 relative py-10 md:py-16 bg-primary">
          <Image
            src="/bg-red.png"
            alt="Esse é o sinal que você queria para investir em você mesma"
            fill
          />
          <Container className="relative" size="2xl">
            <h5 className="text-center text-white text-2xl/normal sm:text-3xl/normal lg:text-4xl/normal font-bold">
              Esse é o sinal que você queria para investir em você mesma
            </h5>
            <h4 className="flex mt-10 mb-4 sm:mb-8 flex-col font-light text-white text-base leading-none">
              <span className="self-start sm:-mb-2 sm:-ml-1 md:ml-7 lg:-ml-1">
                Por apenas 12x de
              </span>
              <span className="self-center font-bold text-6xl/tight sm:text-8xl lg:text-8.5xl">
                R$ 87,83
              </span>
              <span className="self-end md:pr-8">ou R$ 880,00 à vista</span>
            </h4>
          </Container>
        </section>
        <section className="py-10 lg:pt-16 lg:pb-14 px-4 md:px-5">
          <Container size="3xl">
            <h5 className="text-center mb-8 text-primary text-2xl sm:text-3xl md:text-4xl font-bold">
              PERGUNTAS FREQUENTES
            </h5>
            <Accordion
              items={[
                {
                  title: "OS ENCONTROS TEM QUANTO TEMPO DE DURAÇÃO?",
                  content:
                    "Os encontros acontecerão via Google Meet e terão 2 horas de duração.",
                },
                {
                  title: "E SE EU NÃO CONSEGUIR PARTICIPAR AO VIVO?",
                  content:
                    "Todas os encontros (inclusive os bônus) ficarão gravados. Você terá acesso ao conteúdo por 1 ano.",
                },
                {
                  title: "EM QUE DIAS ACONTECEM OS ENCONTROS?",
                  content:
                    "Os encontros acontecerão todas as Quartas-Feiras à partir do dia 12/07, às 20h00, e terá duração de 2 meses. Os encontros bônus serão distribuídos ao longo das semanas em que durar o grupo. O cronograma completo com as datas estão no primeiro módulo do club.",
                },
                {
                  title: "O PROGRAMA É PARA QUEM?",
                  content:
                    "O programa é voltado para mulheres jovens e adultas que buscam fortalecer a autoestima e desejam ser impulsionadas à se tornarem líderes da própria vida. É, também, para mulheres ousadas o suficiente para admitir que precisam de ajuda. ",
                },
                {
                  title:
                    "O PROGRAMA SUBSTITUI A TERAPIA? TENHO QUE ESTAR EM TERAPIA PARA PARTICIPAR?",
                  content:
                    "Não é necessário estar em terapia para participar do DAP. No entanto, ele não substitui a terapia individual.",
                },
                {
                  title: "QUEM SÃO AS PSICÓLOGAS RESPONSÁVEIS?",
                  content:
                    "Gabriela Pita (CRP 06/173801), Psicóloga e pós graduanda em Terapia Cognitivo Comportamental pelo Instituto Cognitivo, com formação em Terapia Comportamental Dialética, Psicologia Baseada em Evidências e Diagnóstico em Psicopatologia. Larissa Ruba (CRP 06/173297), Psicóloga e pós graduanda em Terapia Cognitivo Comportamental pela PUC - SP.",
                },
              ]}
            />
            <Button
              variant="success"
              size="2xl"
              className="mx-auto md:min-w-[25rem] mt-12 sm:mt-14"
            >
              QUERO ENTRAR AGORA!
            </Button>
          </Container>
        </section>
        <section className="bg-primary py-4 px-4">
          <Container
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-7"
            size="xl"
          >
            <Image
              src="/selo.svg"
              alt="Satisfação garantida ou seu dinheiro de volta"
              width={160}
              height={160}
              className="w-[7rem] sm:w-[10rem]"
            />
            <div className="text-center sm:text-left">
              <h6 className="text-white text-xl/snug sm:text-2.5xl font-bold">
                Satisfação garantida
                <br />
                ou seu dinheiro de volta
              </h6>
              <p className="text-white text-xs sm:text-sm/tight mt-2 font-light">
                Até 7 dias depois do pagamento você pode cancelar seu pedido por
                qualquer motivo e devolveremos todo o valor pago.
              </p>
            </div>
          </Container>
        </section>
        <section className="relative">
          <Image
            src="/gabi-larissa.jpg"
            alt="O impulso que você precisa para se tornar a líder da própria vida"
            width={2880}
            height={2346}
            quality={100}
            className="w-full min-h-[32rem] object-cover"
          />
          <div className="absolute inset-x-0 translate-y-2/4 md:translate-y-0 bottom-[50%] md:bottom-[18%] px-3">
            <Container>
              <h4 className="text-white text-2.5xl sm:text-4xl md:text-4.5xl lg:text-5.5xl xl:text-6.5xl !leading-[1.4] font-bold text-center">
                O impulso que você precisa para se tornar a líder da própria
                vida
              </h4>
              <Button
                variant="success"
                size="4xl"
                className="w-[20rem] md:w-[40rem] mt-20 mx-auto"
              >
                COMPRAR
              </Button>
            </Container>
          </div>
        </section>
        <section className="bg-primary py-8 px-3">
          <Container
            className="flex lg:flex-row flex-col gap-8 lg:gap-5 items-center"
            size="4xl"
          >
            <h6 className="text-white text-center lg:text-left text-1.5xl sm:text-2xl lg:flex-[1.45] font-normal">
              <span className="font-bold">Dúvidas</span> ou problemas para
              comprar?
            </h6>
            <Button variant="accent" size="xl" radius="md" className="flex-1">
              FALE COM NOSSA EQUIPE!
            </Button>
          </Container>
        </section>
      </main>
      <footer className="bg-accent py-6 md:pt-8 md:pb-12 px-6 md:px-10">
        <p className="text-xs text-black text-center font-light">
          Esse produto é comercializado através da Hotmart. A plataforma não faz
          controle editorial prévio dos produtos comercializados, tão menos
          avalia a tecnicidade e experiência daqueles que os produzem. A
          existência de um produto e sua aquisição, através plataforma, não
          podem ser consideradas como garantia de qualidade de conteúdo e
          resultado, em qualquer hipótese. Ao adquiri-lo, o comprador declara
          estar ciente dessas informações. Os termos e políticas da Hotmart
          podem ser acessados aqui, antes mesmo da conclusão da compra.
        </p>
        <p className="text-xs text-black text-center font-light mt-6">
          Copyright Meraki Psicoterapia e Desenvolvimento Pessoal 2023 - Todos
          os Direitos Reservados
        </p>
      </footer>
    </>
  );
}
