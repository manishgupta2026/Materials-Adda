import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Materials Adda</h3>
            <p className="text-gray-600">
              Your go-to platform for educational resources, notes, and previous year questions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link></li>
              <li><Link href="/materials" className="text-gray-600 hover:text-blue-500">Browse Materials</Link></li>
              <li><Link href="/contribute" className="text-gray-600 hover:text-blue-500">Contribute</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-blue-500">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/materials?type=notes" className="text-gray-600 hover:text-blue-500">Notes</Link></li>
              <li><Link href="/materials?type=pyq" className="text-gray-600 hover:text-blue-500">Previous Year Questions</Link></li>
              <li><Link href="/materials?type=assignments" className="text-gray-600 hover:text-blue-500">Assignments</Link></li>
              <li><Link href="/materials?type=presentations" className="text-gray-600 hover:text-blue-500">Presentations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Email: team@materialsadda.com</li>
              <li>Follow us on: 
                <div className="flex space-x-3 mt-2">
                  <a href="#" className="hover:text-blue-500">Twitter</a>
                  <a href="#" className="hover:text-blue-500">Instagram</a>
                  <a href="#" className="hover:text-blue-500">LinkedIn</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Materials Adda. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-600 hover:text-blue-500">Privacy Policy</Link>
            <Link href="/terms" className="text-gray-600 hover:text-blue-500">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}