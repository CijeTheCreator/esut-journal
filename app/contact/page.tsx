import Link from "next/link"
import { Header } from "@/components/header"
import { ArrowLeft } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="container mx-auto px-4 py-12">
        <Link href="/" className="flex items-center gap-2 text-[#9A5B49] hover:text-[#8B4F3F] mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <article className="max-w-3xl">
          <h1 className="text-4xl font-serif text-[#9A5B49] mb-8">Contact Us</h1>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p>
              We would love to hear from you. Whether you have questions about the journal, wish to submit a manuscript,
              or would like to get involved with the ESUT Department of Guidance and Counselling Journal, please don't
              hesitate to reach out.
            </p>

            <h2 className="text-2xl font-serif text-[#9A5B49] mt-8 mb-4">Contact Information</h2>

            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Mailing Address</h3>
                <p>
                  Department of Guidance and Counselling
                  <br />
                  Faculty of Education
                  <br />
                  Enugu State University of Science and Technology (ESUT)
                  <br />
                  Enugu, Nigeria
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <p>
                  General Inquiries: <strong>[email@esut.edu.ng]</strong>
                  <br />
                  Manuscript Submissions: <strong>[submissions@esut.edu.ng]</strong>
                  <br />
                  Editorial Office: <strong>[editor@esut.edu.ng]</strong>
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <p>[+234 XXX XXX XXXX]</p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Office Hours</h3>
                <p>
                  Monday - Friday: 9:00 AM - 5:00 PM (WAT)
                  <br />
                  Saturday & Sunday: Closed
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-serif text-[#9A5B49] mt-8 mb-4">Quick Links</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <Link href="/note-to-authors" className="text-[#9A5B49] hover:underline">
                  Note to Authors
                </Link>
              </li>
              <li>
                <Link href="/archive" className="text-[#9A5B49] hover:underline">
                  Journal Archive
                </Link>
              </li>
              <li>
                <Link href="/editorial-team" className="text-[#9A5B49] hover:underline">
                  Editorial Team
                </Link>
              </li>
            </ul>

            <p className="text-sm text-gray-600 mt-8">We typically respond to inquiries within 2-3 business days.</p>
          </div>
        </article>
      </section>
    </div>
  )
}
