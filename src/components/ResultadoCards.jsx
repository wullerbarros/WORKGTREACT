function ResultadoCards({ typeProduct, qtdProdutos, ordenacao, setOrdenacao }) {
  const handleOrdenacaoChange = (e) => {
    setOrdenacao(e.target.value);
  };

  return (
    <div className="bg-[#F9F8FE] pt-[56px] px-[100px]">
      <div className="flex items-center justify-between text-[16px] font-[inter] font-bold text-[#474747] leading-[24px] tracking-[0.75px]">
        Resultados para {typeProduct} - {qtdProdutos}
        <div className="flex px-6 py-2 border gap-2">
          <label className="block text-[16px] text-[#474747] font-semibold">
            Ordenar por:
          </label>
          <select
            value={ordenacao}
            onChange={handleOrdenacaoChange}
            className="rounded text-[#474747] focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">Mais relevantes</option>
            <option value="menor_preco">Menor preço</option>
            <option value="maior_preco">Maior preço</option>
          </select>
        </div>
      </div>
    </div>
  );
}


export default ResultadoCards;