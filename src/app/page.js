async function Home() {
  // Fetch first 2 posts from JSONPlaceholder
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=2');
  const posts = await response.json();

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Blog Posts</h1>
      
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-4 border rounded-lg">
              <a href="#" className="text-lg hover:text-blue-600">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Home;
