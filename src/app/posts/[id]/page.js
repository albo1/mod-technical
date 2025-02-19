async function PostPage({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await response.json();

    return (
        <main className="container mx-auto px-4 py-8">
            <h1>{post.title}</h1>
            <p>{post.body}</p>
        </main>
    );
}

export default PostPage;