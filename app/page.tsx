'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, LockKeyhole, Minus, Plus, ShieldCheck, Sparkles, X } from 'lucide-react'

const product = {
  name: 'Verdant Tonic',
  subtitle: 'Daily adaptogen concentrate',
  price: 38,
  bundlePrice: 99,
  description: 'A bright, botanical reset for clear energy and a grounded mind.',
}

export default function Page() {
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [packSize, setPackSize] = useState<1 | 3>(1)
  const [email, setEmail] = useState('')
  const [paid, setPaid] = useState(false)

  const total = (packSize === 3 ? product.bundlePrice : product.price) * quantity

  return (
    <main className="site-shell">
      <header className="nav-bar">
        <a className="brand" href="#top" aria-label="Verdant home">
          <span className="brand-mark"><Sparkles size={15} strokeWidth={2.5} /></span>
          <span>verdant<span className="brand-dot">.</span></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="/ritual">The ritual</a>
          <a href="/ingredients">Ingredients</a>
          <a href="/story">Our story</a>
        </nav>
        <button className="bag-button" onClick={() => setCheckoutOpen(true)}>
          Bag <span>{quantity}</span>
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-dot" /> Plant-powered clarity</p>
          <h1>Feel good.<br /><em>Stay curious.</em></h1>
          <p className="hero-description">A little ritual for your everyday rhythm. Formulated with wild botanicals to bring you back to your best self.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => setCheckoutOpen(true)}>Try Verdant <ArrowRight size={16} /></button>
            <span className="price-note">$38 <span>·</span> 30 servings</span>
          </div>
          <div className="trust-row"><ShieldCheck size={15} /> No added sugar <span /> Vegan <span /> Lab tested</div>
        </div>
        <div className="product-stage" id="ritual">
          <div className="sun-glow" />
          <Image className="product-image" src="/verdant-tonic.png" alt="Verdant Tonic botanical concentrate bottle" width={480} height={480} priority />
          <div className="floating-note note-top"><span>01</span> Calm energy</div>
          <div className="floating-note note-bottom"><span>02</span> Bright focus</div>
          <div className="stage-caption">Rooted in nature <span>·</span> made for now</div>
        </div>
      </section>

      <footer className="bottom-bar" id="ingredients">
        <div><span className="footer-kicker">The good stuff</span><strong>5 clean ingredients</strong></div>
        <div className="ingredient-list"><span>Ashwagandha</span><span>Matcha</span><span>Ginger</span><span>Lemon balm</span></div>
        <div className="made-in"><span className="tiny-leaf">✦</span> Made with intention</div>
      </footer>

      {checkoutOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-labelledby="checkout-title">
          <section className="checkout-card">
            <button className="close-button" onClick={() => setCheckoutOpen(false)} aria-label="Close checkout"><X size={18} /></button>
            {paid ? (
              <div className="success-state"><div className="success-icon"><Check size={24} /></div><p className="eyebrow">Order confirmed</p><h2>You&apos;re in the green.</h2><p>Your Verdant ritual is on its way. Check your inbox for the details.</p><button className="primary-button" onClick={() => setCheckoutOpen(false)}>Back to Verdant</button></div>
            ) : (
              <>
                <div className="checkout-heading"><p className="eyebrow">Simple checkout</p><h2 id="checkout-title">Make it a ritual.</h2><p>One bottle, 30 bright starts.</p></div>
                <div className="order-line"><div className="mini-product"><Image src="/verdant-tonic.png" alt="" width={78} height={78} /></div><div><strong>{product.name}</strong><span>{packSize === 3 ? '3-pack · 90 servings' : product.subtitle}</span></div><strong>${total}</strong></div>
                <div className="pack-options" aria-label="Choose your pack size"><button className={packSize === 1 ? 'selected' : ''} onClick={() => setPackSize(1)} type="button"><span>Single bottle</span><strong>$38</strong></button><button className={packSize === 3 ? 'selected' : ''} onClick={() => setPackSize(3)} type="button"><span>3-pack <small>Save $15</small></span><strong>$99</strong></button></div>
                <div className="quantity-row"><span>Quantity</span><div className="quantity-control"><button onClick={() => setQuantity(Math.max(1, quantity - 1))} aria-label="Decrease quantity"><Minus size={14} /></button><span>{quantity}</span><button onClick={() => setQuantity(quantity + 1)} aria-label="Increase quantity"><Plus size={14} /></button></div></div>
                <form onSubmit={(event) => { event.preventDefault(); setPaid(true) }}>
                  <label>Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@example.com" /></label>
                  <label>Card details<div className="card-input"><span>••••  ••••  ••••  4242</span><span>MM / YY&nbsp;&nbsp; CVC</span></div></label>
                  <button className="pay-button" type="submit"><LockKeyhole size={15} /> Pay ${total}</button>
                </form>
                <p className="secure-note"><LockKeyhole size={12} /> Secure payments powered by Stripe</p>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  )
}
