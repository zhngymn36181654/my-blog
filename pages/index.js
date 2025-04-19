import Link from 'next/link'

export default function Home() {
    return (
        <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
            <h1>👋 欢迎来到我的博客</h1>
            <p>这是一个用 Next.js 构建的静态博客网站。</p>
            <p>
                👉 <Link href="/posts">查看所有文章</Link>
            </p>
        </div>
    )
}
