"use client";

import { useState } from "react";
import { Flame, Circle, Grid3x3, Spade, BookHeart, Calendar, Wifi, Menu, X } from "lucide-react";

export default function Home() {
  const [currentView, setCurrentView] = useState<"home" | "roulette" | "board" | "cards" | "scenarios" | "7days" | "distance">("home");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black via-red-950 to-black border-b border-red-900/30 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flame className="w-8 h-8 text-red-500" />
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
              Jogos do Desejo
            </h1>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-red-500 hover:text-red-400 transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            <NavButton onClick={() => setCurrentView("home")} active={currentView === "home"}>
              Início
            </NavButton>
          </nav>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-black/95 border-t border-red-900/30 backdrop-blur-sm">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
              <NavButton onClick={() => { setCurrentView("home"); setMenuOpen(false); }} active={currentView === "home"} fullWidth>
                Início
              </NavButton>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-12 px-4">
        {currentView === "home" && <HomeView onNavigate={setCurrentView} />}
        {currentView === "roulette" && <RouletteView onBack={() => setCurrentView("home")} />}
        {currentView === "board" && <BoardView onBack={() => setCurrentView("home")} />}
        {currentView === "cards" && <CardsView onBack={() => setCurrentView("home")} />}
        {currentView === "scenarios" && <ScenariosView onBack={() => setCurrentView("home")} />}
        {currentView === "7days" && <SevenDaysView onBack={() => setCurrentView("home")} />}
        {currentView === "distance" && <DistanceView onBack={() => setCurrentView("home")} />}
      </main>

      {/* Age Warning */}
      <div className="fixed bottom-4 right-4 bg-red-900/20 border border-red-500/30 rounded-lg px-4 py-2 text-xs text-red-300 backdrop-blur-sm">
        🔞 Conteúdo Adulto +18
      </div>
    </div>
  );
}

