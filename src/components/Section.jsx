import {Link} from 'react-router-dom'

const Section = ({ title='Coleções em destaque', titleAlign = 'left', link, children }) => {
  return (
    <section className="py-8 px-[100px] w-full bg-[#F9F8FE]">
       
       <div className={`${titleAlign !== 'center' && 'flex items-center justify-between'}  pt-[38px]`}>
        
       <h1 className={`${titleAlign === 'center'? ' text-center' : 'text-left' }  text-[24px] text-[#474747] !font-bold !leading-[38px] tracking-[0.75px] !font-[inter]`}>{title}</h1>
          
        {link && (
          <Link 
          to='/produtos'
            className="text-[18px] text-[#C92071] hover:opacity-80 transition-opacity"
          >
            Ver todos →
          </Link>
        )}
       </div> 
      <div>
        {children}
      </div>
    </section>
  );
};

export default Section