
import React from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Drama,
  Sparkles,
  MapPin,
  Camera,
  Users,
  Hotel,
  Flame,
  Gem,
  ScrollText,
  ArrowRight,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

const services = [
  {
    title: "イマーシブエンターテインメント制作・運営",
    desc: "イマーシブシアター、インタラクティブ体験、テーマ空間の企画・運営を通じて、体験価値と商業価値を両立したプロジェクトを創出します。",
    icon: Drama,
  },
  {
    title: "空間リノベーション・価値向上",
    desc: "ホテルや商業施設に対し、演出・ストーリー設計・運営設計を組み合わせ、空間の付加価値を最大化します。",
    icon: Hotel,
  },
  {
    title: "不動産投資・運用",
    desc: "コンテンツ化可能な空間資産に着目し、運営視点から投資・管理・価値向上を行います。",
    icon: Building2,
  },
  {
    title: "AIコンテンツ制作（映像・画像・ショートドラマ）",
    desc: "生成AIを活用し、広告映像・ショートドラマ・ビジュアルコンテンツを高効率かつ高品質で制作します。",
    icon: Sparkles,
  },
  {
    title: "AIによる業務システム構築・最適化",
    desc: "劇場・飲食・宿泊業などに向けて、顧客管理・コンテンツ運用・社内連携を統合したデジタル運営基盤を構築します。",
    icon: Users,
  },
  {
    title: "コンテンツ企画・ブランド運用",
    desc: "脚本制作、動画企画、SNS運用などを通じてブランドの発信力と集客力を強化します。",
    icon: Camera,
  },
];

const highlights = [
  "イマーシブ体験を軸に、空間・消費・コミュニケーションを融合",
  "AIとリアル体験を組み合わせた新しいビジネスモデル",
  "ホテル・商業空間×エンタメの複合企画力",
  "企画・制作・システム構築・運営まで一貫対応",
  "日本市場におけるローカライズと実行力",
];

const loungeFeatures = [
  {
    title: "Candlelight Atmosphere",
    desc: "蝋燭の灯りと低照度設計により、会話そのものが演出になる空間体験。",
    icon: Flame,
  },
  {
    title: "Emerald & Antique Tone",
    desc: "深い緑、真鍮、アンティーク調の要素で統一した、記憶に残る空間言語。",
    icon: Gem,
  },
  {
    title: "Narrative Social Experience",
    desc: "バーでありながら、物語性と参加感を備えた新しい社交モデル。",
    icon: ScrollText,
  },
];

type ButtonProps = {
  variant?: "solid" | "outline";
  href?: string;
  children: React.ReactNode;
  className?: string;
};

function Button({ variant = "solid", href, children, className = "" }: ButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full px-6 h-12 transition-colors",
    variant === "solid"
      ? "bg-[#d6b06f] text-[#170f0c] hover:bg-[#e5c587]"
      : "border border-[#c4a66a]/30 bg-transparent text-[#f3eadf] hover:bg-[#2a1c17] hover:text-[#f6d8a0]",
    className,
  ].join(" ");

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

