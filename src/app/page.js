export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>
      
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-4">
          <li className="p-4 border rounded-lg">
            <a href="#" className="text-lg hover:text-blue-600">
              sum sum
            </a>
          </li>
          <li className="p-4 border rounded-lg">
            <a href="#" className="text-lg hover:text-blue-600">
              sum sum 2
            </a>
          </li>
        </ul>
      </div>
    </main>
  );
}
