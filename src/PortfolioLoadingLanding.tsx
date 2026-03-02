export default function PortfolioLoadingLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">

        <section className="grid md:grid-cols-2 items-center gap-12 mb-24">

          <div>
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-purple-500">
              Juliano Mabiala
            </h1>

            <h2 className="text-2xl text-gray-300 mb-6">
              Desenvolvedor Frontend & Criador de Soluções Digitais
            </h2>

            <p className="text-gray-400 mb-8 leading-relaxed max-w-xl">
              Especializado na criação de plataformas modernas,
              sistemas administrativos e aplicações escaláveis utilizando
              React, TypeScript e Firebase.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/244950377204"
                target="_blank"
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
              >
                WhatsApp
              </a>

              <a
                href="https://www.linkedin.com/in/juliano-mabiala-a0562824a"
                target="_blank"
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
              >
                LinkedIn
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl"
              >
                Facebook
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-full bg-purple-700/30 flex items-center justify-center text-6xl">
              👨🏾‍💻
            </div>
          </div>

        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-purple-400 mb-6">
            Sobre Mim
          </h2>

          <p className="text-gray-300 max-w-4xl leading-relaxed">
            Sou desenvolvedor focado na construção de sistemas digitais completos,
            desde a interface até integração com banco de dados em tempo real.
            Tenho experiência com React, Firebase e arquitetura moderna de aplicações.
            Meu foco é código limpo, organização e criação de produtos funcionais.
          </p>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-bold text-purple-400 mb-8">
            Tecnologias
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "React",
              "TypeScript",
              "Vite",
              "Firebase",
              "TailwindCSS",
              "Git & GitHub"
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-black/40 border border-purple-700 rounded-2xl p-6 text-center"
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        <footer className="text-center text-gray-500 mt-16">
          © {new Date().getFullYear()} Juliano Mabiala
        </footer>

      </div>
    </div>
  );
}