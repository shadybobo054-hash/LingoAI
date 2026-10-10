
"use client";

import { useEffect, useState } from "react";

const modes = [
  {
    id: "grammar",
    title: "Grammar",
    subtitle: "Master English rules",
    desc: "افهم القواعد وطبّق عليها في امتحانات تفاعلية.",
    icon: "📝",
    color: "blue",
    lesson: "Present Simple",
    explanation:
      "نستخدم المضارع البسيط للتعبير عن العادات والحقائق والأشياء التي تحدث بانتظام.",
    rule: "I / You / We / They + verb\nHe / She / It + verb + s",
    words: ["Usually = عادةً", "Always = دائمًا", "Sometimes = أحيانًا"],
    example: "I play football every day.\nShe plays football every day.",
    questions: [
      {
        q: "She ___ English every day.",
        options: ["study", "studies", "studying"],
        answer: 1,
        why: "مع She نحول study إلى studies.",
      },
      {
        q: "They ___ to school every morning.",
        options: ["go", "goes", "going"],
        answer: 0,
        why: "مع They نستخدم الفعل الأساسي go.",
      },
      {
        q: "He ___ coffee every morning.",
        options: ["drink", "drinks", "drinking"],
        answer: 1,
        why: "مع He نضيف s إلى الفعل drink.",
      },
    ],
  },
  {
    id: "vocabulary",
    title: "Vocabulary",
    subtitle: "Discover new words",
    desc: "احفظ كلمات جديدة وتعلّم استخدامها في الحياة اليومية.",
    icon: "📚",
    color: "purple",
    lesson: "Everyday Vocabulary",
    explanation:
      "تعلم الكلمات من خلال معناها ومثال عليها، وحاول استخدامها في جمل من تأليفك.",
    rule: "Learn the meaning.\nRead the example.\nUse the word yourself.",
    words: [
      "Curious = فضولي",
      "Affordable = سعره مناسب",
      "Confident = واثق",
    ],
    example:
      "I'm curious about the world.\nThis restaurant is affordable.\nShe feels confident.",
    questions: [
      {
        q: 'What does "Curious" mean?',
        options: ["فضولي", "غاضب", "متعب"],
        answer: 0,
        why: "Curious تعني فضولي أو لديه رغبة في المعرفة.",
      },
      {
        q: '"Affordable" means...',
        options: ["Expensive", "Reasonably priced", "Very old"],
        answer: 1,
        why: "Affordable تعني أن السعر مناسب.",
      },
      {
        q: 'What is the meaning of "Confident"?',
        options: ["خائف", "واثق", "حزين"],
        answer: 1,
        why: "Confident تعني واثقًا من نفسه.",
      },
    ],
  },
  {
    id: "listening",
    title: "Listening",
    subtitle: "Train your ears",
    desc: "افهم المحادثات الإنجليزية واختبر مدى استيعابك.",
    icon: "🎧",
    color: "cyan",
    lesson: "At the Café",
    explanation:
      "اقرأ المحادثة وركز على الكلمات التي توضح الطلب والمكان. التدريب هنا نصي ويمكن إضافة تشغيل صوت حقيقي لاحقًا.",
    rule: "Barista: What would you like?\nCustomer: I'd like a cup of coffee, please.\nBarista: Anything else?\nCustomer: No, thank you.",
    words: ["I'd like = أود", "Anything else? = شيء آخر؟", "Please = من فضلك"],
    example: "Customer: Can I have a sandwich?\nBarista: Of course!",
    questions: [
      {
        q: "What does the customer order first?",
        options: ["Tea", "Coffee", "Juice"],
        answer: 1,
        why: "العميل طلب كوبًا من القهوة.",
      },
      {
        q: 'What does "Anything else?" mean?',
        options: ["أين أنت؟", "كم الساعة؟", "شيء آخر؟"],
        answer: 2,
        why: "تُستخدم للسؤال عما إذا كان الشخص يريد شيئًا إضافيًا.",
      },
      {
        q: "Where does the conversation happen?",
        options: ["At a café", "At a school", "At an airport"],
        answer: 0,
        why: "المحادثة بين عميل وموظف في مقهى.",
      },
    ],
  },
  {
    id: "sentence-building",
    title: "Sentence Building",
    subtitle: "Build better sentences",
    desc: "رتب الكلمات وتعلّم تكوين الجمل بطريقة صحيحة.",
    icon: "🧩",
    color: "purple",
    lesson: "English Word Order",
    explanation:
      "الترتيب الأساسي للجملة الإنجليزية هو Subject + Verb + Object، أي الفاعل ثم الفعل ثم المفعول به.",
    rule: "Subject + Verb + Object\nShe + reads + books.",
    words: ["Subject = الفاعل", "Verb = الفعل", "Object = المفعول به"],
    example: "I learn English.\nThey play football.\nShe reads books.",
    questions: [
      {
        q: "Choose the correct sentence.",
        options: ["Books she reads.", "She reads books.", "Reads she books."],
        answer: 1,
        why: "الترتيب الصحيح هو الفاعل ثم الفعل ثم المفعول به.",
      },
      {
        q: "Choose the correct question.",
        options: ["Where you live?", "Where do you live?", "Where live you?"],
        answer: 1,
        why: "نستخدم Where + do + subject + verb.",
      },
      {
        q: "Complete: We ___ English.",
        options: ["learning", "learn", "learns"],
        answer: 1,
        why: "مع We نستخدم الفعل الأساسي learn.",
      },
    ],
  },
  {
    id: "pronunciation",
    title: "Pronunciation",
    subtitle: "Speak with confidence",
    desc: "تعرّف على النطق الصحيح وتدرّب على الكلمات الإنجليزية.",
    icon: "🎙️",
    color: "blue",
    lesson: "Common English Sounds",
    explanation:
      "استمع إلى نطق الكلمة من مصدر صوتي موثوق، ثم كررها ببطء وانتبه إلى المقاطع الصوتية.",
    rule: "Comfortable — مريح\nInteresting — مثير للاهتمام\nBeautiful — جميل",
    words: ["Comfortable", "Interesting", "Beautiful"],
    example: "Try saying each word slowly, then use it in a sentence.",
    questions: [
      {
        q: 'Which word means "مريح"?',
        options: ["Beautiful", "Comfortable", "Interesting"],
        answer: 1,
        why: "Comfortable تعني مريح.",
      },
      {
        q: "What helps improve pronunciation?",
        options: ["Listen and repeat", "Never speak", "Only read silently"],
        answer: 0,
        why: "الاستماع والتكرار يساعدان على تطوير النطق.",
      },
      {
        q: '"Beautiful" means...',
        options: ["جميل", "صعب", "سريع"],
        answer: 0,
        why: "Beautiful تعني جميل.",
      },
    ],
  },
  {
    id: "quick-play",
    title: "Quick Play",
    subtitle: "Challenge yourself",
    desc: "اختبر مستواك في القواعد والكلمات في تحدٍ سريع.",
    icon: "⚡",
    color: "teal",
    lesson: "Mixed English Challenge",
    explanation:
      "هذا التحدي يجمع بين القواعد والمفردات. اقرأ السؤال جيدًا قبل اختيار الإجابة.",
    rule: "Read carefully.\nThink before you answer.\nLearn from every mistake.",
    words: ["Grammar", "Vocabulary", "Sentence structure"],
    example: "Practice a little every day to build confidence.",
    questions: [
      {
        q: "I ___ happy today.",
        options: ["am", "is", "are"],
        answer: 0,
        why: "مع I نستخدم am.",
      },
      {
        q: 'What is the opposite of "Easy"?',
        options: ["Simple", "Difficult", "Happy"],
        answer: 1,
        why: "Difficult تعني صعب، وهي عكس Easy.",
      },
      {
        q: "She ___ my friend.",
        options: ["are", "am", "is"],
        answer: 2,
        why: "مع She نستخدم is.",
      },
    ],
  },
];

