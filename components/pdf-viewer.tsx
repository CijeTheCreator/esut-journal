"use client"

interface PDFViewerProps {
  pdfUrl: string
}

export default function PDFViewer({ pdfUrl }: PDFViewerProps) {
  return (
    <div className="w-full bg-white">
      <iframe src={`${pdfUrl}#toolbar=0`} className="w-full h-96 border-0" title="PDF Viewer" />
    </div>
  )
}
