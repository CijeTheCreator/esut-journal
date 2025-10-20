"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export default function Home() {
  const volumes = useQuery(api.volumes.getAllVolumes)
  const currentVolume = volumes?.find(volume => volume.isCurrent)
  const articles = useQuery(api.articles.getArticlesByVolume,
    currentVolume ? { volumeId: currentVolume._id } : "skip"
  )

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-[#9A5B49] via-[#8B4F3F] to-[#6B3E2E] py-16">
        <div className="relative container mx-auto px-4 py-16 h-full flex items-center">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-6xl font-serif text-white mb-6 leading-tight">The Enugu State University Journal of Guidance and Counselling</h2>
            <p className="text-white text-lg mb-8">The official journal of the Department of Guidance and Counselling, Faculty of Education, Enugu State University of Science and Technology (ESUT) Agbani Enugu State</p>
            <Link href="/archive">
              <Button className="bg-[#9A5B49] hover:bg-[#8B4F3F] text-white px-8 py-6 text-base" size="lg">
                Our archive
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Current Issue Section */}
      <section className="container mx-auto px-4 py-12">
        {!volumes || !currentVolume ? (
          <div className="text-center py-12">
            <div className="text-center py-8">Loading current issue...</div>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-3xl font-normal text-[#9A5B49]">
                Current Issue: {currentVolume.name} - {currentVolume.date}
              </h3>
              <Link
                href={`/archive/${currentVolume._id}`}
                className="flex items-center gap-2 text-[#9A5B49] hover:text-[#8B4F3F] font-medium"
              >
                View Articles
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            {!articles || articles.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600 mb-4">No articles available in the current issue</p>
                <p className="text-gray-500">Articles are being prepared for publication.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <Card key={article._id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl text-balance">{article.name}</CardTitle>
                      <CardDescription className="text-sm">{article.authors.join(", ")}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">Pages {article.pages}</span>
                        <Link href={`/archive/${currentVolume._id}/${article._id}`}>
                          <Button variant="link" className="text-[#9A5B49] hover:text-[#8B4F3F] p-0">
                            Read more
                            <ArrowRight className="ml-1 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </section>
    </div>
  )
}
