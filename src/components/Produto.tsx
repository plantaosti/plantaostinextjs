'use client'
import Image from 'next/image'
import Link from 'next/link'
import { CurrencyDollar, Gear, List, Planet } from 'phosphor-react'

export function Produto() {
  return (
    <section className="flex flex-col items-center justify-center w-full py-10 m-auto lg:flex-row">
      <div className="flex flex-col max-w-sm md:px-4 md:max-w-5xl">
        <div>
          <h2 className="text-2xl font-bold text-green-500 mb-1">Produtos</h2>
          <p className="text-sm text-gray-400 lg:max-w-sm">
            Desfrute da minha experiência e conhecimento tecnológico com a minha
            seleção de produtos testados e aprovados, incluindo dicas úteis de
            uso e configurações para otimizar seu desempenho.
          </p>

          <ul className="grid grid-cols-2 gap-4 mt-10">
            <li className="text-left pb-4">
              <div className="before:content-[''] before:w-[33px] before:h-[33px] before:opacity-[0.2] before:left-[7px] before:bottom-[-5px] before:block before:absolute before:rounded-[50%] before:bg-green-500 relative mb-4">
                <Gear size={32} />
              </div>
              <h3 className="text-md text-green-500 font-bold mb-2">
                Configurações
              </h3>
              <p className="text-sm text-gray-400 lg:w-60">
                Maximize o seu potencial tecnológico com nossas precisas e
                fáceis de seguir dicas de ajustes e configurações para
                aplicativos e produtos. Tenha tudo funcionando perfeitamente em
                poucos passos.
              </p>
            </li>
            <li className="text-left pb-4">
              <div className="before:content-[''] before:w-[33px] before:h-[33px] before:opacity-[0.2] before:left-[7px] before:bottom-[-5px] before:block before:absolute before:rounded-[50%] before:bg-green-500 relative mb-4">
                <List size={32} />
              </div>
              <h3 className="text-md text-green-500 font-bold mb-2">
                Especificações
              </h3>
              <p className="text-sm text-gray-400 lg:w-60">
                Descubra todas as informações relevantes sobre os produtos com
                nossa completa lista de especificações e tome decisões de compra
                informadas e assertivas.
              </p>
            </li>
            <li className="text-left pb-4">
              <div className="before:content-[''] before:w-[33px] before:h-[33px] before:opacity-[0.2] before:left-[7px] before:bottom-[-5px] before:block before:absolute before:rounded-[50%] before:bg-green-500 relative mb-4">
                <CurrencyDollar size={32} />
              </div>
              <h3 className="text-md text-green-500 font-bold mb-2">
                Preços e promoções
              </h3>
              <p className="text-sm text-gray-400 lg:w-60">
                Fique por dentro das melhores dicas de preços e promoções com
                nossa atualização constante e escolha os melhores produtos com
                os valores mais acessíveis.
              </p>
            </li>
            <li className="text-left pb-4">
              <div className="before:content-[''] before:w-[33px] before:h-[33px] before:opacity-[0.2] before:left-[7px] before:bottom-[-5px] before:block before:absolute before:rounded-[50%] before:bg-green-500 relative mb-4">
                <Planet size={32} />
              </div>
              <h3 className="text-md text-green-500 font-bold mb-2">
                Lojas parceiras
              </h3>
              <p className="text-sm text-gray-400 lg:w-60">
                Aproveite nossos links atualizados para realizar compras diretas
                em nossas lojas parceiras com total comodidade e segurança.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative px-10">
        <Image
          src="/images/produtos-bg.jpg"
          alt="Imagen ilustrativa tema produtos indicados."
          width={480}
          height={549}
          className="rounded-lg w-[30rem] h-auto"
        />
        <Link
          title="Ver lista de produtos indicados."
          href={'/produtos'}
          className="relative bottom-[4rem] left-[2rem] bg-green-600 px-8 py-4 text-white transition-all duration-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-400"
        >
          Ver produtos
        </Link>
      </div>
    </section>
  )
}
