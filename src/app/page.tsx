import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Welcome to Materials Adda</h1>
      <p className="mb-6 text-gray-700">Your go-to platform for educational materials, notes, previous year questions, and more!</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link href="/dashboard" 
          className="block p-6 bg-blue-50 rounded-lg shadow hover:bg-blue-100 transition text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Dashboard</h2>
          <p className="text-gray-700">Access your personalized dashboard and saved materials</p>
        </Link>
        
        <Link href="/materials" 
          className="block p-6 bg-green-50 rounded-lg shadow hover:bg-green-100 transition text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Browse Materials</h2>
          <p className="text-gray-700">Explore our collection of notes, PYQs and study resources</p>
        </Link>
        
        <Link href="/contribute" 
          className="block p-6 bg-purple-50 rounded-lg shadow hover:bg-purple-100 transition text-gray-800">
          <h2 className="text-xl font-semibold mb-2">Contribute</h2>
          <p className="text-gray-700">Share your notes and resources with the community</p>
        </Link>
        
        <Link href="/about" 
          className="block p-6 bg-yellow-50 rounded-lg shadow hover:bg-yellow-100 transition text-gray-800">
          <h2 className="text-xl font-semibold mb-2">About Us</h2>
          <p className="text-gray-700">Learn more about Materials Adda and our mission</p>
        </Link>
      </div>
    </div>
  );
}