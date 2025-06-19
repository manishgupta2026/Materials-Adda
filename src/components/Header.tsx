import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Materials Adda</Link>
        
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-200">Home</Link>
          <Link href="/materials" className="hover:text-blue-200">Materials</Link>
          <Link href="/contribute" className="hover:text-blue-200">Contribute</Link>
          <Link href="/about" className="hover:text-blue-200">About</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          <Link href="/search" className="hover:text-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
          <Link href="/user" className="hover:text-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}