export default function MaterialsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Browse Materials</h1>
      
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/4">
          <div className="bg-white p-4 rounded-lg shadow">
            <h2 className="font-semibold mb-3">Filter By</h2>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Material Type</h3>
              <div className="space-y-1">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Notes
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Previous Year Questions
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Assignments
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  Presentations
                </label>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="font-medium mb-2">Course</h3>
              <select className="w-full p-2 border rounded">
                <option>All Courses</option>
                <option>Computer Science</option>
                <option>Electrical Engineering</option>
                <option>Mechanical Engineering</option>
                <option>Civil Engineering</option>
              </select>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Year</h3>
              <select className="w-full p-2 border rounded">
                <option>All Years</option>
                <option>1st Year</option>
                <option>2nd Year</option>
                <option>3rd Year</option>
                <option>4th Year</option>
              </select>
            </div>
          </div>
        </div>
        
        <div className="md:w-3/4">
          <div className="bg-white p-4 rounded-lg shadow mb-4">
            <div className="flex justify-between items-center">
              <input
                type="text"
                placeholder="Search materials..."
                className="w-full p-2 border rounded"
              />
              <button className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                Search
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-4 rounded-lg shadow">
                <div className="flex justify-between mb-2">
                  <h3 className="font-semibold">Data Structures Notes</h3>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Notes</span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  Comprehensive notes on arrays, linked lists, trees, and graphs with examples.
                </p>
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Computer Science • 2nd Year</span>
                  <span>12 downloads</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <div className="flex space-x-1">
              <button className="px-3 py-1 bg-blue-500 text-white rounded">1</button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded">2</button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded">3</button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded">...</button>
              <button className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded">10</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}