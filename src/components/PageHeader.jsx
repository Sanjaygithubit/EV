import { SITE_CONFIG } from "../../config/site";

export default function PageHeader({ title, subtitle }) {
  const pageTitle = title || SITE_CONFIG.name;
  
  return (
    <section className="bg-brand-navy py-20">
      <div className="container">
        <h1 className="text-4xl font-bold text-white">
          {pageTitle}
        </h1>
        {subtitle && (
          <p className="mt-3 text-slate-300 max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}