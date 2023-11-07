import { PropTypes } from 'prop-types';


const StickyHeader = ({title , children}) => {
  return (
  <header className="sticky top-0 z-10 sticky border-b border-[color:var(--backgraund-third)] top-0 z-10  bg-[color:var(--backgraund-primary-alpha) backdrop-blur-md">
    <h3 className='px-4 h-[3.313rem] flex items-center text-xl font-bold' >
        {title}
    </h3>
    {children}
 </header>
  )
}

StickyHeader.prototype={
    title:PropTypes.string.isRequired
}



export default StickyHeader;