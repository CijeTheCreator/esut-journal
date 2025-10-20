export interface Article {
  id: string
  title: string
  authors: string[]
  abstract: string
  pages: string
  pdfUrl: string
  views: number
  downloads: number
  publishedYear: number
}

export interface Volume {
  id: string
  volumeNumber: number
  issueNumber: number
  month: string
  year: number
  articles: Article[]
}

export const volumes: Volume[] = [
  {
    id: "vol-4-no-1",
    volumeNumber: 4,
    issueNumber: 1,
    month: "June",
    year: 2024,
    articles: [
      {
        id: "article-1",
        title:
          "Users' Perception of Online Public Access Catalogue in Enabling Information Retrieval in Nnamdi Azikiwe Library, University of Nigeria Nsukka",
        authors: ["P. O. Ukwueze", "J. U. Eze"],
        abstract:
          "The study explored users' perception of Online Public Access Catalogue (OPAC) in enabling information retrieval in Nnamdi Azikiwe Library (NAL), University of Nigeria (UNN), Nigeria. The aim is to ascertain how users of the library perceive the OPAC as regards enabling retrieval of information resources in the library.",
        pages: "1-11",
        pdfUrl: "/sample-article.pdf",
        views: 500,
        downloads: 120,
        publishedYear: 2024,
      },
      {
        id: "article-2",
        title: "Digital Transformation in Nigerian Academic Libraries",
        authors: ["Dr. Chukwu A.", "Prof. Okafor B."],
        abstract:
          "This study examines the current state of digital transformation in academic libraries across Nigeria, focusing on technological adoption and user engagement.",
        pages: "12-25",
        pdfUrl: "/sample-article.pdf",
        views: 350,
        downloads: 85,
        publishedYear: 2024,
      },
      {
        id: "article-3",
        title: "Information Literacy Programs in Secondary Schools",
        authors: ["Nwosu C.", "Eze D."],
        abstract:
          "An analysis of information literacy initiatives in secondary schools and their impact on student research capabilities and academic performance.",
        pages: "26-38",
        pdfUrl: "/sample-article.pdf",
        views: 420,
        downloads: 95,
        publishedYear: 2024,
      },
      {
        id: "article-4",
        title: "Preservation of Indigenous Knowledge in Digital Archives",
        authors: ["Prof. Adeyemi F.", "Dr. Okonkwo G."],
        abstract:
          "Exploring strategies for digitizing and preserving indigenous knowledge systems in Nigerian library collections for future generations.",
        pages: "39-52",
        pdfUrl: "/sample-article.pdf",
        views: 280,
        downloads: 60,
        publishedYear: 2024,
      },
    ],
  },
  {
    id: "vol-3-no-2",
    volumeNumber: 3,
    issueNumber: 2,
    month: "December",
    year: 2023,
    articles: [
      {
        id: "article-5",
        title: "Open Access Publishing: Challenges and Opportunities",
        authors: ["Okeke H.", "Ugwu I."],
        abstract:
          "A comprehensive review of open access publishing trends in Nigeria and their implications for academic research dissemination.",
        pages: "1-18",
        pdfUrl: "/sample-article.pdf",
        views: 310,
        downloads: 72,
        publishedYear: 2023,
      },
      {
        id: "article-6",
        title: "Library Services and Community Development",
        authors: ["Prof. Obi J.", "Dr. Nwankwo K."],
        abstract:
          "Examining the role of public libraries in community development and social inclusion initiatives across Nigeria.",
        pages: "19-35",
        pdfUrl: "/sample-article.pdf",
        views: 245,
        downloads: 58,
        publishedYear: 2023,
      },
    ],
  },
  {
    id: "vol-3-no-1",
    volumeNumber: 3,
    issueNumber: 1,
    month: "June",
    year: 2023,
    articles: [
      {
        id: "article-7",
        title: "Metadata Standards in Nigerian Library Systems",
        authors: ["Eze L.", "Okafor M."],
        abstract:
          "An investigation into the adoption and implementation of international metadata standards in Nigerian library systems.",
        pages: "1-22",
        pdfUrl: "/sample-article.pdf",
        views: 190,
        downloads: 45,
        publishedYear: 2023,
      },
    ],
  },
]

export function getVolume(id: string): Volume | undefined {
  return volumes.find((v) => v.id === id)
}

export function getArticle(volumeId: string, articleId: string): Article | undefined {
  const volume = getVolume(volumeId)
  return volume?.articles.find((a) => a.id === articleId)
}
