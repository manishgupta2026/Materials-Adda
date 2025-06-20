export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Content Management</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded mr-2">32</span>
              Pending reviews
            </li>
            <li className="flex items-center">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded mr-2">156</span>
              Approved materials
            </li>
            <li className="flex items-center">
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded mr-2">8</span>
              Rejected submissions
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">User Management</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">203</span>
              Total users
            </li>
            <li className="flex items-center">
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded mr-2">18</span>
              New this week
            </li>
            <li className="flex items-center">
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded mr-2">5</span>
              Reported accounts
            </li>
          </ul>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Admin Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Review Submissions
          </button>
          <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Manage Categories
          </button>
          <button className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600">
            User Reports
          </button>
        </div>
      </div>
    </div>
  );
}