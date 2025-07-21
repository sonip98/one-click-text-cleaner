export type CleanOptions = {
    removeLineBreaks?: boolean
    removeExtraSpaces?: boolean
    casing?: 'sentence' | 'title' | 'lower' | 'upper'
    stripHtml?: boolean
    stripEmojis?: boolean
    stripSpecialChars?: boolean
}

export function cleanText(input: string, options: CleanOptions = {}): string {
    let text = input

    if (options.removeLineBreaks) {
        text = text.replace(/\n/g, ' ')
    }

    if (options.removeExtraSpaces) {
        text = text.replace(/\s+/g, ' ').trim()
    }

    if (options.stripHtml) {
        text = text.replace(/<[^>]*>?/gm, '')
    }

    if (options.stripEmojis) {
        text = text.replace(/[\u{1F600}-\u{1F64F}]/gu, '')
    }

    if (options.stripSpecialChars) {
        text = text.replace(/[^\w\s]/gi, '')
    }

    if (options.casing === 'lower') {
        text = text.toLowerCase()
    }

    if (options.casing === 'upper') {
        text = text.toUpperCase()
    }

    if (options.casing === 'title') {
        text = text
            .toLowerCase()
            .replace(/\b\w/g, (l) => l.toUpperCase())
    }

    if (options.casing === 'sentence') {
        text = text
            .toLowerCase()
            .replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
    }

    return text
}
