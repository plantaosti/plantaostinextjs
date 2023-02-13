'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Eye } from 'phosphor-react'

interface IPosts {
  posts: INoticias[]
}
interface INoticias {
  id: string
  slug: string
  views: string
  thumbnail: { url: string }
  title: string
}

export function Noticias({ posts }: IPosts) {
  return (
    <section className="flex flex-col max-w-full m-auto pt-6 px-4">
      <div className="flex flex-col text-center justify-center max-w-4xl m-auto pb-5">
        <h2 className="text-xl font-bold text-gray-500 lg:text-3xl dark:text-gray-100">
          Notícias
        </h2>
      </div>
      <div className="flex flex-col max-w-5xl m-auto py-6">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
          {posts.map((post) => {
            return (
              <li key={post.id}>
                <Link
                  className="flex flex-col gap-4 justify-center p-6 bg-slate-100 transition-all duration-200 hover:drop-shadow-lg"
                  href={`/noticia/${post.slug}`}
                  title={post.title}
                >
                  <Image
                    width={200}
                    height={200}
                    className="m-auto"
                    src={post.thumbnail.url}
                    title={post.title}
                    alt={post.title}
                  />

                  <div>
                    <div className="flex gap-4 items-center text-gray-400">
                      <h4 className="text-sm text-gray-500 mb-3 font-semibild max-w-[18rem]">
                        {post.title.substring(0, 80)}...
                      </h4>
                      <div className="flex-col items-center w-[60px]">
                        <Eye size={24} />
                        {post.views ? post.views : ''}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}

          <li className="flex">
            <div className="flex p-6 m-auto justify-center items-center lg:max-w-5xl">
              <Link
                href={'/noticias'}
                className="flex justify-center text-white bg-green-600 px-8 py-4 transition-all duration-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-400"
              >
                Ver todas
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
