export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">About Materials Adda</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Materials Adda was created with a simple goal: to make high-quality educational resources 
          accessible to all students. We believe that education should be open and collaborative, 
          with students helping each other succeed through shared knowledge.
        </p>
        <p>
          Our platform enables students to share notes, previous year question papers, 
          assignments, and other study materials with their peers, creating a community 
          of learners who support each other's academic journey.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">For Students</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access quality study materials for free</li>
            <li>Find previous year question papers</li>
            <li>Share your notes and help others</li>
            <li>Earn points and badges for contributions</li>
            <li>Join a community of dedicated learners</li>
          </ul>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">For Contributors</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Share your knowledge with others</li>
            <li>Build your reputation in the community</li>
            <li>Earn recognition through our badge system</li>
            <li>Help improve the quality of education</li>
            <li>Make a positive impact on fellow students</li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Our Team</h2>
        <p className="mb-4">
          Materials Adda is developed and maintained by a team of passionate students and 
          educators who believe in the power of shared knowledge. We are committed to 
          creating a platform that serves the needs of the student community.
        </p>
        <p>
          If you'd like to join our team or have suggestions for improving Materials Adda, 
          please reach out to us at <a href="mailto:team@materialsadda.com" className="text-blue-500 hover:underline">team@materialsadda.com</a>.
        </p>
      </div>
    </div>
  );
}