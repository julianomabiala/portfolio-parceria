
import { motion } from "framer-motion";

export default function PortfolioLoadingLanding() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 300);

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
          Inicializando Perfil do Desenvolvedor...
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
    <div className="min-h-screen bg-gradient-to-br from-black via-purple-950 to-black text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold mb-4 text-purple-500">
          Juliano Mabiala
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Desenvolvedor Web | Criador de Sistemas Digitais | Focado em Parcerias Estratégicas
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-black/40 border border-purple-700 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-3">
              Sobre Mim
            </h2>
            <p className="text-gray-300">
              Desenvolvedor focado em criar soluções digitais escaláveis e estratégicas. Experiência com React, Firebase e sistemas administrativos completos.
            </p>
          </div>

          <div className="bg-black/40 border border-purple-700 rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-purple-400 mb-3">
              O Que Posso Agregar
            </h2>
            <ul className="text-gray-300 space-y-2">
              <li>✔️ Desenvolvimento Frontend moderno</li>
              <li>✔️ Estruturação de produtos digitais</li>
              <li>✔️ Integração com Firebase</li>
              <li>✔️ Mentalidade de crescimento e equipa</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">
            Projetos Estratégicos
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "JutemaGo - Plataforma de Criadores",
              "JL Infinity SPA - Website Empresarial",
              "Sistema de Previsão Aviador"
            ].map((project, index) => (
              <div
                key={index}
                className="bg-black/40 border border-purple-700 rounded-2xl shadow-lg p-6"
              >
                <p className="text-gray-300">{project}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-2xl text-lg shadow-lg"
          >
            🚀 Vamos Construir Algo Grande
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
