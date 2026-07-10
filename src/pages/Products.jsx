import { useEffect, useRef, useState, memo } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import ProductHeader from "../components/ProductHeader";
import CategorySidebar from "../components/CategorySidebar";
import ProductCard from "../components/ProductCard";
import ProductModal from "../components/ProductModal";
import products from "../data/products";
import { CATEGORIES, SUB_CATEGORIES } from "../config/site";

const ProductsPage = () => {
  const [searchParams] = useSearchParams();
  const categoryFromUrl = searchParams.get("category");

  const [activeCategory, setActiveCategory] = useState("All");
  const [activeSub, setActiveSub] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  /* 🔥 PREMIUM CONTROL */
  const [userAction, setUserAction] = useState(false);
  const productsRef = useRef(null);

  /* URL SYNC */
  useEffect(() => {
    if (categoryFromUrl && CATEGORIES.includes(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
      setActiveSub(null);
    }
  }, [categoryFromUrl]);

  /* 🔥 SMOOTH SCROLL (NO JUMP) */
  useEffect(() => {
    if (!userAction || !productsRef.current) return;

    const timer = setTimeout(() => {
      const yOffset = -80;

      const y =
        productsRef.current.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      window.scrollTo({
        top: y,
        behavior: "smooth"
      });
    }, 120);

    return () => clearTimeout(timer);
  }, [activeCategory, activeSub]);

  /* FILTER LOGIC */
  const filteredProducts = products.filter((p) => {
    const catMatch =
      activeCategory === "All" || p.category === activeCategory;

    const subMatch =
      !activeSub || p.sub === activeSub;

    return catMatch && subMatch;
  });

  return (
    <>
      <ProductHeader />

      <section ref={productsRef} className="w-full py-6">

        {/* MOBILE FILTER BUTTON */}
        <div className="lg:hidden flex justify-end px-4 mb-4">
          <button
            onClick={() => setShowFilters(true)}
            className="bg-primary text-white px-4 py-2 rounded-xl text-sm font-medium"
          >
            Filters
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 px-4 lg:px-8">

          {/* SIDEBAR (DESKTOP) */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <CategorySidebar
                categories={CATEGORIES}
                subCategories={SUB_CATEGORIES}
                activeCategory={activeCategory}
                setActiveCategory={(cat) => {
                  setActiveCategory(cat);
                  setActiveSub(null);
                  setUserAction(true);
                }}
                activeSub={activeSub}
                setActiveSub={(sub) => {
                  setActiveSub(sub);
                  setUserAction(true);
                }}
              />
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <p className="text-sm text-muted mb-6">
              Showing {filteredProducts.length} products
            </p>

            {filteredProducts.length === 0 ? (
              <p className="text-gray-400 text-center mt-10">
                No products found
              </p>
            ) : (
              <motion.div
                key={activeCategory + activeSub}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                   
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      delay: index * 0.05,
                      duration: 0.3
                    }}
                  >
                    <ProductCard
                      product={product}
                      onClick={() => setSelectedProduct(product)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>

        </div>
      </section>

      {/* 🔥 MOBILE FILTER DRAWER */}
      <AnimatePresence>
        {showFilters && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={() => setShowFilters(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="
                fixed bottom-0 left-0 right-0
                bg-white z-50 rounded-t-3xl
                max-h-[85vh] flex flex-col
              "
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
            >
              <div className="flex justify-between px-5 py-4 border-b">
                <h3 className="font-semibold">Filters</h3>
                <button onClick={() => setShowFilters(false)}>✕</button>
              </div>

              <div className="overflow-y-auto px-5 py-4 flex-1">

                {/* CATEGORY */}
                <div className="mb-6">
                  <h4 className="text-sm mb-3 text-gray-500 uppercase">
                    Categories
                  </h4>

                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        setActiveCategory(cat);
                        setActiveSub(null);
                        setUserAction(true);
                        setShowFilters(false);
                      }}
                      className={`block w-full text-left px-4 py-2 rounded-xl mb-2 ${
                        activeCategory === cat
                          ? "bg-primary text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* SUB CATEGORY */}
                {activeCategory !== "All" &&
                  SUB_CATEGORIES[activeCategory] && (
                    <div>
                      <h4 className="text-sm mb-3 text-gray-500 uppercase">
                        Sub Categories
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {SUB_CATEGORIES[activeCategory].map((sub) => (
                          <button
                            key={sub}
                            onClick={() => {
                              setActiveSub(sub);
                              setUserAction(true);
                              setShowFilters(false);
                            }}
                            className={`px-3 py-1.5 rounded-full text-sm ${
                              activeSub === sub
                                ? "bg-primary text-white"
                                : "bg-gray-100"
                            }`}
                          >
                            {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* MODAL */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
};

// Memoize to prevent unnecessary re-renders
const Products = memo(ProductsPage);
export default Products;