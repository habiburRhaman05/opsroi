'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [words] = useState(["Marketing Agencies.", "Coaching.", "Creative Studios.", "Home Services.", "Every agency."]);
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setCurrentWord(
        isDeleting
          ? fullText.substring(0, currentWord.length - 1)
          : fullText.substring(0, currentWord.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 80);

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(400);
      }
    };
    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section id="home" className="hero">
      <div className="hero-glow hero-glow--a"></div>
      <div className="hero-glow hero-glow--b"></div>

      <div className="container hero-grid">
        <div className="hero-copy">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M9 1L3 9h4l-1 6 6-8H8l1-6z" fill="var(--green)"/></svg>
            AI-Powered &middot; Built for Agencies
          </div>

          <h1 className="hero-h1">
            The <span className="ai-gradient">AI-powered</span> business operating system<br/>
            <span className="typewriter-wrap">
              for <span id="typewriter" className="typewriter-text">{currentWord}</span><span className="type-cursor">|</span>
            </span>
          </h1>

          <p className="lede">One platform to run pipelines, automate follow-up, and prove ROI - powered by AI, built for any agency.</p>

          <div className="hero-cta">
            <Link href="#contact" className="btn btn-primary hero-btn-primary">
              Start 14 Day Free Trial
              <span className="hero-btn-arrow"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h9M7 3l4 4-4 4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
            </Link>
            <Link href="#product" className="btn btn-ghost hero-btn-ghost">See the platform &rarr;</Link>
          </div>

          <div className="hero-note">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" stroke="var(--green)" strokeWidth="2"/><path d="M6 10.5l2.5 2.5L14 7" stroke="var(--green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            No credit card &middot; 4-5 day setup &middot; Any niche
          </div>
        </div>

        <div className="hero-art">
          <div className="hero-art-glow"></div>
          <div className="" id="heroImageWrap">
            <img src="/opsroi-dashboard-demo.png" alt="OpsROI Dashboard"   />
          
            
          </div>
        </div>
      </div>
    </section>
  );
}
