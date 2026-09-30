import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'

const steps = [['01', 'Pour', 'Add one small squeeze to your favorite glass.'], ['02', 'Pause', 'Take a breath. Let the day meet you where you are.'], ['03', 'Go', 'Sip slowly and carry the good feeling forward.']]

export default function RitualPage() {
  return <main className="inner-page ritual-page"><header className="nav-bar"><Link className="brand" href="/"><span className="brand-mark"><Sparkles size={15} strokeWidth={2.5} /></span><span>verdant<span className="brand-dot">.</span></span></Link><nav className="nav-links"><Link className="active" href="/ritual">The ritual</Link><Link href="/ingredients">Ingredients</Link><Link href="/story">Our story</Link></nav><Link className="bag-button" href="/">Shop <ArrowRight size={13} /></Link></header><section className="page-intro ritual-intro"><Link className="back-link" href="/"><ArrowLeft size={14} /> Back home</Link><p className="eyebrow"><span className="eyebrow-dot" /> A better daily rhythm</p><h1>Small ritual.<br /><em>Real shift.</em></h1><p>Three minutes to make space for a clearer, calmer kind of energy.</p></section><section className="ritual-steps">{steps.map(([number, title, text]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</section><footer className="page-footer"><span>Make room for your good</span><Link href="/">Try Verdant <ArrowRight size={14} /></Link></footer></main>
}
