const features = [
    '🧼 Remove line breaks & extra spaces',
    '🔠 Convert to lowercase, UPPERCASE, Sentence or Title Case',
    '🧹 Strip HTML tags and inline formatting',
    '🚫 Remove emojis and special symbols',
    '💨 Super fast — works entirely in your browser',
    '🔒 No data sent to server — privacy first'
  ]
  
  export default function FeatureList() {
    return (
      <section className="mt-8 space-y-4">
        <h2 className="text-2xl font-semibold text-center">✨ Features</h2>
        <ul className="list-disc list-inside text-gray-800 space-y-1">
          {features.map((f, idx) => (
            <li key={idx}>{f}</li>
          ))}
        </ul>
      </section>
    )
  }
  