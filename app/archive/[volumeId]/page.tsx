"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useParams } from "next/navigation"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export default function VolumePage() {
  const params = useParams()
  const volumeId = params.volumeId as string
  
  const volume = useQuery(api.volumes.getVolumeById, { volumeId })
  const articles = useQuery(api.articles.getArticlesByVolume, { volumeId: volumeId as any })

  if (!volume || !articles) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="container mx-auto px-4 py-12">
          <div className="text-center py-8">Loading...</div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-12">
        <Link href="/archive" className="flex items-center gap-2 text-[#9A5B49] hover:text-[#8B4F3F] mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Archive
        </Link>

        <h1 className="text-4xl font-serif text-[#9A5B49] mb-2">
          {volume.name}
        </h1>
        <p className="text-gray-600 mb-12">
          {volume.date}
        </p>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No articles available in this volume</p>
            <p className="text-gray-500">Articles for this volume are being prepared for publication.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {articles.map((article) => (
              <Link
                key={article._id}
                href={`/archive/${volumeId}/${article._id}`}
                className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#9A5B49] transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-serif text-[#9A5B49] mb-2 hover:underline">{article.name}</h2>
                    <p className="text-sm text-gray-600 mb-2">{article.authors.join(", ")}</p>
                    <p className="text-sm text-gray-500">Pages {article.pages}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-[#9A5B49] flex-shrink-0 mt-1" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
