// import App from '../App.css'
import FilterGroup from './FilterGroup.jsx'

const Aside = ({ onFilterApply }) => {

  return (
    <div className="flex">
      <FilterGroup onApply={onFilterApply} />
      
    </div>
  );
};

export default Aside