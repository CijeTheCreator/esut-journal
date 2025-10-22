import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

export default function EditorialTeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 text-[#9A5B49] hover:text-[#8B4F3F] mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <article className="max-w-3xl">
          <h1 className="text-4xl font-serif text-[#9A5B49] mb-8">Editorial Team</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              The Editorial Team of "The Enugu State University Journal of Guidance and Counselling" is composed of experienced
              scholars and professionals dedicated to maintaining the highest standards of academic publishing.
            </p>

            <h2 className="text-2xl font-serif text-[#9A5B49] mt-8 mb-4">Editor-in-Chief</h2>
            <p>
              <strong>Dr. Asogwa Solomon Chinago</strong>
              <br />
              Lecturer
              <br />
              Department of Guidance and Counselling, Faculty of Education
              <br />
              Enugu State University of Science and Technology ESUT Enugu
            </p>

            <h2 className="text-2xl font-serif text-[#9A5B49] mt-8 mb-4">Associate Editor</h2>
            <p>
              <strong>Prof. A.E. Onuorah</strong>
              <br />
              Lecturer
              <br />
              Department of Guidance and Counselling, Faculty of Education
              <br />
              Enugu State University of Science and Technology ESUT Enugu
            </p>

            <h2 className="text-2xl font-serif text-[#9A5B49] mt-8 mb-4">Co-Editors</h2>
            <ul className="space-y-4">
              <li>
                <strong>Prof. A.C. Egbo</strong>
                <br />
                Lecturer
                <br />
                Department of Guidance and Counselling, Faculty of Education
                <br />
                Enugu State University of Science and Technology ESUT Enugu
              </li>
              <li>
                <strong>Prof. J.O. Odo</strong>
                <br />
                Lecturer
                <br />
                Department of Guidance and Counselling, Faculty of Education
                <br />
                Enugu State University of Science and Technology ESUT Enugu
              </li>
              <li>
                <strong>Dr. J.N. Ikpenwa</strong>
                <br />
                Lecturer
                <br />
                Department of Guidance and Counselling, Faculty of Education
                <br />
                Enugu State University of Science and Technology ESUT Enugu
              </li>
              <li>
                <strong>Dr. H.N. Ene</strong>
                <br />
                Lecturer
                <br />
                Department of Guidance and Counselling, Faculty of Education
                <br />
                Enugu State University of Science and Technology ESUT Enugu
              </li>
            </ul>

            <h2 className="text-2xl font-serif text-[#9A5B49] mt-8 mb-4">Consulting Editor</h2>
            <p>
              <strong>Prof. Ada Anyamene</strong>
              <br />
              Nnamdi Azikiwe University Awka Anambra State
            </p>

            <h2 className="text-2xl font-serif text-[#9A5B49] mt-8 mb-4">Editorial Board</h2>
            <p>
              Our Editorial Board comprises leading experts in Guidance and Counselling from
              institutions across Nigeria and internationally. They provide guidance on editorial policies and assist in
              the peer review process.
            </p>

            <p className="text-sm text-gray-600 mt-8">Last updated: October 2025</p>
          </div>
        </article>
      </section>
    </div>
  )
}
