<template>
  <div>
    <main class="hero-section">
      <div class="hero-container">
        <header class="header">
          <div class="header-container">
            <div class="logo-section">
              <div class="logo">Mild</div>
            </div>
            <div class="icons-section">
              <div class="icons-wrapper">
                <button class="icon-button" aria-label="iOS">
                  <img :src="$img('images/ios.svg')" alt="iOS" class="icon-image">
                </button>
                <button class="icon-button" aria-label="Android">
                  <img :src="$img('images/android.svg')" alt="Android" class="icon-image">
                  <span class="android-tooltip">🤖 Soon</span>
                </button>
              </div>
            </div>
            <div class="actions-section">
              <img :src="$img('images/App_Store_Badge.svg')" alt="Download on the App Store" class="app-store-badge" id="openWaitlistModal" style="cursor: pointer;" @click="openModal">
            </div>
          </div>
        </header>
        <img :src="$img('images/garlic.svg')" alt="Garlic" class="hero-decor hero-decor-1">
        <img :src="$img('images/oliveoil.svg')" alt="Olive Oil" class="hero-decor hero-decor-2">
        <img :src="$img('images/pepper.svg')" alt="Pepper" class="hero-decor hero-decor-3">
        <img :src="$img('images/cheese.svg')" alt="Cheese" class="hero-decor hero-decor-4">
        <img :src="$img('images/pasta.svg')" alt="Pasta" class="hero-decor hero-decor-5">
        <img :src="$img('images/zucchini.svg')" alt="Zucchini" class="hero-decor hero-decor-6">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">Just snap a photo, say it, or select ingredients</h1>
            <p class="hero-description">Find recipes from what you have as AI turns simple ingredients into fast, smart, everyday meals, helping you cook with confidence and waste less food.</p>
          </div>
          <button class="btn btn-primary hero-cta-button" data-color="Accent" data-size="Big 60" data-type="Fill">
            Start Cooking with Mild
          </button>
        </div>
        <div class="phone-mockup">
          <div class="hero-tabs">
            <button class="hero-tab" data-tab="voice" :class="{ active: activeTab === 'voice' }" @click="activeTab = 'voice'">
              <div class="hero-tab-text">By voice</div>
            </button>
            <button class="hero-tab" data-tab="snap" :class="{ active: activeTab === 'snap' }" @click="activeTab = 'snap'">
              <div class="hero-tab-text">By snap</div>
            </button>
            <button class="hero-tab" data-tab="text" :class="{ active: activeTab === 'text' }" @click="activeTab = 'text'">
              <div class="hero-tab-text">By text</div>
            </button>
          </div>
          <div class="phones-container">
            <div class="phone-frame phone-slide" data-tab="voice" :class="{ active: activeTab === 'voice' }">
              <video class="hero-frame-video" autoplay muted loop playsinline preload="auto" data-video="hero-voice">
                <source :src="$img('Video/BY VOICE (size X3).mp4')" type="video/mp4">
              </video>
            </div>

            <div class="phone-frame phone-slide" data-tab="snap" :class="{ active: activeTab === 'snap' }">
              <video class="hero-frame-video" autoplay muted loop playsinline preload="auto" data-video="hero-snap">
                <source :src="$img('Video/BY PHOTO (size X3).mp4')" type="video/mp4">
              </video>
            </div>

            <div class="phone-frame phone-slide" data-tab="text" :class="{ active: activeTab === 'text' }">
              <video class="hero-frame-video" autoplay muted loop playsinline preload="auto" data-video="hero-text">
                <source :src="$img('Video/BY TEXT (size X3).mp4')" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </div>
    </main>

    <section class="reasons-section">
      <h2 class="reasons-title">Reasons to Choose <br/>Our Recipe App</h2>
      <div class="reasons-content">
        <div class="reasons-cards">
          <div class="reason-card" data-platform="Web">
            <div class="reason-header">
              <div class="reason-percent">50%</div>
              <div class="reason-title-text">Reduce Food Waste</div>
            </div>
            <div class="reason-description">The app helps you turn your ingredients into tasty meals, making everyday cooking simple and reducing food waste.</div>
          </div>
          <div class="reason-card" data-platform="Web">
            <div class="reason-header">
              <div class="reason-percent">Up to 10</div>
              <div class="reason-title-text">ingredients. Under 1 hour</div>
            </div>
            <div class="reason-description">We focus on simple recipes that take less than one hour to cook and use no more than ten ingredients, making everyday meals easier to prepare.</div>
          </div>
          <div class="reason-card" data-platform="Web">
            <div class="reason-header">
              <div class="reason-percent">2000+</div>
              <div class="reason-title-text">Recipes</div>
            </div>
            <div class="reason-description">Discover thousands of meals you can cook with ingredients you already have at home, with simple recipes you can prepare quickly.</div>
          </div>
          <div class="reason-card" data-platform="Web">
            <div class="reason-header">
              <div class="reason-title-text">Available in 17 Languages</div>
            </div>
            <div class="reason-description">EN, ES, IT, DE, FR, PT, CS, PL, UK, HU, DA, FI, SV, TR, RU, ZH, JA.</div>
          </div>
        </div>
        <div class="reasons-video-container">
          <video class="reasons-video" autoplay muted loop playsinline preload="auto">
            <source :src="$img('Video/plate.mp4')" type="video/mp4">
          </video>
        </div>
      </div>
    </section>

    <section class="features-section">
      <h2 class="features-title">What features <br/>do we offer</h2>
      <div class="features-carousel-wrapper">
        <div class="features-grid">
          <div class="feature-card" data-number="1">
            <video class="phone-video" muted loop playsinline preload="none">
              <source :src="$img('Video/WEB_1_sizeX3.mp4')" type="video/mp4">
            </video>
            <div class="feature-description">
              <div class="feature-icon">
                <img :src="$img('images/Icons/done.svg')" alt="Done" class="feature-icon-img">
              </div>
              <div class="feature-text">Just take a photo of your ingredients to find recipes in our database.</div>
            </div>
          </div>

          <div class="feature-card" data-number="2">
            <video class="phone-video" muted loop playsinline preload="none">
              <source :src="$img('Video/WEB_2_sizeX3.mp4')" type="video/mp4">
            </video>
            <div class="feature-description">
              <div class="feature-icon">
                <img :src="$img('images/Icons/done.svg')" alt="Done" class="feature-icon-img">
              </div>
              <div class="feature-text">You can also choose ingredients quickly or use voice to search for recipes.</div>
            </div>
          </div>

          <div class="feature-card" data-number="3">
            <video class="phone-video" muted loop playsinline preload="none">
              <source :src="$img('Video/WEB_3_sizeX3.mp4')" type="video/mp4">
            </video>
            <div class="feature-description">
              <div class="feature-icon">
                <img :src="$img('images/Icons/done.svg')" alt="Done" class="feature-icon-img">
              </div>
              <div class="feature-text">Find simple and quick recipes and see which ingredients you still need.</div>
            </div>
          </div>

          <div class="feature-card" data-number="4">
            <video class="phone-video" muted loop playsinline preload="none">
              <source :src="$img('Video/WEB_4_sizeX3.mp4')" type="video/mp4">
            </video>
            <div class="feature-description">
              <div class="feature-icon">
                <img :src="$img('images/Icons/done.svg')" alt="Done" class="feature-icon-img">
              </div>
              <div class="feature-text">Follow each step with a timer and sound alerts to keep you on track.</div>
            </div>
          </div>

          <div class="feature-card" data-number="5">
            <video class="phone-video" muted loop playsinline preload="none">
              <source :src="$img('Video/WEB_5_sizeX3.mp4')" type="video/mp4">
            </video>
            <div class="feature-description">
              <div class="feature-icon">
                <img :src="$img('images/Icons/done.svg')" alt="Done" class="feature-icon-img">
              </div>
              <div class="feature-text">Start by setting your dietary restrictions to get more suitable recipes.</div>
            </div>
          </div>

          <div class="feature-card" data-number="6">
            <video class="phone-video" muted loop playsinline preload="none">
              <source :src="$img('Video/WEB_6_sizeX3.mp4')" type="video/mp4">
            </video>
            <div class="feature-description">
              <div class="feature-icon">
                <img :src="$img('images/Icons/done.svg')" alt="Done" class="feature-icon-img">
              </div>
              <div class="feature-text">The app is available worldwide and supports 17 languages.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="features-dots" aria-hidden="true">
        <button class="feature-dot active" data-index="0"></button>
        <button class="feature-dot" data-index="1"></button>
        <button class="feature-dot" data-index="2"></button>
        <button class="feature-dot" data-index="3"></button>
        <button class="feature-dot" data-index="4"></button>
        <button class="feature-dot" data-index="5"></button>
      </div>
    </section>

    <section class="try-section">
      <div class="try-container">
        <div class="try-content">
          <h2 class="try-title">Give it a try and<br>decide for yourself!</h2>
          <div class="pricing-table">
            <div class="pricing-features">
              <div class="pricing-features-list">
                <div class="pricing-feature-header">
                  <div class="pricing-feature-text"></div>
                </div>
                <div class="pricing-feature-item">
                  <div class="pricing-feature-text">Select ingredients for quick recipe search</div>
                </div>
                <div class="pricing-feature-item">
                  <div class="pricing-feature-text">Displaying missing ingredients</div>
                </div>
                <div class="pricing-feature-item">
                  <div class="pricing-feature-text">Step-by-step cooking guides</div>
                </div>
                <div class="pricing-feature-item">
                  <div class="pricing-feature-text">Ingredient facts and nutritional info</div>
                </div>
                <div class="pricing-feature-item">
                  <div class="pricing-feature-text">AI photo, voice ingredient search</div>
                </div>
                <div class="pricing-feature-item">
                  <div class="pricing-feature-text">Filter recipes by time, calories, cuisine</div>
                </div>
                <div class="pricing-feature-item">
                  <div class="pricing-feature-text">Timers with sound alerts for each cooking step</div>
                </div>
                <div class="pricing-feature-item">
                  <div class="pricing-feature-text">Save favorite recipes</div>
                </div>
                <div class="pricing-feature-item">
                  <div class="pricing-feature-text">Quick access to recently used ingredients</div>
                </div>
              </div>
            </div>
            <div class="pricing-plan-group">
              <div class="pricing-plan subscription-plan weekly-plan">
                <div class="pricing-plan-content">
                  <div class="pricing-plan-header">
                    <div class="pricing-plan-meta">
                      <div class="pricing-plan-title">Weekly</div>
                      <div class="pricing-plan-trial">1-day trial</div>
                    </div>
                    <div class="pricing-plan-price">
                      <span class="price-amount">$1.49</span>
                      <span class="price-period">/wk</span>
                    </div>
                    <button class="pricing-button pricing-button-subscription">Get App</button>
                  </div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Select ingredients for quick recipe search</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Displaying missing ingredients</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Step-by-step cooking guides</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Ingredient facts and nutritional info</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">AI photo, voice ingredient search</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Filter recipes by time, calories, cuisine</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Timers with sound alerts for each cooking step</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Save favorite recipes</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Quick access to recently used ingredients</div></div>
                </div>
              </div>

              <div class="pricing-plan subscription-plan monthly-plan">
                <div class="pricing-plan-content">
                  <div class="pricing-plan-header">
                    <div class="pricing-plan-meta">
                      <div class="pricing-plan-badge">23% OFF</div>
                      <div class="pricing-plan-title">Monthly</div>
                      <div class="pricing-plan-trial">5-day trial</div>
                    </div>
                    <div class="pricing-plan-price">
                      <span class="price-amount">$4.99</span>
                      <span class="price-period">/mo</span>
                    </div>
                    <button class="pricing-button pricing-button-subscription">Get App</button>
                  </div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Select ingredients for quick recipe search</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Displaying missing ingredients</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Step-by-step cooking guides</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Ingredient facts and nutritional info</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">AI photo, voice ingredient search</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Filter recipes by time, calories, cuisine</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Timers with sound alerts for each cooking step</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Save favorite recipes</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Quick access to recently used ingredients</div></div>
                </div>
              </div>

              <div class="pricing-plan subscription-plan yearly-plan">
                <div class="pricing-plan-content">
                  <div class="pricing-plan-header">
                    <div class="pricing-plan-meta">
                      <div class="pricing-plan-badge">30% OFF</div>
                      <div class="pricing-plan-title">Yearly</div>
                      <div class="pricing-plan-trial">7-day trial</div>
                    </div>
                    <div class="pricing-plan-price">
                      <span class="price-amount">$41.49</span>
                      <span class="price-period">/yr</span>
                    </div>
                    <button class="pricing-button pricing-button-subscription">Get App</button>
                  </div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Select ingredients for quick recipe search</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Displaying missing ingredients</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Step-by-step cooking guides</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Ingredient facts and nutritional info</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">AI photo, voice ingredient search</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Filter recipes by time, calories, cuisine</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Timers with sound alerts for each cooking step</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Save favorite recipes</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Quick access to recently used ingredients</div></div>
                </div>
              </div>

              <div class="pricing-plan free-plan">
                <div class="pricing-plan-content">
                  <div class="pricing-plan-header">
                    <div class="pricing-plan-meta">
                      <div class="pricing-plan-title">Free</div>
                    </div>
                    <div class="pricing-plan-price">
                      <span class="price-amount">$0</span>
                      <span class="price-period">/forever</span>
                    </div>
                    <button class="pricing-button pricing-button-free">Get App</button>
                  </div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Select ingredients for quick recipe search</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Displaying missing ingredients</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Step-by-step cooking guides</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">Ingredient facts and nutritional info</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-yes"><img :src="$img('images/Icons/done.svg')" alt="Done" class="check-icon-img"></div><div class="pricing-feature-text">AI photo, voice ingredient search</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-no"><img :src="$img('images/Icons/close.svg')" alt="Close" class="check-icon-img-close"></div><div class="pricing-feature-text">Filter recipes by time, calories, cuisine</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-no"><img :src="$img('images/Icons/close.svg')" alt="Close" class="check-icon-img-close"></div><div class="pricing-feature-text">Timers with sound alerts for each cooking step</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-no"><img :src="$img('images/Icons/close.svg')" alt="Close" class="check-icon-img-close"></div><div class="pricing-feature-text">Save favorite recipes</div></div>
                  <div class="pricing-feature-check"><div class="check-icon check-no"><img :src="$img('images/Icons/close.svg')" alt="Close" class="check-icon-img-close"></div><div class="pricing-feature-text">Quick access to recently used ingredients</div></div>
                </div>
              </div>
            </div>
            <div class="pricing-dots" aria-hidden="true">
              <button class="pricing-dot active" data-index="0"></button>
              <button class="pricing-dot" data-index="1"></button>
              <button class="pricing-dot" data-index="2"></button>
              <button class="pricing-dot" data-index="3"></button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="waitlist-section" aria-label="Join waitlist">
      <div class="waitlist-card">
        <video class="waitlist-video" autoplay muted loop playsinline preload="auto">
          <source :src="$img('Video/mild_video_bg.mp4')" type="video/mp4">
        </video>
        <div class="waitlist-inner">
          <h2 class="waitlist-title">Get Our Newsletter</h2>
          <div class="waitlist-form" role="group" aria-label="Waitlist signup">
            <input class="waitlist-input" type="email" placeholder="Enter your Email" aria-label="Enter your email">
            <button class="waitlist-button" type="button">Get Early Access</button>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="footer-container">
        <a href="index.html" class="footer-brand">Mild</a>

        <div class="footer-right">
          <a href="recipes.html" class="footer-link">Recipes</a>
          <a href="privacy.html" class="footer-link">Privacy</a>
          <a href="collaboration.html" class="footer-link">Collaboration</a>
          <a href="contact.html" class="footer-link footer-link-contact">Get in touch</a>
        </div>
      </div>
    </footer>

    <div class="cookie-banner" :class="{ hidden: cookieBannerHidden }">
      <div class="cookie-text">We use cookies to analyze traffic, personalize content, and improve your experience. You can accept or reject non-essential cookies.</div>
      <button class="cookie-btn cookie-btn-accept" @click="acceptCookies">Accept all</button>
      <button class="cookie-btn cookie-btn-reject" @click="rejectCookies">Reject all</button>
    </div>

    <button class="scroll-to-top" :class="{ visible: scrollVisible }" @click="window.scrollTo({top: 0, behavior: 'smooth'})" aria-label="Scroll to top">
      <svg viewBox="0 0 24 24">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>

    <!-- Waitlist Modal -->
    <div class="waitlist-modal" :class="{ active: modalActive }">
      <div class="waitlist-modal-overlay" @click="closeModal"></div>
      <div class="waitlist-modal-content">
        <video class="waitlist-modal-video" autoplay muted loop playsinline>
          <source :src="$img('Video/waiting.mp4')" type="video/mp4">
        </video>
        <div class="waitlist-modal-inner">
          <header class="waitlist-modal-header">
            <a href="index.html" class="waitlist-modal-logo">Mild</a>
            <div class="waitlist-modal-header-right">
              <img :src="$img('images/App_Store_Badge.svg')" alt="Download on the App Store" class="waitlist-modal-badge">
              <button class="waitlist-modal-close" @click="closeModal" aria-label="Close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </header>
          <div class="waitlist-modal-body">
            <h2 class="waitlist-modal-title">Something tasty<br>is on the way!</h2>
            <p class="waitlist-modal-text">For those moments when the fridge is open, the clock is ticking, and dinner still feels far away.<br><strong>Join the waitlist and we'll let you know when Mild is ready.</strong></p>
          </div>
          <div class="waitlist-modal-form-container">
            <div class="waitlist-modal-form">
              <input class="waitlist-modal-input" type="email" placeholder="Enter your Email" aria-label="Enter your email">
              <button class="waitlist-modal-button" type="button">Keep Me Posted</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const window = globalThis

