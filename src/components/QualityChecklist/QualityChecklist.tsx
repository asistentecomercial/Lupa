'use client'
import React, { useState } from 'react';
import './LupaStyles.css';

// SVGs Embebidos para control total
const LupaIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const LayersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
    <polyline points="2 17 12 22 22 17"></polyline>
  </svg>
);

const DensityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
  </svg>
);

const RegisterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="2" x2="12" y2="22"></line>
    <line x1="2" y1="12" x2="22" y2="12"></line>
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="icon-svg">
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default function QualityChecklist() {
  const [checks, setChecks] = useState({ arte: false, densidad: false, defectos: false });

  const toggleCheck = (id:any) => {
    setChecks(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const allCompleted = Object.values(checks).every(Boolean);

  const items = [
    { id: 'arte', title: 'Arte vs. Impresión', desc: 'Validar textos y colores contra muestra.', Icon: LayersIcon },
    { id: 'densidad', title: 'Densidad de Arranque', desc: 'Verificar estabilidad en densitómetro.', Icon: DensityIcon },
    { id: 'defectos', title: 'Registro y Defectos', desc: 'Revisar registro, manchas y velos.', Icon: RegisterIcon },
  ];

  return (
    <div className="lupa-container">
      <header className="lupa-header">
        <div className="lupa-brand">
          <div className="brand-icon"><LupaIcon /></div>
          <h1>Lupa<span>.</span></h1>
        </div>
        <span className="badge">Control de Calidad</span>
      </header>

      <main className="lupa-content">
        <div className="intro-card">
          <h2>Checklist de Operario</h2>
          <p>Complete la verificación antes de iniciar el tiro de producción.</p>
        </div>

        <div className="checklist-grid">
          {items.map(({ id, title, desc, Icon }:any) => (
            <button 
              key={id} 
              onClick={() => toggleCheck(id)}
              className={`check-card ${checks[id] ? 'is-checked' : ''}`}
            >
              <div className="icon-wrapper">
                {checks[id] ? <CheckIcon /> : <Icon />}
              </div>
              <div className="text-wrapper">
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
              <div className="custom-checkbox">
                <div className="checkbox-inner"></div>
              </div>
            </button>
          ))}
        </div>

        <footer className="lupa-footer">
          <button 
            className={`submit-btn ${allCompleted ? 'active' : ''}`}
            disabled={!allCompleted}
          >
            {allCompleted ? 'ENVIAR REPORTE OK' : 'FALTAN VERIFICACIONES'}
          </button>
        </footer>
      </main>
    </div>
  );
}