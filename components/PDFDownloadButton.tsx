'use client';

import Link from 'next/link';

/**
 * Styled PDF download button
 * Links to the CV PDF file
 */
export default function PDFDownloadButton() {
    return (
        <Link
            href="/assets/pdf/ShamkhalHajiyev_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary inline-flex items-center gap-2"
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
            </svg>
            Download CV (PDF)
        </Link>
    );
}
