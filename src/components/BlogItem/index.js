// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {BlogEachItem} = props
  const {title, description, publishedDate} = BlogEachItem

  return (
    <li className="blog-item">
      <h1 className="li-head">{title}</h1>
      <p className="li-para">{description}</p>

      <p className="li-pub">{publishedDate}</p>
    </li>
  )
}

export default BlogItem
