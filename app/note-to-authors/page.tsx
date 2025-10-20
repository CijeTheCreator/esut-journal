import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

export default function NoteToAuthorsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 text-[#9A5B49] hover:text-[#8B4F3F] mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <article className="max-w-3xl">
          <h1 className="text-4xl font-serif text-[#9A5B49] mb-8">From the Editor in Chief</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The Enugu State University journal of Guidance and Counselling is the official journal of the Department of Guidance and Counselling, Faculty of Education, Enugu State University of Science and Technology (ESUT) Agbani Enugu State.
            </p>

            <p>
              The subject matters published in this edition of the journal are on guidance related topics. The journal provides a platform for scholars, researchers, and practitioners to share their knowledge and expertise in the areas of Guidance, Counselling, Education, ICT and professional development.
            </p>

            <p>
              We are committed to the highest standards of peer review. Our decision making, plagiarizim and ethics are guided by fairness, transparency and love as a way of promoting the practice of guidance and Counselling in Nigeria and beyond.
            </p>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="font-semibold">
                Dr. Asogwa Solomon Chinago<br />
                Editor in Chief<br />
                Department of Guidance and Counselling, Faculty of Education, Enugu State University of Science and Technology (ESUT) Agbani, Enugu State.
              </p>
            </div>
          </div>
        </article>
      </section>
    </div>
  )
}
