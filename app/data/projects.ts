type ProjectContent = {
  type: 'text' | 'image';
  content?: string;
  src?: string;
  alt?: string;
  span: boolean;
};

type Project = {
  id: number;
  title: string;
  image: string;
  description: string;
  content: ProjectContent[];
};

export const projects: Project[] = [
  { 
    id: 1, 
    title: 'Spirit Level', 
    image: '/placeholder.svg', 
    description: 'An exploration of balance and equilibrium in both physical and metaphysical realms.',
    content: [
      { type: 'text', content: 'Spirit Level is a series that delves into the concept of balance, both in the physical world and in our inner lives. Through a variety of media, this project examines how we strive for and maintain equilibrium in an ever-changing environment.', span: false },
      { type: 'image', src: '/placeholder.svg', alt: 'Spirit Level installation view', span: true },
      { type: 'image', src: '/placeholder.svg', alt: 'Spirit Level artwork detail', span: false },
      { type: 'text', content: 'The installation incorporates suspended elements that respond to air currents, creating a dynamic interplay between stability and motion. Visitors are invited to reflect on their own sense of balance as they navigate the space.', span: false },
      { type: 'image', src: '/placeholder.svg', alt: 'Spirit Level conceptual piece', span: false },
      { type: 'image', src: '/placeholder.svg', alt: 'Spirit Level exhibition overview', span: false },
    ]
  },
  { 
    id: 2, 
    title: 'Echoes of Time', 
    image: '/placeholder.svg', 
    description: 'A multimedia installation exploring the concept of time and memory.',
    content: [
      { type: 'text', content: 'Echoes of Time is a multimedia installation that invites viewers to contemplate the nature of time and the persistence of memory. Through a combination of sound, light, and sculptural elements, the work creates an immersive environment that challenges our perception of temporal reality.', span: false },
      { type: 'image', src: '/placeholder.svg', alt: 'Echoes of Time main installation', span: true },
      { type: 'image', src: '/placeholder.svg', alt: 'Detail of time-based sculpture', span: false },
      { type: 'text', content: 'Central to the installation is a series of kinetic sculptures that move in patterns inspired by the mechanisms of antique clocks. These are accompanied by a soundscape that blends recorded memories with the ticking of various timepieces, creating a layered audio experience that evokes both nostalgia and a sense of the relentless march of time.', span: false },
      { type: 'image', src: '/placeholder.svg', alt: 'Visitors interacting with the installation', span: false },
      { type: 'image', src: '/placeholder.svg', alt: 'Close-up of sound component', span: false },
    ]
  },
  // Add more projects as needed
];