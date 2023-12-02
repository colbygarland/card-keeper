import { useRouter } from 'next/router'
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
  const router = useRouter()

  const submit = (e: any) => {
    e.preventDefault()

    const player1 = e.target[0].value
    const player2 = e.target[1].value
    router.push(`/play?player1=${player1}&player2=${player2}`)
  }

  return (
    <main className="p-6">
      <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        What should our names be?
      </h1>
      <div className="">
        <form onSubmit={submit}>
          <div className="mb-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <label className="block">Player 1's name</label>
            <input name="player1" type="text" className="border-2 border-gray-300 px-2 py-1" />
          </div>
          <div className="mb-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <label className="block">Player 2's name</label>
            <input name="player2" type="text" className="border-2 border-gray-300 px-2 py-1" />
          </div>
          <button type="submit" className="px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white">
            Start game
          </button>
        </form>
      </div>
    </main>
  )
}
