import { PropTypes } from "prop-types";
import { useTab } from "./context";
import classNames from "classnames";
const Item = ({ children, id }) => {
  const { active ,setActive } = useTab();

  return (
    <button
    onClick={()=>{
        setActive(id)
    }}
    type="button"
     className="flex-auto text-center hover:bg-[color:var(--backgraund-secondary)] transition-colors">
      <div className={classNames(" h-[3.313rem] relative inline-flex items-center",{
        "font-bold" : active===id,
        "text-[var(--color-base-secondary)] font-medium" : active !== id 
      })}>
        {children}
        {active === id && (
          <div className="absolute h-[4px] bottom-0 left-0 w-full rounded-full bg-[color:var(--color-primary)]" />
        )}
      </div>
    </button>
  );
};

Item.PropTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
};

export default Item;
