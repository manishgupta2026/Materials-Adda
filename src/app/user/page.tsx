export default function UserPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">User Profile</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex items-center mb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h2 className="text-xl font-semibold">John Doe</h2>
            <p className="text-gray-600">Student, Computer Science</p>
          </div>
        </div>
        
        <div className="border-t pt-4 mt-4">
          <h3 className="font-medium mb-2">Your Stats</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="bg-blue-50 p-3 rounded">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm text-gray-600">Contributions</div>
            </div>
            <div className="bg-green-50 p-3 rounded">
              <div className="text-2xl font-bold">48</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="bg-purple-50 p-3 rounded">
              <div className="text-2xl font-bold">156</div>
              <div className="text-sm text-gray-600">Points</div>
            </div>
            <div className="bg-yellow-50 p-3 rounded">
              <div className="text-2xl font-bold">Gold</div>
              <div className="text-sm text-gray-600">Badge</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Your Recent Activity</h2>
        <div className="space-y-4">
          <div className="border-b pb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">Uploaded Data Structures Notes</span>
              <span className="text-sm text-gray-600">2 days ago</span>
            </div>
            <p className="text-gray-600 text-sm">Your notes were approved and received 5 downloads</p>
          </div>
          <div className="border-b pb-4">
            <div className="flex justify-between mb-1">
              <span className="font-medium">Downloaded Operating Systems PYQ</span>
              <span className="text-sm text-gray-600">5 days ago</span>
            </div>
            <p className="text-gray-600 text-sm">You downloaded previous year question paper</p>
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <span className="font-medium">Earned Gold Badge</span>
              <span className="text-sm text-gray-600">1 week ago</span>
            </div>
            <p className="text-gray-600 text-sm">You reached 150 contribution points</p>
          </div>
        </div>
      </div>
    </div>
  );
}