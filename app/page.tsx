"use client";

import { useState } from "react";

const products = [
  {
    name: "Building Stones",
    description:
      "Quality building stones for residential, commercial, and construction projects.",
    image: "/images/building-stones.jpg",
    icon: "🧱",
  },
  {
    name: "Ballast",
    description:
      "Construction ballast for concrete mixing and other building applications.",
    image: "/images/ballast.jpg",
    icon: "🪨",
  },
  {
    name: "Reinforcement Steel",
    description:
      "Steel reinforcement materials for structural construction projects.",
    image: "/images/reinforcement-steel.jpg",
    icon: "🏗️",
  },
  {
    name: "Building Sand",
    description:
      "Sand for masonry, plastering, concrete, and general construction work.",
    image: "/images/building-sand.jpg",
    icon: "⏳",
  },
  {
    name: "Cement",
    description:
      "Cement for building, renovation, and infrastructure projects.",
    image: "/images/cement.jpg",
    icon: "🏢",
  },
  {
    name: "Other Construction Materials",
    description:
      "Contact our team to enquire about other construction materials.",
    image: "/images/other-materials.jpg",
    icon: "📦",
  },
];

const phoneNumbers = [
  { label: "0714 511 927", number: "+254714511927" },
  { label: "0794 176 020", number: "+254794176020" },
];

function createWhatsAppLink(message: string) {
  return `https://wa.me/254714511927?text=${encodeURIComponent(message)}`;
}

export default function Home() {
const [form, setForm] = useState({
name: "",
phone: "",
location: "",
product: "",
quantity: "",
details: "",
});

function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
event.preventDefault();


const message = [
  "Hello UMI GENERAL SUPPLIES,",
  "",
  "I would like to request a quotation.",
  "",
  `Name: ${form.name}`,
  `Phone: ${form.phone}`,
  `Delivery location: ${form.location}`,
  `Product: ${form.product}`,
  `Quantity: ${form.quantity}`,
  `Additional details: ${form.details || "Not provided"}`,
  "",
  "Please share your quotation and availability. Thank you.",
].join("\n");

window.open(createWhatsAppLink(message), "_blank", "noopener,noreferrer");

}

