import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [error, setError] = useState('')

  const submit = (e: any) => {
    setError('')
    e.preventDefault()

    const player1 = e.target[0].value
    const player2 = e.target[1].value

    if (!player1 && !player2) {
      setError('Please enter both names')
      return
    }

    router.push(`/play?player1=${player1}&player2=${player2}`)
  }

  return (
    <main className="p-6">
      <h1 className="text-center text-4xl font-bold bg-gradient-to-r from-fuchsia-600 to-indigo-600 bg-clip-text text-transparent mb-4">
        What should our names be?
      </h1>
      {error && <div className="text-red-800 bg-red-100 p-4 rounded mb-4">{error}</div>}
      <div className="">
        <form onSubmit={submit}>
          <div className="mb-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <label className="block mb-2">Player 1's name</label>
            <input name="player1" type="text" className="shadow rounded block px-2 py-1 w-full" />
          </div>
          <div className="mb-4">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <label className="block mb-2">Player 2's name</label>
            <input name="player2" type="text" className="shadow rounded block px-2 py-1 w-full" />
          </div>
          <button type="submit" className="mt-4 rounded px-4 py-2 bg-gradient-to-r from-fuchsia-600 to-indigo-600 text-white">
            Start game
          </button>
        </form>
      </div>
    </main>
  )
}
