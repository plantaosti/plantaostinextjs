'use client'
import Link from 'next/link'
import { FacebookLogo, InstagramLogo } from 'phosphor-react'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="flexl flex-col items-center w-full bg-gray-100 text-center py-10 pt-8">
      <div className="flex flex-row gap-3 justify-center mb-6">
        <Link href={'/#home'} className="flex items-center gap-2 group">
          <Logo className="w-[1.5rem] fill-gray-700 dark:fill-gray-400 group-hover:fill-gray-400 transition-all duration-300" />
          <span className="text-2xl text-gray-700 group-hover:text-gray-400 transition-all duration-300">
            PLANTAO STI.
          </span>
        </Link>
      </div>

      <div className="grid grid-cols-2 p-6 gap-5 max-w-5xl md:grid-cols-4 md:m-auto">
        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-green-600 lg:text-xl dark:text-gray-600">
            Site
          </h3>
          <ul className="text-left flex flex-col gap-2">
            <li>
              <Link
                href={'/#home'}
                className="text-gray-700 transition-all duration-300 hover:text-black-200"
              >
                Plantão
              </Link>
            </li>
            <li>
              <Link
                href={'/#plantoes'}
                className="text-gray-700 transition-all duration-300 hover:text-black-200"
              >
                Plantões
              </Link>
            </li>
            <li>
              <Link
                href={'/#farmacias'}
                className="text-gray-700 transition-all duration-300 hover:text-black-200"
              >
                Farmácias
              </Link>
            </li>
            <li>
              <Link
                href={'/#produtos'}
                className="text-gray-700 transition-all duration-300 hover:text-black-200"
              >
                Produtos
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-green-600 lg:text-xl dark:text-gray-600">
            Contato
          </h3>
          <ul className="text-left flex flex-col gap-2">
            <li>
              <Link
                href={'/#apoiadores'}
                className="text-gray-700 transition-all duration-300 hover:text-black-200"
              >
                Quem Apoia
              </Link>
            </li>
            <li>
              <Link
                href={'/#sobre'}
                className="text-gray-700 transition-all duration-300 hover:text-black-200"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href={'/#noticias'}
                className="text-gray-700 transition-all duration-300 hover:text-black-200"
              >
                Notícias
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-green-600 lg:text-xl dark:text-gray-600">
            Mais informações
          </h3>

          <ul className="text-sm text-left text-gray-700">
            <li>Santa Terezinha de Itaipu - PR</li>
            <li>85875-000</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-lg font-bold text-left text-green-600 lg:text-xl dark:text-gray-600">
            Social
          </h3>
          <ul className="flex gap-4">
            <li>
              <Link
                title=""
                href={'https://www.instagram.com/plantaosti'}
                className="text-gray-700 hover:text-black-200 transition-all duration-300"
              >
                <InstagramLogo size={32} />
              </Link>
            </li>
            <li>
              <Link
                title=""
                href={'https://www.facebook.com/plantaosti'}
                className="text-gray-700 hover:text-black-200 transition-all duration-300"
              >
                <FacebookLogo size={32} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="py-6">
        <p className="text-sm text-gray-700">
          Copyright by Plantao Sti. All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
