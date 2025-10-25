import React from 'react'
import MissionCard from '../components/MissionCard'
import { Shield, Brain, Lock, Rocket } from 'lucide-react'

const missions = [
  { title: 'Mission 1: Threat Recon', desc: 'Identify attack surfaces', icon: <Shield/>, xp:150, progress:80},
  { title: 'Mission 2: Model Poisoning Ops', desc: 'Poisoning simulations', icon:<Brain/>, xp:200, progress:40},
  { title: 'Mission 3: Prompt Infiltration', desc: 'Prompt injection labs', icon:<Lock/>, xp:250, progress:0},
  { title: 'Mission 4: Project Sentinel', desc: 'Capstone build & red-team', icon:<Rocket/>, xp:400, progress:0},
]

export default function Dashboard(){
  return (
    <div className="px-10 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {missions.map((m,i)=> <MissionCard key={i} mission={m} index={i} />)}
    </div>
  )
}

