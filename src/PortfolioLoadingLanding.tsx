import { useEffect, useState } from "react";


export default function PortfolioLoadingLanding() {
  const [loading, setLoading] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev: number) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-purple-950 to-black text-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-6 text-center"
        >
          Inicializando Sistema...
        </motion.h1>

        <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-purple-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>

        <p className="mt-4 text-sm text-gray-400">{progress}% Carregado</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {/* HERO */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-purple-500">
            Juliano Mabiala
          </h1>
          <p className="text-xl text-gray-300 mb-6">
            Desenvolvedor Frontend & Criador de Soluções Digitais
          </p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">
            Especializado na construção de plataformas modernas, escaláveis e focadas em performance.
            Transformo ideias em sistemas funcionais utilizando tecnologias atuais e arquitetura bem estruturada.
          </p>
        </section>

        {/* SOBRE */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Sobre Mim</h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl">
            Sou desenvolvedor focado na criação de sistemas digitais completos,
            desde a interface até a integração com banco de dados em tempo real.
            Trabalho com React, TypeScript, Firebase e arquitetura moderna de aplicações.
            Tenho experiência desenvolvendo plataformas administrativas,
            sistemas de análise e websites empresariais com foco em desempenho e organização.
          </p>
        </section>

        {/* TECNOLOGIAS */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Tecnologias & Stack</h2>
          <div className="grid md:grid-cols-3 gap-6 text-gray-300">
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">React</div>
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">TypeScript</div>
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">Vite</div>
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">Firebase</div>
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">Firestore</div>
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">TailwindCSS</div>
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">Git & GitHub</div>
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">Deploy e CI/CD</div>
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">Integrações API</div>
          </div>
        </section>

        {/* PROJETOS */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Projetos Desenvolvidos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">JutemaGo</h3>
              <p className="text-gray-400">
                Plataforma digital para criadores de conteúdo com painel administrativo,
                autenticação de usuários e estrutura escalável utilizando Firebase.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">JL Infinity SPA</h3>
              <p className="text-gray-400">
                Website empresarial moderno com identidade visual forte e foco em presença digital
                profissional e conversão.
              </p>
            </div>

            <div className="bg-black/40 border border-purple-700 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-purple-300 mb-3">Sistema de Análise Aviador</h3>
              <p className="text-gray-400">
                Sistema baseado em padrões estatísticos para análise e projeção de resultados,
                com estrutura organizada e lógica de processamento eficiente.
              </p>
            </div>
          </div>
        </section>

        {/* VISÃO */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Visão Profissional</h2>
          <p className="text-gray-300 leading-relaxed max-w-4xl">
            Meu foco é construir produtos digitais sólidos, com código limpo,
            arquitetura escalável e experiência de usuário bem definida.
            Busco evolução constante, organização estrutural e soluções
            que realmente funcionam no mundo real.
          </p>
        </section>

        {/* CONTATO */}
        <section className="text-center mt-16">
          <a
            href="mailto:seuemail@email.com"
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl text-lg shadow-lg inline-block"
          >
            Entrar em Contato
          </a>
        </section>
      </motion.div>
    </div>
  );
}
