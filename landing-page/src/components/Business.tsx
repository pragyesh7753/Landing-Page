import { useState } from "react";

const tabs = [
  {
    label: "Custom storefront",
    content: {
      title: "Set up a store that showcases your brand",
      desc: "Differentiate yourself from the competition with a full store dedicated to your products- no coding or design skills necessary!",
      image: "/images/storefront.png", // Replace with your actual image path
    },
  },
  {
    label: "Advertising tools",
    content: {
      title: "Increase exposure by up to 120% with a suite of smart advertising tools.",
      desc: "Get your products placed in the right spots to be noticed by the exact audience you are targeting.",
      image: "/images/ads.png", // Replace with your actual image path
    },
  },
  {
    label: "Data and analytics",
    content: {
      title: "Optimize your every move with in-depth data and customer insights",
      desc: "Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!",
      image: "/images/analytics.png", // Replace with your actual image path
    },
  },
  {
    label: "Customers support",
    content: {
      title: "Know you’re supported throughout your journey",
      desc: "From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you",
      image: "/images/support.png", // Replace with your actual image path
    },
  },
];

export default function Business() {
  const [active, setActive] = useState(0);

  return (
    <section style={{
      width: "100%",
      background: "#f7f7f7",
      minHeight: 600,
      padding: "64px 0"
    }}>
      <h2 style={{
        textAlign: "center",
        color: "#a10000",
        fontWeight: 800,
        fontSize: "2.3rem",
        margin: "0 0 40px"
      }}>
        Grow your business with a suite of tools built for you
      </h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        maxWidth: 1100,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 24,
        boxShadow: "0 6px 32px 0 rgba(0,0,0,0.07)",
        padding: "0 0 0 0",
        minHeight: 420
      }}>
        {/* Left Tabs */}
        <div style={{
          minWidth: 220,
          borderRight: "1.5px solid #ececec",
          padding: "40px 0 40px 32px",
          display: "flex",
          flexDirection: "column",
          gap: 8
        }}>
          {tabs.map((tab, idx) => (
            <div
              key={tab.label}
              onClick={() => setActive(idx)}
              style={{
                cursor: "pointer",
                color: active === idx ? "#e1001a" : "#222",
                fontWeight: active === idx ? 800 : 600,
                fontSize: 18,
                marginBottom: 8,
                padding: "12px 0 12px 0",
                borderLeft: active === idx ? "5px solid #e1001a" : "5px solid transparent",
                background: active === idx ? "rgba(225,0,26,0.07)" : "none",
                borderRadius: "0 8px 8px 0",
                transition: "all 0.18s"
              }}
            >
              <div style={{
                paddingLeft: 18,
                lineHeight: 1.2,
                letterSpacing: 0.1
              }}>
                {tab.label}
              </div>
            </div>
          ))}
        </div>
        {/* Right Content */}
        <div style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          minHeight: 350,
          padding: "40px 48px",
          gap: 32
        }}>
          <div style={{ flex: 1 }}>
            <h3 style={{
              fontSize: "2.1rem",
              fontWeight: 800,
              margin: 0,
              color: "#222",
              lineHeight: 1.15,
              letterSpacing: 0.1
            }}>
              {tabs[active].content.title}
            </h3>
            <p style={{
              fontSize: "1.15rem",
              color: "#444",
              marginTop: 24,
              maxWidth: 480,
              lineHeight: 1.6
            }}>
              {tabs[active].content.desc}
            </p>
          </div>
          <div style={{
            minWidth: 340,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#f7f7f7",
            borderRadius: 16,
            boxShadow: "0 2px 12px 0 rgba(0,0,0,0.04)",
            padding: 24
          }}>
            <img
              src={tabs[active].content.image}
              alt=""
              style={{
                maxWidth: 320,
                maxHeight: 220,
                width: "100%",
                objectFit: "contain",
                borderRadius: 12,
                background: "#fff"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
