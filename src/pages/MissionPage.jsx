import React from 'react'
import { useParams, Link } from 'react-router-dom'

const data = [
  { title: 'Threat Recon', objectives: ['Threat model','Evasion lab'], resources: [{title:'NIST',url:'https://www.nist.gov'}] },
  { title: 'Model Poisoning', objectives: ['Poisoning lab','Backdoor demo'], resources: [] },
  { title: 'Prompt Infiltration', objectives: ['Prompt labs'], resources: [] },
  { title: 'Project Sentinel', objectives: ['Repo scaffold','Red team'], resources: [] },
]

export default function MissionPage(){
  const { id } = useParams()
  const idx = parseInt(id,10)-1
  const mission = data[idx] || null

  if(!mission) return <div className="p-8">Mission not found</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">{mission.title}</h1>
      <h2 className="mt-4 text-lg">Objectives</h2>
      <ul className="list-disc pl-6 mt-2">
        {mission.objectives.map((o,i)=> <li key={i}>{o}</li>)}
      </ul>

      <h2 className="mt-6 text-lg">Resources</h2>
      <ul className="mt-2 space-y-2">
        {mission.resources.map((r,i)=> (
          <li key={i}><a href={r.url} target="_blank" rel="noreferrer" className="text-indigo-400">{r.title}</a></li>
        ))}
      </ul>

      <div className="mt-6 space-x-3">
        <Link to="/" className="px-4 py-2 bg-gray-800 rounded">Back</Link>
        <button className="px-4 py-2 bg-indigo-600 rounded text-white">Open Lab</button>
      </div>
    </div>
  )
}

