import React from 'react';
import { render } from '@testing-library/react';

//no logré importar los componentes

test('el título de la página es correcto', () => {
  render(<App />);
  const pageTitle = document.title;
  expect(pageTitle).toBe('Venta de Plantas de Hogar');
});

test('los enlaces del menú de navegación son correctos', () => {
  const navLinks = document.querySelectorAll('nav ul li a');
  const expectedLinks = ['Inicio', 'Catálogo', 'Contacto'];
  
  navLinks.forEach((link, index) => {
    expect(link.textContent).toBe(expectedLinks[index]);
  });
});

test('el botón "Comprar" agrega elementos al carrito', () => {
  const plantButtons = document.querySelectorAll('.plant button');
  const carritoLista = document.getElementById('carrito-lista');
  
  plantButtons[0].click(); // Simula el clic en el primer botón "Comprar"
  expect(carritoLista.children.length).toBe(1);
});

test('el pie de página contiene el año actual', () => {
  const currentYear = new Date().getFullYear();
  const footer = document.querySelector('footer');
  expect(footer.textContent).toContain(currentYear);
});