// Hero tabs
const activeTab = ref('snap')

// Scroll to top
const scrollVisible = ref(false)
function onScroll() {
  scrollVisible.value = window.scrollY >= window.innerHeight
}

// Cookie banner
const cookieBannerHidden = ref(false)
function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted')
  cookieBannerHidden.value = true
}
function rejectCookies() {
  localStorage.setItem('cookieConsent', 'rejected')
  cookieBannerHidden.value = true
}

// Waitlist modal
const modalActive = ref(false)
function openModal() {
  modalActive.value = true
  document.body.style.overflow = 'hidden'
}
function closeModal() {
  modalActive.value = false
  document.body.style.overflow = ''
}

function onKeydown(e) {
  if (e.key === 'Escape' && modalActive.value) {
    closeModal()
  }
}

// Features carousel dots
function initFeaturesCarousel() {
  const wrapper = document.querySelector('.features-carousel-wrapper')
  const dots = document.querySelectorAll('.feature-dot')
  const cards = document.querySelectorAll('.feature-card')

  if (!wrapper || dots.length === 0 || cards.length === 0) return

  function updateDots() {
    const scrollLeft = wrapper.scrollLeft
    const cardWidth = cards[0].offsetWidth
    const index = Math.round(scrollLeft / cardWidth)
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === index)
    })
  }

  wrapper.addEventListener('scroll', updateDots)

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'))
      const card = cards[index]
      if (card) {
        wrapper.scrollTo({
          left: card.offsetLeft - 10,
          behavior: 'smooth'
        })
      }
    })
  })
}

