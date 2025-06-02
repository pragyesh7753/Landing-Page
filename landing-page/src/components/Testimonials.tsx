import { useState } from "react";

const testimonials = [
    {
        quote: `Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specialised high-quality pigmented imaging process, so he decided to create his own product line`,
        image: "/assets/testimonial1.png",
    },
    {
        quote: `Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.`,
        image: "/assets/testimonial2.png",
    },
    // Add more testimonials as needed
];

export default function Testimonials() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    const next = () => setActive((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

    return (
        <section style={{
            width: "100%",
            background: "#f3f5f9",
            padding: "0",
            minHeight: 520
        }}>
            <h2 style={{
                textAlign: "center",
                color: "#a10000",
                fontWeight: 800,
                fontSize: "2rem",
                margin: "0 0 32px",
                paddingTop: 24
            }}>
                Success stories from 1mdm.com sellers
            </h2>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 400
            }}>
                {/* Left Arrow */}
                <button
                    onClick={prev}
                    style={{
                        border: "none",
                        background: "#e1001a",
                        color: "#fff",
                        borderRadius: "50%",
                        width: 36,
                        height: 36,
                        fontSize: 22,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: 16,
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                    }}
                    aria-label="Previous"
                >
                    &#8592;
                </button>
                {/* Testimonial Card */}
                <div style={{
                    display: "flex",
                    background: "#fff",
                    borderRadius: 16,
                    boxShadow: "0 6px 32px 0 rgba(0,0,0,0.07)",
                    overflow: "hidden",
                    width: 900,
                    maxWidth: "95%",
                    minHeight: 380,
                    position: "relative"
                }}>
                    {/* Quote */}
                    <div style={{
                        flex: 1,
                        padding: "48px 32px 48px 48px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center"
                    }}>
                        <div style={{
                            color: "#e1001a",
                            fontSize: 38,
                            marginBottom: 8
                        }}>
                            &#10077;
                        </div>
                        <div style={{
                            color: "#222",
                            fontSize: "1.08rem",
                            lineHeight: 1.7,
                            fontWeight: 400
                        }}>
                            {testimonials[active].quote}
                        </div>
                    </div>
                    {/* Image */}
                    <div style={{
                        width: 340,
                        minWidth: 260,
                        height: "100%",
                        background: "#eee",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <img
                            src={testimonials[active].image}
                            alt=""
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "0 16px 16px 0"
                            }}
                        />
                    </div>
                </div>
                {/* Right Arrow */}
                <button
                    onClick={next}
                    style={{
                        border: "none",
                        background: "#e1001a",
                        color: "#fff",
                        borderRadius: "50%",
                        width: 36,
                        height: 36,
                        fontSize: 22,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: 16,
                        cursor: "pointer",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                    }}
                    aria-label="Next"
                >
                    &#8594;
                </button>
            </div>
        </section>
    );
}
