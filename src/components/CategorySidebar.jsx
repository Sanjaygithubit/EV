import { useState, useEffect } from "react";

export default function CategorySidebar({
  categories,
  subCategories,
  activeCategory,
  setActiveCategory,
  activeSub,
  setActiveSub,
  isMobile
}) {
  const [openCategory, setOpenCategory] = useState(null);

  /* ✅ AUTO OPEN ACTIVE CATEGORY (FIX FOR MOBILE) */
  useEffect(() => {
    setOpenCategory(activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">

      <h3 className="font-semibold mb-4">Categories</h3>

      <div className="flex flex-col gap-2">

        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const hasSub = subCategories[cat];

          return (
            <div key={cat}>

              {/* CATEGORY BUTTON */}
              <button
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveSub(null); // reset sub
                  setOpenCategory(cat); // always open
                }}
                className={`
                  w-full text-left px-4 py-2 rounded-xl text-sm transition
                  ${
                    isActive
                      ? "bg-primary text-white font-semibold"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `}
              >
                {cat}
              </button>

              {/* SUB CATEGORIES */}
              {hasSub && openCategory === cat && (
                <div className="ml-3 mt-2 flex flex-col gap-2 border-l border-gray-200 pl-3">

                  {hasSub.map((sub) => {
                    const isSubActive = activeSub === sub;

                    return (
                      <button
                        key={sub}
                        onClick={() => {
                          setActiveCategory(cat);
                          setActiveSub(sub);
                        }}
                        className={`
                          text-left px-3 py-1.5 rounded-lg text-sm transition
                          ${
                            isSubActive
                              ? "bg-primary/10 text-primary font-semibold"
                              : "text-gray-500 hover:bg-gray-100"
                          }
                        `}
                      >
                        {sub}
                      </button>
                    );
                  })}

                </div>
              )}

            </div>
          );
        })}

      </div>
    </div>
  );
}