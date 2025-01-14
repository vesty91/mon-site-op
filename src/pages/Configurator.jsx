import React, { useState, useEffect } from 'react';
    import './Configurator.css';
    import componentsData from '../data/components.json';

    function Configurator() {
      const [components, setComponents] = useState({
        cpu: '',
        gpu: '',
        ram: '',
        storage: '',
      });
      const [compatibilityError, setCompatibilityError] = useState('');
      const [totalCost, setTotalCost] = useState(0);

      useEffect(() => {
        calculateTotalCost();
        checkCompatibility();
      }, [components]);

      const handleComponentChange = (category, value) => {
        setComponents({ ...components, [category]: value });
      };

      const calculateTotalCost = () => {
        let cost = 0;
        if (components.cpu) {
          const cpu = componentsData.cpus.find((cpu) => cpu.id === components.cpu);
          cost += cpu.price;
        }
        if (components.gpu) {
          const gpu = componentsData.gpus.find((gpu) => gpu.id === components.gpu);
          cost += gpu.price;
        }
        if (components.ram) {
          const ram = componentsData.rams.find((ram) => ram.id === components.ram);
          cost += ram.price;
        }
        if (components.storage) {
          const storage = componentsData.storages.find(
            (storage) => storage.id === components.storage
          );
          cost += storage.price;
        }
        setTotalCost(cost);
      };

      const checkCompatibility = () => {
        if (components.cpu && components.gpu) {
          const selectedCPU = componentsData.cpus.find((cpu) => cpu.id === components.cpu);
          const selectedGPU = componentsData.gpus.find((gpu) => gpu.id === components.gpu);

          if (selectedGPU && selectedCPU && !selectedGPU.compatibleSockets.includes(selectedCPU.socket)) {
            setCompatibilityError(
              'Attention: La carte graphique n\'est pas compatible avec le processeur sélectionné.'
            );
          } else {
            setCompatibilityError('');
          }
        } else {
          setCompatibilityError('');
        }
      };

      const handleSaveConfig = () => {
        const configString = JSON.stringify(components);
        localStorage.setItem('pcConfig', configString);
        alert('Configuration sauvegardée !');
      };

      const handleLoadConfig = () => {
        const savedConfig = localStorage.getItem('pcConfig');
        if (savedConfig) {
          setComponents(JSON.parse(savedConfig));
          alert('Configuration chargée !');
        } else {
          alert('Aucune configuration sauvegardée.');
        }
      };

      return (
        <div className="configurator">
          <h1>Configurateur PC</h1>
          <div className="configurator-steps">
            <div className="step">
              <h2>Processeur</h2>
              <select
                value={components.cpu}
                onChange={(e) => handleComponentChange('cpu', e.target.value)}
              >
                <option value="">Sélectionner un processeur</option>
                {componentsData.cpus.map((cpu) => (
                  <option key={cpu.id} value={cpu.id}>
                    {cpu.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="step">
              <h2>Carte Graphique</h2>
              <select
                value={components.gpu}
                onChange={(e) => handleComponentChange('gpu', e.target.value)}
              >
                <option value="">Sélectionner une carte graphique</option>
                {componentsData.gpus.map((gpu) => (
                  <option key={gpu.id} value={gpu.id}>
                    {gpu.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="step">
              <h2>RAM</h2>
              <select
                value={components.ram}
                onChange={(e) => handleComponentChange('ram', e.target.value)}
              >
                <option value="">Sélectionner la RAM</option>
                {componentsData.rams.map((ram) => (
                  <option key={ram.id} value={ram.id}>
                    {ram.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="step">
              <h2>Stockage</h2>
              <select
                value={components.storage}
                onChange={(e) => handleComponentChange('storage', e.target.value)}
              >
                <option value="">Sélectionner le stockage</option>
                {componentsData.storages.map((storage) => (
                  <option key={storage.id} value={storage.id}>
                    {storage.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          {compatibilityError && <p className="error-message">{compatibilityError}</p>}
          <div className="total-cost">
            <h2>Coût total: {totalCost} €</h2>
          </div>
          <div className="configurator-actions">
            <button onClick={handleSaveConfig}>Sauvegarder la configuration</button>
            <button onClick={handleLoadConfig}>Charger la configuration</button>
            <button>Demander de l'aide pour le montage</button>
          </div>
        </div>
      );
    }

    export default Configurator;
