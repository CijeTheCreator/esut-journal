"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowLeft, Download } from "lucide-react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Suspense } from "react"
import dynamic from "next/dynamic"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

const PDFViewer = dynamic(() => import("@/components/pdf-viewer"), {
  ssr: false,
  loading: () => <div className="w-full h-96 bg-gray-100 flex items-center justify-center">Loading PDF...</div>,
})

export default function ArticlePage() {
  const params = useParams()
  const volumeId = params.volumeId as string
  const articleId = params.articleId as string

  const volume = useQuery(api.volumes.getVolumeById, { volumeId })
  const article = useQuery(api.articles.getArticleById, { articleId: articleId as any })

  if (!article || !volume) {
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
        <Link
          href={`/archive/${volumeId}`}
          className="flex items-center gap-2 text-[#9A5B49] hover:text-[#8B4F3F] mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Volume
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-serif text-black mb-4 leading-tight">{article.name}</h1>

            <p className="text-gray-700 mb-6">{article.authors.join(", ")}</p>

            <div className="border-t border-b border-gray-200 py-4 mb-8">
              <div className="text-center">
                <p className="text-sm font-semibold text-gray-600">Published</p>
                <p className="text-lg text-gray-900">{article.publishDate}</p>
              </div>
            </div>

            {/* PDF Viewer */}
            <div className="bg-gray-100 rounded-lg overflow-hidden mb-8">
              <Suspense
                fallback={
                  <div className="w-full h-96 bg-gray-200 flex items-center justify-center">Loading PDF...</div>
                }
              >
                <PDFViewer pdfUrl={article.pdfUrl} />
              </Suspense>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* PDF Download Button */}
              <Button
                className="w-full bg-[#7FB843] hover:bg-[#6FA833] text-white py-6 text-base"
                asChild
              >
                <a href={article.pdfUrl} download>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2m0 0v-8m0 8l-4-2m4 2l4-2"
                    />
                  </svg>
                  PDF
                  <Download className="ml-auto h-5 w-5" />
                </a>
              </Button>

              {/* Stats */}
              <div className="bg-gray-50 rounded-lg p-6 space-y-6">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Views</p>
                  <p className="text-2xl font-bold text-gray-900">{article.views}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600 mb-1">Downloads</p>
                  <p className="text-2xl font-bold text-gray-900">{article.downloads}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
