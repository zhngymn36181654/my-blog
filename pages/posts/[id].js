import { getAllPostIds, getPostData } from '../../lib/posts'

export async function getStaticProps({ params }) {
    const postData = getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    }
}

export default function Post({ postData }) {
    return (
        <article style={{ padding: '20px' }}>
            <h1>{postData.title}</h1>
            <p>{postData.date}</p>
            <div>{postData.content}</div>
        </article>
    )
}

