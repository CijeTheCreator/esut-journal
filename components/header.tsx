"use client"

import Link from "next/link"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

export function Header() {
  const currentVolume = useQuery(api.volumes.getCurrentVolume)
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/esut-logo.png" alt="ESUT Logo" className="h-12" />
          <h1 className="text-lg font-normal text-foreground">Department of Guidance and Counselling, <br />Enugu State University of Science and Technology</h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href={currentVolume ? `/archive/${currentVolume._id}` : "/"}
            className="text-sm text-foreground hover:text-gray-600"
          >
            Current
          </Link>
          <Link href="/archive" className="text-sm text-foreground hover:text-gray-600">
            Archive
          </Link>
          <Link href="/note-to-authors" className="text-sm text-foreground hover:text-gray-600">
            Note to Authors
          </Link>
          <Link href="/editorial-team" className="text-sm text-foreground hover:text-gray-600">
            Editorial Team
          </Link>
          <Link href="/contact" className="text-sm text-foreground hover:text-gray-600">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}