// Pricing carousel dots
function initPricingCarousel() {
  const pricingGroup = document.querySelector('.pricing-plan-group')
  const pricingDots = document.querySelectorAll('.pricing-dot')
  const pricingPlans = document.querySelectorAll('.pricing-plan')

  if (!pricingGroup || pricingDots.length === 0) return

  function updatePricingDots() {
    const scrollLeft = pricingGroup.scrollLeft
    const planWidth = pricingPlans[0].offsetWidth
    const gap = 16
    const index = Math.round(scrollLeft / (planWidth + gap))

    pricingDots.forEach(function (dot, i) {
      dot.classList.toggle('active', i === index)
    })
  }

  pricingGroup.addEventListener('scroll', updatePricingDots)

  pricingDots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      const index = parseInt(this.getAttribute('data-index'))
      const planWidth = pricingPlans[0].offsetWidth
      const gap = 16
      pricingGroup.scrollTo({
        left: index * (planWidth + gap),
        behavior: 'smooth'
      })
    })
  })
}

// Video hover play/pause
function initVideoHover() {
  const videos = document.querySelectorAll('video')

  if ('IntersectionObserver' in window) {
    const lazyObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const video = entry.target
          video.preload = 'auto'
          video.load()
          lazyObserver.unobserve(video)
        }
      })
    }, { rootMargin: '500px' })

    videos.forEach(function (video) {
      lazyObserver.observe(video)
    })
  } else {
    videos.forEach(function (video) {
      video.preload = 'auto'
      video.load()
    })
  }

  videos.forEach(function (video) {
    video.muted = true
    video.controls = false
    video.removeAttribute('controls')
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const container = video.closest('.feature-card') ||
      video.closest('.feature-phone-mockup') ||
      video.closest('.phone-mockup') ||
      video.closest('.phone-frame') ||
      video.closest('.phone-screen') ||
      video.closest('.hero-frame') ||
      video.closest('.hero-frame-content') ||
      video.parentElement.parentElement ||
      video.parentElement

    function playVideo() {
      if (video.readyState < 2) {
        video.load()
        video.currentTime = 0
      }
      const p = video.play()
      if (p) p.catch(function () {
        setTimeout(function () { video.play().catch(function () {}) }, 50)
      })
    }

    function pauseVideo() { video.pause() }

    video.addEventListener('mouseenter', playVideo)
    video.addEventListener('mouseleave', pauseVideo)
    container.addEventListener('mouseenter', playVideo)
    container.addEventListener('mouseleave', pauseVideo)
    container.addEventListener('touchstart', function () {
      video.paused ? playVideo() : pauseVideo()
    }, { passive: true })
  })

  document.addEventListener('click', function warmUp() {
    videos.forEach(function (v) { v.load() })
    document.removeEventListener('click', warmUp)
  }, { once: true })
}

