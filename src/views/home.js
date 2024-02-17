import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>FowlPlay Studios</title>
        <meta
          name="description"
          content="Why did the chicken join Fowlplay Gaming Studio? Because it heard they were eggs-perienced in creating cracking games!"
        />
        <meta property="og:title" content="FowlPlay Studios" />
        <meta
          property="og:description"
          content="Why did the chicken join Fowlplay Gaming Studio? Because it heard they were eggs-perienced in creating cracking games!"
        />
      </Helmet>
      <section className="home-hero">
        <video
          src="/privacy%20terms-1500h.jpeg"
          loop
          muted
          poster="/privacy%20terms-1500h.jpeg"
          preload="auto"
          autoPlay
          playsInline
          className="home-video"
        ></video>
        <header data-thq="thq-navbar" className="home-navbar">
          <a
            href="https://www.pandasfight.club"
            target="_blank"
            rel="noreferrer noopener"
            className="home-link"
          >
            <img
              alt="image"
              src="/fowlplaystudio-1500h.jpg"
              className="home-branding"
            />
          </a>
          <div data-thq="thq-burger-menu" className="home-burger-menu"></div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-nav"
            >
              <div className="home-container1">
                <img alt="image" src="/logo.svg" className="home-image" />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-nav1"
              >
                <span className="home-text">About</span>
                <span className="home-text001">Features</span>
                <span className="home-text002">Pricing</span>
                <span className="home-text003">Team</span>
                <span className="home-text004">Blog</span>
              </nav>
              <div className="home-container2">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon2">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon4">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon6">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <div className="home-hero-content">
          <div className="home-header-container">
            <div className="home-header">
              <h1 className="home-heading">
                <span>Terms of Privacy</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              Welcome to FowlPlay Studio, where the only &quot;fowl play&quot;
              allowed is in our games, not with your privacy! We&apos;re here to
              assure you that your personal information is treated with the
              utmost care and respect. Now, let&apos;s dive into the serious
              stuff – and no, we promise it won&apos;t be as fowl as a chicken
              crossing the road.
            </p>
          </div>
        </div>
      </section>
      <section className="home-comparision">
        <div className="home-header-container1">
          <div className="home-header1"></div>
          <p className="home-caption1">
            <span className="home-text007">Information We Collect:</span>
            <br className="home-text008"></br>
            <br className="home-text009"></br>
            <span className="home-text010">1.1 Personal Information:</span>
            <br className="home-text011"></br>
            <br className="home-text012"></br>
            <br className="home-text013"></br>
            <br className="home-text014"></br>
            <span className="home-text015">
              We collect personal information, like your name, email address,
              and contact details, so we can send you updates about our games
              and not a single poultry joke.
            </span>
            <br className="home-text016"></br>
            <br className="home-text017"></br>
            <span className="home-text018">1.2 Usage Information:</span>
            <br className="home-text019"></br>
            <br className="home-text020"></br>
            <br className="home-text021"></br>
            <br className="home-text022"></br>
            <span className="home-text023">
              We automatically collect data about your device and gameplay, but
              don&apos;t worry; we&apos;re not spying on your strategy to
              conquer the virtual barnyard.
            </span>
            <br className="home-text024"></br>
            <br className="home-text025"></br>
            <span className="home-text026">1.3 Payment Information:</span>
            <br className="home-text027"></br>
            <br className="home-text028"></br>
            <br className="home-text029"></br>
            <br className="home-text030"></br>
            <span className="home-text031">
              We handle payment details as carefully as a cat navigating a room
              full of fragile vases – our payment processors take care of it,
              and we keep our paws off.
            </span>
            <br className="home-text032"></br>
            <br className="home-text033"></br>
            <span className="home-text034">
              1.4 Cookies and Similar Technologies:
            </span>
            <br className="home-text035"></br>
            <br className="home-text036"></br>
            <br className="home-text037"></br>
            <br className="home-text038"></br>
            <span className="home-text039">
              We use cookies to make your experience sweeter than grandma&apos;s
              cookies but without the calories. You can control them like a boss
              – just check your browser settings.
            </span>
            <br className="home-text040"></br>
            <br className="home-text041"></br>
            <span className="home-text042">How We Use Your Information:</span>
            <br className="home-text043"></br>
            <br className="home-text044"></br>
            <span className="home-text045">
              2.1 Providing and Improving Our Services:
            </span>
            <br className="home-text046"></br>
            <br className="home-text047"></br>
            <br className="home-text048"></br>
            <br className="home-text049"></br>
            <span className="home-text050">
              We use your info to make our games egg-ceptional and provide you
              with top-notch customer support. No fowl play involved – only fair
              feathers.
            </span>
            <br className="home-text051"></br>
            <br className="home-text052"></br>
            <span className="home-text053">2.2 Communications:</span>
            <br className="home-text054"></br>
            <br className="home-text055"></br>
            <br className="home-text056"></br>
            <br className="home-text057"></br>
            <span className="home-text058">
              Expect only game-related updates from us, not daily
              chicken-crossing reminders. You can opt-out of promotional
              clucking – we mean, communications.
            </span>
            <br className="home-text059"></br>
            <br className="home-text060"></br>
            <span className="home-text061">2.3 Analytics:</span>
            <br className="home-text062"></br>
            <br className="home-text063"></br>
            <br className="home-text064"></br>
            <br className="home-text065"></br>
            <span className="home-text066">
              We use analytics to understand how you play our games, not to
              solve the mystery of why the chicken crossed the road. Some
              questions are better left unanswered.
            </span>
            <br className="home-text067"></br>
            <br className="home-text068"></br>
            <span className="home-text069">2.4 Legal Purposes:</span>
            <br className="home-text070"></br>
            <br className="home-text071"></br>
            <br className="home-text072"></br>
            <br className="home-text073"></br>
            <span className="home-text074">
              We&apos;ll only use your information for legal stuff if we
              absolutely have to, like solving the case of the missing game
              controller.
            </span>
            <br className="home-text075"></br>
            <br className="home-text076"></br>
            <span className="home-text077">Sharing Your Information:</span>
            <br className="home-text078"></br>
            <br className="home-text079"></br>
            <span className="home-text080">
              3.1 Third-Party Service Providers:
            </span>
            <br className="home-text081"></br>
            <br className="home-text082"></br>
            <br className="home-text083"></br>
            <br className="home-text084"></br>
            <span className="home-text085">
              We share info with third parties only to help us run our games
              smoothly – no secret chicken alliances involved.
            </span>
            <br className="home-text086"></br>
            <br className="home-text087"></br>
            <span className="home-text088">3.2 Business Transfers:</span>
            <br className="home-text089"></br>
            <br className="home-text090"></br>
            <br className="home-text091"></br>
            <br className="home-text092"></br>
            <span className="home-text093">
              If we merge, we promise it won&apos;t be with a rival egg-stealing
              gang. Your info will just be part of the deal, like a bonus level
              in a game.
            </span>
            <br className="home-text094"></br>
            <br className="home-text095"></br>
            <span className="home-text096">3.3 Legal Requirements:</span>
            <br className="home-text097"></br>
            <br className="home-text098"></br>
            <br className="home-text099"></br>
            <br className="home-text100"></br>
            <span className="home-text101">
              If we have to disclose info because the law says so, rest assured
              it&apos;s as reluctantly as a cat sharing its favorite nap spot.
            </span>
            <br className="home-text102"></br>
            <br className="home-text103"></br>
            <span className="home-text104">Your Choices:</span>
            <br className="home-text105"></br>
            <br className="home-text106"></br>
            <span className="home-text107">4.1 Account Information:</span>
            <br className="home-text108"></br>
            <br className="home-text109"></br>
            <br className="home-text110"></br>
            <br className="home-text111"></br>
            <span className="home-text112">
              Update your account info anytime, but be warned – changing your
              username won&apos;t make you invisible to the virtual rooster.
            </span>
            <br className="home-text113"></br>
            <br className="home-text114"></br>
            <span className="home-text115">4.2 Marketing Communications:</span>
            <br className="home-text116"></br>
            <br className="home-text117"></br>
            <br className="home-text118"></br>
            <br className="home-text119"></br>
            <span className="home-text120">
              Opt-out of our clucking good promotions anytime. We won&apos;t
              take it personally – maybe just a little, like a hen missing her
              favorite worm.
            </span>
            <br className="home-text121"></br>
            <br className="home-text122"></br>
            <span className="home-text123">Security:</span>
            <br className="home-text124"></br>
            <br className="home-text125"></br>
            <span className="home-text126">
              We protect your info like a dragon guarding its treasure. But
              remember, no fortress is 100% impregnable – not even Hogwarts.
            </span>
            <br className="home-text127"></br>
            <br className="home-text128"></br>
            <span className="home-text129">Children&apos;s Privacy:</span>
            <br className="home-text130"></br>
            <br className="home-text131"></br>
            <span className="home-text132">
              Our games are for those over 13 months. If you&apos;re younger,
              stick to counting sheep – or better yet, chickens – until
              you&apos;re old enough.
            </span>
            <br className="home-text133"></br>
            <br className="home-text134"></br>
            <span className="home-text135">
              Changes to this Privacy Policy:
            </span>
            <br className="home-text136"></br>
            <br className="home-text137"></br>
            <span className="home-text138">
              If we change this policy, it won&apos;t be as surprising as a fox
              in the henhouse. We&apos;ll let you know.
            </span>
            <br className="home-text139"></br>
            <br className="home-text140"></br>
            <span className="home-text141">Contact Us:</span>
            <br className="home-text142"></br>
            <br className="home-text143"></br>
            <span className="home-text144">
              If you&apos;re wondering where to send fan mail, jokes, or
              concerns, email me at [bonappetitjovi@gmail.com]. I promise to
              read &amp; reply if I deem it interesting
            </span>
            <br className="home-text145"></br>
            <br className="home-text146"></br>
            <span className="home-text147">
              By using our services, you agree to the terms of this Privacy
              Policy – and no, we won&apos;t add a clause about sharing your
              high score with the local coop.
            </span>
          </p>
        </div>
      </section>
      <div>
        <div className="home-container4">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
