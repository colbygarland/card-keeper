type Player = {
  name: string
  scores: Array<number>
}

export default function Home() {
  const player1: Player = {
    name: 'Mr. Butt',
    scores: [],
  }
  const player2: Player = {
    name: 'Mrs. Butt',
    scores: [],
  }
  const currentPlayer: Player = player1

  const scores = []
  for (let i = 0; i < player1.scores.length; i++) {
    scores.push({})
  }

  const AddScore = ({ player }: { player: Player }) => {
    return (
      <div className="flex flex-col items-start gap-2">
        <h2 className="relative">
          {currentPlayer === player && (
            <div className="absolute -top-10 -left-2 text-xs bg-indigo-600 shadow rounded py-2 px-4 whitespace-nowrap">Their turn!</div>
          )}
          {player.name}
        </h2>
        <input type="number" className="border border-white rounded-3xl bg-transparent w-12 block px-2" maxLength={3} />
        <button type="submit" className="border-2 border-white rounded-3xl px-2 py-2 text-sm">
          Add score
        </button>
      </div>
    )
  }

  return (
    <main>
      <div className="px-8 py-4 bg-gray-50 min-h-screen">
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mb-4">Phase 10</h1>
        <div className="">
          <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="bg-gray-50 px-6 py-3 sticky top-0">
                  {player1.name}
                </th>
                <th scope="col" className="bg-gray-50 px-6 py-3 sticky top-0">
                  {player2.name}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">10</td>
                <td className="px-6 py-4">13</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">14</td>
                <td className="px-6 py-4">23</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">33</td>
              </tr>
              <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">19</td>
                <td className="px-6 py-4">45</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="sticky bottom-0 left-0 w-full bg-fuchsia-600 px-8 py-8 text-white">
        <div className="grid grid-cols-2 gap-2">
          <AddScore player={player1} />
          <AddScore player={player2} />
        </div>
      </div>
    </main>
  )
}
