export default function Resources(){
  const links = [
    {title:'Intro to Adversarial ML (YouTube)', url:'https://www.youtube.com'},
    {title:'ART Notebooks (GitHub)', url:'https://github.com/Trusted-AI/adversarial-robustness-toolbox'},
    {title:'NIST Adversarial ML', url:'https://www.nist.gov'}
  ]

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Curated Resources</h1>
      <ul className="mt-4 space-y-3">
        {links.map((l,i)=> <li key={i}><a className="text-indigo-400" href={l.url} target="_blank" rel="noreferrer">{l.title}</a></li>)}
      </ul>
    </div>
  )
}

