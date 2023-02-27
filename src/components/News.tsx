export function Newsletter() {
  return (
    <section className="flex flex-col w-full bg-green-600 py-10 px-6 md:bg-node lg:px-6">
      <div className="mg:bg-green-600 py-10">
        <div className="flex justify-center max-w-5xl m-auto pb-8">
          <h2 className="text-3xl font-bold text-white lg:text-3xl dark:text-gray-600">
            Newsletter
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center gap-7 max-w-5xl m-auto md:flex-row">
          <div className="flex flex-col text-white max-w-sm gap-3 dark:text-gray-600">
            <p className="text-sm">
              Se você reside em Santa Terezinha de Itaipu e está cansado de
              percorrer toda a cidade em busca da farmácia de plantão da semana,
              tenho uma boa notícia para você. Aqui, disponibilizamos todas as
              informações de que você precisa para encontrar facilmente a
              farmácia de plantão da semana.
            </p>
            <p className="text-sm">
              Você também pode se inscrever em nossa newsletter e receber essas
              informações por e-mail!
            </p>
          </div>

          <form action="">
            <div className="flex flex-col justify-center p-4 gap-4 md:flex-row md:gap-0">
              <div className="flex flex-row w-60 bg-white md:flex-col md:max-w-xl">
                <input
                  type="email"
                  placeholder="Seu melhor email"
                  className="w-60 px-6 py-4 rounded-none"
                />
              </div>

              <button
                className="text-white bg-gray-600 hover:bg-gray-400 transition-all dark:bg-gray-600 dark:hover:bg-gray-400 px-6 py-4"
                type="submit"
              >
                Inscrever-se
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
