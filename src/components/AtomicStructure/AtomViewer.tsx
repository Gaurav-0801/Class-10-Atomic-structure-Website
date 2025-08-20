import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Atom, Zap, Layers, RotateCcw } from 'lucide-react';

interface AtomData {
  name: string;
  symbol: string;
  protons: number;
  neutrons: number;
  electrons: number;
  shells: number[];
}

const atoms: AtomData[] = [
  { name: 'Hydrogen', symbol: 'H', protons: 1, neutrons: 0, electrons: 1, shells: [1] },
  { name: 'Helium', symbol: 'He', protons: 2, neutrons: 2, electrons: 2, shells: [2] },
  { name: 'Carbon', symbol: 'C', protons: 6, neutrons: 6, electrons: 6, shells: [2, 4] },
  { name: 'Oxygen', symbol: 'O', protons: 8, neutrons: 8, electrons: 8, shells: [2, 6] },
  { name: 'Neon', symbol: 'Ne', protons: 10, neutrons: 10, electrons: 10, shells: [2, 8] },
];

export const AtomViewer: React.FC = () => {
  const [selectedAtom, setSelectedAtom] = useState<AtomData>(atoms[0]);
  const [showElectrons, setShowElectrons] = useState(true);
  const [showOrbits, setShowOrbits] = useState(true);
  const [animating, setAnimating] = useState(true);

  const toggleAnimation = () => {
    setAnimating(!animating);
  };

  const renderElectrons = (shellIndex: number, electronCount: number, radius: number) => {
    const electrons = [];
    const angleStep = 360 / electronCount;

    for (let i = 0; i < electronCount; i++) {
      const angle = i * angleStep;
      electrons.push(
        <div
          key={`electron-${shellIndex}-${i}`}
          className={`absolute w-3 h-3 bg-electron rounded-full ${
            animating ? 'electron-orbit' : ''
          }`}
          style={{
            width: '12px',
            height: '12px',
            transform: `rotate(${angle}deg) translateX(${radius}px) rotate(-${angle}deg)`,
            transformOrigin: '0 0',
            left: '50%',
            top: '50%',
            marginLeft: '-6px',
            marginTop: '-6px',
            animationDelay: `${i * 0.2}s`,
            filter: 'drop-shadow(0 0 6px hsl(var(--electron)))',
          }}
        />
      );
    }
    return electrons;
  };

  const renderOrbitals = () => {
    const orbits = [];
    let radius = 60;
    
    selectedAtom.shells.forEach((electronCount, index) => {
      if (showOrbits) {
        orbits.push(
          <div
            key={`orbit-${index}`}
            className="absolute border border-primary/30 rounded-full orbital-fade-in"
            style={{
              width: radius * 2,
              height: radius * 2,
              left: '50%',
              top: '50%',
              marginLeft: -radius,
              marginTop: -radius,
              animationDelay: `${index * 0.3}s`,
            }}
          />
        );
      }
      
      if (showElectrons) {
        orbits.push(...renderElectrons(index, electronCount, radius));
      }
      
      radius += 50;
    });
    
    return orbits;
  };

  return (
    <div className="w-full space-y-6">
      <Card className="atom-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Atom className="w-6 h-6 text-primary" />
            Interactive Atom Viewer
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Atom Selection */}
          <div className="flex flex-wrap gap-2 mb-6">
            {atoms.map((atom) => (
              <Button
                key={atom.symbol}
                variant={selectedAtom.symbol === atom.symbol ? 'default' : 'outline'}
                onClick={() => setSelectedAtom(atom)}
                className="particle-button"
              >
                {atom.symbol} - {atom.name}
              </Button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Button
              variant={showElectrons ? 'default' : 'outline'}
              size="sm"
              onClick={() => setShowElectrons(!showElectrons)}
              className="particle-button"
            >
              <Zap className="w-4 h-4 mr-2" />
              Electrons
            </Button>
            <Button
              variant={showOrbits ? 'default' : 'outline'}
              size="sm"
              onClick={() => setShowOrbits(!showOrbits)}
              className="particle-button"
            >
              <Layers className="w-4 h-4 mr-2" />
              Orbitals
            </Button>
            <Button
              variant={animating ? 'default' : 'outline'}
              size="sm"
              onClick={toggleAnimation}
              className="particle-button"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Animation
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Atom Visualization */}
            <div className="relative">
              <div
                className="relative mx-auto gradient-atom rounded-full aspect-square"
                style={{ width: '300px', height: '300px' }}
              >
                {/* Nucleus */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-nucleus rounded-full nucleus-glow flex items-center justify-center">
                    <span className="text-xs font-bold text-primary-foreground">
                      {selectedAtom.protons + selectedAtom.neutrons}
                    </span>
                  </div>
                </div>

                {/* Orbitals and Electrons */}
                {renderOrbitals()}
              </div>
            </div>

            {/* Atom Information */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">
                {selectedAtom.name} ({selectedAtom.symbol})
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Protons</span>
                  <Badge className="bg-proton/20 text-proton border-proton">
                    {selectedAtom.protons}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Neutrons</span>
                  <Badge className="bg-neutron/20 text-neutron border-neutron">
                    {selectedAtom.neutrons}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Electrons</span>
                  <Badge className="bg-electron/20 text-electron border-electron">
                    {selectedAtom.electrons}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Atomic Number</span>
                  <Badge variant="outline">
                    {selectedAtom.protons}
                  </Badge>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Mass Number</span>
                  <Badge variant="outline">
                    {selectedAtom.protons + selectedAtom.neutrons}
                  </Badge>
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold text-foreground mb-2">Electron Configuration</h4>
                <div className="flex gap-2">
                  {selectedAtom.shells.map((electrons, index) => (
                    <Badge key={index} variant="secondary">
                      Shell {index + 1}: {electrons}e⁻
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};