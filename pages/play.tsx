import { useRouter } from 'next/router'
import { Dispatch, SetStateAction, useState } from 'react'

type Player = {
  scores: Array<number>
  theme: string
}

const EnterScore = ({
  player,
  name,
  updatePlayer,
  setReset,
}: {
  player: Player
  name: string
  updatePlayer: Dispatch<SetStateAction<Player>>
  setReset: Dispatch<SetStateAction<boolean>>
}) => {
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

    setReset(true)
  }

  return (
    <div className="">
      <form onSubmit={update}>
        <label className={`font-bold mb-2 block ${styles?.text}`}>{name}</label>
        <input type="number" className={`shadow rounded block px-2 py-1 w-full mb-4 ${styles?.focus}`} placeholder="Enter Score" />
        <button type="submit" className={`block w-full px-2 py-1 text-sm mt-2 text-white rounded ${styles?.bg}`}>
          Add Score
        </button>
      </form>
    </div>
  )
}

export default function Home() {
  const router = useRouter()
  const player1Name = router.query.player1 as string
  const player2Name = router.query.player2 as string
  const [player1, setPlayer1] = useState<Player>({
    scores: [],
    theme: 'fuchsia',
  })
  const [player2, setPlayer2] = useState<Player>({
    scores: [],
    theme: 'indigo',
  })
  const [showReset, setShowReset] = useState(false)
  const player1Total = player1.scores.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0)
  const player2Total = player2.scores.reduce((accumulator, currentValue) => accumulator + Number(currentValue), 0)
  const currentPlayer: Player = player1
  const title = "Paul's Card Tracker"

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
      <div className="p-6">
        <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mb-4">{title}</h1>
        <div className="">
          <div className="">
            <div className="grid grid-cols-2 gap-4">
              <EnterScore name={player1Name} player={player1} updatePlayer={setPlayer1} setReset={setShowReset} />
              <EnterScore name={player2Name} player={player2} updatePlayer={setPlayer2} setReset={setShowReset} />
            </div>
            <div className="mt-6">
              <h3 className="font-bold text-lg mb-4 text-gray-700">Round Score Tracker</h3>
              <table className="table-auto w-full text-center border-collapse border-2 border-gray-200 rounded">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-gray-600">Round</th>
                    <th className={`px-4 py-2 text-${player1.theme}-600`}>{player1Name}</th>
                    <th className={`px-4 py-2 text-${player2.theme}-600`}>{player2Name}</th>
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
            {showReset && (
              <div className="mt-8">
                <a href="" className="font-bold block w-full px-2 py-1 text-sm mt-2 text-fuchsia-600 border-2 border-fuchsia-600 text-center rounded">
                  Reset
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
