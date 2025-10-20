"use client"

import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowRight } from "lucide-react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export default function ArchivePage() {
  const volumes = useQuery(api.volumes.getAllVolumes)

  if (!volumes) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <section className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-serif text-[#9A5B49] mb-12">Journal Archive</h1>
          <div className="text-center py-8">Loading...</div>
        </section>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-serif text-[#9A5B49] mb-12">Journal Archive</h1>

        {volumes.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600 mb-4">No volumes available at this time</p>
            <p className="text-gray-500">Please check back later for new journal volumes.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {volumes.map((volume) => (
              <Link
                key={volume._id}
                href={`/archive/${volume._id}`}
                className="block p-6 border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#9A5B49] transition-all"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-serif text-[#9A5B49] mb-2">
                      {volume.name} - {volume.date}
                    </h2>
                    <p className="text-gray-600">{volume.articleCount} articles</p>
                  </div>
                  <ArrowRight className="h-6 w-6 text-[#9A5B49]" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
