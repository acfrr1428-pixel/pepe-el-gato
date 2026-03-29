import { useState, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SonidoProvider } from '@/context/SonidoContext';
import PantallaInicio from '@/components/PantallaInicio';
import MenuPrincipal from '@/components/MenuPrincipal';
import AventuraEmociones from '@/components/aventuras/AventuraEmociones';
import AventuraPreguntas from '@/components/aventuras/AventuraPreguntas';
import { aventuras as aventurasData, preguntasHablar, preguntasAyuda, preguntasRelaciones, preguntasPadres, preguntasHabitos, preguntasAyudaMiedo, preguntasPeligro, preguntasAmistades, preguntasEmpatia } from '@/data/aventuras';
import type { Aventura, Pantalla } from '@/types';
import './App.css';

function App() {
  const [pantallaActual, setPantallaActual] = useState<Pantalla>('inicio');
  const [aventuras, setAventuras] = useState<Aventura[]>(aventurasData);
  const [estrellasTotales, setEstrellasTotales] = useState(0);

  const handleIniciar = useCallback(() => {
    setPantallaActual('menu');
  }, []);

  const handleSeleccionarAventura = useCallback((id: number) => {
    switch (id) {
      case 1:
        setPantallaActual('aventura-emociones');
        break;
      case 2:
        setPantallaActual('aventura-hablar');
        break;
      case 3:
        setPantallaActual('aventura-ayuda');
        break;
      case 4:
        setPantallaActual('aventura-relaciones');
        break;
      case 5:
        setPantallaActual('aventura-padres');
        break;
      case 6:
        setPantallaActual('aventura-habitos');
        break;
      case 7:
        setPantallaActual('aventura-ayuda-miedo');
        break;
      case 8:
        setPantallaActual('aventura-peligro');
        break;
      case 9:
        setPantallaActual('aventura-amistades');
        break;
      case 10:
        setPantallaActual('aventura-empatia');
        break;
    }
  }, []);

  const handleCompletarAventura = useCallback((id: number) => {
    setAventuras(prev => 
      prev.map(aventura => 
        aventura.id === id 
          ? { ...aventura, completada: true, progreso: 100 }
          : aventura
      )
    );
    setEstrellasTotales(prev => prev + 1);
  }, []);

  const handleVolverMenu = useCallback(() => {
    setPantallaActual('menu');
  }, []);

  const renderPantalla = () => {
    switch (pantallaActual) {
      case 'inicio':
        return <PantallaInicio onIniciar={handleIniciar} />;
      
      case 'menu':
        return (
          <MenuPrincipal
            aventuras={aventuras}
            estrellasTotales={estrellasTotales}
            onSeleccionarAventura={handleSeleccionarAventura}
          />
        );
      
      case 'aventura-emociones':
        return (
          <AventuraEmociones
            onCompletar={() => handleCompletarAventura(1)}
            onVolver={handleVolverMenu}
          />
        );
      
      case 'aventura-hablar':
        return (
          <AventuraPreguntas
            titulo="Pepe aprende a hablar sin lastimar"
            descripcion="Aprende a expresarte con amor y respeto"
            imagen="/pepe-hablar.png"
            color="#FF8C42"
            preguntas={preguntasHablar}
            onCompletar={() => handleCompletarAventura(2)}
            onVolver={handleVolverMenu}
          />
        );
      
      case 'aventura-ayuda':
        return (
          <AventuraPreguntas
            titulo="Pepe aprende a pedir ayuda"
            descripcion="Descubre cuándo y cómo pedir ayuda"
            imagen="/pepe-ayuda.png"
            color="#1BC7C9"
            preguntas={preguntasAyuda}
            onCompletar={() => handleCompletarAventura(3)}
            onVolver={handleVolverMenu}
          />
        );
      
      case 'aventura-relaciones':
        return (
          <AventuraPreguntas
            titulo="Relaciones sanas"
            descripcion="Descubre cómo construir amistades positivas"
            imagen="/pepe-amigos.png"
            color="#FFD84D"
            preguntas={preguntasRelaciones}
            onCompletar={() => handleCompletarAventura(4)}
            onVolver={handleVolverMenu}
          />
        );
      
      case 'aventura-padres':
        return (
          <AventuraPreguntas
            titulo="Comunicación con padres"
            descripcion="Aprende a hablar con mamá y papá"
            imagen="/pepe-familia.png"
            color="#1F6ED4"
            preguntas={preguntasPadres}
            onCompletar={() => handleCompletarAventura(5)}
            onVolver={handleVolverMenu}
          />
        );
      
      case 'aventura-habitos':
        return (
          <AventuraPreguntas
            titulo="Hábitos saludables"
            descripcion="Cuida tu cuerpo y mente con Pepe"
            imagen="/pepe-saludable.png"
            color="#4CAF50"
            preguntas={preguntasHabitos}
            onCompletar={() => handleCompletarAventura(6)}
            onVolver={handleVolverMenu}
          />
        );
      
      case 'aventura-ayuda-miedo':
        return (
          <AventuraPreguntas
            titulo="Pedir ayuda sin miedo"
            descripcion="Supera el miedo a pedir ayuda"
            imagen="/pepe-ayuda.png"
            color="#9C27B0"
            preguntas={preguntasAyudaMiedo}
            onCompletar={() => handleCompletarAventura(7)}
            onVolver={handleVolverMenu}
          />
        );
      
      case 'aventura-peligro':
        return (
          <AventuraPreguntas
            titulo="Identificar entornos peligrosos"
            descripcion="Aprende a reconocer situaciones de riesgo"
            imagen="/pepe-peligro.png"
            color="#F44336"
            preguntas={preguntasPeligro}
            onCompletar={() => handleCompletarAventura(8)}
            onVolver={handleVolverMenu}
          />
        );
      
      case 'aventura-amistades':
        return (
          <AventuraPreguntas
            titulo="Elegir amistades sanas"
            descripcion="Descubre quiénes son verdaderos amigos"
            imagen="/pepe-amigos.png"
            color="#00BCD4"
            preguntas={preguntasAmistades}
            onCompletar={() => handleCompletarAventura(9)}
            onVolver={handleVolverMenu}
          />
        );
      
      case 'aventura-empatia':
        return (
          <AventuraPreguntas
            titulo="Empatía y ayudar a otros"
            descripcion="Aprende a ponerte en el lugar de otros"
            imagen="/pepe-empatia.png"
            color="#E91E63"
            preguntas={preguntasEmpatia}
            onCompletar={() => handleCompletarAventura(10)}
            onVolver={handleVolverMenu}
          />
        );
      
      default:
        return <PantallaInicio onIniciar={handleIniciar} />;
    }
  };

  return (
    <SonidoProvider>
      <div className="contenedor-app">
        <AnimatePresence mode="wait">
          {renderPantalla()}
        </AnimatePresence>
      </div>
    </SonidoProvider>
  );
}

export default App;
