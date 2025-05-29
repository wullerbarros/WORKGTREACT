const FilterSection = ({ title, options, selected, onToggle }) => (
  <div className="w-[150px] h-[150px] gap-2.5 mb-4 mt-6">
    <h3 className="mb-1 text-sm text-[#474747] !font-[inter] !font-bold tracking-[0.75px]">{title}</h3>
    {options.map((item) => (
      <label key={item} className="flex items-center space-x-2 mb-1">
        <input
          type="checkbox"
          checked={selected.includes(item)}
          onChange={() => onToggle(item)}
          className="accent-[#C92071] !font-[inter] w-[22px] h-[22px] rounded-xs border peer-hidden inner:peer-checked  t-[4px] l-[4px]"
          
        /> 
        <span className="!font-[inter] tracking-[0.25px] text-sm text-[#474747] ml-[12px] gap-0.5 ">{item}</span>
      </label>
    ))}
  </div>
);


export default FilterSection;