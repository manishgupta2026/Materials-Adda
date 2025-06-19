export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-gray-100 p-4">
        <nav className="space-y-2">
          <a href="/user" className="block p-2 bg-blue-100 rounded">Profile</a>
          <a href="/user/materials" className="block p-2 hover:bg-blue-50 rounded">My Materials</a>
          <a href="/user/saved" className="block p-2 hover:bg-blue-50 rounded">Saved Items</a>
          <a href="/user/settings" className="block p-2 hover:bg-blue-50 rounded">Settings</a>
        </nav>
      </aside>
      <div className="flex-1 p-4">
        {children}
      </div>
    </div>
  );
}