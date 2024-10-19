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
      { type: 'text', content: 'The installation incorporates suspended elements that respond to air currents, creating a dynamic interplay between stability and motion. Visitors are invited to reflect on their own sense of balance as they navigate the space.' },
      { type: 'image', src: '/projects/spirit-level/1.jpg', alt: 'Spirit Level installation view', span: false },
      { type: 'image', src: '/projects/spirit-level/2.jpg', alt: 'Spirit Level artwork detail' },
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
      { type: 'text', content: 'As visitors navigate through the installation, they experience shifting perspectives and changing light conditions, encouraging a reevaluation of their spatial awareness and sensory perceptions.' },      
      { type: 'image', src: '/projects/white-tubes/1.jpg', alt: 'White Tubes installation overview', span: false },
      { type: 'image', src: '/projects/white-tubes/2.jpg', alt: 'Detail of tube structure' },
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
      { type: 'text', content: 'The installation features oversized blueprints that visitors can walk on and interact with, blurring the lines between representation and reality, and challenging our understanding of how spaces are conceived and experienced.' },
      { type: 'image', src: '/projects/blueprint/1.jpg', alt: 'Overview of Blueprint installation', span: true },
      { type: 'image', src: '/projects/blueprint/2.jpg', alt: 'Detail of architectural print' },
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
      { type: 'text', content: 'Participants are invited to engage in carefully choreographed dining rituals, encouraging conversations and connections that transcend cultural and social boundaries. The project documents these interactions, creating a visual narrative of shared human experiences.' },
      { type: 'image', src: '/projects/breaking-bread/1.jpg', alt: 'Overview of Breaking Bread performance', span: true },
      { type: 'image', src: '/projects/breaking-bread/2.jpg', alt: 'Detail of table setting' },
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
      { type: 'text', content: 'The installation features common items that have been reimagined and repurposed, revealing unexpected forms and functions. Visitors are encouraged to interact with these transformed objects, discovering new potentials in the seemingly mundane.' },
      { type: 'image', src: '/projects/latent-potential/1.jpg', alt: 'Overview of Latent Potential installation', span: true },
      { type: 'image', src: '/projects/latent-potential/2.jpg', alt: 'Detail of transformed object' },
      { type: 'image', src: '/projects/latent-potential/3.jpg', alt: 'Visitor interacting with installation' },
      { type: 'image', src: '/projects/latent-potential/4.jpg', alt: 'Close-up of intricate object transformation' },
    ]
  },
  {
    id: 'have-you-seen-these-people',
    title: 'Have You Seen These People',
    image: '/projects/have-you-seen-these-people/header.jpg',
    description: 'A thought-provoking exploration of identity and recognition in the digital age.',
    content: [
      { type: 'text', content: 'Have You Seen These People is a multimedia project that investigates the concept of identity and recognition in our increasingly digital world. Through a series of portraits and interactive installations, this work challenges viewers to consider how we perceive and remember faces in an era of constant visual stimulation.' },
      { type: 'text', content: 'The project incorporates elements of artificial intelligence and facial recognition technology, juxtaposing these with traditional portraiture techniques to create a dialogue about the nature of identity in both physical and digital realms.' },
      { type: 'image', src: '/projects/have-you-seen-these-people/1.jpg', alt: 'Overview of Have You Seen These People installation', span: true },
      { type: 'image', src: '/projects/have-you-seen-these-people/2.jpg', alt: 'Detail of digital portrait' },
      { type: 'image', src: '/projects/have-you-seen-these-people/3.jpg', alt: 'Visitor interacting with facial recognition display' },
      { type: 'image', src: '/projects/have-you-seen-these-people/4.jpg', alt: 'Collage of various portraits from the project' },
    ]
  },
  {
    id: 'limit-line',
    title: 'Limit Line',
    image: '/projects/limit-line/header.jpg',
    description: 'An exploration of boundaries and thresholds in physical and conceptual spaces.',
    content: [
      { type: 'text', content: 'Limit Line is an installation that examines the concept of boundaries and thresholds in both physical and conceptual spaces. Through a series of linear interventions in the gallery space, this project invites viewers to consider the nature of limits and how they shape our perception and movement.' },
      { type: 'text', content: 'The installation uses a combination of materials including tape, light, and sound to create visible and invisible boundaries that visitors must navigate. This work challenges our understanding of space and encourages reflection on the limits we encounter and create in our daily lives.' },
      { type: 'image', src: '/projects/limit-line/1.jpg', alt: 'Overview of Limit Line installation', span: true },
      { type: 'image', src: '/projects/limit-line/2.jpg', alt: 'Detail of linear intervention in space' },
      { type: 'image', src: '/projects/limit-line/3.jpg', alt: 'Visitor interacting with light-based boundary' },
      { type: 'image', src: '/projects/limit-line/4.jpg', alt: 'Close-up of material used to create limits' },
    ]
  },
  {
    id: 'saudade',
    title: 'Saudade',
    image: '/projects/saudade/header.jpg',
    description: 'A poetic exploration of longing and nostalgia through multimedia installations.',
    content: [
      { type: 'text', content: 'Saudade is a multimedia project that delves into the complex emotions of longing, nostalgia, and the bittersweet nature of memory. Inspired by the Portuguese concept of "saudade," this work creates immersive environments that evoke a sense of yearning for something indefinable or unattainable.' },
      { type: 'text', content: 'The installation combines visual art, sound, and interactive elements to create a multisensory experience that transports visitors to a space between memory and imagination. Through this work, viewers are invited to reflect on their own experiences of longing and the role of memory in shaping our emotional landscapes.' },
      { type: 'image', src: '/projects/saudade/1.jpg', alt: 'Overview of Saudade installation', span: true },
      { type: 'image', src: '/projects/saudade/2.jpg', alt: 'Detail of nostalgic object display' },
      { type: 'image', src: '/projects/saudade/3.jpg', alt: 'Visitor interacting with sound installation' },
      { type: 'image', src: '/projects/saudade/4.jpg', alt: 'Visual representation of memory and longing' },
    ]
  },
  {
    id: 'spinning-interview',
    title: 'Spinning Interview',
    image: '/projects/spinning-interview/header.jpg',
    description: 'A dynamic performance piece exploring communication and perspective.',
    content: [
      { type: 'text', content: 'Spinning Interview is a performance-based project that challenges traditional notions of communication and perspective. In this work, participants engage in a conversation while seated on a slowly rotating platform, creating a constantly shifting physical and psychological dynamic.' },
      { type: 'text', content: 'The project explores how physical movement and changing viewpoints affect our ability to communicate and understand one another. By introducing an element of disorientation, Spinning Interview encourages participants and viewers to reconsider their assumptions about interpersonal interactions and the role of context in shaping our perceptions.' },
      { type: 'image', src: '/projects/spinning-interview/1.jpg', alt: 'Overview of Spinning Interview performance', span: true },
      { type: 'image', src: '/projects/spinning-interview/2.jpg', alt: 'Participants engaged in rotating conversation' },
      { type: 'image', src: '/projects/spinning-interview/3.jpg', alt: 'Detail of rotating platform mechanism' },
      { type: 'image', src: '/projects/spinning-interview/4.jpg', alt: 'Audience viewing the Spinning Interview performance' },
    ]
  },
  {
    id: 'up-and-down',
    title: 'Up and Down',
    image: '/projects/up-and-down/header.jpg',
    description: 'An interactive sculpture exploring the concepts of ascent and descent.',
    content: [
      { type: 'text', content: 'Up and Down is an interactive sculptural installation that invites viewers to explore the physical and metaphorical concepts of ascent and descent. The work consists of a large-scale structure that participants can climb, descend, and navigate, challenging their perceptions of space and movement.' },
      { type: 'text', content: 'Through this immersive experience, the project examines themes of progress, setbacks, and the cyclical nature of life\'s journeys. The installation\'s design incorporates elements that change based on the viewer\'s position, creating a dynamic and ever-shifting perspective as they move through the space.' },
      { type: 'image', src: '/projects/up-and-down/1.jpg', alt: 'Overview of Up and Down installation', span: true },
      { type: 'image', src: '/projects/up-and-down/2.jpg', alt: 'Participants climbing the sculptural structure' },
      { type: 'image', src: '/projects/up-and-down/3.jpg', alt: 'Detail of interactive elements within the sculpture' },
      { type: 'image', src: '/projects/up-and-down/4.jpg', alt: 'View from the top of the Up and Down structure' },
    ]
  }
];