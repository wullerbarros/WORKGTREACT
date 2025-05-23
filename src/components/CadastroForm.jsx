import React, { useState } from 'react';
import face from '../assets/img/img-header/faceColor.svg'
import gmail from '../assets/img/img-header/gmail 1.svg'

function CadastroForm() {
  const [formData, setFormData] = useState({
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [cadastroSucesso, setCadastroSucesso] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: undefined,
      }));
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setLoading(true);
      setCadastroSucesso(false);
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log('Dados do formulário:', formData);
        setCadastroSucesso(true);
        setFormData({
          email: '',
        });
      } catch (error) {
        console.error('Erro ao cadastrar:', error);
        setErrors({ form: 'Erro ao cadastrar. Tente novamente.' });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
      <h2 className="text-[32px] !font-bold !font-[inter] mt-[30px] mb-[20px] !leaning-[36px] !tracking-[1px] text-[#1F1F1F]">Crie sua conta</h2>
      <p className='text-[#474747] font-normal text-[16px] !leading-[28px] !tracking-[0.75px] mb-[30px] mt-[20px]'>Já possuí uma conta?{' '}Entre <span className="underline cursor-pointer">aqui</span></p>
      {cadastroSucesso && (
        <p className="text-[#C92071] mb-6">Cadastro realizado com sucesso!</p>
      )}
      {errors.form && <p className="text-red-500 text-sm mb-4">{errors.form}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-5 text-left">
          <label htmlFor="email" className="block text-[#474747] !font-bold !font-[inter] text-[12px] mt-[30px] mb-[5px]">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Insira seu e-mail"
            className="bg-gray-100 rounded-[5px] mb-[30px] w-full py-3 px-4 text-[#474747] !leading-[28px] font-normal !tracking-[0.75px] !font-[inter] outline-none"   
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className="mt-[30px] bg-[#C92071] hover:bg-[#FF69B4] !text-[#F7F7FC] !text-[16px] !leading-[24px] !tracking-[0.75px] !font-[inter] !font-bold py-3 px-6 rounded-[8px] focus:outline-none focus:shadow-outline transition duration-300 ease-in-out w-full
          disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Cadastrando...' : 'Criar Conta'}
        </button>
        <div className='flex items-center justify-center'>
            <p className='text-center pt-[30px] text-[#474747] text-[16px] !font-[inter] !font-normal !leading-[28px] !tracking-[0.75px]'>Ou faça seu login com</p>
            <div className="flex items-center justify-center gap-4 mt-8 ml-4 mb-4">
                <img src={gmail} alt="icone do gmail" className="w-[20px] h-[20px] cursor-pointer" />
                <img src={face} alt="icone do facebook" className="w-[20px] h-[20px] cursor-pointer" />
            </div>
        </div>    
      </form>
    </div>
  );
}

export default CadastroForm;