export default function ContributePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Contribute to Materials Adda</h1>
      <p className="mb-6">Share your notes, previous year questions, and other educational resources with the community.</p>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">How to Contribute</h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Create an account or log in</li>
          <li>Select the type of material you want to upload</li>
          <li>Fill in the details (subject, topic, course, etc.)</li>
          <li>Upload your file or enter your content</li>
          <li>Submit for review</li>
        </ol>
      </div>
      
      <div className="bg-blue-50 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Contribution Guidelines</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Only upload content you have the rights to share</li>
          <li>Ensure your materials are accurate and helpful</li>
          <li>Format your documents properly for better readability</li>
          <li>Include proper citations and references where applicable</li>
          <li>Be respectful and follow community guidelines</li>
        </ul>
      </div>
    </div>
  );
}