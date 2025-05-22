const FilterSection = ({ title, options, selected, onToggle }) => (
  <div className="mb-4">
    <h3 className="font-medium mb-1">{title}</h3>
    {options.map((item) => (
      <label key={item} className="flex items-center space-x-2 mb-1">
        <input
          type="checkbox"
          checked={selected.includes(item)}
          onChange={() => onToggle(item)}
          className="accent-[#991956] w-6 h-6"
        />
        <span>{item}</span>
      </label>
    ))}
  </div>
);

export default FilterSection;