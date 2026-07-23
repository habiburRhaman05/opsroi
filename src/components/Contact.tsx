export default function Contact() {
  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="section-head center" style={{margin: '0 auto 52px'}}>
          <div className="eyebrow" style={{justifyContent: 'center'}}>Contact</div>
          <h2>Let&apos;s talk about your agency&apos;s ops.</h2>
          <p>Tell us a bit about your agency and we&apos;ll get back to you within one business day - no niche is out of scope.</p>
        </div>

        <div className="contact-grid">
          <div className="contact-form-premium">
            <h3 style={{marginBottom: '28px', color: 'var(--navy)', fontSize: '1.6rem'}}>Send us a message</h3>
            <form className="premium-form">
              <div className="two-col">
                <div className="form-float">
                  <input type="text" id="name" placeholder=" " required />
                  <label htmlFor="name">Full name</label>
                </div>
                <div className="form-float">
                  <input type="text" id="agency" placeholder=" " required />
                  <label htmlFor="agency">Agency name</label>
                </div>
              </div>
              <div className="two-col">
                <div className="form-float">
                  <input type="email" id="email" placeholder=" " required />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="form-float">
                  <input type="tel" id="phone" placeholder=" " required />
                  <label htmlFor="phone">Phone</label>
                </div>
              </div>
              <div className="form-float select-float">
                <select id="clients" required defaultValue="">
                  <option value="" disabled hidden></option>
                  <option value="marketing">Marketing / Ad Agency</option>
                  <option value="coaching">Coaching &amp; Consulting</option>
                  <option value="creative">Creative / Design Studio</option>
                  <option value="home">Home Services</option>
                  <option value="recruiting">Recruiting</option>
                  <option value="other">Other - any niche welcome</option>
                </select>
                <label htmlFor="clients">What does your agency serve?</label>
              </div>
              <div className="form-float">
                <textarea id="message" rows={4} placeholder=" " required data-lenis-prevent></textarea>
                <label htmlFor="message">What are you looking to fix or set up?</label>
              </div>
              <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '14px', fontSize: '1.05rem'}}>Send Message</button>
            </form>
          </div>

          <div className="contact-info-panel">
            <div className="contact-info-item">
              <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 4h16v16H4z" stroke="currentColor" strokeWidth="1.8"/><path d="M4 6l8 7 8-7" stroke="currentColor" strokeWidth="1.8"/></svg></div>
              <div><h4>Email</h4><p>hello@opsroi.com</p></div>
            </div>
            <div className="contact-info-item">
              <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <div><h4>Phone</h4><p>(800) 555-0199</p></div>
            </div>
            <div className="contact-info-item">
              <div className="info-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.8"/><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.8"/></svg></div>
              <div><h4>Location</h4><p>Fully Remote<br/>Austin, TX &amp; Global</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