// Navigation Button Component
function NavButton({ 
  children, 
  onClick, 
  active, 
  fullWidth 
}: { 
  children: React.ReactNode; 
  onClick: () => void; 
  active?: boolean;
  fullWidth?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        ${fullWidth ? 'w-full' : ''}
        px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2
        ${active 
          ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg shadow-red-500/50' 
          : 'bg-red-900/20 text-red-300 hover:bg-red-900/40 border border-red-800/30'
        }
      `}
    >
      {children}
    </button>
  );
}

// Home View
function HomeView({ onNavigate }: { onNavigate: (view: any) => void }) {
  return (
    <div className="container mx-auto max-w-6xl">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
          Bem-vindos ao Prazer
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Jogos eróticos completos para casais. Do romântico ao extremo. 
          Tudo pronto para jogar - apenas escolham e divirtam-se.
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <GameCard
          icon={<Circle className="w-12 h-12" />}
          title="Roletas Eróticas"
          description="5 níveis de intensidade com 30-50 ações cada. Do leve ao extremo."
          gradient="from-pink-500 to-rose-600"
          onClick={() => onNavigate("roulette")}
        />
        
        <GameCard
          icon={<Grid3x3 className="w-12 h-12" />}
          title="Tabuleiro Erótico"
          description="60+ casas com recompensas, punições e desafios picantes."
          gradient="from-rose-600 to-red-700"
          onClick={() => onNavigate("board")}
        />
        
        <GameCard
          icon={<Spade className="w-12 h-12" />}
          title="Cartas do Pecado"
          description="120 cartas de posições em 5 níveis: Sedução, Tesão, Domínio, Entrega e Inferno."
          gradient="from-red-700 to-orange-600"
          onClick={() => onNavigate("cards")}
        />
        
        <GameCard
          icon={<BookHeart className="w-12 h-12" />}
          title="Roteiros Picantes"
          description="30 roteiros completos prontos para seguir. Românticos e extremos."
          gradient="from-orange-600 to-red-600"
          onClick={() => onNavigate("scenarios")}
        />
        
        <GameCard
          icon={<Calendar className="w-12 h-12" />}
          title="7 Dias do Fogo"
          description="3 programas de 7 dias: Leve, Quente e Inferno."
          gradient="from-red-600 to-purple-700"
          onClick={() => onNavigate("7days")}
        />
        
        <GameCard
          icon={<Wifi className="w-12 h-12" />}
          title="Jogo à Distância"
          description="Desafios picantes para casais que estão longe. Conectem-se virtualmente."
          gradient="from-purple-700 to-pink-600"
          onClick={() => onNavigate("distance")}
        />
      </div>

      {/* Warning */}
      <div className="mt-12 p-6 bg-red-900/10 border border-red-800/30 rounded-xl text-center">
        <p className="text-red-300 text-sm md:text-base">
          ⚠️ Este app contém conteúdo sexual explícito destinado exclusivamente a adultos maiores de 18 anos.
          Todo conteúdo deve ser praticado com consentimento mútuo e respeito aos limites de cada pessoa.
        </p>
      </div>
    </div>
  );
}

// Game Card Component
function GameCard({ 
  icon, 
  title, 
  description, 
  gradient, 
  onClick,
  premium 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string; 
  gradient: string;
  onClick: () => void;
  premium?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 text-left"
    >
      <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
        {title}
      </h3>
      
      <p className="text-gray-400 text-sm md:text-base">
        {description}
      </p>
    </button>
  );
}

// Roulette View
function RouletteView({ onBack }: { onBack: () => void }) {
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string>("");

  const levels = [
    { id: 1, name: "Nível 1 - Leve", color: "from-pink-400 to-rose-500", actions: 40 },
    { id: 2, name: "Nível 2 - Moderado", color: "from-rose-500 to-red-600", actions: 50 },
    { id: 3, name: "Nível 3 - Quente", color: "from-red-600 to-orange-600", actions: 50 },
    { id: 4, name: "Nível 4 - Muito Quente", color: "from-orange-600 to-red-700", actions: 50 },
    { id: 5, name: "Nível 5 - EXTREMO", color: "from-red-700 to-purple-900", actions: 50 },
  ];

  const allActions = {
    1: [
      "Beije suavemente o pescoço do seu parceiro por 30 segundos",
      "Sussurre no ouvido dele/dela o que mais te atrai fisicamente",
      "Faça uma massagem relaxante nos ombros por 2 minutos",
      "Olhe nos olhos do seu parceiro por 1 minuto sem falar nada",
      "Dê 5 beijos delicados em lugares diferentes do rosto",
      "Acaricie o cabelo do seu parceiro enquanto conta uma fantasia",
      "Abrace por trás e beije a nuca suavemente",
      "Segure as mãos e diga 3 coisas que ama no outro",
      "Faça cócegas leves nas costas com as pontas dos dedos",
      "Beije cada dedo da mão do seu parceiro lentamente",
      "Dance coladinho uma música lenta",
      "Morda de leve o lábio inferior durante um beijo",
      "Acaricie o rosto do parceiro enquanto o beija",
      "Sussurre uma palavra sensual no ouvido",
      "Faça uma trilha de beijos do ombro até o pescoço",
      "Massageie as mãos do parceiro com carinho",
      "Olhe nos olhos e diga o que sente neste momento",
      "Beije a testa, as bochechas e por último a boca",
      "Passe os dedos suavemente pelos braços do parceiro",
      "Abrace apertado por 1 minuto completo",
      "Beije o pescoço enquanto abraça por trás",
      "Acaricie as costas fazendo movimentos circulares",
      "Sussurre 'você é incrível' no ouvido",
      "Beije as palmas das mãos do seu parceiro",
      "Faça uma massagem nos pés por 2 minutos",
      "Olhe nos olhos e sorria apaixonadamente",
      "Passe os dedos pelo cabelo enquanto beija",
      "Dê um beijo demorado e apaixonado",
      "Acaricie o rosto com as costas da mão",
      "Abrace e balance suavemente como se dançassem",
      "Beije a ponta do nariz carinhosamente",
      "Sussurre 'te desejo' bem baixinho",
      "Faça uma trilha de beijos pelo braço",
      "Segure o rosto do parceiro e beije intensamente",
      "Acaricie as costas subindo e descendo lentamente",
      "Morda de leve a orelha durante um abraço",
      "Beije o pescoço enquanto acaricia o cabelo",
      "Olhe nos olhos e diga uma qualidade sensual",
      "Faça uma massagem na nuca por 1 minuto",
      "Beije os ombros descobertos suavemente",
    ],
    2: [
      "Tire uma peça de roupa do seu parceiro lentamente",
      "Beije o pescoço enquanto suas mãos exploram o corpo",
      "Sussurre no ouvido exatamente o que quer fazer agora",
      "Sente no colo do parceiro e beije intensamente por 1 minuto",
      "Faça uma massagem sensual nas coxas",
      "Morda suavemente o pescoço e ombros",
      "Passe a língua lentamente pelo pescoço",
      "Acaricie por cima da roupa as partes íntimas",
      "Beije e morda de leve os lábios repetidamente",
      "Deite o parceiro e beije da barriga até o pescoço",
      "Tire sua própria peça de roupa de forma provocante",
      "Sente de frente para o parceiro e rebole devagar",
      "Beije e lamba a orelha sensualmente",
      "Passe as unhas de leve pelas costas",
      "Acaricie os seios/peito por cima da roupa",
      "Beije a barriga fazendo uma trilha descendente",
      "Pressione seu corpo contra o do parceiro",
      "Faça uma dança sensual para o seu parceiro",
      "Beije e chupe o pescoço deixando uma marca leve",
      "Acaricie a parte interna das coxas lentamente",
      "Sussurre palavras provocantes enquanto toca",
      "Beije os seios/peito por cima da roupa",
      "Sente no colo de costas e rebole",
      "Passe a língua pela orelha e pescoço",
      "Aperte a bunda do parceiro enquanto beija",
      "Tire o sutiã/camisa do parceiro com os dentes",
      "Faça uma massagem sensual na lombar",
      "Beije e morda suavemente os mamilos por cima da roupa",
      "Esfregue seu corpo no do parceiro lentamente",
      "Acaricie e aperte as nádegas com firmeza",
      "Beije a barriga enquanto desce as mãos",
      "Sussurre uma fantasia sexual no ouvido",
      "Lamba e beije o pescoço intensamente",
      "Passe as mãos por todo o corpo do parceiro",
      "Sente no colo e faça movimentos provocantes",
      "Beije e morda de leve a parte interna das coxas",
      "Tire mais uma peça de roupa lentamente",
      "Pressione suas partes íntimas contra o parceiro",
      "Faça uma trilha de beijos até a virilha",
      "Acaricie e estimule por cima da roupa íntima",
      "Beije apaixonadamente enquanto toca intimamente",
      "Morda e puxe de leve o cabelo do parceiro",
      "Deite por cima e esfregue seu corpo no dele",
      "Sussurre palavras sujas no ouvido",
      "Acaricie os seios/peito sem roupa",
      "Beije e lamba os mamilos por 1 minuto",
      "Faça movimentos sensuais enquanto tira a roupa",
      "Toque nas partes íntimas por cima da calcinha/cueca",
      "Beije todo o corpo evitando apenas as partes íntimas",
      "Provoque com toques leves e rápidos",
    ],
    3: [
      "Tire a calcinha/cueca do parceiro com a boca",
      "Masturbe seu parceiro por 2 minutos sem parar",
      "Deixe seu parceiro tocar você onde quiser por 2 minutos",
      "Faça sexo oral por 1 minuto",
      "Sente no rosto do seu parceiro e deixe ele te lamber",
      "Chupe os dedos do parceiro de forma provocante",
      "Masturbe-se na frente do seu parceiro",
      "Deixe seu parceiro masturbar você até quase gozar",
      "Faça um 69 por 2 minutos",
      "Penetre apenas a cabecinha e tire, repita 10 vezes",
      "Esfregue suas partes íntimas sem penetrar",
      "Chupe os testículos/clitóris com dedicação",
      "Deixe seu parceiro gozar onde ele quiser",
      "Faça sexo oral enquanto se masturba",
      "Sente na boca do parceiro e rebole",
      "Masturbe seu parceiro usando lubrificante",
      "Deixe ele/ela chupar seus dedos enquanto você masturba",
      "Faça uma espanhola (seios) ou masturbação com as coxas",
      "Chupe intensamente por 3 minutos sem parar",
      "Penetre devagar e fique parado por 1 minuto",
      "Faça sexo oral olhando nos olhos",
      "Deixe seu parceiro usar sua boca como quiser",
      "Masturbe com uma mão e estimule com a boca",
      "Sente por cima e rebole sem penetração completa",
      "Chupe fazendo barulhos e gemidos",
      "Deixe ele/ela gozar na sua boca",
      "Faça penetração rasa e rápida por 1 minuto",
      "Estimule o ponto G ou próstata com os dedos",
      "Chupe os mamilos enquanto masturba",
      "Deixe seu parceiro te foder com os dedos",
      "Faça sexo oral com gelo na boca",
      "Sente e rebole até ele/ela implorar para penetrar",
      "Masturbe usando saliva como lubrificante",
      "Deixe ele/ela esfregar o pau/buceta no seu rosto",
      "Faça penetração profunda e lenta 20 vezes",
      "Chupe e lamba as bolas/buceta intensamente",
      "Masturbe enquanto ele/ela assiste de perto",
      "Deixe seu parceiro gozar nos seus seios/barriga",
      "Faça sexo oral até ele/ela gozar",
      "Penetre por trás sem tirar totalmente",
      "Estimule o ânus com o dedo durante sexo oral",
      "Chupe engolindo o máximo que conseguir",
      "Deixe ele/ela controlar sua cabeça durante oral",
      "Faça penetração rápida e intensa por 2 minutos",
      "Masturbe os dois ao mesmo tempo",
      "Chupe e morda de leve as partes íntimas",
      "Deixe ele/ela gozar onde quiser no seu corpo",
      "Faça sexo oral com mel ou chantilly",
      "Penetre e fique parado enquanto ele/ela rebola",
      "Estimule o clitóris/glande com a língua rapidamente",
    ],
    4: [
      "Foda intensa por 5 minutos sem parar, mude de posição 3 vezes",
      "Sexo anal com bastante lubrificante, comece devagar",
      "Engula todo o esperma quando ele gozar",
      "Deixe ele te foder com força enquanto puxa seu cabelo",
      "Chupe o pau até a garganta, tente não engasgar",
      "Sente na cara dele e rebole até gozar",
      "Deixe ela cavalgar com força até você gozar dentro",
      "Foda ela por trás puxando os cabelos e dando tapas",
      "Faça garganta profunda por 2 minutos seguidos",
      "Deixe ele gozar na sua cara e lambe tudo",
      "Penetre o ânus dela devagar e depois acelere",
      "Chupe as bolas enquanto ele se masturba na sua cara",
      "Deixe ela sentar e rebolar até você não aguentar mais",
      "Foda de quatro dando tapas fortes na bunda",
      "Faça sexo oral até ela gozar na sua boca",
      "Deixe ele te foder em pé contra a parede",
      "Chupe o pau olhando nos olhos até ele gozar",
      "Sente e rebole devagar, depois acelere até gozar",
      "Deixe ela te amarrar e usar como quiser",
      "Foda com força enquanto estimula o clitóris",
      "Faça anal enquanto masturba ela até gozar",
      "Chupe e engula tudo sem desperdiçar uma gota",
      "Deixe ele gozar nos seus seios e lambe",
      "Penetre fundo e devagar, depois rápido e forte",
      "Faça 69 até os dois gozarem",
      "Deixe ela sentar na sua cara até gozar",
      "Foda ela de lado puxando uma perna para cima",
      "Chupe o pau enquanto ele fode seus seios",
      "Deixe ele te foder o cu enquanto você se masturba",
      "Penetre com força batendo as bolas na buceta",
      "Faça ela gozar só com a língua no clitóris",
      "Deixe ele gozar dentro e depois chupe limpando tudo",
      "Foda de frente olhando nos olhos até gozar junto",
      "Chupe o pau depois de ele ter gozado (sensível)",
      "Deixe ela cavalgar de costas para você ver tudo",
      "Penetre o ânus enquanto usa vibrador na buceta",
      "Faça garganta profunda até ele gozar na garganta",
      "Deixe ele te foder deitada de bruços",
      "Chupe a buceta depois de gozar dentro",
      "Foda ela levantando as pernas até os ombros",
      "Deixe ela te masturbar até gozar na mão dela",
      "Penetre devagar no cu enquanto masturba ela",
      "Faça oral nos dois buracos alternadamente",
      "Deixe ele gozar na boca e mostre antes de engolir",
      "Foda com ela por cima controlando a velocidade",
      "Chupe as bolas e o pau ao mesmo tempo",
      "Deixe ela esfregar a buceta no seu pau até gozar",
      "Penetre fundo e fique parado enquanto ela rebola",
      "Faça ela gozar múltiplas vezes seguidas",
      "Deixe ele te foder como quiser por 10 minutos",
    ],
    5: [
      "Foda brutal por 10 minutos, use ela como quiser, sem piedade",
      "Enfie o pau na garganta dela até ela engasgar e babar",
      "Foda o cu dela com força enquanto tapa a cara",
      "Deixe ele te foder todos os buracos, um depois do outro",
      "Chupe o pau sujo depois de foder seu cu",
      "Sente na cara dele e sufoque com sua buceta até ele implorar",
      "Deixe ele gozar dentro do seu cu e depois chupe o pau",
      "Foda ela cuspindo na cara e chamando de puta",
      "Engula o pau até a base e fique lá por 10 segundos",
      "Deixe ele te foder com força enquanto te enforca de leve",
      "Chupe o cu dele enquanto ele se masturba",
      "Foda ela amarrada, use brinquedos e sua língua em todos os buracos",
      "Deixe ele gozar na sua garganta e engula tudo",
      "Sente e rebole no pau dele enquanto ele enfia dedos no seu cu",
      "Foda de quatro enquanto ele cospe na sua boca",
      "Deixe ela te chupar depois de gozar (hipersensível)",
      "Penetre o cu dela sem avisar durante a foda",
      "Faça ela gozar e continue fodendo sem parar",
      "Deixe ele usar sua boca como buceta, foda sua garganta",
      "Chupe as bolas enquanto ele goza na sua cara",
      "Foda ela por trás enfiando o dedo no cu dela",
      "Deixe ele te foder o cu enquanto usa vibrador na buceta",
      "Engula a porra e depois beije ele com a boca suja",
      "Sente na cara dele e mije um pouco (se acordado)",
      "Deixe ele dar tapas na sua cara enquanto fode",
      "Foda ela cuspindo na buceta e no cu",
      "Chupe o pau olhando nos olhos e peça pra ele gozar",
      "Deixe ela cavalgar até você gozar, depois continue fodendo",
      "Penetre fundo no cu e goze dentro",
      "Faça ela lamber suas bolas e cu",
      "Deixe ele te foder a boca até gozar na garganta",
      "Foda todos os buracos dela na mesma sessão",
      "Chupe o pau depois de ele ter fodido seu cu",
      "Deixe ela sentar na sua cara depois de você gozar dentro",
      "Penetre com força enquanto aperta o pescoço dela",
      "Faça ela gozar esguichando na sua boca",
      "Deixe ele gozar dentro e depois foda de novo sem limpar",
      "Chupe e engula, depois cuspa na mão dele e peça pra ele te masturbar",
      "Foda ela de pé segurando pelas pernas",
      "Deixe ele usar você como boneca sexual por 15 minutos",
      "Penetre o cu enquanto enfia dedos na buceta",
      "Faça garganta profunda até vomitar um pouco (extremo)",
      "Deixe ela te dominar completamente, obedeça tudo",
      "Foda com força batendo as bolas no clitóris",
      "Chupe o cu dele até ele gozar",
      "Deixe ele gozar dentro de todos os seus buracos",
      "Penetre sem parar até os dois gozarem múltiplas vezes",
      "Faça ela implorar pra você parar (mas não pare)",
      "Deixe ele te usar como quiser, sem limites",
      "Foda sessão de 30 minutos, múltiplas posições e orgasmos",
    ],
  };

  const spinRoulette = () => {
    setSpinning(true);
    setResult("");
    
    setTimeout(() => {
      const actions = allActions[selectedLevel as keyof typeof allActions];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      setResult(randomAction);
      setSpinning(false);
    }, 2000);
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-800/30 rounded-lg text-red-300 transition-all duration-300"
      >
        ← Voltar
      </button>

      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
        Roletas Eróticas
      </h2>

      {/* Level Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level.id)}
            className={`
              p-4 rounded-xl border-2 transition-all duration-300
              ${selectedLevel === level.id
                ? `bg-gradient-to-br ${level.color} border-white shadow-lg shadow-red-500/50 scale-105`
                : 'bg-gray-900 border-red-900/30 hover:border-red-500/50'
              }
            `}
          >
            <div className="text-center">
              <div className="text-lg font-bold mb-1">{level.name.split(' - ')[0]}</div>
              <div className="text-sm opacity-80">{level.name.split(' - ')[1]}</div>
              <div className="text-xs mt-2 opacity-60">{level.actions} ações</div>
            </div>
          </button>
        ))}
      </div>

      {/* Roulette Display */}
      <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 mb-8">
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br ${levels[selectedLevel - 1].color} ${spinning ? 'animate-spin' : ''}`}>
            <Circle className="w-16 h-16" />
          </div>
        </div>

        <button
          onClick={spinRoulette}
          disabled={spinning}
          className={`
            w-full py-4 rounded-xl font-bold text-lg transition-all duration-300
            ${spinning
              ? 'bg-gray-700 cursor-not-allowed'
              : `bg-gradient-to-r ${levels[selectedLevel - 1].color} hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50`
            }
          `}
        >
          {spinning ? 'Girando...' : 'GIRAR ROLETA'}
        </button>

        {result && (
          <div className="mt-8 p-6 bg-red-900/20 border border-red-500/30 rounded-xl animate-fade-in">
            <h3 className="text-xl font-bold mb-3 text-red-400">Seu Desafio:</h3>
            <p className="text-lg text-white leading-relaxed">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}

// Board Game View
function BoardView({ onBack }: { onBack: () => void }) {
  const [position, setPosition] = useState(0);
  const [diceRoll, setDiceRoll] = useState<number | null>(null);
  const [rolling, setRolling] = useState(false);
  const [currentSquare, setCurrentSquare] = useState<any>(null);

  const boardSquares = [
    { id: 0, type: "start", title: "INÍCIO", description: "Comece sua jornada do prazer" },
    { id: 1, type: "reward-light", title: "Recompensa Leve", description: "Ganhe um beijo apaixonado de 30 segundos" },
    { id: 2, type: "punishment-light", title: "Punição Sensual", description: "Tire uma peça de roupa" },
    { id: 3, type: "reward-medium", title: "Recompensa Média", description: "Receba uma massagem sensual de 3 minutos" },
    { id: 4, type: "mandate", title: "Mandato", description: "Seu parceiro deve obedecer você por 5 minutos" },
    { id: 5, type: "reward-hot", title: "Recompensa Quente", description: "Receba sexo oral por 2 minutos" },
    { id: 6, type: "punishment-medium", title: "Punição Média", description: "Faça uma dança sensual" },
    { id: 7, type: "roleplay", title: "Roleplay", description: "Interpretem: Professor e Aluno(a) por 5 minutos" },
    { id: 8, type: "reward-extreme", title: "Recompensa Extrema", description: "Escolha a posição e foda por 5 minutos" },
    { id: 9, type: "risk", title: "Casa de Risco", description: "Faça um desafio aleatório do nível 3" },
    { id: 10, type: "punishment-hot", title: "Punição Quente", description: "Deixe seu parceiro te amarrar por 3 minutos" },
    { id: 11, type: "reward-light", title: "Recompensa Leve", description: "Ganhe 10 beijos onde você quiser" },
    { id: 12, type: "level-change", title: "Troca de Nível", description: "Aumente a intensidade do próximo desafio" },
    { id: 13, type: "punishment-extreme", title: "Punição Extrema", description: "Faça garganta profunda por 1 minuto" },
    { id: 14, type: "reward-medium", title: "Recompensa Média", description: "Seu parceiro deve te masturbar até quase gozar" },
    { id: 15, type: "mandate", title: "Mandato Intenso", description: "Você manda no parceiro por 10 minutos" },
    { id: 16, type: "reward-hot", title: "Recompensa Quente", description: "Faça 69 até você gozar" },
    { id: 17, type: "roleplay", title: "Roleplay", description: "Interpretem: Chefe e Secretária(o) - cena completa" },
    { id: 18, type: "punishment-light", title: "Punição Sensual", description: "Fique vendado por 2 rodadas" },
    { id: 19, type: "reward-extreme", title: "Recompensa Extrema", description: "Sexo anal com você no controle" },
    { id: 20, type: "risk", title: "Casa de Risco", description: "Desafio aleatório do nível 4" },
    { id: 21, type: "reward-light", title: "Recompensa Leve", description: "Receba carícias por todo corpo por 3 minutos" },
    { id: 22, type: "punishment-medium", title: "Punição Média", description: "Masturbe seu parceiro sem usar as mãos" },
    { id: 23, type: "reward-hot", title: "Recompensa Quente", description: "Cavalgue até gozar" },
    { id: 24, type: "mandate", title: "Mandato", description: "Parceiro obedece tudo por 7 minutos" },
    { id: 25, type: "punishment-hot", title: "Punição Quente", description: "Deixe seu parceiro gozar onde ele quiser" },
    { id: 26, type: "roleplay", title: "Roleplay", description: "Interpretem: Dominador(a) e Submisso(a)" },
    { id: 27, type: "reward-extreme", title: "Recompensa Extrema", description: "Foda intensa por 10 minutos, múltiplas posições" },
    { id: 28, type: "level-change", title: "Troca de Nível", description: "Próximo desafio será nível EXTREMO" },
    { id: 29, type: "punishment-extreme", title: "Punição Extrema", description: "Seja usado(a) como objeto sexual por 5 minutos" },
    { id: 30, type: "reward-medium", title: "Recompensa Média", description: "Escolha 3 posições para experimentar" },
    { id: 31, type: "risk", title: "Casa de Risco", description: "Desafio aleatório do nível 5" },
    { id: 32, type: "reward-hot", title: "Recompensa Quente", description: "Receba penetração lenta e profunda por 5 minutos" },
    { id: 33, type: "punishment-light", title: "Punição Sensual", description: "Provoque sem tocar por 2 minutos" },
    { id: 34, type: "mandate", title: "Mandato Supremo", description: "Controle total por 15 minutos" },
    { id: 35, type: "reward-extreme", title: "Recompensa Extrema", description: "Dupla penetração com brinquedos" },
    { id: 36, type: "roleplay", title: "Roleplay", description: "Interpretem: Estranhos se conhecendo em um bar" },
    { id: 37, type: "punishment-medium", title: "Punição Média", description: "Faça sexo oral até ele/ela gozar" },
    { id: 38, type: "reward-light", title: "Recompensa Leve", description: "Ganhe uma massagem erótica completa" },
    { id: 39, type: "punishment-hot", title: "Punição Quente", description: "Seja fodido(a) de quatro com tapas" },
    { id: 40, type: "reward-hot", title: "Recompensa Quente", description: "Goze onde e como quiser" },
    { id: 41, type: "level-change", title: "Troca de Nível", description: "Diminua a intensidade (descanso)" },
    { id: 42, type: "punishment-extreme", title: "Punição Extrema", description: "Engula tudo quando ele gozar" },
    { id: 43, type: "reward-medium", title: "Recompensa Média", description: "Receba estimulação anal suave" },
    { id: 44, type: "risk", title: "Casa de Risco", description: "Dois desafios seguidos do nível 3" },
    { id: 45, type: "mandate", title: "Mandato", description: "Parceiro é seu escravo(a) por 10 minutos" },
    { id: 46, type: "reward-extreme", title: "Recompensa Extrema", description: "Foda selvagem sem limites por 15 minutos" },
    { id: 47, type: "roleplay", title: "Roleplay", description: "Interpretem: Médico(a) e Paciente" },
    { id: 48, type: "punishment-light", title: "Punição Sensual", description: "Fique de joelhos por 1 rodada" },
    { id: 49, type: "reward-hot", title: "Recompensa Quente", description: "Escolha um fetiche para realizar" },
    { id: 50, type: "punishment-medium", title: "Punição Média", description: "Deixe seu parceiro gozar nos seus seios/peito" },
    { id: 51, type: "reward-extreme", title: "Recompensa Extrema", description: "Sessão de sexo anal intenso" },
    { id: 52, type: "level-change", title: "Troca de Nível", description: "Máxima intensidade ativada" },
    { id: 53, type: "punishment-hot", title: "Punição Quente", description: "Seja penetrado(a) em pé contra a parede" },
    { id: 54, type: "reward-light", title: "Recompensa Leve", description: "Momento romântico: abraços e beijos" },
    { id: 55, type: "risk", title: "Casa de Risco", description: "Desafio surpresa escolhido pelo parceiro" },
    { id: 56, type: "mandate", title: "Mandato Final", description: "Você decide tudo pelos próximos 20 minutos" },
    { id: 57, type: "punishment-extreme", title: "Punição Extrema", description: "Seja usado(a) em todas as posições possíveis" },
    { id: 58, type: "reward-medium", title: "Recompensa Média", description: "Receba oral enquanto se masturba" },
    { id: 59, type: "roleplay", title: "Roleplay Final", description: "Criem sua própria fantasia e realizem" },
    { id: 60, type: "finish", title: "FINAL", description: "Parabéns! Terminem com um grand finale intenso!" },
  ];

  const rollDice = () => {
    setRolling(true);
    setDiceRoll(null);
    setCurrentSquare(null);

    setTimeout(() => {
      const roll = Math.floor(Math.random() * 6) + 1;
      setDiceRoll(roll);
      const newPosition = Math.min(position + roll, 60);
      setPosition(newPosition);
      setCurrentSquare(boardSquares[newPosition]);
      setRolling(false);
    }, 1500);
  };

  const getSquareColor = (type: string) => {
    const colors: any = {
      "start": "from-green-500 to-emerald-600",
      "finish": "from-purple-500 to-pink-600",
      "reward-light": "from-blue-400 to-cyan-500",
      "reward-medium": "from-cyan-500 to-blue-600",
      "reward-hot": "from-orange-500 to-red-600",
      "reward-extreme": "from-red-600 to-pink-700",
      "punishment-light": "from-yellow-400 to-orange-500",
      "punishment-medium": "from-orange-500 to-red-500",
      "punishment-hot": "from-red-500 to-rose-600",
      "punishment-extreme": "from-rose-600 to-purple-700",
      "mandate": "from-purple-500 to-indigo-600",
      "roleplay": "from-pink-500 to-rose-600",
      "risk": "from-gray-600 to-gray-800",
      "level-change": "from-indigo-500 to-purple-600",
    };
    return colors[type] || "from-gray-500 to-gray-700";
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-800/30 rounded-lg text-red-300 transition-all duration-300"
      >
        ← Voltar
      </button>

      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
        Tabuleiro Erótico
      </h2>

      {/* Game Status */}
      <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-6 mb-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm mb-1">Posição Atual</p>
            <p className="text-3xl font-bold text-white">{position} / 60</p>
          </div>

          <div className="flex items-center gap-4">
            {diceRoll && (
              <div className="text-center">
                <p className="text-gray-400 text-sm mb-1">Último Dado</p>
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-3xl font-bold">{diceRoll}</span>
                </div>
              </div>
            )}

            <button
              onClick={rollDice}
              disabled={rolling || position >= 60}
              className={`
                px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300
                ${rolling || position >= 60
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-gradient-to-r from-red-600 to-pink-600 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50'
                }
              `}
            >
              {rolling ? 'Rolando...' : position >= 60 ? 'Fim do Jogo!' : 'ROLAR DADO'}
            </button>
          </div>
        </div>

        {currentSquare && (
          <div className={`mt-6 p-6 bg-gradient-to-br ${getSquareColor(currentSquare.type)} rounded-xl`}>
            <h3 className="text-2xl font-bold mb-2">{currentSquare.title}</h3>
            <p className="text-lg opacity-90">{currentSquare.description}</p>
          </div>
        )}
      </div>

      {/* Board Grid */}
      <div className="grid grid-cols-5 md:grid-cols-10 gap-2 mb-8">
        {boardSquares.map((square) => (
          <div
            key={square.id}
            className={`
              aspect-square rounded-lg border-2 flex items-center justify-center text-center p-1 transition-all duration-300
              ${position === square.id
                ? 'border-yellow-400 scale-110 shadow-lg shadow-yellow-500/50'
                : 'border-gray-700'
              }
              ${square.type === 'start' || square.type === 'finish' ? 'col-span-2' : ''}
            `}
            style={{
              background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
              backgroundImage: `linear-gradient(to bottom right, ${getSquareColor(square.type).includes('from-') ? getSquareColor(square.type).split(' ')[0].replace('from-', '') : ''}, ${getSquareColor(square.type).includes('to-') ? getSquareColor(square.type).split(' ')[2]?.replace('to-', '') : ''})`
            }}
          >
            <span className="text-xs md:text-sm font-bold">{square.id}</span>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 text-center">Legenda</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <LegendItem color="from-blue-400 to-cyan-500" label="Recompensa Leve" />
          <LegendItem color="from-cyan-500 to-blue-600" label="Recompensa Média" />
          <LegendItem color="from-orange-500 to-red-600" label="Recompensa Quente" />
          <LegendItem color="from-red-600 to-pink-700" label="Recompensa Extrema" />
          <LegendItem color="from-yellow-400 to-orange-500" label="Punição Sensual" />
          <LegendItem color="from-orange-500 to-red-500" label="Punição Média" />
          <LegendItem color="from-red-500 to-rose-600" label="Punição Quente" />
          <LegendItem color="from-rose-600 to-purple-700" label="Punição Extrema" />
          <LegendItem color="from-purple-500 to-indigo-600" label="Mandato" />
          <LegendItem color="from-pink-500 to-rose-600" label="Roleplay" />
          <LegendItem color="from-gray-600 to-gray-800" label="Risco" />
          <LegendItem color="from-indigo-500 to-purple-600" label="Troca de Nível" />
        </div>
      </div>
    </div>
  );
}

function LegendItem({ color, label }: { color: string; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded bg-gradient-to-br ${color}`} />
      <span className="text-xs text-gray-300">{label}</span>
    </div>
  );
}

// Cards Game View - POSIÇÕES
function CardsView({ onBack }: { onBack: () => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>("seduction");
  const [currentCard, setCurrentCard] = useState<any>(null);
  const [drawing, setDrawing] = useState(false);

  const categories = [
    { id: "seduction", name: "Sedução", color: "from-pink-400 to-rose-500", icon: "💋" },
    { id: "desire", name: "Tesão", color: "from-rose-500 to-red-600", icon: "🔥" },
    { id: "domination", name: "Domínio", color: "from-red-600 to-orange-600", icon: "⛓️" },
    { id: "surrender", name: "Entrega", color: "from-orange-600 to-purple-700", icon: "🎭" },
    { id: "hell", name: "Inferno", color: "from-purple-700 to-black", icon: "😈" },
  ];

  const allCards: any = {
    seduction: [
      { name: "Missionário Romântico", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Posição clássica, olhando nos olhos, beijos apaixonados" },
      { name: "Conchinha Sensual", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "De lado, colados, penetração suave por trás" },
      { name: "Cowgirl Lenta", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela por cima, rebolando devagar, controle total" },
      { name: "Lotus", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Sentados de frente, abraçados, movimentos suaves" },
      { name: "Borboleta", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela deitada na beira da cama, pernas nos ombros dele" },
      { name: "Cadeira do Amor", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ele sentado, ela no colo de frente, abraçados" },
      { name: "Ponte", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela arqueada para trás, ele ajoelhado penetrando" },
      { name: "Abraço Íntimo", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "De pé, abraçados, ela com perna levantada" },
      { name: "Deitados de Lado", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ambos de lado, de frente, pernas entrelaçadas" },
      { name: "Missionário Modificado", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Pernas dela nos ombros dele, penetração profunda" },
      { name: "Cowgirl Reversa Suave", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela por cima de costas, movimentos lentos" },
      { name: "Tesoura Romântica", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "De lado perpendiculares, pernas entrelaçadas" },
      { name: "Cadeira Sensual", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela sentada na cadeira, ele ajoelhado penetrando" },
      { name: "Sofá do Prazer", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela deitada no sofá, ele em pé penetrando" },
      { name: "Abraço por Trás", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ambos de pé, ele por trás, abraçados" },
      { name: "Mesa Romântica", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela sentada na mesa, ele em pé entre as pernas" },
      { name: "Deitados Entrelaçados", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ambos deitados de lado, corpos colados" },
      { name: "Cowgirl Inclinada", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela por cima, inclinada para frente, beijos no pescoço" },
      { name: "Missionário Profundo", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Pernas dela dobradas no peito, penetração intensa" },
      { name: "Abraço Vertical", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "De pé, ele segura ela no colo, abraçados" },
      { name: "Deitados Sincronizados", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ambos de lado, movimentos sincronizados suaves" },
      { name: "Cadeira Reclinada", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ele sentado reclinado, ela cavalgando devagar" },
      { name: "Ponte Modificada", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela arqueada, ele segurando a cintura" },
      { name: "Abraço Lateral", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "De lado, ele por trás, abraçados intimamente" },
    ],
    desire: [
      { name: "Doggy Style", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "De quatro, penetração intensa por trás" },
      { name: "Cowgirl Acelerada", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela cavalgando rápido, controle total" },
      { name: "Missionário Intenso", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Penetração profunda e rápida, olhando nos olhos" },
      { name: "Reverse Cowgirl", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela de costas cavalgando, visão completa" },
      { name: "Stand and Deliver", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela de pé inclinada, ele por trás penetrando forte" },
      { name: "Pernas no Ar", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela deitada, pernas levantadas, penetração profunda" },
      { name: "Doggy Modificado", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela com peito na cama, bunda empinada" },
      { name: "Cowgirl Agressiva", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela cavalgando com força, mãos no peito dele" },
      { name: "Parede", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela contra a parede, ele penetrando em pé" },
      { name: "Tesoura Intensa", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "De lado perpendiculares, penetração rápida" },
      { name: "Ponte Elevada", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela arqueada, quadril elevado, penetração profunda" },
      { name: "Doggy com Tapas", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "De quatro, ele dando tapas na bunda" },
      { name: "Cowgirl Inclinada Rápida", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela inclinada para frente, rebolando rápido" },
      { name: "Missionário Pernas Abertas", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Pernas bem abertas, penetração intensa" },
      { name: "Stand and Carry", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ele segura ela no ar, penetrando em pé" },
      { name: "Doggy Profundo", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "De quatro, ele puxando os quadris dela" },
      { name: "Cowgirl Reversa Rápida", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela de costas cavalgando rápido" },
      { name: "Missionário Apertado", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Pernas dela fechadas, penetração apertada" },
      { name: "Sofá Intenso", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela no sofá de quatro, ele atrás com força" },
      { name: "Mesa Quente", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela deitada na mesa, ele penetrando forte" },
      { name: "Doggy Lateral", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela de lado, ele ajoelhado penetrando" },
      { name: "Cowgirl Squatting", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela agachada cavalgando, movimentos intensos" },
      { name: "Missionário Elevado", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Quadril dela elevado, penetração profunda" },
      { name: "Stand Doggy", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ambos em pé, ela inclinada, penetração forte" },
    ],
    domination: [
      { name: "Doggy Dominante", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "De quatro, ele puxando cabelo, tapas fortes" },
      { name: "Face Down Ass Up", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Rosto na cama, bunda empinada, dominação total" },
      { name: "Missionário Controlado", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ele segurando os pulsos dela, penetração forte" },
      { name: "Cowgirl Submissa", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela cavalgando, ele controlando os movimentos" },
      { name: "Parede Dominante", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela contra parede, ele penetrando com força" },
      { name: "Doggy com Controle", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "De quatro, ele segurando os braços dela" },
      { name: "Missionário Agressivo", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Penetração forte, mãos no pescoço (leve)" },
      { name: "Reverse Cowgirl Dominada", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela de costas, ele controlando quadris" },
      { name: "Stand Dominante", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela em pé inclinada, ele dominando por trás" },
      { name: "Doggy Extremo", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "De quatro, tapas fortes, puxões de cabelo" },
      { name: "Missionário Submissão", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela amarrada, ele no controle total" },
      { name: "Cowgirl Forçada", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela cavalgando, ele forçando ritmo" },
      { name: "Parede Agressiva", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Contra parede, penetração brutal" },
      { name: "Doggy Puxão", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "De quatro, ele puxando cabelo com força" },
      { name: "Missionário Intenso Dominante", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Penetração forte, controle total" },
      { name: "Stand Carry Dominante", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ele segura ela, penetrando com força" },
      { name: "Doggy Tapas", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "De quatro, tapas fortes na bunda" },
      { name: "Cowgirl Controlada", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela cavalgando, ele ditando velocidade" },
      { name: "Missionário Pernas Seguradas", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ele segurando pernas dela, penetração profunda" },
      { name: "Doggy Braços Presos", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "De quatro, braços dela presos atrás" },
      { name: "Stand Dominação", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Em pé, ele dominando completamente" },
      { name: "Cowgirl Submissa Reversa", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela de costas, ele controlando tudo" },
      { name: "Missionário Enforcamento Leve", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Mão no pescoço (leve), penetração forte" },
      { name: "Doggy Dominação Total", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "De quatro, ele no controle absoluto" },
    ],
    surrender: [
      { name: "Missionário Entrega", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela se entrega completamente, pernas bem abertas" },
      { name: "Doggy Submissão", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "De quatro, ela totalmente submissa" },
      { name: "Face Sitting", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela sentada no rosto dele, dominando" },
      { name: "Cowgirl Dominadora", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela no controle total, ele submisso" },
      { name: "Missionário Amarrado", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ele amarrado, ela usando como quer" },
      { name: "Doggy Vendado", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela vendada, entrega total" },
      { name: "Reverse Cowgirl Submissa", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela de costas, se entregando" },
      { name: "Stand Submissão", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Em pé, ela totalmente submissa" },
      { name: "Missionário Amarrada", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela amarrada, ele no controle" },
      { name: "Doggy Entrega Total", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "De quatro, entrega completa" },
      { name: "Cowgirl Reversa Dominadora", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela dominando de costas" },
      { name: "Parede Submissão", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Contra parede, ela submissa" },
      { name: "Missionário Vendada", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela vendada, entregue" },
      { name: "Doggy Amarrada", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "De quatro, mãos amarradas" },
      { name: "Cowgirl Submissa Intensa", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Ela cavalgando, totalmente submissa" },
      { name: "Stand Entrega", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Em pé, entrega total" },
      { name: "Missionário Controle Total", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ele no controle absoluto" },
      { name: "Doggy Dominada", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "De quatro, completamente dominada" },
      { name: "Reverse Cowgirl Entrega", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela de costas, se entregando" },
      { name: "Parede Dominada", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Contra parede, dominada" },
      { name: "Missionário Submissão Total", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Submissão completa" },
      { name: "Doggy Objeto", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "De quatro, usada como objeto" },
      { name: "Cowgirl Dominação Feminina", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela dominando completamente" },
      { name: "Stand Submissão Total", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Em pé, submissão absoluta" },
    ],
    hell: [
      { name: "Doggy Brutal", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "De quatro, foda brutal sem piedade" },
      { name: "Missionário Extremo", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Penetração extrema, enforcamento leve" },
      { name: "Anal Intenso", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Sexo anal intenso e profundo" },
      { name: "Cowgirl Selvagem", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela cavalgando selvagemente" },
      { name: "Stand Brutal", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Em pé, foda brutal" },
      { name: "Doggy Anal", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Anal de quatro, intenso" },
      { name: "Missionário Sufocamento", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Penetração forte, sufocamento leve" },
      { name: "Reverse Cowgirl Extrema", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Ela de costas, ritmo extremo" },
      { name: "Parede Brutal", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Contra parede, foda brutal" },
      { name: "Doggy Tapas Fortes", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "De quatro, tapas muito fortes" },
      { name: "Missionário Dominação Extrema", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Dominação total, sem limites" },
      { name: "Anal Doggy", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Anal de quatro, profundo" },
      { name: "Cowgirl Anal", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Ela cavalgando anal" },
      { name: "Stand Anal", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Anal em pé, intenso" },
      { name: "Doggy Extremo Puxão", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "De quatro, puxão forte de cabelo" },
      { name: "Missionário Anal", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Anal missionário, profundo" },
      { name: "Reverse Cowgirl Anal", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Anal de costas cavalgando" },
      { name: "Parede Anal", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Anal contra parede" },
      { name: "Doggy Brutal Anal", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "Anal de quatro, brutal" },
      { name: "Missionário Sem Limites", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Foda sem limites, extrema" },
      { name: "Stand Carry Anal", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Anal no ar, ele segurando" },
      { name: "Doggy Dupla Penetração", image: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=600&fit=crop", description: "DP com brinquedos, de quatro" },
      { name: "Cowgirl DP", image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=600&fit=crop", description: "Dupla penetração cavalgando" },
      { name: "Missionário DP", image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=600&fit=crop", description: "Dupla penetração missionário" },
    ],
  };

  const drawCard = () => {
    setDrawing(true);
    setCurrentCard(null);

    setTimeout(() => {
      const cards = allCards[selectedCategory];
      const randomCard = cards[Math.floor(Math.random() * cards.length)];
      setCurrentCard(randomCard);
      setDrawing(false);
    }, 1000);
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-800/30 rounded-lg text-red-300 transition-all duration-300"
      >
        ← Voltar
      </button>

      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
        Cartas do Pecado - Posições
      </h2>

      {/* Category Selection */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`
              p-6 rounded-xl border-2 transition-all duration-300
              ${selectedCategory === cat.id
                ? `bg-gradient-to-br ${cat.color} border-white shadow-lg shadow-red-500/50 scale-105`
                : 'bg-gray-900 border-red-900/30 hover:border-red-500/50'
              }
            `}
          >
            <div className="text-4xl mb-2">{cat.icon}</div>
            <div className="font-bold">{cat.name}</div>
            <div className="text-xs opacity-60 mt-1">24 posições</div>
          </button>
        ))}
      </div>

      {/* Card Display */}
      <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 mb-8">
        <button
          onClick={drawCard}
          disabled={drawing}
          className={`
            w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 mb-6
            ${drawing
              ? 'bg-gray-700 cursor-not-allowed'
              : `bg-gradient-to-r ${categories.find(c => c.id === selectedCategory)?.color} hover:scale-105 hover:shadow-2xl hover:shadow-red-500/50`
            }
          `}
        >
          {drawing ? 'Sorteando...' : 'SORTEAR POSIÇÃO'}
        </button>

        {currentCard && (
          <div className={`p-6 bg-gradient-to-br ${categories.find(c => c.id === selectedCategory)?.color} rounded-xl animate-fade-in`}>
            <div className="mb-4">
              <img 
                src={currentCard.image} 
                alt={currentCard.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-center">{currentCard.name}</h3>
            <p className="text-lg text-white/90 text-center">{currentCard.description}</p>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="bg-red-900/10 border border-red-800/30 rounded-xl p-6 text-center">
        <p className="text-red-300 text-sm">
          💡 Dica: Cada categoria tem 24 posições únicas com imagens ilustrativas. Explore todos os níveis!
        </p>
      </div>
    </div>
  );
}

// Scenarios View (mantém igual)
function ScenariosView({ onBack }: { onBack: () => void }) {
  const [selectedScenario, setSelectedScenario] = useState<any>(null);

  const scenarios = [
    {
      id: 1,
      category: "Romântico",
      title: "Noite de Lua de Mel",
      color: "from-pink-400 to-rose-500",
      description: "Recriem a primeira noite juntos com muito romance e paixão",
      steps: [
        "Preparem o ambiente: velas, música suave, lençóis limpos",
        "Tomem banho juntos, lavem um ao outro com carinho",
        "Massagem sensual com óleo por 10 minutos cada",
        "Beijos e carícias por todo o corpo, sem pressa",
        "Sexo lento e apaixonado, olhando nos olhos",
        "Finalizem abraçados, sussurrando palavras de amor",
      ]
    },
    {
      id: 2,
      category: "Romântico",
      title: "Encontro Proibido",
      color: "from-pink-400 to-rose-500",
      description: "Finjam que são amantes secretos se encontrando",
      steps: [
        "Marquem encontro em lugar 'secreto' da casa",
        "Cheguem separados, finjam que é arriscado",
        "Beijos urgentes e apaixonados",
        "Tirem a roupa um do outro com pressa",
        "Sexo intenso mas romântico, como se fosse a última vez",
        "Abracem-se e 'se despeçam' até o próximo encontro",
      ]
    },
    {
      id: 3,
      category: "Quente",
      title: "Chefe e Secretária(o)",
      color: "from-rose-500 to-red-600",
      description: "Roleplay clássico de poder e sedução no escritório",
      steps: [
        "Montem um 'escritório': mesa, cadeira, roupa social",
        "Secretária(o) é chamado para reunião privada",
        "Chefe faz propostas indecentes",
        "Secretária(o) 'cede' à sedução",
        "Sexo sobre a mesa, no chão, na cadeira",
        "Finalizem com 'segredo mantido entre nós'",
      ]
    },
    {
      id: 4,
      category: "Quente",
      title: "Personal Trainer",
      color: "from-rose-500 to-red-600",
      description: "Treino que vira algo muito mais intenso",
      steps: [
        "Vista roupas de ginástica",
        "Personal ajuda com 'alongamentos' provocantes",
        "Toques 'acidentais' durante exercícios",
        "Tensão sexual aumenta até não aguentarem",
        "Sexo intenso no 'chão da academia'",
        "Múltiplas posições, como se fosse treino",
      ]
    },
    {
      id: 5,
      category: "Quente",
      title: "Estranhos no Bar",
      color: "from-rose-500 to-red-600",
      description: "Finjam que não se conhecem e se peguem pela primeira vez",
      steps: [
        "Comecem em cômodos separados",
        "Encontrem-se no 'bar' (sala/cozinha)",
        "Paquera, conversa sedutora, drinks",
        "Beijos e toques cada vez mais ousados",
        "Vão para 'casa de um dos dois'",
        "Sexo como se fosse primeira vez juntos",
      ]
    },
    {
      id: 6,
      category: "Tensão Sexual",
      title: "Massagem Tântrica",
      color: "from-red-600 to-orange-600",
      description: "Massagem sensual que explora todo o corpo",
      steps: [
        "Preparem óleo de massagem aquecido",
        "Massagem completa começando pelas costas",
        "Explorem cada parte do corpo lentamente",
        "Toquem as partes íntimas por último",
        "Deixem a tensão aumentar ao máximo",
        "Sexo intenso quando não aguentarem mais",
      ]
    },
    {
      id: 7,
      category: "Tensão Sexual",
      title: "Jogo da Provocação",
      color: "from-red-600 to-orange-600",
      description: "Provoquem-se sem poder tocar por 15 minutos",
      steps: [
        "Sentem-se de frente um para o outro",
        "Tirem a roupa lentamente, um de cada vez",
        "Masturbem-se na frente do outro",
        "Falem palavras sujas, contem fantasias",
        "NÃO podem se tocar por 15 minutos",
        "Depois, liberem toda a tensão acumulada",
      ]
    },
    {
      id: 8,
      category: "Tensão Sexual",
      title: "Striptease Duplo",
      color: "from-red-600 to-orange-600",
      description: "Façam striptease um para o outro",
      steps: [
        "Escolham músicas sensuais",
        "Cada um faz um striptease completo",
        "Dancem, provoquem, tirem a roupa devagar",
        "Podem tocar, mas não podem transar ainda",
        "Aumentem a provocação ao máximo",
        "Sexo explosivo quando terminarem",
      ]
    },
    {
      id: 9,
      category: "Dominação Leve",
      title: "Mestre e Escravo(a)",
      color: "from-orange-600 to-red-700",
      description: "Um domina, outro obedece completamente",
      steps: [
        "Definam quem será mestre e quem será escravo(a)",
        "Escravo(a) deve obedecer todas as ordens",
        "Mestre dá ordens cada vez mais ousadas",
        "Use vendas, amarras leves se quiserem",
        "Escravo(a) deve pedir permissão para gozar",
        "Mestre decide quando e como termina",
      ]
    },
    {
      id: 10,
      category: "Dominação Leve",
      title: "Interrogatório Sensual",
      color: "from-orange-600 to-red-700",
      description: "Um interroga, outro deve confessar fantasias",
      steps: [
        "Amarrem levemente quem será interrogado",
        "Façam perguntas íntimas e provocantes",
        "A cada resposta, uma recompensa sensual",
        "Se não responder, uma 'punição' gostosa",
        "Aumentem a intensidade gradualmente",
        "Terminem realizando as fantasias confessadas",
      ]
    },
    {
      id: 11,
      category: "EXTREMO",
      title: "Submissão Total",
      color: "from-red-700 to-purple-900",
      description: "Entrega completa por 30 minutos",
      steps: [
        "Um se entrega totalmente ao outro",
        "Dominador usa o submisso como quiser",
        "Todas as posições, todos os buracos",
        "Submisso deve agradecer e pedir mais",
        "Sem limites, sem piedade (dentro do consensual)",
        "Dominador decide quando e onde gozar",
      ]
    },
    {
      id: 12,
      category: "EXTREMO",
      title: "Noite do Inferno",
      color: "from-red-700 to-purple-900",
      description: "Sessão intensa sem limites",
      steps: [
        "Preparem brinquedos, lubrificantes, vendas, cordas",
        "Comecem com sexo oral intenso",
        "Experimentem todas as posições possíveis",
        "Anal, oral, vaginal - tudo na mesma sessão",
        "Múltiplos orgasmos, sem parar",
        "Terminem completamente exaustos e satisfeitos",
      ]
    },
    {
      id: 13,
      category: "Romântico",
      title: "Despertar Sensual",
      color: "from-pink-400 to-rose-500",
      description: "Acordem juntos com muito carinho",
      steps: [
        "Acordem abraçados, sem pressa",
        "Carícias suaves por todo o corpo",
        "Beijos lentos e apaixonados",
        "Sexo matinal tranquilo e gostoso",
        "Aproveitem a intimidade do momento",
        "Café da manhã na cama depois",
      ]
    },
    {
      id: 14,
      category: "Quente",
      title: "Médico(a) e Paciente",
      color: "from-rose-500 to-red-600",
      description: "Consulta médica que sai do controle",
      steps: [
        "Montem consultório improvisado",
        "Paciente tem 'problema íntimo'",
        "Médico(a) precisa fazer 'exame detalhado'",
        "Toques profissionais viram provocações",
        "Tratamento especial muito intenso",
        "Paciente sai completamente curado",
      ]
    },
    {
      id: 15,
      category: "Quente",
      title: "Professor(a) Particular",
      color: "from-rose-500 to-red-600",
      description: "Aula particular com lição especial",
      steps: [
        "Aluno(a) precisa de aula de reforço",
        "Professor(a) é muito atraente e sedutor(a)",
        "Lição envolve 'anatomia prática'",
        "Aluno(a) aprende com o corpo",
        "Nota máxima com prática intensa",
        "Aulas particulares viram rotina",
      ]
    },
    {
      id: 16,
      category: "Tensão Sexual",
      title: "Desafio dos 20 Minutos",
      color: "from-red-600 to-orange-600",
      description: "Provoquem-se sem penetração por 20 minutos",
      steps: [
        "Toquem-se, beijem-se, mas sem penetrar",
        "Sexo oral, masturbação mútua permitidos",
        "Aumentem a intensidade gradualmente",
        "Falem palavras sujas, gemam alto",
        "Aguentem 20 minutos completos",
        "Depois, sexo explosivo sem limites",
      ]
    },
    {
      id: 17,
      category: "Tensão Sexual",
      title: "Espelho, Espelho Meu",
      color: "from-red-600 to-orange-600",
      description: "Transar na frente do espelho",
      steps: [
        "Posicionem-se de frente para espelho grande",
        "Tirem a roupa um do outro olhando no espelho",
        "Toquem-se vendo o reflexo",
        "Experimentem posições onde vejam tudo",
        "Olhem nos olhos pelo espelho",
        "Vejam o prazer um do outro refletido",
      ]
    },
    {
      id: 18,
      category: "Dominação Leve",
      title: "Rainha e Servo",
      color: "from-orange-600 to-red-700",
      description: "Ela manda, ele obedece e serve",
      steps: [
        "Ela senta no trono (cadeira/sofá)",
        "Ele deve satisfazer todos os desejos dela",
        "Começa com massagem nos pés",
        "Sobe beijando e lambendo as pernas",
        "Sexo oral até ela ordenar parar",
        "Ela escolhe posições e ritmo",
      ]
    },
    {
      id: 19,
      category: "Dominação Leve",
      title: "Rei e Serva",
      color: "from-orange-600 to-red-700",
      description: "Ele manda, ela obedece e serve",
      steps: [
        "Ele dá ordens, ela cumpre",
        "Ela deve agradá-lo como ele quiser",
        "Começa com striptease para ele",
        "Sexo oral como ele preferir",
        "Ela pergunta 'como o senhor deseja?'",
        "Ele usa ela nas posições que quiser",
      ]
    },
    {
      id: 20,
      category: "EXTREMO",
      title: "Maratona do Prazer",
      color: "from-red-700 to-purple-900",
      description: "Sessão de 1 hora sem parar",
      steps: [
        "Preparem-se: água, lubrificante, toalhas",
        "Comecem com preliminares intensas",
        "Sexo oral até quase gozar",
        "Penetração em 10 posições diferentes",
        "Anal, oral, vaginal - tudo",
        "Múltiplos orgasmos, sem descanso",
      ]
    },
    {
      id: 21,
      category: "EXTREMO",
      title: "Sem Limites",
      color: "from-red-700 to-purple-900",
      description: "Realizem as fantasias mais ousadas",
      steps: [
        "Cada um conta sua fantasia mais extrema",
        "Realizem a fantasia dele primeiro",
        "Depois realizem a fantasia dela",
        "Combinem as duas fantasias",
        "Experimentem tudo que sempre quiseram",
        "Terminem completamente realizados",
      ]
    },
    {
      id: 22,
      category: "Romântico",
      title: "Banho de Espuma",
      color: "from-pink-400 to-rose-500",
      description: "Banho romântico que esquenta",
      steps: [
        "Preparem banheira com espuma e velas",
        "Entrem juntos, relaxem",
        "Lavem um ao outro com carinho",
        "Beijos e carícias molhadas",
        "Sexo suave na banheira",
        "Sequem um ao outro e continuem na cama",
      ]
    },
    {
      id: 23,
      category: "Quente",
      title: "Vizinhos Safados",
      color: "from-rose-500 to-red-600",
      description: "Vizinhos que sempre se desejaram",
      steps: [
        "Finjam que são vizinhos",
        "Um vai pedir algo emprestado",
        "Tensão sexual óbvia entre vocês",
        "Finalmente cedem à atração",
        "Sexo urgente e intenso",
        "Medo de serem descobertos aumenta tesão",
      ]
    },
    {
      id: 24,
      category: "Quente",
      title: "Entregador(a) Especial",
      color: "from-rose-500 to-red-600",
      description: "Entrega que vira algo mais",
      steps: [
        "Um finge ser entregador(a)",
        "Outro atende de roupa provocante",
        "Convite para entrar",
        "Sedução rápida e direta",
        "Sexo intenso na entrada mesmo",
        "Gorjeta muito especial",
      ]
    },
    {
      id: 25,
      category: "Tensão Sexual",
      title: "Jogo da Verdade Picante",
      color: "from-red-600 to-orange-600",
      description: "Perguntas íntimas que levam ao sexo",
      steps: [
        "Façam perguntas cada vez mais ousadas",
        "Cada resposta = uma peça de roupa",
        "Contem fantasias e desejos secretos",
        "Demonstrem fisicamente as respostas",
        "Tensão aumenta a cada pergunta",
        "Terminem realizando o que foi dito",
      ]
    },
    {
      id: 26,
      category: "Tensão Sexual",
      title: "Filme Pornô ao Vivo",
      color: "from-red-600 to-orange-600",
      description: "Assistam pornô e imitem",
      steps: [
        "Escolham um vídeo pornô juntos",
        "Assistam e comentem o que veem",
        "Comecem a imitar as cenas",
        "Experimentem as posições do vídeo",
        "Adicionem suas próprias variações",
        "Criem seu próprio filme",
      ]
    },
    {
      id: 27,
      category: "Dominação Leve",
      title: "Castigo e Recompensa",
      color: "from-orange-600 to-red-700",
      description: "Sistema de punições e prêmios",
      steps: [
        "Um é o dominador, outro o submisso",
        "Submisso comete 'erros' de propósito",
        "Cada erro = uma punição gostosa",
        "Bom comportamento = recompensa",
        "Punições: tapas, oral forçado, etc",
        "Recompensa final: gozar como quiser",
      ]
    },
    {
      id: 28,
      category: "Dominação Leve",
      title: "Leilão de Prazeres",
      color: "from-orange-600 to-red-700",
      description: "Um leiloa o corpo, outro compra",
      steps: [
        "Um é o leiloeiro, outro o comprador",
        "Leiloem partes do corpo e atos",
        "Comprador escolhe o que quer",
        "Cada compra deve ser realizada",
        "Aumentem os lances e ousadia",
        "Comprador usa tudo que comprou",
      ]
    },
    {
      id: 29,
      category: "EXTREMO",
      title: "Dupla Penetração",
      color: "from-red-700 to-purple-900",
      description: "Usem brinquedos para experiência intensa",
      steps: [
        "Preparem brinquedos e muito lubrificante",
        "Comecem com preliminares intensas",
        "Penetração vaginal primeiro",
        "Adicionem brinquedo anal gradualmente",
        "Dupla penetração completa",
        "Orgasmo intenso e múltiplo",
      ]
    },
    {
      id: 30,
      category: "EXTREMO",
      title: "Noite dos Fetiches",
      color: "from-red-700 to-purple-900",
      description: "Explorem todos os fetiches juntos",
      steps: [
        "Listem todos os fetiches de cada um",
        "Preparem o necessário para cada um",
        "Realizem um fetiche de cada vez",
        "Combinem fetiches diferentes",
        "Sem julgamentos, só prazer",
        "Descubram novos fetiches juntos",
      ]
    },
  ];

  const categories = [
    { name: "Romântico", color: "from-pink-400 to-rose-500", count: scenarios.filter(s => s.category === "Romântico").length },
    { name: "Quente", color: "from-rose-500 to-red-600", count: scenarios.filter(s => s.category === "Quente").length },
    { name: "Tensão Sexual", color: "from-red-600 to-orange-600", count: scenarios.filter(s => s.category === "Tensão Sexual").length },
    { name: "Dominação Leve", color: "from-orange-600 to-red-700", count: scenarios.filter(s => s.category === "Dominação Leve").length },
    { name: "EXTREMO", color: "from-red-700 to-purple-900", count: scenarios.filter(s => s.category === "EXTREMO").length },
  ];

  return (
    <div className="container mx-auto max-w-6xl">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-800/30 rounded-lg text-red-300 transition-all duration-300"
      >
        ← Voltar
      </button>

      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
        Roteiros Picantes
      </h2>

      {selectedScenario ? (
        <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8">
          <button
            onClick={() => setSelectedScenario(null)}
            className="mb-6 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-800/30 rounded-lg text-red-300 transition-all duration-300"
          >
            ← Ver Todos
          </button>

          <div className={`p-6 bg-gradient-to-br ${selectedScenario.color} rounded-xl mb-6`}>
            <div className="text-sm opacity-80 mb-2">{selectedScenario.category}</div>
            <h3 className="text-3xl font-bold mb-3">{selectedScenario.title}</h3>
            <p className="text-lg opacity-90">{selectedScenario.description}</p>
          </div>

          <div className="space-y-4">
            {selectedScenario.steps.map((step: string, index: number) => (
              <div key={index} className="bg-red-900/20 border border-red-800/30 rounded-xl p-4 flex gap-4">
                <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br ${selectedScenario.color} flex items-center justify-center font-bold`}>
                  {index + 1}
                </div>
                <p className="text-gray-200 flex-1 self-center">{step}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {/* Categories Summary */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
            {categories.map((cat) => (
              <div key={cat.name} className={`p-4 rounded-xl bg-gradient-to-br ${cat.color} text-center`}>
                <div className="text-2xl font-bold mb-1">{cat.count}</div>
                <div className="text-sm opacity-90">{cat.name}</div>
              </div>
            ))}
          </div>

          {/* Scenarios Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scenarios.map((scenario) => (
              <button
                key={scenario.id}
                onClick={() => setSelectedScenario(scenario)}
                className="group bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 text-left"
              >
                <div className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${scenario.color} text-xs font-bold mb-3`}>
                  {scenario.category}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                  {scenario.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">{scenario.description}</p>
                <div className="text-xs text-gray-500">{scenario.steps.length} passos</div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// 7 Days Program View (mantém igual)
function SevenDaysView({ onBack }: { onBack: () => void }) {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const programs = {
    light: {
      name: "7 Dias Sensuais",
      color: "from-pink-400 to-rose-500",
      description: "Programa leve para reconexão romântica",
      days: [
        {
          day: 1,
          title: "Reconexão",
          tasks: [
            "Jantar romântico à luz de velas",
            "Conversem sobre o que mais amam um no outro",
            "Massagem relaxante de 15 minutos",
            "Beijos e carícias suaves antes de dormir",
          ]
        },
        {
          day: 2,
          title: "Redescoberta",
          tasks: [
            "Tomem banho juntos com calma",
            "Explorem o corpo um do outro com as mãos",
            "Sexo lento e apaixonado",
            "Durmam abraçados a noite toda",
          ]
        },
        {
          day: 3,
          title: "Comunicação",
          tasks: [
            "Contem uma fantasia que nunca contaram",
            "Façam uma lista de coisas que querem experimentar",
            "Pratiquem uma coisa nova da lista",
            "Agradeçam pela abertura um do outro",
          ]
        },
        {
          day: 4,
          title: "Sensualidade",
          tasks: [
            "Dia sem roupa em casa",
            "Toquem-se sempre que passarem um pelo outro",
            "Sexo em um lugar diferente da casa",
            "Durmam nus e abraçados",
          ]
        },
        {
          day: 5,
          title: "Aventura",
          tasks: [
            "Experimentem uma posição nova",
            "Usem um brinquedo ou acessório",
            "Façam sexo oral com dedicação",
            "Gozem juntos se possível",
          ]
        },
        {
          day: 6,
          title: "Intensidade",
          tasks: [
            "Preliminares de 30 minutos",
            "Sexo em 3 posições diferentes",
            "Tentem fazer o outro gozar múltiplas vezes",
            "Terminem com muito carinho",
          ]
        },
        {
          day: 7,
          title: "Celebração",
          tasks: [
            "Dia inteiro dedicado ao prazer",
            "Realizem as melhores coisas da semana",
            "Sexo sem pressa, múltiplas vezes",
            "Celebrem a conexão renovada",
          ]
        },
      ]
    },
    hot: {
      name: "7 Dias Intensos",
      color: "from-rose-500 to-red-600",
      description: "Programa quente para apimentar a relação",
      days: [
        {
          day: 1,
          title: "Provocação",
          tasks: [
            "Sexting durante o dia todo",
            "Mandem fotos provocantes um para o outro",
            "Quando se encontrarem, ataquem-se",
            "Sexo urgente e intenso",
          ]
        },
        {
          day: 2,
          title: "Oral",
          tasks: [
            "Dia dedicado ao sexo oral",
            "Cada um recebe oral de 10 minutos",
            "Experimentem técnicas diferentes",
            "Façam 69 até gozar",
          ]
        },
        {
          day: 3,
          title: "Dominação",
          tasks: [
            "Um domina, outro obedece",
            "Usem vendas ou amarras leves",
            "Dominador escolhe tudo",
            "Submisso deve agradecer",
          ]
        },
        {
          day: 4,
          title: "Posições",
          tasks: [
            "Experimentem 5 posições diferentes",
            "Fiquem pelo menos 5 minutos em cada",
            "Descubram qual é a favorita",
            "Terminem na melhor posição",
          ]
        },
        {
          day: 5,
          title: "Brinquedos",
          tasks: [
            "Usem vibradores ou outros brinquedos",
            "Experimentem em diferentes lugares",
            "Combinem brinquedos com sexo",
            "Múltiplos orgasmos para ela",
          ]
        },
        {
          day: 6,
          title: "Anal",
          tasks: [
            "Dia dedicado ao prazer anal",
            "Comecem com massagem e dedos",
            "Usem muito lubrificante",
            "Sexo anal completo se confortável",
          ]
        },
        {
          day: 7,
          title: "Maratona",
          tasks: [
            "Sessão de 1 hora sem parar",
            "Todas as posições da semana",
            "Oral, vaginal, anal",
            "Múltiplos orgasmos para os dois",
          ]
        },
      ]
    },
    extreme: {
      name: "7 Dias do Inferno",
      color: "from-red-700 to-purple-900",
      description: "Programa extremo sem limites",
      days: [
        {
          day: 1,
          title: "Submissão",
          tasks: [
            "Ela se entrega completamente por 24h",
            "Ele usa ela quando e como quiser",
            "Ela deve agradecer e pedir mais",
            "Sem limites, sem reclamar",
          ]
        },
        {
          day: 2,
          title: "Dominação",
          tasks: [
            "Ele se entrega completamente por 24h",
            "Ela usa ele quando e como quiser",
            "Ele deve obedecer tudo",
            "Ela decide quando ele pode gozar",
          ]
        },
        {
          day: 3,
          title: "Garganta Profunda",
          tasks: [
            "Dia dedicado ao oral extremo",
            "Ela pratica garganta profunda",
            "Ele fode a boca dela",
            "Ele goza na garganta dela múltiplas vezes",
          ]
        },
        {
          day: 4,
          title: "Anal Intenso",
          tasks: [
            "Dia inteiro de sexo anal",
            "Comecem devagar, terminem com força",
            "Múltiplas posições anais",
            "Ele goza dentro do cu dela",
          ]
        },
        {
          day: 5,
          title: "Dupla Penetração",
          tasks: [
            "Usem brinquedos para DP",
            "Vaginal e anal ao mesmo tempo",
            "Ela deve aguentar o máximo que puder",
            "Orgasmos intensos e múltiplos",
          ]
        },
        {
          day: 6,
          title: "Sem Piedade",
          tasks: [
            "Foda brutal por horas",
            "Ele usa ela em todas as posições",
            "Tapas, puxões de cabelo, cuspe",
            "Ela implora mas ele não para",
          ]
        },
        {
          day: 7,
          title: "Grand Finale",
          tasks: [
            "Realizem todas as fantasias mais extremas",
            "Usem todos os buracos, todas as posições",
            "Sessão de 2 horas sem parar",
            "Terminem completamente exaustos e realizados",
          ]
        },
      ]
    },
  };

  return (
    <div className="container mx-auto max-w-6xl">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-800/30 rounded-lg text-red-300 transition-all duration-300"
      >
        ← Voltar
      </button>

      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
        7 Dias do Fogo
      </h2>

      {!selectedProgram ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(programs).map(([key, program]) => (
            <button
              key={key}
              onClick={() => setSelectedProgram(key)}
              className="group bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 text-center"
            >
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${program.color} flex items-center justify-center text-3xl font-bold`}>
                7
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                {program.name}
              </h3>
              <p className="text-gray-400">{program.description}</p>
            </button>
          ))}
        </div>
      ) : (
        <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8">
          <button
            onClick={() => setSelectedProgram(null)}
            className="mb-6 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-800/30 rounded-lg text-red-300 transition-all duration-300"
          >
            ← Ver Programas
          </button>

          <div className={`p-6 bg-gradient-to-br ${programs[selectedProgram as keyof typeof programs].color} rounded-xl mb-8 text-center`}>
            <h3 className="text-3xl font-bold mb-2">{programs[selectedProgram as keyof typeof programs].name}</h3>
            <p className="text-lg opacity-90">{programs[selectedProgram as keyof typeof programs].description}</p>
          </div>

          <div className="space-y-6">
            {programs[selectedProgram as keyof typeof programs].days.map((day) => (
              <div key={day.day} className="bg-red-900/20 border border-red-800/30 rounded-xl p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${programs[selectedProgram as keyof typeof programs].color} flex items-center justify-center font-bold text-lg`}>
                    {day.day}
                  </div>
                  <h4 className="text-2xl font-bold text-white">{day.title}</h4>
                </div>
                <ul className="space-y-2 ml-16">
                  {day.tasks.map((task, index) => (
                    <li key={index} className="text-gray-300 flex items-start gap-2">
                      <span className="text-red-500 mt-1">•</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Distance Game View - NOVO
function DistanceView({ onBack }: { onBack: () => void }) {
  const [selectedLevel, setSelectedLevel] = useState<string>("romantic");
  const [currentChallenge, setCurrentChallenge] = useState<any>(null);
  const [drawing, setDrawing] = useState(false);

  const levels = [
    { id: "romantic", name: "Romântico", color: "from-pink-400 to-rose-500", icon: "💕" },
    { id: "hot", name: "Quente", color: "from-rose-500 to-red-600", icon: "🔥" },
    { id: "extreme", name: "Extremo", color: "from-red-600 to-purple-900", icon: "😈" },
  ];

  const challenges: any = {
    romantic: [
      { title: "Chamada Romântica", description: "Façam uma videochamada de 30 minutos apenas conversando e se olhando nos olhos", type: "video" },
      { title: "Carta de Amor", description: "Escrevam uma carta de amor um para o outro e leiam por chamada", type: "text" },
      { title: "Jantar Virtual", description: "Preparem o mesmo prato e jantem juntos por videochamada", type: "video" },
      { title: "Playlist do Amor", description: "Criem uma playlist juntos e ouçam ao mesmo tempo", type: "audio" },
      { title: "Foto Sensual", description: "Tirem uma foto sensual (sem nudez) e enviem um para o outro", type: "photo" },
      { title: "Mensagem de Voz", description: "Gravem mensagens de voz dizendo o que sentem", type: "audio" },
      { title: "Striptease Suave", description: "Façam um striptease suave por videochamada", type: "video" },
      { title: "Beijo Virtual", description: "Beijem a câmera ao mesmo tempo durante videochamada", type: "video" },
      { title: "Massagem Guiada", description: "Um guia o outro a se auto-massagear por chamada", type: "video" },
      { title: "Confissão Íntima", description: "Contem uma fantasia que nunca contaram antes", type: "video" },
    ],
    hot: [
      { title: "Show Sensual", description: "Façam um show sensual um para o outro por videochamada", type: "video" },
      { title: "Masturbação Mútua", description: "Masturbem-se juntos por videochamada", type: "video" },
      { title: "Sexting Intenso", description: "Troquem mensagens explícitas por 20 minutos", type: "text" },
      { title: "Nudes Artísticos", description: "Tirem fotos nuas artísticas e troquem", type: "photo" },
      { title: "Áudio Gemendo", description: "Gravem áudios gemendo e enviem", type: "audio" },
      { title: "Vídeo Provocante", description: "Gravem vídeo curto se tocando e enviem", type: "video" },
      { title: "Desafio de Roupa", description: "Vistam apenas uma peça de roupa escolhida pelo outro", type: "video" },
      { title: "Jogo da Verdade", description: "Façam perguntas íntimas e respondam com sinceridade", type: "video" },
      { title: "Contagem Regressiva", description: "Masturbem-se e gozem juntos em contagem regressiva", type: "video" },
      { title: "Fantasia Compartilhada", description: "Descrevam em detalhes uma fantasia sexual", type: "video" },
      { title: "Strip Poker Virtual", description: "Joguem strip poker por videochamada", type: "video" },
      { title: "Comandos Remotos", description: "Um dá comandos de como o outro deve se tocar", type: "video" },
    ],
    extreme: [
      { title: "Sexo Virtual Completo", description: "Sessão completa de sexo virtual até gozarem", type: "video" },
      { title: "Dominação Remota", description: "Um domina o outro dando ordens explícitas", type: "video" },
      { title: "Vídeo Masturbação", description: "Gravem vídeo completo se masturbando até gozar", type: "video" },
      { title: "Brinquedos Controlados", description: "Usem brinquedos controlados remotamente", type: "video" },
      { title: "Roleplay Extremo", description: "Interpretem uma fantasia extrema por chamada", type: "video" },
      { title: "Desafio Sem Limites", description: "Realizem qualquer pedido do parceiro sem recusar", type: "video" },
      { title: "Maratona Virtual", description: "Sessão de 1 hora de sexo virtual sem parar", type: "video" },
      { title: "Múltiplos Orgasmos", description: "Tentem ter múltiplos orgasmos juntos", type: "video" },
      { title: "Confissões Extremas", description: "Contem suas fantasias mais extremas e realizem virtualmente", type: "video" },
      { title: "Show Completo", description: "Façam um show pornô completo um para o outro", type: "video" },
      { title: "Anal Virtual", description: "Usem brinquedos anais enquanto se masturbam juntos", type: "video" },
      { title: "Submissão Total", description: "Um se submete completamente aos comandos do outro", type: "video" },
    ],
  };

  const drawChallenge = () => {
    setDrawing(true);
    setCurrentChallenge(null);

    setTimeout(() => {
      const levelChallenges = challenges[selectedLevel];
      const randomChallenge = levelChallenges[Math.floor(Math.random() * levelChallenges.length)];
      setCurrentChallenge(randomChallenge);
      setDrawing(false);
    }, 1000);
  };

  const getTypeIcon = (type: string) => {
    const icons: any = {
      video: "📹",
      text: "💬",
      photo: "📸",
      audio: "🎤",
    };
    return icons[type] || "💕";
  };

  return (
    <div className="container mx-auto max-w-4xl">
      <button
        onClick={onBack}
        className="mb-6 px-4 py-2 bg-red-900/20 hover:bg-red-900/40 border border-red-800/30 rounded-lg text-red-300 transition-all duration-300"
      >
        ← Voltar
      </button>

      <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">
        Jogo à Distância
      </h2>

      <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-600/50 rounded-2xl p-6 mb-8 text-center">
        <Wifi className="w-12 h-12 mx-auto mb-3 text-purple-400" />
        <p className="text-gray-300">
          Desafios picantes para casais que estão longe. Conectem-se virtualmente e mantenham o fogo aceso! 🔥
        </p>
      </div>

      {/* Level Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => setSelectedLevel(level.id)}
            className={`
              p-6 rounded-xl border-2 transition-all duration-300
              ${selectedLevel === level.id
                ? `bg-gradient-to-br ${level.color} border-white shadow-lg shadow-purple-500/50 scale-105`
                : 'bg-gray-900 border-purple-900/30 hover:border-purple-500/50'
              }
            `}
          >
            <div className="text-4xl mb-2">{level.icon}</div>
            <div className="font-bold text-lg">{level.name}</div>
            <div className="text-xs opacity-60 mt-1">{challenges[level.id].length} desafios</div>
          </button>
        ))}
      </div>

      {/* Challenge Display */}
      <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-900/30 rounded-2xl p-8 mb-8">
        <button
          onClick={drawChallenge}
          disabled={drawing}
          className={`
            w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 mb-6
            ${drawing
              ? 'bg-gray-700 cursor-not-allowed'
              : `bg-gradient-to-r ${levels.find(l => l.id === selectedLevel)?.color} hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50`
            }
          `}
        >
          {drawing ? 'Sorteando...' : 'SORTEAR DESAFIO'}
        </button>

        {currentChallenge && (
          <div className={`p-6 bg-gradient-to-br ${levels.find(l => l.id === selectedLevel)?.color} rounded-xl animate-fade-in`}>
            <div className="text-center mb-4">
              <span className="text-5xl">{getTypeIcon(currentChallenge.type)}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-center">{currentChallenge.title}</h3>
            <p className="text-lg text-white/90 text-center leading-relaxed">{currentChallenge.description}</p>
            <div className="mt-4 text-center text-sm opacity-75">
              Tipo: {currentChallenge.type === 'video' ? 'Videochamada' : currentChallenge.type === 'text' ? 'Mensagem' : currentChallenge.type === 'photo' ? 'Foto' : 'Áudio'}
            </div>
          </div>
        )}
      </div>

      {/* Tips */}
      <div className="bg-purple-900/10 border border-purple-800/30 rounded-xl p-6">
        <h3 className="text-xl font-bold mb-4 text-purple-400">Dicas para Jogos à Distância:</h3>
        <ul className="space-y-2 text-gray-300">
          <li className="flex items-start gap-2">
            <span className="text-purple-500">•</span>
            <span>Usem apps de videochamada com boa qualidade (Zoom, FaceTime, WhatsApp)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500">•</span>
            <span>Garantam privacidade: tranquem a porta, usem fones se necessário</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500">•</span>
            <span>Preparem o ambiente: iluminação boa, ângulo da câmera, música</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500">•</span>
            <span>Combinem horários onde ambos estejam relaxados e sem pressa</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-purple-500">•</span>
            <span>Respeitem os limites um do outro, mesmo à distância</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