function Card({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={`rounded-[2rem] border ${className}`}>{children}</div>;
}

function CardContent({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return <div className={className}>{children}</div>;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#120d0b] text-[#f5efe6]">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(173,123,67,0.16),transparent_28%),radial-gradient(circle_at_20%_20%,rgba(103,25,20,0.18),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(120,78,38,0.10),transparent_20%),linear-gradient(180deg,#120d0b_0%,#1a110f_45%,#0c0908_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] bg-[linear-gradient(to_right,rgba(212,185,132,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,185,132,0.10)_1px,transparent_1px)] bg-[size:120px_120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d2b984]/50 to-transparent" />
      </div>

      <header className="sticky top-0 z-30 border-b border-[#c4a66a]/15 bg-[#140f0d]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <div className="font-serif text-xl tracking-[0.34em] text-[#f8f1e8]">S-STAGE</div>
            <div className="mt-1 text-xs text-[#c9b8a2]">IMMERSIVE ENTERTAINMENT · SPACE VALUE · CONTENT</div>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[#d8cab9]">
            <a href="#about" className="transition-colors hover:text-[#f6d8a0]">会社概要</a>
            <a href="#services" className="transition-colors hover:text-[#f6d8a0]">事業内容</a>
            <a href="#brand" className="transition-colors hover:text-[#f6d8a0]">ブランド空間</a>
            <a href="#contact" className="transition-colors hover:text-[#f6d8a0]">お問い合わせ</a>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 pb-24 pt-24 lg:grid-cols-[1.12fr_0.88fr] lg:pt-32">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c4a66a]/25 bg-[#fff7ea]/[0.04] px-4 py-2 text-xs uppercase tracking-[0.24em] text-[#e8c889]">
              <MapPin className="h-3.5 w-3.5 text-[#e8c889]" />
              Based in Japan
            </div>
            <h1 className="mt-8 font-serif text-5xl leading-[1.04] text-[#fbf5ed] md:text-7xl">
              空間・コンテンツ・ビジネスを
              <span className="block text-[#e6c07c]">一つの舞台へ</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d7c5b0]">
              S-stageはイマーシブエンターテインメントを中心に、AI・空間・コンテンツを融合し、新たな体験価値とビジネスモデルを創出します。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="#contact">お問い合わせ</Button>
              <Button variant="outline" href="#services">
                事業を見る <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {[
              "Velvet & Candlelight",
              "Immersive Social Scene",
              "Antique Narrative Space",
              "Hospitality × Experience",
            ].map((item, i) => (
              <div
                key={item}
                className={`rounded-[1.8rem] border p-5 shadow-2xl shadow-black/30 backdrop-blur-sm ${
                  i % 2 === 0
                    ? "border-[#c4a66a]/20 bg-[linear-gradient(180deg,rgba(118,29,24,0.22),rgba(32,20,17,0.72))]"
                    : "border-[#c4a66a]/20 bg-[linear-gradient(180deg,rgba(86,52,27,0.22),rgba(32,20,17,0.72))]"
                }`}
              >
                <div className="flex h-full min-h-[170px] flex-col justify-end rounded-[1.35rem] border border-white/8 bg-black/20 p-5">
                  <div className="text-xs uppercase tracking-[0.22em] text-[#dfc08a]">S-STAGE Aesthetic</div>
                  <div className="mt-3 font-serif text-lg leading-7 text-[#f8f0e5]">{item}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="about" className="border-t border-[#c4a66a]/12">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:py-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="text-sm uppercase tracking-[0.24em] text-[#d3b177]">About</div>
            <h2 className="mt-4 font-serif text-3xl text-[#fbf5ed] md:text-5xl">会社概要</h2>
            <p className="mt-6 text-lg leading-8 text-[#d7c5b0]">
              S-stageはエンターテインメント、空間デザイン、AI技術を融合し、体験価値と収益性を両立したプロジェクトを展開する企業です。
            </p>
            <p className="mt-5 text-lg leading-8 text-[#d7c5b0]">
              単なる「場」や「演出」の提供に留まらず、企画・制作・運営・仕組み化までを視野に入れ、継続的な価値を生む体験設計を行います。
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <Card className="border-[#c4a66a]/15 bg-[linear-gradient(180deg,rgba(82,24,20,0.18),rgba(22,14,12,0.82))] shadow-2xl shadow-black/25 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-sm uppercase tracking-[0.22em] text-[#d9ba83]">Core Positioning</div>
                <div className="mt-6 space-y-4">
                  {highlights.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#d9ba83]" />
                      <div className="leading-7 text-[#efe4d5]">{item}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section id="services" className="border-t border-[#c4a66a]/12">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.24em] text-[#d3b177]">Services</div>
            <h2 className="mt-4 font-serif text-3xl text-[#fbf5ed] md:text-5xl">事業内容</h2>
            <p className="mt-6 text-lg leading-8 text-[#d7c5b0]">
              イマーシブ体験の企画から、空間価値の向上、AIを活用したコンテンツ制作・業務設計まで、複数領域を横断して支援します。
            </p>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((s, index) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="h-full border-[#c4a66a]/14 bg-[linear-gradient(180deg,rgba(48,24,20,0.55),rgba(18,12,10,0.88))] shadow-xl shadow-black/20 backdrop-blur-sm">
                    <CardContent className="p-7">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1b179]/20 bg-[#d1b179]/10">
                        <Icon className="h-5 w-5 text-[#e6c07c]" />
                      </div>
                      <h3 className="mt-5 text-lg font-medium leading-7 text-[#fbf5ed]">{s.title}</h3>
                      <p className="mt-4 leading-7 text-[#d6c3af]">{s.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="brand" className="border-t border-[#c4a66a]/12">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.24em] text-[#d3b177]">Brand Space</div>
            <h2 className="mt-4 font-serif text-3xl text-[#fbf5ed] md:text-5xl">LOUNGE D</h2>
            <p className="mt-6 text-lg leading-8 text-[#d7c5b0]">
              現在運営中の空間ブランド「LOUNGE D」は、蝋燭の灯り、重厚な家具、アンティークの質感、そして物語性のある社交体験を組み合わせたイマーシブ・ラウンジです。
            </p>
          </motion.div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-[#c4a66a]/14 bg-[linear-gradient(180deg,rgba(108,31,24,0.22),rgba(20,13,11,0.92))] p-6 shadow-2xl shadow-black/25">
              <div className="flex h-full min-h-[420px] flex-col justify-between rounded-[1.5rem] border border-[#d5b06d]/10 bg-[linear-gradient(180deg,rgba(255,220,170,0.03),rgba(255,255,255,0.01))] p-8">
                <div>
                  <div className="text-sm uppercase tracking-[0.22em] text-[#d9ba83]">Current Operating Space</div>
                  <h3 className="mt-4 font-serif text-3xl text-[#fbf5ed] md:text-4xl">Velvet · Candlelight · Immersive Hospitality</h3>
                  <p className="mt-6 max-w-2xl leading-8 text-[#d7c5b0]">
                    バーとしての滞在価値に加え、参加感・物語性・会話の演出を空間設計へ組み込み、通常の飲食空間とは異なる没入型の夜間体験を提供します。
                  </p>
                </div>
                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    "Immersive social design",
                    "Candlelit hospitality",
                    "Antique mood direction",
                  ].map((item) => (
                    <div key={item} className="rounded-2xl border border-[#c4a66a]/14 bg-black/20 px-4 py-4 text-sm text-[#efe4d5]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-1">
              {loungeFeatures.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.12 }}
                    transition={{ duration: 0.5, delay: index * 0.06 }}
                  >
                    <Card className="h-full border-[#c4a66a]/14 bg-[linear-gradient(180deg,rgba(63,20,16,0.5),rgba(20,13,11,0.9))] shadow-xl shadow-black/20 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#d1b179]/20 bg-[#d1b179]/10">
                          <Icon className="h-5 w-5 text-[#e6c07c]" />
                        </div>
                        <div className="mt-5 font-serif text-xl text-[#fbf5ed]">{item.title}</div>
                        <p className="mt-3 leading-7 text-[#d7c5b0]">{item.desc}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#c4a66a]/12">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="rounded-[2rem] border border-[#c4a66a]/18 bg-[linear-gradient(180deg,rgba(109,34,27,0.18),rgba(20,13,11,0.86))] p-8 shadow-2xl shadow-black/25 backdrop-blur-sm md:p-12"
          >
            <div className="text-sm uppercase tracking-[0.24em] text-[#d3b177]">Contact</div>
            <h2 className="mt-4 font-serif text-3xl text-[#fbf5ed] md:text-5xl">お問い合わせ</h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-[#d7c5b0]">
              イマーシブエンターテインメント、空間価値向上、AIコンテンツ制作、業務システム構築に関するご相談を歓迎しております。プロジェクトの構想段階からでも、お気軽にご連絡ください。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="mailto:business@s-stage.space">
                business@s-stage.jp
              </Button>
              <Button variant="outline" href="#top">
                Tokyo / Japan
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="border-t border-[#c4a66a]/12">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-[#bda992] md:flex-row md:items-center md:justify-between">
          <div>© 2026 S-stage Co., Ltd.</div>
          <div className="uppercase tracking-[0.2em] text-[#c8b39c]">Immersive · Hospitality · Content · Space</div>
        </div>
      </footer>
    </div>
  );
}
