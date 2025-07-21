'use client'

import { useState } from 'react'
import { cleanText, type CleanOptions } from '../../../../../packages/utils/cleaner'
import Footer from '../components/Footer'

export default function TextCleanerPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [options, setOptions] = useState<CleanOptions>({
    removeLineBreaks: true,
    removeExtraSpaces: true,
    casing: 'sentence',
    stripHtml: false,
    stripEmojis: false,
    stripSpecialChars: false,
  })

  const handleClean = () => {
    const cleaned = cleanText(input, options)
    setOutput(cleaned)
  }

  const handleChange = (key: keyof CleanOptions, value: any) => {
    setOptions((prev) => ({ ...prev, [key]: value }))
  }

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 py-10 px-6 max-w-4xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-6 text-center">🧽 One-Click Text Cleaner</h1>

        <textarea
          className="w-full border border-gray-300 rounded-md p-4 h-40 text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Paste your messy text here..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={options.removeLineBreaks}
              onChange={(e) => handleChange('removeLineBreaks', e.target.checked)}
            />
            Remove Line Breaks
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={options.removeExtraSpaces}
              onChange={(e) => handleChange('removeExtraSpaces', e.target.checked)}
            />
            Remove Extra Spaces
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={options.stripHtml}
              onChange={(e) => handleChange('stripHtml', e.target.checked)}
            />
            Strip HTML
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={options.stripSpecialChars}
              onChange={(e) => handleChange('stripSpecialChars', e.target.checked)}
            />
            Strip Special Characters
          </label>

          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={options.stripEmojis}
              onChange={(e) => handleChange('stripEmojis', e.target.checked)}
            />
            Strip Emojis
          </label>

          <label className="flex items-center gap-2 text-sm">
            Casing:
            <select
              className="ml-2 p-1 border rounded"
              value={options.casing}
              onChange={(e) =>
                handleChange('casing', e.target.value as CleanOptions['casing'])
              }
            >
              <option value="sentence">Sentence case</option>
              <option value="title">Title Case</option>
              <option value="lower">lowercase</option>
              <option value="upper">UPPERCASE</option>
            </select>
          </label>
        </div>

        <div className="text-center">
          <button
            onClick={handleClean}
            className="bg-blue-600 text-white px-6 py-3 rounded-md text-base hover:bg-blue-700 transition"
          >
            🚿 Clean Text
          </button>
        </div>

        {output && (
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2">🧼 Cleaned Output</h2>
            <textarea
              className="w-full border border-gray-300 rounded-md p-4 h-40 text-sm"
              value={output}
              readOnly
            />
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
