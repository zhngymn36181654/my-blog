import Link from 'next/link'
import { getSortedPostsData } from '../../lib/posts'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
            allPostsData
        }
    }
}

export default function Posts({ allPostsData }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1>📚 我的博客文章</h1>
            <ul>
                {allPostsData.map(({ id, date, title }) => (
                    <li key={id} style={{ marginBottom: '12px' }}>
                        <Link href={`/posts/${id}`}>
                            <strong>{title}</strong>
                        </Link>
                        <br />
                        <small style={{ color: '#888' }}>{date}</small>
                    </li>
                ))}
            </ul>
        </div>
    )
}