// Safari autoplay fix
function playAutoplayVideos() {
  const videos = document.querySelectorAll('video[autoplay]')
  videos.forEach(function (video) {
    video.muted = true
    video.setAttribute('muted', '')
    video.setAttribute('playsinline', '')

    if (video.paused) {
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise.catch(function (e) {
          console.log('Autoplay prevented:', e)
        })
      }
    }
  })
}

function startAllVideos() {
  document.querySelectorAll('video').forEach(function (video) {
    video.muted = true
    video.play().catch(function () {})
  })
  document.removeEventListener('click', startAllVideos)
  document.removeEventListener('touchstart', startAllVideos)
  document.removeEventListener('scroll', startAllVideos)
}

onMounted(() => {
  // Cookie banner
  const cookieChoice = localStorage.getItem('cookieConsent')
  if (cookieChoice) {
    cookieBannerHidden.value = true
  }

  // Scroll
  window.addEventListener('scroll', onScroll)

  // Keyboard
  document.addEventListener('keydown', onKeydown)

  // Carousels
  initFeaturesCarousel()
  initPricingCarousel()

  // Videos
  initVideoHover()
  playAutoplayVideos()
  window.addEventListener('load', playAutoplayVideos)
  setTimeout(playAutoplayVideos, 100)
  setTimeout(playAutoplayVideos, 500)
  setTimeout(playAutoplayVideos, 1000)

  const interactionEvents = ['touchstart', 'click', 'scroll', 'mousemove', 'keydown']
  function onFirstInteraction() {
    playAutoplayVideos()
    interactionEvents.forEach(function (e) {
      document.removeEventListener(e, onFirstInteraction)
    })
  }
  interactionEvents.forEach(function (e) {
    document.addEventListener(e, onFirstInteraction, { once: true, passive: true })
  })

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        const video = entry.target
        if (entry.isIntersecting && video.paused && video.hasAttribute('autoplay')) {
          video.muted = true
          video.play().catch(function () {})
        }
      })
    }, { threshold: 0.1 })

    document.querySelectorAll('video[autoplay]').forEach(function (video) {
      observer.observe(video)
    })
  }

  document.addEventListener('click', startAllVideos, { once: true })
  document.addEventListener('touchstart', startAllVideos, { once: true, passive: true })
  document.addEventListener('scroll', startAllVideos, { once: true, passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('load', playAutoplayVideos)
  document.removeEventListener('keydown', onKeydown)
})
</script>
