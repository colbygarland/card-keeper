import { Dispatch, SetStateAction, useState } from 'react'

type Player = {
  name: string
  scores: Array<number>
  theme: string
}

const Name = ({ player }: { player: Player }) => {
  const styles = {
    fuchsia: { bg: 'bg-fuchsia-600' },
    indigo: { bg: 'bg-indigo-600' },
  }[player.theme]

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-white">{player.name}</h2>
    </div>
  )
}

const EnterScore = ({ player, updatePlayer }: { player: Player; updatePlayer: Dispatch<SetStateAction<Player>> }) => {
  const styles = {
    fuchsia: { text: 'text-fuchsia-600', focus: 'border-fuchsia-300 focus:ring-fuchsia-600', bg: 'bg-fuchsia-600' },
    indigo: { text: 'text-indigo-600', focus: 'border-indigo-300 focus:ring-indigo-600', bg: 'bg-indigo-600' },
  }[player.theme]

  const update = (e: any) => {
    e.preventDefault()

    const score = e.target[0].value
    updatePlayer(prevState => ({
      ...prevState,
      scores: [...prevState.scores, score],
    }))
    e.target[0].value = null
  }

  return (
    <div className="">
      <form onSubmit={update}>
        <label className={`font-bold ${styles?.text}`}>{player.name} Score</label>
        <input type="number" className={`border-2 border-gray-200 focus:ring-2 ${styles?.focus}`} placeholder="Enter Score" />
        <button type="submit" className={`px-2 py-1 text-sm mt-2 text-white ${styles?.bg}`}>
          Add Score
        </button>
      </form>
    </div>
  )
}

export default function Home() {
  const [player1, setPlayer1] = useState<Player>({
    name: 'Mrs. Butt',
    scores: [],
    theme: 'fuchsia',
  })
  const [player2, setPlayer2] = useState<Player>({
    name: 'Mr. Butt',
    scores: [],
    theme: 'indigo',
  })
  const player1Total = player1.scores.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0)
  const player2Total = player2.scores.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0)
  const currentPlayer: Player = player1
  const title = 'Phase 10'

  const scores = []
  const length = Math.max(player1.scores.length, player2.scores.length)
  for (let i = 0; i < length; i++) {
    scores.push({
      player1: player1.scores[i],
      player2: player2.scores[i],
    })
  }

  return (
    <main>
      <div className="pt-6 px-6">
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mb-4">{title}</h1>
        <div className="">
          <div className="">
            <div className="flex justify-between items-center">
              <Name player={player1} />
              <Name player={player2} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <EnterScore player={player1} updatePlayer={setPlayer1} />
              <EnterScore player={player2} updatePlayer={setPlayer2} />
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-4 text-gray-700">Round Score Tracker</h3>
              <table className="table-auto w-full text-center border-collapse border-2 border-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-gray-600">Round</th>
                    <th className={`px-4 py-2 text-${player1.theme}-600`}>{player1.name}</th>
                    <th className={`px-4 py-2 text-${player2.theme}-600`}>{player2.name}</th>
                  </tr>
                </thead>
                <tbody>
                  {scores.map((score, index) => {
                    return (
                      <tr key={index}>
                        <td className="border px-4 py-2">{index + 1}</td>
                        <td className="border px-4 py-2">{score.player1 ?? '-'}</td>
                        <td className="border px-4 py-2">{score.player2 ?? '-'}</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td className="border px-4 py-2">
                      <strong>Total</strong>
                    </td>
                    <td className="border px-4 py-2">
                      <span className={`font-bold text-${player1.theme}-600`}>{player1Total}</span>
                    </td>
                    <td className="border px-4 py-2">
                      <span className={`font-bold text-${player2.theme}-600`}>{player2Total}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
