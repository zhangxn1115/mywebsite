import { ReferralActions } from "./ReferralActions";

export default function Home() {
  return (
    <main className="pageShell">
      <header className="personalHeader">
        <a className="personalBrand" href="#top" aria-label="回到页面顶部">
          <span className="logoSlot" aria-label="Logo 图片位置">LOGO</span>
        </a>
      </header>

      <section className="splitLayout" id="top">
        <div className="storyColumn">
          <div className="infoList">
            <article lang="en-US">
              <span>01</span>
              <div><h2>English</h2><p>Whether you plan to drive long-term or just for a short while, be sure to sign up as an Uber driver through this link so you don’t miss out on an additional reward. I didn’t know about it when I started and missed out on several hundred dollars. Thank you for your trust.</p></div>
            </article>
            <article lang="es-US">
              <span>02</span>
              <div><h2>Español</h2><p>Ya sea que planees conducir a largo plazo o solo por un tiempo, no olvides registrarte como conductor de Uber mediante este enlace para recibir una recompensa adicional. Cuando empecé, no sabía que existía y perdí varios cientos de dólares. Gracias por tu confianza.</p></div>
            </article>
            <article lang="zh-CN">
              <span>03</span>
              <div><h2>中文</h2><p>无论您打算长期从事这份工作，还是只做一段时间，都别忘记通过此链接注册成为 Uber 司机，以免错过额外奖励。我刚开始时并不知道这项奖励，白白错过了几百美元。感谢您的信任。</p></div>
            </article>
          </div>
        </div>

        <aside className="inviteColumn" aria-label="个人邀请码">
          <div className="inviteMain">
            <h1 className="inviteLabel">Complete your first 70 deliveries within 30 days and earn at least <span className="rewardAmount">$630</span>.</h1>
            <ReferralActions />
          </div>
          <div className="roadScene" aria-hidden="true">
            <div className="sun" />
            <div className="car"><i /><b /><span /><em /></div>
            <div className="roadLine" />
          </div>
          <p className="disclaimer">This is a personal referral page and is not an official Uber website. Eligibility requirements, rewards, and promotional terms are subject to Uber&apos;s official information.</p>
        </aside>
      </section>
    </main>
  );
}
