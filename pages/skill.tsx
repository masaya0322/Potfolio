import { Layout } from '@/components/Layout'
import { SectionHeader } from '@/components/SectionHeader'
import { ContentCard } from '@/components/ContentCard'
import { Code, Package, Wrench } from 'lucide-react'

const SkillPage = () => {
  return (
    <Layout>
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Skills</h1>
          <p className="mt-6 text-lg text-gray-600">技術スキルと開発経験のある言語・ツールを紹介します</p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader icon={Code} title="プログラミング言語" />
          <ContentCard>
            <p className="text-gray-600">プログラミング言語のスキルを表示します</p>
          </ContentCard>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader
            icon={Package}
            title="フレームワーク・ライブラリ"
            iconBgColor="bg-green-100"
            iconColor="text-green-600"
          />
          <ContentCard>
            <p className="text-gray-600">フレームワーク・ライブラリのスキルを表示します</p>
          </ContentCard>
        </div>
      </section>

      <section className="px-4 py-12 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <SectionHeader
            icon={Wrench}
            title="ツール・技術"
            iconBgColor="bg-purple-100"
            iconColor="text-purple-600"
          />
          <ContentCard>
            <p className="text-gray-600">開発ツールと技術スタックを表示します</p>
          </ContentCard>
        </div>
      </section>
    </Layout>
  )
}

export default SkillPage
