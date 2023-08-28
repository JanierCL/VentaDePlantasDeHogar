import React from 'react';
import { render } from '@testing-library/react';
import Planta from './Planta'; // Importa el componente

test('renderiza el componente de planta', () => {
  const { getByText } = render(<Planta />);
  const titulo = getByText(/Planta Tropical/i);
  expect(titulo).toBeInTheDocument();
});