return ( <main className="min-h-screen bg-white text-slate-800">
{/* Navigation */} <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur"> <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3"> <a href="#home" className="flex shrink-0 items-center gap-3"> <img
           src="/images/umi-logo.png"
           alt="UMI General Supplies Logo"
           className="h-14 w-auto max-w-[150px] object-contain sm:h-16"
         /> <span className="hidden text-sm font-black leading-tight text-slate-950 sm:block">
UMI GENERAL <span className="block text-orange-600">SUPPLIES</span> </span> </a>

```
      <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
        <a href="#home" className="transition hover:text-orange-600">
          Home
        </a>
        <a href="#about" className="transition hover:text-orange-600">
          About Us
        </a>
        <a href="#products" className="transition hover:text-orange-600">
          Products
        </a>
        <a href="#contact" className="transition hover:text-orange-600">
          Contact
        </a>
      </nav>

      <a
        href="#quote"
        className="shrink-0 rounded-lg bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
      >
        Get a Quote
      </a>
    </div>
  </header>

  {/* Hero Section */}
  <section
    id="home"
    className="relative overflow-hidden bg-slate-950 text-white"
    style={{
      backgroundImage:
        "linear-gradient(to right, rgba(2, 6, 23, 0.96), rgba(2, 6, 23, 0.72)), url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=2000&q=85')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-2 md:py-28">
      <div>
        <p className="mb-5 inline-block rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-400">
          YOUR CONSTRUCTION SUPPLY PARTNER
        </p>

        <h1 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
          Building Your Vision,
          <span className="block text-orange-500">
            Supplying Your Success.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
          Looking for construction materials for your next project? Contact
          UMI GENERAL SUPPLIES for quotations and supply enquiries across
          Mombasa, Kilifi, Malindi, and other locations in Kenya.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#quote"
            className="rounded-lg bg-orange-500 px-7 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Request a Quotation →
          </a>

          <a
            href={createWhatsAppLink(
              "Hello UMI GENERAL SUPPLIES. I would like to enquire about your construction materials."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-white/30 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-slate-950"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/15 pt-7">
          <div>
            <p className="text-xl font-black text-orange-500">Quality</p>
            <p className="mt-1 text-sm text-slate-300">
              Material enquiries
            </p>
          </div>

          <div>
            <p className="text-xl font-black text-orange-500">Reliable</p>
            <p className="mt-1 text-sm text-slate-300">
              Customer service
            </p>
          </div>

          <div>
            <p className="text-xl font-black text-orange-500">Kenya</p>
            <p className="mt-1 text-sm text-slate-300">
              Supply enquiries
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl bg-orange-500/20 blur-2xl" />

        <div className="relative rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-2xl sm:p-8">
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-orange-400">
                UMI GENERAL SUPPLIES
              </p>
              <h2 className="mt-2 text-2xl font-black">
                Materials for Your Project
              </h2>
            </div>

            <span className="text-4xl" aria-hidden="true">
              🏗️
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {products.slice(0, 4).map((product) => (
              <a
                key={product.name}
                href="#products"
                className="rounded-xl border border-white/10 bg-slate-800 p-4 transition hover:border-orange-500/70"
              >
                <span className="text-3xl" aria-hidden="true">
                  {product.icon}
                </span>
                <h3 className="mt-3 font-bold text-white">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Enquire for pricing and availability.
                </p>
              </a>
            ))}
          </div>

          <a
            href="#products"
            className="mt-5 block rounded-lg bg-white/5 p-4 text-center font-semibold text-orange-400 transition hover:bg-white/10"
          >
            Explore Our Products →
          </a>
        </div>
      </div>
    </div>
  </section>

  {/* About Section */}
  <section id="about" className="px-5 py-20 md:py-28">
    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
      <div>
        <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
          About Our Business
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          Supplying Materials to Support Your Construction Goals
        </h2>

        <p className="mt-6 leading-8 text-slate-600">
          UMI GENERAL SUPPLIES provides a point of contact for customers
          looking for construction materials. Whether you are planning a
          residential building, a commercial development, or a renovation,
          our team can help you make a supply enquiry and request a
          quotation.
        </p>

        <p className="mt-4 leading-8 text-slate-600">
          We welcome enquiries from Mombasa, Kilifi, Malindi, and other
          areas across Kenya. Product availability, prices, delivery
          arrangements, and quantities are confirmed when you contact us.
        </p>

        <a
          href="#quote"
          className="mt-7 inline-block rounded-lg bg-slate-950 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
        >
          Discuss Your Project
        </a>
      </div>

      <div className="rounded-3xl bg-slate-100 p-7 sm:p-10">
        <h2 className="text-2xl font-black text-slate-950">
          Why Contact UMI?
        </h2>

        <div className="mt-7 space-y-6">
          {[
            {
              title: "Multiple Material Categories",
              text: "Enquire about a range of construction supplies in one place.",
            },
            {
              title: "Quotation Requests",
              text: "Tell us what you need so we can discuss pricing and availability.",
            },
            {
              title: "Regional Enquiries",
              text: "Contact us about projects in Mombasa, Kilifi, Malindi, and beyond.",
            },
            {
              title: "Direct Communication",
              text: "Reach our team by phone or WhatsApp to discuss your requirements.",
            },
          ].map((item, index) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 font-black text-white">
                {index + 1}
              </div>

              <div>
                <h3 className="font-bold text-slate-950">{item.title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>

  {/* Products Section */}
  <section id="products" className="bg-slate-50 px-5 py-20 md:py-28">
    <div className="mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center">
        <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
          What You Can Enquire About
        </p>

        <h2 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">
          Construction Materials
        </h2>

        <p className="mt-5 leading-7 text-slate-600">
          Select a product category and send us your requirements for a
          quotation. Availability is confirmed directly with our team.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <article
            key={product.name}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
          >
            <div className="h-56 overflow-hidden bg-slate-100">
              <img
                src={product.image}
                alt={product.name}
                loading="lazy"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3">
                <span className="text-2xl" aria-hidden="true">
                  {product.icon}
                </span>
                <h3 className="text-xl font-black text-slate-950">
                  {product.name}
                </h3>
              </div>

              <p className="mt-4 min-h-20 leading-7 text-slate-600">
                {product.description}
              </p>

              <a
                href={createWhatsAppLink(
                  `Hello UMI GENERAL SUPPLIES. I would like to enquire about ${product.name}. Please share pricing and availability.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex font-bold text-orange-600 transition hover:text-orange-700"
              >
                Enquire Now →
              </a>
            </div>
          </article>
        ))}
      </div>

      <p className="mt-8 text-center text-sm text-slate-500">
        Product categories are for enquiries. Please confirm current stock,
        prices, and delivery arrangements directly with our team.
      </p>
    </div>
  </section>

  {/* Quotation Form */}
  <section id="quote" className="px-5 py-20 md:py-28">
    <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
      <div>
        <p className="font-bold uppercase tracking-[0.2em] text-orange-600">
          Request a Quote
        </p>

        <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 sm:text-4xl">
          Tell Us What Your Project Needs
        </h2>

        <p className="mt-6 leading-8 text-slate-600">
          Complete the form with your contact details and material
          requirements. Your information will be placed into a WhatsApp
          message for you to review and send to our team.
        </p>

        <div className="mt-8 rounded-2xl bg-slate-950 p-6 text-white">
          <h3 className="text-lg font-bold">
            Need help with your enquiry?
          </h3>

          <p className="mt-2 leading-7 text-slate-300">
            Call us directly or contact us through WhatsApp to discuss
            your requirements.
          </p>

          <div className="mt-5 space-y-3">
            {phoneNumbers.map((phone) => (
              <a
                key={phone.number}
                href={`tel:${phone.number}`}
                className="block font-bold text-orange-400 transition hover:text-orange-300"
              >
                ☎ {phone.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl sm:p-8"
      >
        <h2 className="text-2xl font-black text-slate-950">
          Quotation Details
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Fields marked with * are required.
        </p>

        <div className="mt-7 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              placeholder="Enter your full name"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
              value={form.phone}
              onChange={(event) =>
                setForm({ ...form, phone: event.target.value })
              }
              placeholder="e.g. 07XXXXXXXX"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Delivery Location *
            </label>
            <input
              id="location"
              name="location"
              autoComplete="address-level2"
              required
              value={form.location}
              onChange={(event) =>
                setForm({ ...form, location: event.target.value })
              }
              placeholder="e.g. Mombasa, Kilifi, Malindi"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label
              htmlFor="product"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Material Required *
            </label>
            <select
              id="product"
              name="product"
              required
              value={form.product}
              onChange={(event) =>
                setForm({ ...form, product: event.target.value })
              }
              className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            >
              <option value="">Select a material</option>
              {products.map((product) => (
                <option key={product.name} value={product.name}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="quantity"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Quantity Required *
            </label>
            <input
              id="quantity"
              name="quantity"
              required
              value={form.quantity}
              onChange={(event) =>
                setForm({ ...form, quantity: event.target.value })
              }
              placeholder="e.g. 100 bags, 5 tonnes, or 2 lorries"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <div>
            <label
              htmlFor="details"
              className="mb-2 block text-sm font-bold text-slate-700"
            >
              Additional Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={form.details}
              onChange={(event) =>
                setForm({ ...form, details: event.target.value })
              }
              placeholder="Add any other requirements or delivery details"
              className="w-full resize-y rounded-lg border border-slate-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Send Quotation Request via WhatsApp →
          </button>

          <p className="text-xs leading-5 text-slate-500">
            This form opens WhatsApp with your enquiry prepared. It does
            not save the request to a website database.
          </p>
        </div>
      </form>
    </div>
  </section>

  {/* Contact Section */}
  <section id="contact" className="bg-slate-950 px-5 py-20 text-white">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <div className="flex items-center gap-4">
            <img
              src="/images/umi-logo.png"
              alt="UMI General Supplies Logo"
              loading="lazy"
              className="h-20 w-auto max-w-[160px] object-contain"
            />

            <div>
              <h2 className="text-2xl font-black">
                UMI GENERAL SUPPLIES
              </h2>
              <p className="mt-1 text-sm text-slate-400">
                Construction materials and supply enquiries
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-xl leading-8 text-slate-300">
            Contact our team to enquire about construction materials,
            availability, quotations, and delivery arrangements.
          </p>

          <a
            href={createWhatsAppLink(
              "Hello UMI GENERAL SUPPLIES. I would like to make a general enquiry."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-6 py-4 font-bold text-white transition hover:bg-orange-600"
          >
            Chat With Us on WhatsApp
          </a>
        </div>

        <div>
          <h2 className="text-xl font-black">Contact Information</h2>

          <div className="mt-6 space-y-5">
            <div>
              <p className="text-sm font-semibold text-slate-400">
                PHONE
              </p>

              {phoneNumbers.map((phone) => (
                <a
                  key={phone.number}
                  href={`tel:${phone.number}`}
                  className="mt-2 block text-lg font-bold transition hover:text-orange-400"
                >
                  {phone.label}
                </a>
              ))}
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-400">
                SERVICE AREAS
              </p>
              <p className="mt-2 leading-7 text-slate-200">
                Mombasa · Kilifi · Malindi · Across Kenya
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-400">
                BUSINESS HOURS
              </p>
              <p className="mt-2 leading-7 text-slate-200">
                Please contact us to confirm operating hours and
                availability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-6 text-center text-sm text-slate-400">
       © 2026 UMI GENERAL SUPPLIES. All rights reserved.
      </div>
    </div>
  </section>
</main>

);
}
