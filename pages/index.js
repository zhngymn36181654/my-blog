import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Home({ allPostsData }) {
    return (
        <div>
            <h1>我的博客</h1>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id}>
                        <a href={`/posts/${id}`}>{title}</a>
                        <br />
                        <small>{date}</small>
                    </li>
                ))}
            </ul>
        </div>
    )
}
