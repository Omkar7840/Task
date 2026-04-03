export default function CategoryFilter({ categories, activeCategory, setActiveCategory }) {
  return (
    <div className="w-full relative bg-white border border-slate-200 rounded-2xl p-2 shadow-sm mb-6">
      <div className="flex gap-2 overflow-x-auto scroll-smooth px-2 py-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        
        <button
          onClick={() => setActiveCategory('All')}
          className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 
            ${activeCategory === 'All' 
              ? 'bg-slate-800 text-white shadow-md' 
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          All Tasks
        </button>

        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 
              ${activeCategory === cat 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}