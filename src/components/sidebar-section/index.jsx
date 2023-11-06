import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Bileşen tanımı ve prop'ların alınması
const SidebarSection = ({ title, children, more }) => {
  return (
    <section className="bg-[color:var(--backgraund-secondary)] mb-4  rounded-2xl border border-[color:var(--backgraund-secondary)]">
      <h5 className="py-3 px-4 text-xl font-extrabold  leading-6 flex items-center ">
        {title}
      </h5>
      <div className="grid">{children}</div>
      {more && (
        <Link
          to={more}
          className="h-[52px] rounded-b-2xl flex items-center px-4 text-[15px] text-[#1d9bf0] transition-colors hover:bg-white/[0.03] "
        >
          Daha fazla göster
        </Link>
      )}
    </section>
  );
};

// PropTypes kullanarak bileşenin beklediği prop tipleri ve gereklilikleri tanımlama
SidebarSection.propTypes = {
  title: PropTypes.string.isRequired, // title prop'ı bir string ve zorunlu
  children: PropTypes.node.isRequired, // children prop'ı her türde içerik ve zorunlu
  more: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]), // more prop'ı boolean veya string olabilir
};

// Varsayılan prop değerleri belirleme
SidebarSection.defaultProps = {
  more: false, // Varsayılan olarak more prop'ı false
};

// Bileşeni varsayılan olarak ihraç etme
export default SidebarSection;
