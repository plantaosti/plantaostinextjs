import Link from "next/link";

interface IApoiadores {
  apoiadores: IApoiador[];
}
interface IApoiador {
  id: string;
  ativo: boolean;
  name: string;
  slug: string;
  url: string;
}
export function Apoiadores({ apoiadores }: IApoiadores) {
  if (!apoiadores) {
    return (
      <section
        id="apoiadores"
        className="flex flex-col w-full bg-gray-100 py-8 px-4 dark:bg-gray-600"
      >
        <div className="flex flex-col text-center justify-center max-w-4xl m-auto pb-5">
          <h2 className="text-xl font-bold text-gray-500 lg:text-3xl dark:text-gray-100">
            Apoiadores
          </h2>

          <span className="text-sm text-gray-300 py-2 dark:text-gray-200">
            Pessoas e empresas que apoiam esta solução.
          </span>
        </div>
      </section>
    );
  }
  return (
    <section
      id="apoiadores"
      className="flex flex-col items-center w-full bg-gray-100 py-8 px-4 dark:bg-gray-600"
    >
      <div className="flex flex-col text-center justify-center max-w-4xl m-auto pb-5">
        <h2 className="text-xl font-bold text-gray-500 lg:text-3xl dark:text-gray-100">
          Apoiadores
        </h2>

        <span className="text-sm text-gray-300 py-2 dark:text-gray-200">
          Pessoas e empresas que apoiam esta solução.
        </span>
      </div>

      <ul className="grid grid-cols-2 gap-3 m-auto py-10 text-gray-500 w-full max-w-[986px] lg:grid-cols-4 lg:m-0 lg:items-center">
        {apoiadores?.map((apoiador) => {
          return (
            <li key={apoiador.id}>
              {apoiador?.url ? (
                <Link
                  className="transition-all duration-300 hover:text-green-600"
                  href={apoiador.url}
                  title={apoiador.name}
                >
                  {apoiador.name}
                </Link>
              ) : (
                apoiador.name
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
