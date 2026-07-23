import Image from 'next/image';
import Link from 'next/link';


const integrationIcons = [
  {
    name: "GoHighLevel",
    slug: "gohighlevel",
    icon: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://storage.googleapis.com/msgsndr/knES3eSWYIsc5YSZ3YLl/media/67ab96a579284b08c36a77ad.png",
    url: "https://www.gohighlevel.com",
  },
  {
    name: "Slack",
    slug: "slack",
    icon: "https://a.slack-edge.com/80588/marketing/img/meta/slack_hash_256.png",
    url: "https://slack.com",
  },
  {
    name: "Facebook",
    slug: "facebook",
    icon: "https://cdn.simpleicons.org/facebook",
    url: "https://www.facebook.com",
  },
  {
    name: "Stripe",
    slug: "stripe",
    icon: "https://cdn.simpleicons.org/stripe",
    url: "https://stripe.com",
  },
  {
    name: "Google Calendar",
    slug: "googlecalendar",
    icon: "https://cdn.simpleicons.org/googlecalendar",
    url: "https://calendar.google.com",
  },
  {
    name: "Discord",
    slug: "discord",
    icon: "https://cdn.simpleicons.org/discord",
    url: "https://discord.com",
  },
  {
    name: "WhatsApp",
    slug: "whatsapp",
    icon: "https://cdn.simpleicons.org/whatsapp",
    url: "https://www.whatsapp.com",
  },
  {
    name: "HubSpot",
    slug: "hubspot",
    icon: "https://cdn.simpleicons.org/hubspot",
    url: "https://www.hubspot.com",
  },
  {
    name: "Zapier",
    slug: "zapier",
    icon: "https://cdn.simpleicons.org/zapier",
    url: "https://zapier.com",
  },
  {
    name: "Shopify",
    slug: "shopify",
    icon: "https://cdn.simpleicons.org/shopify",
    url: "https://www.shopify.com",
  },
  {
    name: "OpenAI",
    slug: "openai",
    icon: "https://cdn.simpleicons.org/openai",
    url: "https://openai.com",
  },
  {
    name: "GitHub",
    slug: "github",
    icon: "https://cdn.simpleicons.org/github",
    url: "https://github.com",
  },
  {
    name: "Gmail",
    slug: "gmail",
    icon: "https://cdn.simpleicons.org/gmail",
    url: "https://mail.google.com",
  },
  {
    name: "Google Drive",
    slug: "googledrive",
    icon: "https://cdn.simpleicons.org/googledrive",
    url: "https://drive.google.com",
  },
  {
    name: "Google Sheets",
    slug: "googlesheets",
    icon: "https://cdn.simpleicons.org/googlesheets",
    url: "https://docs.google.com/spreadsheets",
  },
  {
    name: "Google Docs",
    slug: "googledocs",
    icon: "https://cdn.simpleicons.org/googledocs",
    url: "https://docs.google.com/document",
  },
  {
    name: "Google Meet",
    slug: "googlemeet",
    icon: "https://cdn.simpleicons.org/googlemeet",
    url: "https://meet.google.com",
  },
  {
    name: "Zoom",
    slug: "zoom",
    icon: "https://cdn.simpleicons.org/zoom",
    url: "https://zoom.us",
  },
  {
    name: "Calendly",
    slug: "calendly",
    icon: "https://cdn.simpleicons.org/calendly",
    url: "https://calendly.com",
  },
  {
    name: "Notion",
    slug: "notion",
    icon: "https://cdn.simpleicons.org/notion",
    url: "https://www.notion.so",
  },
  {
    name: "Airtable",
    slug: "airtable",
    icon: "https://cdn.simpleicons.org/airtable",
    url: "https://airtable.com",
  },
  {
    name: "Twilio",
    slug: "twilio",
    icon: "https://cdn.simpleicons.org/twilio",
    url: "https://www.twilio.com",
  },
  {
    name: "Mailchimp",
    slug: "mailchimp",
    icon: "https://cdn.simpleicons.org/mailchimp",
    url: "https://mailchimp.com",
  },
];
export default function Integrations() {
  return (
    <section className="integrations-bar">
      <div className="container">
        <div className="integrations-title">Integrates With Your Favorite Tools</div>
      </div>

      <div className="marquee-wrap mx-auto max-w-[100%] overflow-hidden" data-lenis-prevent>
        <div className="marquee-track">
          {integrationIcons.map((item, i) => (
            <div className="marquee-logo" key={`a-${i}`}>
           <Link href={item.url}>   <Image
                src={item.icon}
                alt={item.name}
                title={item.name}
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                unoptimized
              /></Link>
            </div>
          ))}
        
        </div>
      </div>
    </section>
  );
}
