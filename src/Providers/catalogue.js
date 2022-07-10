// fazer os imports
import { createContext } from 'react';

// criar o context
export const CatalogueContext = createContext([]);

// criar o provider
export const CatalogueProvider = ({ children }) => {
	const catalogue = [
		{name: "Morango", price: 9.75, image: "https://img.freepik.com/fotos-gratis/morangos-lindos-isolados-no-branco_93675-23690.jpg?w=740"},
        {name: "Abacaxi", price: 5.57, image: "https://img.freepik.com/fotos-gratis/abacaxi_144627-22208.jpg?t=st=1656598131~exp=1656598731~hmac=3c9855c67b07eaa0934d3ec9aaba46c6578a690e006648dad6068f2c6983c4a2&w=740"},
        {name: "Kiwi", price: 6.43, image: "https://img.freepik.com/fotos-gratis/kiwis-frescos-isolados_144627-30034.jpg?t=st=1656598897~exp=1656599497~hmac=063f52cae110502bcd344933acd5ed955ed14727a6eae5de972e93559a4d0f90&w=740"},
        {name: "Uva Roxa", price: 4.15, image: "https://img.freepik.com/fotos-gratis/uva_74190-1201.jpg?t=st=1656598913~exp=1656599513~hmac=0e8e3ba0d58a3771178b09a8f941013a69db550505388d9a8cd1e45bf60b88a2&w=740"}
	];

return (
  <CatalogueContext.Provider
   value={{ catalogue }}>
	{children}
  </CatalogueContext.Provider>
 )
}