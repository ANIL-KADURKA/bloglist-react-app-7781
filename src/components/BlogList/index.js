import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="ul-container">
      {blogsList.map(eachBlog => (
        <BlogItem BlogEachItem={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
