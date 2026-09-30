import Link from 'next/link'
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react'

export default function StoryPage() {
  return (
    <main className="inner-page story-page">
      <header className="nav-bar"><Link className="brand" href="/"><span className="brand-mark"><Sparkles size={15} strokeWidth={2.5} /></span><span>verdant<span className="brand-dot">.</span></span></Link><nav className="nav-links"><Link href="/ritual">The ritual</Link><Link href="/ingredients">Ingredients</Link><Link className="active" href="/story">Our story</Link></nav><Link className="bag-button" href="/">Shop <ArrowRight size={13} /></Link></header>
      <section className="story-layout"><div className="story-copy"><Link className="back-link" href="/"><ArrowLeft size={14} /> Back home</Link><p className="eyebrow"><span className="eyebrow-dot" /> Our point of view</p><h1>Nature is<br /><em>the original</em><br />technology.</h1><p>Verdant started with a simple question: what if feeling good could feel less complicated?</p><p>We make small-batch botanical blends for curious people building a life that feels like their own. Every bottle is a reminder to pause, pour, and come back to yourself.</p><Link className="primary-button story-button" href="/">Meet the tonic <ArrowRight size={16} /></Link></div><div className="story-art"><div className="story-circle"><span>V</span></div><div className="story-note note-a">Slow rituals<br /><strong>big shifts</strong></div><div className="story-note note-b">Made in small<br /><strong>batches</strong></div><div className="story-caption">Est. 2026 · California</div></div></section><footer className="page-footer"><span>Rooted in nature · made for now</span><Link href="/ingredients">See the ingredients <ArrowRight size={14} /></Link></footer>
    </main>
  )
}
