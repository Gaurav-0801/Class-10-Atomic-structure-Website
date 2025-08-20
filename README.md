# Atomic Structure Interactive Learning Module

An interactive educational web application designed to teach Class 10 Chemistry students about atomic structure through visual simulations, animations, and engaging content.

**Live Demo**:https://class-10-atomic-structure-website.vercel.app/

## Educational Approach & Design Decisions

### Learning Methodology
- **Visual Learning**: Complex atomic concepts are simplified through 3D visualizations and animations
- **Interactive Exploration**: Students can manipulate atomic models and see real-time changes
- **Progressive Learning**: Content is structured from basic concepts to advanced understanding
- **Assessment Integration**: Interactive quiz validates comprehension with immediate feedback

### Technical Architecture

#### Component Structure
- **Modular Design**: Each learning section is a separate component for maintainability
- **AtomViewer**: Interactive 3D atom visualization with animated electron orbits
- **AtomicModels**: Historical progression of atomic theories with visual representations
- **KnowledgeCheck**: Comprehensive quiz system with multiple-choice questions

#### Visual Design System
- **Cosmic Theme**: Dark background with vibrant particle colors to represent atomic energy
- **Semantic Color Tokens**: 
  - `--electron`: Blue tones for electrons
  - `--proton`: Red tones for protons  
  - `--neutron`: Purple tones for neutrons
  - `--nucleus`: Orange tones for atomic nucleus
- **Animation System**: CSS keyframes for floating particles, glowing effects, and orbital motion
- **Responsive Layout**: Mobile-first design ensuring accessibility across devices

#### Interactive Features
- **Real-time Atom Switching**: Instant visualization of different elements (H, He, C, O, Ne)
- **Animated Electron Orbits**: CSS animations showing electron movement patterns
- **Historical Timeline**: Interactive cards showing evolution of atomic models
- **Quiz Validation**: Immediate feedback with explanatory responses

### Educational Content Alignment
- **Class 10 NCERT Curriculum**: Covers subatomic particles, atomic numbers, electron arrangement
- **Learning Objectives**: Clear goals for each module with progress tracking
- **Key Concepts Summary**: Quick reference cards for essential information
- **Assessment Questions**: 5 carefully crafted questions testing core understanding

### Performance Optimizations
- **Component Lazy Loading**: Efficient rendering of heavy 3D visualizations
- **CSS Animations**: Hardware-accelerated transforms for smooth particle effects
- **Semantic HTML**: Proper structure for accessibility and SEO
- **Tailwind CSS**: Utility-first styling for consistent design system

## Project info

## How can I edit this code?

There are several ways of editing your application.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS


## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
#
