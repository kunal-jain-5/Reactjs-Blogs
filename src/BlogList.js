const BlogList = (props) => {
    const blogs = props.blogprop
    const title = props.title
    return (  
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blogItem) => (
                <div className="blog-preview" key={blogItem.id}>
                    <h2>{ blogItem.title }</h2>
                    <p>Written by {blogItem.author}</p>
                </div>
            ))}
        </div>
    );
}
 
export default BlogList;