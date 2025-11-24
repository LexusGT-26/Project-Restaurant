'use client';

export default function Story() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 story-page">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-12 text-center story-title">
          Our Karinderya Story
        </h1>

        {/* Main Narrative */}
        <div className="story-narrative mb-16">
          <p className="mb-6">
            Sa likod ng bawat ulam na nakahain dito sa amin, may kasamang kwento, alaala, at pagmamahal.
          </p>
          
          <p className="mb-6">
            Nagsimula ang aming karinderya bilang isang simpleng lutuan sa bahay. Tuwing umaga, gigising si Nanay nang mas maaga kaysa sa araw para magtusta ng bawang, maggisa ng sibuyas, at maghanda ng mga putaheng kinalakihan namin—mga pagkaing may lutong-bahay na hindi nagsasawa kainin araw-araw.
          </p>
          
          <p className="mb-6">
            Dahil sa sarap at amoy na umaabot pa sa kalsada, unti-unting dumami ang kumakatok sa gate: kapitbahay, tricycle drivers, estudyante, at mga empleyado na naghahanap ng masarap pero abot-kayang pagkain. Dito nagsimula ang ideya: &quot;Bakit hindi tayo magtayo ng maliit na karinderya?&quot;
          </p>
          
          <p className="mb-6">
            Sa una, isang maliit na mesa lang at tatlong ulam kada araw. Pero dahil sa suporta ng komunidad, lumaki kami nang lumaki. Natuto kaming magdagdag ng mas maraming putahe, mag-budget, at magbigay-serbisyo na parang pamilya ang turing sa bawat customer.
          </p>
          
          <p className="mb-6">
            Ngayon, ang aming karinderya ay hindi lang kainan—isa itong tambayan ng kwento, tawa, at pahinga. Dito, ang bawat taong papasok ay itinuturing na bisita, at bawat bisita ay para na ring kaibigan.
          </p>
          
          <p className="mb-6">
            Sa bawat sandok ng sabaw, sa bawat pinggang may ulam, at sa bawat ngiting bati ng aming staff—naroon ang pangakong hindi magbabago:
          </p>
          
          <p className="text-center font-semibold italic" style={{ fontSize: '1.2rem', color: '#5c4a3a' }}>
            Lutong-bahay na masarap, sulit, at gawang puso.
          </p>
        </div>

        {/* Gallery Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center story-gallery-title">
          Mga Alaala sa Aming Paglalakbay
        </h2>
      </div>

      {/* Masonry Gallery - Full Width */}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="masonry mb-16">
          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=500&fit=crop&q=80" 
              alt="Unang araw ng aming bukas"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Unang araw ng aming bukas</h1>
                <p className="grid__author">Jerry&apos;s LTB</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Memories</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=600&fit=crop&q=80" 
              alt="Paboritong luto ni Nanay"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Paboritong luto ni Nanay</h1>
                <p className="grid__author">Mula noon hanggang ngayon</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Family</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=500&fit=crop&q=80" 
              alt="Simula sa maliit na mesa"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Simula sa maliit na mesa</h1>
                <p className="grid__author">Malayo na ang narating</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Journey</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=400&fit=crop&q=80" 
              alt="Dito nagsimula ang pangarap"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Dito nagsimula ang pangarap</h1>
                <p className="grid__author">Jerry&apos;s LTB</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Dreams</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=550&fit=crop&q=80" 
              alt="Araw-araw, sariwa at lutong-bahay"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Araw-araw, sariwa</h1>
                <p className="grid__author">Lutong-bahay</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Fresh</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=400&fit=crop&q=80" 
              alt="Mga suki naming hindi kami iniwan"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Mga suki naming</h1>
                <p className="grid__author">Hindi kami iniwan</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Community</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=500&fit=crop&q=80" 
              alt="Behind the scenes"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Behind the Karinderya</h1>
                <p className="grid__author">Daily cooking</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Cooking</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=600&fit=crop&q=80" 
              alt="Family moments"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Family Moments</h1>
                <p className="grid__author">Together in the kitchen</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Family</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=450&fit=crop&q=80" 
              alt="Customer stories"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Customer Stories</h1>
                <p className="grid__author">Happy memories</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Stories</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=400&h=500&fit=crop&q=80" 
              alt="Traditional recipes"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Traditional Recipes</h1>
                <p className="grid__author">Passed down generations</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Recipes</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop&q=80" 
              alt="Community gathering"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Community Gathering</h1>
                <p className="grid__author">Where stories meet</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Community</span>
              </div>
            </div>
          </div>

          <div className="grid">
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400&h=500&fit=crop&q=80" 
              alt="Growth journey"
              className="grid-image"
            />
            <div className="grid__body">
              <div className="relative">
                <a className="grid__link" target="_blank" href="/"></a>
                <h1 className="grid__title">Growth Journey</h1>
                <p className="grid__author">From small to big</p>
              </div>
              <div className="mt-auto">
                <span className="grid__tag">#Growth</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing Message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="story-closing text-center">
          <p className="text-xl md:text-2xl italic" style={{ color: '#6b5b4f', lineHeight: '1.8' }}>
            Salamat sa inyong patuloy na suporta. Ang bawat pagbisita ninyo ay nagpapaligaya sa amin.
          </p>
          <p className="mt-4 text-lg" style={{ color: '#5c4a3a' }}>
            — Jerry&apos;s LTB Family
          </p>
        </div>
      </div>
    </div>
  );
}
