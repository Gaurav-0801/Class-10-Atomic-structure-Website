import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight, History, Lightbulb } from 'lucide-react';

interface AtomicModel {
  id: string;
  name: string;
  scientist: string;
  year: number;
  description: string;
  keyFeatures: string[];
  limitations: string[];
  visualization: React.ReactNode;
}

const atomicModels: AtomicModel[] = [
  {
    id: 'dalton',
    name: 'Atomic Theory',
    scientist: 'John Dalton',
    year: 1803,
    description: 'Atoms are indivisible, solid particles that cannot be created or destroyed.',
    keyFeatures: [
      'Atoms are indivisible solid spheres',
      'All atoms of same element are identical',
      'Atoms combine in simple ratios to form compounds'
    ],
    limitations: [
      'Did not account for subatomic particles',
      'Could not explain chemical bonding',
      'No consideration of atomic structure'
    ],
    visualization: (
      <div className="flex justify-center items-center h-40">
        <div className="w-20 h-20 bg-primary rounded-full opacity-80 flex items-center justify-center">
          <span className="text-primary-foreground font-bold">ATOM</span>
        </div>
      </div>
    )
  },
  {
    id: 'thomson',
    name: 'Plum Pudding Model',
    scientist: 'J.J. Thomson',
    year: 1897,
    description: 'Atoms consist of a positively charged sphere with negatively charged electrons embedded within.',
    keyFeatures: [
      'Discovery of electrons',
      'Positive charge distributed uniformly',
      'Electrons embedded like plums in pudding'
    ],
    limitations: [
      'Could not explain atomic stability',
      'Failed to account for nucleus',
      'Incorrect distribution of positive charge'
    ],
    visualization: (
      <div className="flex justify-center items-center h-40">
        <div className="relative w-24 h-24 bg-proton/30 rounded-full border-2 border-proton flex items-center justify-center">
          <div className="absolute w-3 h-3 bg-electron rounded-full top-2 left-4"></div>
          <div className="absolute w-3 h-3 bg-electron rounded-full bottom-3 right-4"></div>
          <div className="absolute w-3 h-3 bg-electron rounded-full top-8 right-2"></div>
          <div className="absolute w-3 h-3 bg-electron rounded-full bottom-6 left-6"></div>
          <span className="text-proton text-xs font-bold">+</span>
        </div>
      </div>
    )
  },
  {
    id: 'rutherford',
    name: 'Nuclear Model',
    scientist: 'Ernest Rutherford',
    year: 1911,
    description: 'Atoms have a dense, positively charged nucleus at the center with electrons orbiting around it.',
    keyFeatures: [
      'Discovery of atomic nucleus',
      'Nucleus contains positive charge',
      'Electrons orbit the nucleus',
      'Most of atom is empty space'
    ],
    limitations: [
      'Could not explain electron stability',
      'Did not account for energy radiation',
      'Electrons should spiral into nucleus'
    ],
    visualization: (
      <div className="flex justify-center items-center h-40">
        <div className="relative w-32 h-32">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-nucleus rounded-full nucleus-glow"></div>
          <div className="absolute border border-primary/40 rounded-full w-24 h-24 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-3 h-3 bg-electron rounded-full electron-orbit-fast" style={{
            left: '50%',
            top: '50%',
            marginLeft: '-6px',
            marginTop: '-6px',
            transform: 'rotate(0deg) translateX(48px) rotate(0deg)'
          }}></div>
        </div>
      </div>
    )
  },
  {
    id: 'bohr',
    name: 'Bohr Model',
    scientist: 'Niels Bohr',
    year: 1913,
    description: 'Electrons orbit the nucleus in fixed energy levels or shells without radiating energy.',
    keyFeatures: [
      'Fixed electron energy levels',
      'Electrons orbit in circular paths',
      'Energy is quantized',
      'Explains atomic spectra'
    ],
    limitations: [
      'Only works for hydrogen',
      'Does not explain chemical bonding',
      'Electron behavior too simplified'
    ],
    visualization: (
      <div className="flex justify-center items-center h-40">
        <div className="relative w-36 h-36">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-nucleus rounded-full nucleus-glow"></div>
          
          {/* Inner orbit */}
          <div className="absolute border border-orbital-s/60 rounded-full w-20 h-20 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-3 h-3 bg-electron rounded-full electron-orbit" style={{
            left: '50%',
            top: '50%',
            marginLeft: '-6px',
            marginTop: '-6px',
            transform: 'rotate(0deg) translateX(40px) rotate(0deg)'
          }}></div>
          
          {/* Outer orbit */}
          <div className="absolute border border-orbital-p/60 rounded-full w-32 h-32 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute w-3 h-3 bg-electron rounded-full electron-orbit-fast" style={{
            left: '50%',
            top: '50%',
            marginLeft: '-6px',
            marginTop: '-6px',
            transform: 'rotate(90deg) translateX(64px) rotate(-90deg)',
            animationDelay: '1s'
          }}></div>
        </div>
      </div>
    )
  }
];

export const AtomicModels: React.FC = () => {
  const [currentModelIndex, setCurrentModelIndex] = useState(0);
  const currentModel = atomicModels[currentModelIndex];

  const nextModel = () => {
    setCurrentModelIndex((prev) => (prev + 1) % atomicModels.length);
  };

  const prevModel = () => {
    setCurrentModelIndex((prev) => (prev - 1 + atomicModels.length) % atomicModels.length);
  };

  const goToModel = (index: number) => {
    setCurrentModelIndex(index);
  };

  return (
    <div className="w-full space-y-6">
      <Card className="atom-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-6 h-6 text-primary" />
            Evolution of Atomic Models
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Timeline Navigation */}
          <div className="flex justify-center mb-6">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {atomicModels.map((model, index) => (
                <Button
                  key={model.id}
                  variant={index === currentModelIndex ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => goToModel(index)}
                  className="particle-button whitespace-nowrap"
                >
                  {model.year} - {model.scientist}
                </Button>
              ))}
            </div>
          </div>

          {/* Model Display */}
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Visualization */}
            <div className="order-2 lg:order-1">
              <Card className="bg-secondary/20 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold mb-4 text-center">
                    {currentModel.name}
                  </h4>
                  {currentModel.visualization}
                </CardContent>
              </Card>
            </div>

            {/* Information */}
            <div className="order-1 lg:order-2 space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className="text-primary">
                    {currentModel.year}
                  </Badge>
                  <h3 className="text-xl font-bold">{currentModel.scientist}</h3>
                </div>
                <h4 className="text-lg text-primary mb-3">{currentModel.name}</h4>
                <p className="text-muted-foreground">{currentModel.description}</p>
              </div>

              {/* Key Features */}
              <div>
                <h5 className="font-semibold text-green-400 mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4" />
                  Key Features
                </h5>
                <ul className="space-y-1">
                  {currentModel.keyFeatures.map((feature, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-green-400 mt-1">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              <div>
                <h5 className="font-semibold text-destructive mb-2">Limitations</h5>
                <ul className="space-y-1">
                  {currentModel.limitations.map((limitation, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-destructive mt-1">•</span>
                      {limitation}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-6">
            <Button
              variant="outline"
              onClick={prevModel}
              disabled={currentModelIndex === 0}
              className="particle-button"
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <span className="text-sm text-muted-foreground">
              {currentModelIndex + 1} of {atomicModels.length}
            </span>
            
            <Button
              variant="outline"
              onClick={nextModel}
              disabled={currentModelIndex === atomicModels.length - 1}
              className="particle-button"
            >
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};