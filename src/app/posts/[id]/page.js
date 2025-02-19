async function PostPage({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await response.json();

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
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
        </div>
    );
}

export default PostPage;