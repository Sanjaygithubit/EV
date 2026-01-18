import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import ProductHeader from "../components/ProductHeader";
import CategorySidebar from "../components/CategorySidebar";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import products from "../data/products";

const categories = [
  "All",
  "EV Batteries",
  "EV Charger",
  "EV Rickshaw Spare Parts",
  "EV Bike Spare Parts",
  "EV Bicycle Conversion Kit",
  "EV Conversion Kit"
];

export default function Products() {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState(
    categoryFromUrl || "All"
  );
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  /* SYNC URL → CATEGORY */
  useEffect(() => {
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [categoryFromUrl]);

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(p => p.category === activeCategory);

  return (
    <>
      <ProductHeader />

      <section className="w-full py-6">
        {/* MOBILE FILTER */}
        <div className="lg:hidden flex justify-end px-4 mb-4">
          <button
            onClick={() => setShowFilters(true)}
            className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium"
          >
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 px-4 lg:px-8">

          {/* SIDEBAR */}
          <div className="hidden lg:block">
            <CategorySidebar
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
          </div>

          {/* PRODUCTS */}
          <div>
            <p className="text-sm text-muted mb-6">
              Showing {filteredProducts.length} products
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onClick={() => setSelectedProduct(product)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setShowFilters(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-white rounded-t-3xl p-5 z-50 max-h-[80vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
            >
              <CategorySidebar
                categories={categories}
                activeCategory={activeCategory}
                setActiveCategory={(cat) => {
                  setActiveCategory(cat);
                  setShowFilters(false);
                }}
                isMobile
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}
