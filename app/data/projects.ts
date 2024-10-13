type ProjectContent = {
  type: 'text' | 'image';
  content?: string;
  src?: string;
  alt?: string;
  span?: boolean;
};

type Project = {
  id: string;
  title: string;
  image: string;
  description: string;
  content: ProjectContent[];
};

export const projects: Project[] = [
  { 
    id: 'spirit-level', 
    title: 'Spirit Level', 
    image: '/projects/spirit-level/header.jpg', 
    description: 'An exploration of balance and equilibrium in both physical and metaphysical realms.',
    content: [
      { type: 'text', content: 'Spirit Level is a series that delves into the concept of balance, both in the physical world and in our inner lives. Through a variety of media, this project examines how we strive for and maintain equilibrium in an ever-changing environment.' },
      { type: 'image', src: '/projects/spirit-level/1.jpg', alt: 'Spirit Level installation view', span: false },
      { type: 'image', src: '/projects/spirit-level/2.jpg', alt: 'Spirit Level artwork detail' },
      { type: 'text', content: 'The installation incorporates suspended elements that respond to air currents, creating a dynamic interplay between stability and motion. Visitors are invited to reflect on their own sense of balance as they navigate the space.' },
      { type: 'image', src: '/projects/spirit-level/3.jpg', alt: 'Spirit Level conceptual piece' },
      { type: 'image', src: '/projects/spirit-level/4.jpg', alt: 'Spirit Level exhibition overview' },
    ]
  },
  { 
    id: 'white-tubes', 
    title: 'White Tubes', 
    image: '/projects/white-tubes/header.jpg', 
    description: 'An immersive installation exploring the interplay of light, space, and form.',
    content: [
      { type: 'text', content: 'White Tubes is an immersive installation that investigates the relationship between light, space, and form. Through a series of interconnected cylindrical structures, this project creates a dynamic environment that challenges viewers\' perceptions of space and movement.' },
      { type: 'image', src: '/projects/white-tubes/1.jpg', alt: 'White Tubes installation overview', span: false },
      { type: 'image', src: '/projects/white-tubes/2.jpg', alt: 'Detail of tube structure' },
      { type: 'text', content: 'As visitors navigate through the installation, they experience shifting perspectives and changing light conditions, encouraging a reevaluation of their spatial awareness and sensory perceptions.' },
      { type: 'image', src: '/projects/white-tubes/3.jpg', alt: 'Interaction of light and tubes' },
      { type: 'image', src: '/projects/white-tubes/4.jpg', alt: 'Visitor engaging with the installation' },
    ]
  },
  { 
    id: 'blueprint', 
    title: 'Blueprint', 
    image: '/projects/blueprint/header.jpg', 
    description: 'A conceptual exploration of architectural plans and their impact on lived spaces.',
    content: [
      { type: 'text', content: 'Blueprint is a conceptual project that examines the relationship between architectural plans and the lived experiences of spaces. Through a series of large-scale prints and interactive elements, this work invites viewers to consider how our environments are shaped by design intentions and human interaction.' },
      { type: 'image', src: '/projects/blueprint/1.jpg', alt: 'Overview of Blueprint installation', span: true },
      { type: 'image', src: '/projects/blueprint/2.jpg', alt: 'Detail of architectural print' },
      { type: 'text', content: 'The installation features oversized blueprints that visitors can walk on and interact with, blurring the lines between representation and reality, and challenging our understanding of how spaces are conceived and experienced.' },
      { type: 'image', src: '/projects/blueprint/3.jpg', alt: 'Visitors interacting with floor prints' },
      { type: 'image', src: '/projects/blueprint/4.jpg', alt: 'Close-up of blueprint details' },
    ]
  },
  { 
    id: 'breaking-bread', 
    title: 'Breaking Bread', 
    image: '/projects/breaking-bread/header.jpg', 
    description: 'A performance-based project exploring communal dining and social connections.',
    content: [
      { type: 'text', content: 'Breaking Bread is a performance-based project that investigates the social and cultural significance of shared meals. Through a series of curated dining experiences, this work explores how food and the act of eating together can create and strengthen community bonds.' },
      { type: 'image', src: '/projects/breaking-bread/1.jpg', alt: 'Overview of Breaking Bread performance', span: true },
      { type: 'image', src: '/projects/breaking-bread/2.jpg', alt: 'Detail of table setting' },
      { type: 'text', content: 'Participants are invited to engage in carefully choreographed dining rituals, encouraging conversations and connections that transcend cultural and social boundaries. The project documents these interactions, creating a visual narrative of shared human experiences.' },
      { type: 'image', src: '/projects/breaking-bread/3.jpg', alt: 'Participants sharing a meal' },
      { type: 'image', src: '/projects/breaking-bread/4.jpg', alt: 'Close-up of hands breaking bread' },
    ]
  },
  { 
    id: 'latent-potential', 
    title: 'Latent Potential', 
    image: '/projects/latent-potential/header.jpg', 
    description: 'An exploration of hidden possibilities within everyday objects and spaces.',
    content: [
      { type: 'text', content: 'Latent Potential is a mixed-media project that uncovers and activates the hidden possibilities within everyday objects and spaces. Through a series of interventions and transformations, this work challenges viewers to reconsider their perceptions of the familiar and the overlooked.' },
      { type: 'image', src: '/projects/latent-potential/1.jpg', alt: 'Overview of Latent Potential installation', span: true },
      { type: 'image', src: '/projects/latent-potential/2.jpg', alt: 'Detail of transformed object' },
      { type: 'text', content: 'The installation features common items that have been reimagined and repurposed, revealing unexpected forms and functions. Visitors are encouraged to interact with these transformed objects, discovering new potentials in the seemingly mundane.' },
      { type: 'image', src: '/projects/latent-potential/3.jpg', alt: 'Visitor interacting with installation' },
      { type: 'image', src: '/projects/latent-potential/4.jpg', alt: 'Close-up of intricate object transformation' },
    ]
  },
  // Add more projects following the same structure
];