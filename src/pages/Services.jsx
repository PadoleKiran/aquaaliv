import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import ServiceCard from "../components/ServiceCard";
import PricingCard from "../components/PricingCard";
import ROPlantServiceCard from "../components/ROPlantServiceCard";

import { services } from "../data/services";
import { pricing } from "../data/pricing";
import { roPlantServices } from "../data/roPlantServices";

export default function Services() {
  return (
    <>
      {/* ================= SEO ================= */}
      <Helmet>
        <title>Services | AquaaLiv</title>
        <meta
          name="description"
          content="RO installation, repair & maintenance, AMC plans, and professional RO plant services by AquaaLiv."
        />
      </Helmet>

      {/* ================= BASIC SERVICES ================= */}
      <section className="container-p py-12 sm:py-16">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Our Services
          </h1>
          <p className="mt-2 text-slate-600">
            End-to-end care for your water purifier
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <ServiceCard
              key={s.id}
              title={s.title}
              description={s.description}
              features={s.features}
              image={s.image}
              cta={
                <Link
                  to="/contact"
                  className="btn-primary mt-5 w-full"
                >
                  Book Service
                </Link>
              }
            />
          ))}
        </div>
      </section>

      {/* ================= AMC PLANS ================= */}
      <section className="container-p py-12 sm:py-16 bg-slate-50 rounded-2xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900">
            TRANSPARENT AMC PLANS
          </h2>
          <p className="mt-2 text-slate-600">
            Affordable AMC plans for peace of mind
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricing.map((p) => (
            <PricingCard key={p.id} {...p} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link to="/contact" className="btn-primary">
            Enquire About AMC
          </Link>
        </div>
      </section>

      {/* ================= RO PLANT SERVICES ================= */}
      <section className="container-p py-14 sm:py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-slate-900">
            RO PLANT SERVICE
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Expert RO plant services engineered for your individual water
            purification needs.
          </p>
        </div>

        {/* 4 Cards Side-by-Side */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {roPlantServices.map((service) => (
            <ROPlantServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact" className="btn-primary">
            Book RO Plant Service
          </Link>
        </div>
      </section>
    </>
  );
}
