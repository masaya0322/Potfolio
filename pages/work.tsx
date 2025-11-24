import { Layout } from '@/components/Layout'

const WorkPage = () => {
  return (
    <Layout>
      {/* ヒーローセクション */}
      <section className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Work
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            これまでの制作物やプロジェクトを紹介します
          </p>
        </div>
      </section>

      {/* プレースホルダーセクション */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-12 text-center">
            <p className="text-xl text-gray-500">Coming Soon...</p>
            <p className="mt-2 text-sm text-gray-400">
              プロジェクト一覧は準備中です
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default WorkPage
