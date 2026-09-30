import Link from 'next/link'
import { ArrowLeft, ArrowRight, Check, Sparkles } from 'lucide-react'

const ingredients = [
  ['Ashwagandha', 'Grounding adaptogen', 'Helps the body meet everyday stress with a steadier response.'],
  ['Matcha', 'Clean lift', 'Slow-release caffeine and L-theanine for bright, focused energy.'],
  ['Lemon balm', 'Calm clarity', 'A soft citrus botanical traditionally used to support a settled mind.'],
  ['Ginger', 'Golden warmth', 'A lively root that brings gentle digestion support and a bright finish.'],
  ['Lemon', 'Fresh finish', 'A touch of real lemon for an easy, naturally crisp daily ritual.'],
]

export default function IngredientsPage() {
  return (
    <main className="inner-page ingredients-page">
      <header className="nav-bar"><Link className="brand" href="/"><span className="brand-mark"><Sparkles size={15} strokeWidth={2.5} /></span><span>verdant<span className="brand-dot">.</span></span></Link><nav className="nav-links"><Link href="/ritual">The ritual</Link><Link className="active" href="/ingredients">Ingredients</Link><Link href="/story">Our story</Link></nav><Link className="bag-button" href="/">Shop <ArrowRight size={13} /></Link></header>
      <section className="page-intro"><Link className="back-link" href="/"><ArrowLeft size={14} /> Back home</Link><p className="eyebrow"><span className="eyebrow-dot" /> Nothing extra</p><h1>Good things,<br /><em>grown well.</em></h1><p>Five purposeful ingredients. No fillers, no shortcuts, just a bright blend made to meet your everyday.</p></section>
      <section className="ingredient-grid">{ingredients.map(([name, label, description], index) => <article className="ingredient-card" key={name}><span className="ingredient-number">0{index + 1}</span><div className="ingredient-orb" /><p className="card-label">{label}</p><h2>{name}</h2><p>{description}</p><Check size={16} /></article>)}</section>
      <footer className="page-footer"><span>Rooted in nature · made for now</span><Link href="/">Try Verdant <ArrowRight size={14} /></Link></footer>
    </main>
  )
}
