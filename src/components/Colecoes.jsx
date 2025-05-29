import calcaTracada from '../assets/img/img-colecaoDestaque/calcaTraçada.svg';
import camisaTracada from '../assets/img/img-colecaoDestaque/camisaTraçada.svg';
import tenisTracado from '../assets/img/img-colecaoDestaque/tenisTraçado.svg';
import foneTracado from '../assets/img/img-colecaoDestaque/foneTraçado.svg';

function Colecoes() {
  const colecaoDestaque = [
    {
      imagemSrc: camisaTracada,
      altImagem: 'imagem de um traço de uma camisa',
      titulo: 'Camisetas',
    },
    {
      imagemSrc: calcaTracada,
      altImagem: 'imagem de um traço de uma calça',
      titulo: 'Calças',
    },
    {
      imagemSrc: calcaTracada,
      altImagem: 'imagem de um traço de uma camisa',
      titulo: 'Bonés',
    },
    {
      imagemSrc: foneTracado,
      altImagem: 'imagem de um traço de um headphone',
      titulo: 'Headphones',
    },
    {
      imagemSrc: tenisTracado,
      altImagem: 'imagem de um traço de um tênis',
      titulo: 'Tênis',
    },
  ];

  return (
    <>
      <div className="flex gap-4 flex-wrap justify-center mt-[20px]">
        {colecaoDestaque.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center gap-[10px]">
            <div className="bg-white w-[104px] h-[104px] p-[20px] rounded-[150px] flex items-center justify-center">
              <img
                src={item.imagemSrc}
                alt={item.altImagem}
                className="w-[64px] h-[63.92px] hover:scale-110 hover:fill-pink-500 transition-transform duration-300 cursor-pointer"
              />
            </div>
            <div>
              <h2 className="!font-[inter] !font-bold text-[14px] text-[#474747] hover:text-[#C92071] transition-colors duration-300">
                {item.titulo}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Colecoes;