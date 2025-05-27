const FilterSection = ({ title, options, selected, onToggle }) => (
  <div className="w-[136px] h-[150px] gap-2.5 mb-4 mt-6">
    <h3 className="font-medium mb-1">{title}</h3>
    {options.map((item) => (
      <label key={item} className="flex items-center space-x-2 mb-1">
        <input
          type="checkbox"
          checked={selected.includes(item)}
          onChange={() => onToggle(item)}
          className="accent-[#C92071] w-[22px] h-[22px] rounded-xs border peer-hidden inner:peer-checked  t-[4px] l-[4px]"
          
        /> 
        <span>{item}</span>
      </label>
    ))}
  </div>
);


export default FilterSection;