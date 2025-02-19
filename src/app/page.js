async function Home() {
  // fetch all 10 posts
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts = await response.json();

  return (
    <div>
    <header className="bg-[#004C54] text-white py-8 mb-8">
    <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">
            Super Special Awesome Blog Posts
          </h1>
          <div className="h-1 w-32 bg-[#A5ACAF] mx-auto mt-4"></div>
        </div>
    </header>

    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Recent Posts</h1>
      
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.id} className="p-4 border rounded-lg">
              <a href={`/posts/${post.id}`} className="text-lg hover:text-blue-600">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
    </div>
  );
}

export default Home;
