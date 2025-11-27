import { Layout } from '@/components/Layout'
import { SectionCard } from '@/components/SectionCard'
import { User, Briefcase, Code, Mail } from 'lucide-react'

const HomePage = () => {
  const sections = [
    {
      href: '/about',
      icon: User,
      title: 'ABOUT',
      description: '私について、経歴、趣味などを紹介します',
    },
    {
      href: '/work',
      icon: Briefcase,
      title: 'WORK',
      description: 'これまでの制作物やプロジェクトを紹介します',
    },
    {
      href: '/skill',
      icon: Code,
      title: 'SKILL',
      description: '使用できる技術やスキルセットを紹介します',
    },
    {
      href: '/contact',
      icon: Mail,
      title: 'CONTACT',
      description: 'お問い合わせやSNSリンクはこちらから',
    },
  ]

  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="relative w-full">
        {/* 背景画像エリア（将来的に画像を追加） */}
        <div className="relative h-[500px] w-full overflow-hidden bg-gradient-to-b from-gray-50 to-white">
          {/* 画像がある場合はここに表示 */}
          {/* <Image src="/assets/hero.jpg" alt="Hero" fill className="object-cover" priority /> */}

          {/* オーバーレイ（画像追加時に使用） */}
          {/* <div className="absolute inset-0 bg-black/30" /> */}

          {/* テキストコンテンツ */}
          <div className="relative flex h-full items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Welcome to My Portfolio
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
                Webエンジニアとして、フロントエンドを中心に開発しています。
                <br />
                制作物やスキルをご覧ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション紹介 */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <SectionCard
              key={section.href}
              href={section.href}
              icon={section.icon}
              title={section.title}
              description={section.description}
            />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default HomePage