const styles: Record<string, string> = {
  blue: "from-blue-500/20 to-indigo-500/5 border-blue-400/30",
  purple: "from-purple-500/20 to-indigo-500/5 border-purple-400/30",
  cyan: "from-cyan-500/20 to-blue-500/5 border-cyan-400/30",
  teal: "from-teal-500/20 to-emerald-500/5 border-teal-400/30",
};

export default function PracticePage() {
  const [active, setActive] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);
  const [xp, setXp] = useState(0);

  const mode = modes.find((item) => item.id === active);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0", "translate-x-10");
            entry.target.classList.add("opacity-100", "translate-x-0");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [active]);

  function openMode(id: string) {
    setActive(id);
    setAnswers({});
    setChecked(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function submit() {
    if (!mode || checked) return;

    const score = mode.questions.filter(
      (q, i) => answers[i] === q.answer
    ).length;

    if (!completed.includes(mode.id)) {
      setCompleted((old) => [...old, mode.id]);
      setXp((old) => old + score * 10);
    }

    setChecked(true);
  }

  function resetQuiz() {
    if (mode && completed.includes(mode.id)) {
      setCompleted((old) => old.filter((id) => id !== mode.id));
      const score = mode.questions.filter(
        (q, i) => answers[i] === q.answer
      ).length;
      setXp((old) => Math.max(0, old - score * 10));
    }
    setAnswers({});
    setChecked(false);
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#050817] text-white">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-600/15 blur-[130px]" />
        <div className="absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-purple-600/15 blur-[130px]" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-10">
        {!mode ? (
          <>
            <section
              data-reveal
              className="mb-10 translate-x-10 rounded-[32px] border border-blue-400/20 bg-gradient-to-br from-[#111d40] via-[#11142e] to-[#291440] p-7 opacity-0 transition-all duration-700 sm:p-12"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                Your Learning World
              </div>

              <div className="grid items-center gap-8 lg:grid-cols-[1fr_220px]">
                <div>
                  <h1 className="text-4xl font-black leading-tight sm:text-6xl">
                    Sharpen Your Skills,
                    <br />
                    Build Your{" "}
                    <span className="bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Confidence.
                    </span>
                  </h1>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                    Learn English through interactive lessons, useful
                    examples, and challenges that help you improve every day.
                  </p>
                  <button
                    onClick={() =>
                      document.getElementById("worlds")?.scrollIntoView({
                        behavior: "smooth",
                      })
                    }
                    className="mt-7 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-4 font-bold shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-purple-500/30"
                  >
                    Explore Practice Worlds <span className="ml-2">↓</span>
                  </button>
                </div>

                <div className="hidden lg:flex lg:justify-center">
                  <div className="flex h-48 w-48 rotate-3 flex-col items-center justify-center rounded-[38px] border border-white/10 bg-white/[0.04] shadow-2xl shadow-purple-500/10">
                    <span className="text-7xl">🚀</span>
                    <span className="mt-3 text-sm font-bold text-cyan-200">
                      Level Up!
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section
              data-reveal
              className="mb-12 grid translate-x-10 grid-cols-2 gap-4 opacity-0 transition-all duration-700 sm:grid-cols-4"
            >
              {[
                { icon: "🎮", value: `${completed.length}/6`, label: "Worlds Completed" },
                { icon: "💎", value: xp, label: "Earned XP" },
                { icon: "🧠", value: "18", label: "Practice Questions" },
                { icon: "🎯", value: completed.length ? "In Progress" : "Ready", label: "Your Journey" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 transition hover:border-blue-400/30 hover:bg-white/[0.06]"
                >
                  <span className="text-2xl">{item.icon}</span>
                  <p className="mt-3 text-2xl font-black">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.label}</p>
                </div>
              ))}
            </section>

            <section id="worlds" className="scroll-mt-6">
              <div
                data-reveal
                className="mb-7 translate-x-10 opacity-0 transition-all duration-700"
              >
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                  Choose Your Adventure
                </p>
                <h2 className="text-3xl font-black sm:text-4xl">
                  Explore Your{" "}
                  <span className="bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                    Practice Worlds
                  </span>
                </h2>
                <p className="mt-3 text-sm text-slate-400">
                  Choose a world to learn, practice, and test your skills.
                </p>
              </div>

              <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {modes.map((item, i) => (
                  <button
                    key={item.id}
                    data-reveal
                    style={{ transitionDelay: `${(i % 3) * 100}ms` }}
                    onClick={() => openMode(item.id)}
                    className={`group relative translate-x-10 overflow-hidden rounded-3xl border bg-gradient-to-br p-6 text-left opacity-0 transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 ${styles[item.color]}`}
                  >
                    <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/[0.05] blur-2xl transition group-hover:scale-150" />
                    <div className="relative flex items-start justify-between">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.07] text-4xl transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                        {item.icon}
                      </div>
                      <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-xs text-slate-300">
                        {completed.includes(item.id) ? "✓ Completed" : "Lesson + Quiz"}
                      </span>
                    </div>
                    <h3 className="relative mt-6 text-xl font-extrabold">
                      {item.title}
                    </h3>
                    <p className="relative mt-1 text-xs font-semibold text-cyan-300">
                      {item.subtitle}
                    </p>
                    <p className="relative mt-3 min-h-12 text-sm leading-6 text-slate-400">
                      {item.desc}
                    </p>
                    <div className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm font-bold">
                      <span>Enter World</span>
                      <span className="transition group-hover:translate-x-2">→</span>
                    </div>
                  </button>
                ))}
              </div>
            </section>

            <section className="mt-12 rounded-3xl border border-purple-400/20 bg-gradient-to-r from-blue-950/70 to-purple-950/60 p-7">
              <h2 className="text-2xl font-black">Your Learning Journey</h2>
              <p className="mt-2 text-sm text-slate-400">
                Complete practice worlds to build your confidence.
              </p>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-500"
                  style={{ width: `${(completed.length / modes.length) * 100}%` }}
                />
              </div>
              <p className="mt-3 text-xs text-slate-400">
                {completed.length} of {modes.length} worlds completed
              </p>
            </section>
          </>
        ) : (
          <section className="animate-in fade-in duration-500">
            <button
              onClick={() => {
                setActive("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mb-7 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/[0.08]"
            >
              ← Back to Practice Worlds
            </button>

            <div className={`overflow-hidden rounded-[30px] border bg-gradient-to-br p-6 sm:p-10 ${styles[mode.color]}`}>
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                    Learning World / {mode.title}
                  </p>
                  <h1 className="mt-4 text-3xl font-black sm:text-5xl">
                    {mode.lesson}
                  </h1>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                    {mode.desc}
                  </p>
                </div>
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border border-white/10 bg-white/[0.06] text-6xl">
                  {mode.icon}
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: "📖", label: "Learn", value: "Understand the lesson" },
                  { icon: "✍️", label: "Practice", value: "Answer the questions" },
                  { icon: "💎", label: "Earn XP", value: "10 XP per correct answer" },
                ].map((step, i) => (
                  <div key={step.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/15 p-4">
                    <span className="text-2xl">{step.icon}</span>
                    <div>
                      <p className="text-sm font-bold">{i + 1}. {step.label}</p>
                      <p className="mt-1 text-xs text-slate-400">{step.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-7 grid items-start gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="space-y-6">
                <article className="rounded-3xl border border-white/10 bg-[#0c1227] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-xl">📘</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue-300">Step 01</p>
                      <h2 className="text-xl font-black">Lesson Explanation</h2>
                    </div>
                  </div>
                  <p className="mt-5 text-sm leading-8 text-slate-300">
                    {mode.explanation}
                  </p>
                  <div className="mt-5 whitespace-pre-line rounded-2xl border border-blue-400/20 bg-blue-500/[0.07] p-5 font-mono text-sm leading-8 text-cyan-100">
                    {mode.rule}
                  </div>
                </article>

                <article className="rounded-3xl border border-white/10 bg-[#0c1227] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-xl">✨</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-purple-300">Step 02</p>
                      <h2 className="text-xl font-black">Examples in Real Life</h2>
                    </div>
                  </div>
                  <div className="mt-5 whitespace-pre-line rounded-2xl bg-white/[0.035] p-5 text-sm leading-8 text-slate-200">
                    {mode.example}
                  </div>
                </article>

                <article className="rounded-3xl border border-white/10 bg-[#0c1227] p-6 sm:p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/15 text-xl">📚</span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-emerald-300">Step 03</p>
                      <h2 className="text-xl font-black">Words to Remember</h2>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {mode.words.map((word, i) => (
                      <div key={word} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.025] p-4">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-xs font-bold text-emerald-300">{i + 1}</span>
                        <p className="text-sm text-slate-200">{word}</p>
                      </div>
                    ))}
                  </div>
                </article>
              </div>

              <aside className="rounded-3xl border border-cyan-400/20 bg-gradient-to-b from-[#101b35] to-[#0b1021] p-5 sm:p-7">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">Step 04</p>
                    <h2 className="mt-2 text-2xl font-black">Knowledge Check</h2>
                  </div>
                  <span className="text-3xl">🧠</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  اختر إجابة لكل سؤال، ثم اضغط على Check Answers لمعرفة نتيجتك.
                </p>

                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all"
                    style={{ width: `${(Object.keys(answers).length / mode.questions.length) * 100}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-slate-400">
                  {Object.keys(answers).length} / {mode.questions.length} answered
                </p>

                {mode.questions.map((q, i) => (
                  <div key={q.q} className="mt-6 border-t border-white/10 pt-5">
                    <p className="text-sm font-bold leading-6">
                      <span className="mr-2 text-cyan-300">0{i + 1}</span>
                      {q.q}
                    </p>
                    <div className="mt-3 space-y-2">
                      {q.options.map((option, j) => {
                        const selected = answers[i] === j;
                        const correct = q.answer === j;
                        let style = "border-white/10 bg-white/[0.025] hover:border-blue-400/40";

                        if (checked && correct) {
                          style = "border-emerald-400/50 bg-emerald-500/10 text-emerald-200";
                        } else if (checked && selected) {
                          style = "border-rose-400/50 bg-rose-500/10 text-rose-200";
                        } else if (selected) {
                          style = "border-blue-400/60 bg-blue-500/15 text-blue-100";
                        }

                        return (
                          <button
                            key={option}
                            disabled={checked}
                            onClick={() => setAnswers((old) => ({ ...old, [i]: j }))}
                            className={`flex w-full items-center gap-3 rounded-xl border p-3 text-left text-sm transition ${style}`}
                          >
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/[0.06] text-xs">
                              {String.fromCharCode(65 + j)}
                            </span>
                            <span>{option}</span>
                            {checked && correct && <span className="ml-auto">✓</span>}
                          </button>
                        );
                      })}
                    </div>
                    {checked && (
                      <p className="mt-3 rounded-xl bg-white/[0.035] p-3 text-xs leading-6 text-slate-300">
                        <span className="font-bold text-cyan-300">Why? </span>
                        {q.why}
                      </p>
                    )}
                  </div>
                ))}

                {!checked ? (
                  <button
                    disabled={Object.keys(answers).length !== mode.questions.length}
                    onClick={submit}
                    className="mt-7 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-4 font-bold transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Check Answers →
                  </button>
                ) : (
                  <div className="mt-7 rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.06] p-5 text-center">
                    <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">Your Result</p>
                    <p className="mt-3 text-5xl font-black">
                      {mode.questions.filter((q, i) => answers[i] === q.answer).length}
                      <span className="text-2xl text-slate-500">/{mode.questions.length}</span>
                    </p>
                    <p className="mt-3 text-sm text-slate-300">
                      {mode.questions.every((q, i) => answers[i] === q.answer)
                        ? "Excellent! Perfect score! 🎉"
                        : "Good effort! Review your mistakes and try again."}
                    </p>
                    <p className="mt-3 text-sm font-bold text-emerald-300">
                      +{mode.questions.filter((q, i) => answers[i] === q.answer).length * 10} XP earned
                    </p>
                    <button onClick={resetQuiz} className="mt-5 w-full rounded-xl border border-white/15 px-4 py-3 text-sm font-bold transition hover:bg-white/10">
                      Try Again ↻
                    </button>
                  </div>
                )}
              </aside>
            </div>

            <button
              onClick={() => {
                setActive("");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="mt-8 w-full rounded-2xl border border-white/10 bg-white/[0.04] p-4 font-bold transition hover:bg-white/[0.08]"
            >
              ← Return to All Practice Worlds
            </button>
          </section>
        )}

        <footer className="mt-12 border-t border-white/[0.07] pt-6 text-center text-xs text-slate-500">
          ✦ Your journey, your pace, your future. ✦
        </footer>
      </div>
    </main>
  );
}
