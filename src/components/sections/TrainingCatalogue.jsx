import { motion } from 'framer-motion'
import { FileText, Eye, Download } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'
import { trainingCatalogue } from '../../data/trainingCatalogue'

/**
 * TrainingCatalogue — lets visitors view the PDF in a new tab or
 * download it directly. Sits on the Services page, directly under
 * the Leadership Trainings service. `fileUrl` is a public/ path, so
 * it works with a plain <a> tag — no JS file handling needed.
 */
export default function TrainingCatalogue() {
  return (
    <section className="bg-paper-dim/60 py-24 md:py-32">
      <div className="container-prynia">
        <SectionHeading
          eyebrow="Training Catalogue"
          title="Explore our leadership training programs."
          description="Review our full catalogue of institutional training programs, including formats, durations, and how to request one for your team."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="mt-10 flex flex-col gap-6 border border-ink/12 bg-white/40 p-8 md:flex-row md:items-center md:justify-between md:p-10"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-ink/20 text-ink">
              <FileText size={22} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <div>
              <h3 className="font-display text-xl text-ink">{trainingCatalogue.title}</h3>
              <p className="mt-2 max-w-md text-sm text-slate leading-relaxed">
                {trainingCatalogue.description}
              </p>
            </div>
          </div>

          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a href={trainingCatalogue.fileUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border border-ink/25 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink hover:bg-ink/5">
              <Eye size={16} strokeWidth={2} aria-hidden="true" />
              <span>View</span>
            </a>
            <a href={trainingCatalogue.fileUrl} download={trainingCatalogue.fileName} className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gold-soft">
              <Download size={16} strokeWidth={2} aria-hidden="true" />
              <span>Download</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}