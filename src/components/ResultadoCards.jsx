 function ResultadoCards (props)  {
      const handleOrdenacaoChange = (e) => {
    setOrdenacao(e.target.value);
  };
    return (
        <>
    <div className="w-full p-4 mt-[232px] [ml-1008px] rounded-sm">
      <div className="flex items-center justify-between  border-none">
        Resultados para {props.typeProduct} - {props.qtdProdutos} produtos encontrados
        <div className='flex px-6 py-2 border gap-2'>
          <label className="block text-[16px] text-[#474747] font-semibold ">
            Ordenar por:
          </label> 
          <select
            value={""}
            onChange={handleOrdenacaoChange}
            className="rounded text-[#474747] focus:outline-none focus:ring-2 focus:ring-pink-500"
          >
            <option value="">mais relevantes</option>
            <option value="menor_preco">Menor preço</option>
            <option value="maior_preco">Maior preço</option>
          </select>
        </div>

      </div>

    
      {/* Lista de produtos ordenados */}
      {/* <div className="space-y-4">
        {produtosOrdenados.map((produto) => (
          <div key={produto.id} className="p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{produto.nome}</h2>
            <p className="text-gray-600">Preço: R$ {produto.preco}</p>
          </div>
        ))}
      </div> */}
    </div>
        </>
    )
}

export default ResultadoCards;