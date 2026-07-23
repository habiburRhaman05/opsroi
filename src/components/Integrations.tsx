import Image from 'next/image';

const urls = [
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a506eacd595072e016.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a534b29a1b3eca6435.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9500a35043d.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a5ee6da9493235043e.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a506eacd2a0b72e015.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a579284b08c36a77ad.png",
  "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67abd58650fb000ed8851f30.png"
];

export default function Integrations() {
  return (
    <section className="integrations-bar">
      <div className="container">
        <div className="integrations-title">Integrates With Your Favorite Tools</div>
      </div>

      <div className="marquee-wrap" data-lenis-prevent>
        <div className="marquee-track">
          {urls.map((url, i) => (
            <div className="marquee-logo" key={`a-${i}`}>
              <Image src={url} alt="Integration partner logo" width={120} height={40} />
            </div>
          ))}
          {urls.map((url, i) => (
            <div className="marquee-logo" aria-hidden="true" key={`b-${i}`}>
              <Image src={url} alt="" width={120} height={40} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
