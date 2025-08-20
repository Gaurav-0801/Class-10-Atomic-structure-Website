import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AtomViewer } from '@/components/AtomicStructure/AtomViewer';
import { AtomicModels } from '@/components/AtomicStructure/AtomicModels';
import { KnowledgeCheck } from '@/components/AtomicStructure/KnowledgeCheck';
import { Atom, BookOpen, Microscope, Zap, Target, Users, Brain } from 'lucide-react';
import atomicHero from '@/assets/atomic-hero.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: `url(${atomicHero})` }}
        />
        <div className="absolute inset-0 gradient-cosmic opacity-60" />
        
        <div className="relative container mx-auto px-4 py-20 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary px-4 py-2">
              Class 10 Chemistry
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Atomic Structure
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore the fascinating world of atoms through interactive simulations, 
              animations, and visual learning experiences.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-electron">
                <Zap className="w-5 h-5" />
                <span>Interactive Simulations</span>
              </div>
              <div className="flex items-center gap-2 text-proton">
                <Microscope className="w-5 h-5" />
                <span>3D Visualizations</span>
              </div>
              <div className="flex items-center gap-2 text-neutron">
                <Target className="w-5 h-5" />
                <span>Concept Mastery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Objectives */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center gap-2">
            <Target className="w-8 h-8 text-primary" />
            Learning Objectives
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master the fundamental concepts of atomic structure through hands-on exploration
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="atom-card text-center float glow-pulse">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-electron rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-glow">
                <Atom className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Atomic Components</h3>
              <p className="text-sm text-muted-foreground">
                Understand protons, neutrons, and electrons
              </p>
            </CardContent>
          </Card>

          <Card className="atom-card text-center float glow-pulse" style={{ animationDelay: '0.5s' }}>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-proton rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-glow">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Historical Models</h3>
              <p className="text-sm text-muted-foreground">
                Evolution from Dalton to modern quantum model
              </p>
            </CardContent>
          </Card>

          <Card className="atom-card text-center float glow-pulse" style={{ animationDelay: '1s' }}>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-neutron rounded-full mx-auto mb-4 flex items-center justify-center animate-pulse-glow">
                <Microscope className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Electronic Structure</h3>
              <p className="text-sm text-muted-foreground">
                Electron shells and orbital arrangements
              </p>
            </CardContent>
          </Card>

          <Card className="atom-card text-center float glow-pulse" style={{ animationDelay: '1.5s' }}>
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-nucleus rounded-full mx-auto mb-4 flex items-center justify-center animate-nucleus-pulse">
                <Brain className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-semibold mb-2">Knowledge Check</h3>
              <p className="text-sm text-muted-foreground">
                Test your understanding with interactive quiz
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Interactive Learning Modules */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Interactive Learning Modules</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dive deep into atomic structure with our immersive learning experience
          </p>
        </div>

        <Tabs defaultValue="viewer" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
            <TabsTrigger value="viewer" className="particle-button">
              <Atom className="w-4 h-4 mr-2" />
              Atom Viewer
            </TabsTrigger>
            <TabsTrigger value="models" className="particle-button">
              <BookOpen className="w-4 h-4 mr-2" />
              Historical Models
            </TabsTrigger>
            <TabsTrigger value="quiz" className="particle-button">
              <Brain className="w-4 h-4 mr-2" />
              Knowledge Check
            </TabsTrigger>
          </TabsList>

          <TabsContent value="viewer" className="space-y-6">
            <AtomViewer />
          </TabsContent>

          <TabsContent value="models" className="space-y-6">
            <AtomicModels />
          </TabsContent>

          <TabsContent value="quiz" className="space-y-6">
            <KnowledgeCheck />
          </TabsContent>
        </Tabs>
      </section>

      {/* Key Concepts Summary */}
      <section className="py-16 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Concepts</h2>
            <p className="text-muted-foreground">
              Essential atomic structure concepts for Class 10 students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="atom-card">
              <CardHeader>
                <CardTitle className="text-lg text-electron">Subatomic Particles</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong className="text-proton">Protons:</strong> Positive charge, in nucleus</li>
                  <li><strong className="text-neutron">Neutrons:</strong> No charge, in nucleus</li>
                  <li><strong className="text-electron">Electrons:</strong> Negative charge, orbit nucleus</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="atom-card">
              <CardHeader>
                <CardTitle className="text-lg text-proton">Atomic Numbers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>Atomic Number:</strong> Number of protons</li>
                  <li><strong>Mass Number:</strong> Protons + Neutrons</li>
                  <li><strong>Atomic Mass:</strong> Average mass of isotopes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="atom-card">
              <CardHeader>
                <CardTitle className="text-lg text-neutron">Electron Arrangement</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li><strong>K Shell:</strong> Maximum 2 electrons</li>
                  <li><strong>L Shell:</strong> Maximum 8 electrons</li>
                  <li><strong>M Shell:</strong> Maximum 18 electrons</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Atomic Structure Learning Module - Class 10 Chemistry Education
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;