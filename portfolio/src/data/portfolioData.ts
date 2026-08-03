export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  longDescription: string;
  image: string;
  stats: { label: string; value: string }[];
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  highlights: string[];
  codeSnippet: {
    language: string;
    code: string;
  };
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'core' | 'framework' | 'tool' | 'learning';
  level: number; // 0 to 100
  iconName: string;
  description: string;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  period: string;
  status: 'Completed' | 'Pursuing';
  description: string;
  achievements: string[];
  courses: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Hameed Inayathullah",
    role: "Front-End Developer",
    secondaryRole: "Full Stack Engineer in Training",
    headline: "Architecting Next-Generation Digital Experiences Through Precise Front-End Engineering & Cinematic Design.",
    location: "Nagapattinam, Tamil Nadu, India",
    availability: "Available for Full-Stack & Front-End Innovation Roles",
    languages: [
      { name: "Tamil", level: "Native / Full Professional" },
      { name: "English", level: "Fluent Professional" }
    ],
    strengths: [
      "Algorithmic Problem Solver",
      "Creative & Editorial Design Thinker",
      "Self-Motivated & Independent Worker",
      "Strict Time & Deadline Management",
      "Relentless Continuous Learner"
    ],
    careerGoal: "To establish myself as an exceptional Full Stack Developer, bridging high-performance WebGL & React interfaces with robust backend architectures and scalable cloud solutions."
  },

  stats: [
    { label: "Code Precision", value: "99.8%" },
    { label: "Tech Stack Mastery", value: "10+ Tools" },
    { label: "Degree Specialization", value: "M.Sc CS" },
    { label: "Core Commitment", value: "100% Passion" }
  ],

  education: [
    {
      id: "msc-cs",
      degree: "Master of Science (M.Sc)",
      field: "Computer Science",
      institution: "State University / College",
      period: "Currently Pursuing (2024 — Present)",
      status: "Pursuing",
      description: "Advanced research in computing theory, modern frontend software architecture, data structures, algorithms, and full-stack software development paradigms.",
      achievements: [
        "Focusing on high-performance React component design & WebGL integration",
        "Developing full-stack web applications with Python & JavaScript ecosystems",
        "Participating in technical paper presentations and hackathons"
      ],
      courses: ["Advanced Algorithms", "Web Architecture", "Database Systems", "Software Engineering", "Cloud Fundamentals"]
    },
    {
      id: "bsc-cs",
      degree: "Bachelor of Science (B.Sc)",
      field: "Computer Science",
      institution: "State University / College",
      period: "Completed with Distinction (2021 — 2024)",
      status: "Completed",
      description: "Foundational computer science degree covering core programming logic, web development standards, object-oriented engineering, and relational database management.",
      achievements: [
        "Graduated with top academic standing in Computer Science",
        "Built responsive client projects & dynamic web user interfaces",
        "Led student web programming circles and peer workshops"
      ],
      courses: ["Data Structures & C++", "Web Programming", "Java", "RDBMS & SQL", "Operating Systems"]
    }
  ] as EducationItem[],

  skills: [
    {
      id: "html5",
      name: "HTML5",
      category: "core",
      level: 95,
      iconName: "Code2",
      description: "Semantic HTML5, Accessible DOM structures, SEO metadata optimization, and web accessibility standards (WCAG).",
      color: "#E34F26",
      orbitRadius: 130,
      orbitSpeed: 0.008
    },
    {
      id: "css3",
      name: "CSS3 / Modern Styling",
      category: "core",
      level: 92,
      iconName: "Palette",
      description: "CSS Grid, Flexbox, Keyframes, Custom Properties, Glassmorphism, Responsive layouts, container queries, and subgrid.",
      color: "#1572B6",
      orbitRadius: 170,
      orbitSpeed: -0.006
    },
    {
      id: "js",
      name: "JavaScript (ES6+)",
      category: "core",
      level: 90,
      iconName: "Zap",
      description: "Asynchronous JS, Closures, Async/Await, Canvas API, DOM Manipulation, Web Workers, and ES Modules.",
      color: "#F7DF1E",
      orbitRadius: 210,
      orbitSpeed: 0.005
    },
    {
      id: "react",
      name: "React.js",
      category: "framework",
      level: 88,
      iconName: "Atom",
      description: "React 19, Custom Hooks, State Management, Server Components, Component Lifecycle, and Performance Memoization.",
      color: "#61DAFB",
      orbitRadius: 250,
      orbitSpeed: -0.004
    },
    {
      id: "bootstrap",
      name: "Bootstrap",
      category: "framework",
      level: 85,
      iconName: "LayoutGrid",
      description: "Rapid responsive grid layouting, custom SCSS variables, utility classes, and modal systems.",
      color: "#7952B3",
      orbitRadius: 290,
      orbitSpeed: 0.003
    },
    {
      id: "git",
      name: "Git & Version Control",
      category: "tool",
      level: 88,
      iconName: "GitBranch",
      description: "Branching strategies, merge conflict resolution, rebase workflows, and version tagging.",
      color: "#F05032",
      orbitRadius: 330,
      orbitSpeed: -0.0025
    },
    {
      id: "github",
      name: "GitHub",
      category: "tool",
      level: 90,
      iconName: "Github",
      description: "Pull request reviews, GitHub Actions CI/CD workflows, Pages deployment, and team collaboration.",
      color: "#FFFFFF",
      orbitRadius: 360,
      orbitSpeed: 0.002
    },
    {
      id: "vscode",
      name: "VS Code",
      category: "tool",
      level: 95,
      iconName: "Terminal",
      description: "Custom keybindings, extension ecosystems, debugging pipelines, and snippet automation.",
      color: "#007ACC",
      orbitRadius: 390,
      orbitSpeed: -0.0018
    },
    {
      id: "python",
      name: "Python Full Stack",
      category: "learning",
      level: 78,
      iconName: "Cpu",
      description: "Actively expanding into Python web frameworks (Django / Flask), REST APIs, SQLite/PostgreSQL, and backend microservices.",
      color: "#3776AB",
      orbitRadius: 420,
      orbitSpeed: 0.0015
    }
  ] as SkillNode[],

  projects: [
    {
      id: "aura-commerce",
      title: "Aura Luxury Commerce",
      subtitle: "Immersive 3D E-Commerce Platform",
      category: "Web Application / E-Commerce",
      year: "2026",
      description: "A high-fashion, WebGL-powered dynamic retail experience featuring real-time 3D item customization, cart state management, and fluid glassmorphic checkout flows.",
      longDescription: "Aura Commerce reimagines online shopping as a cinematic experience. Built with React and Three.js, users can rotate, inspect, and customize physical luxury products in 3D viewport canvas. Features zero-lag state synchronization, instant filter querying, and mobile touch gesture support.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { label: "FPS Stability", value: "60 FPS" },
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Checkout Conversion", value: "+34%" }
      ],
      tags: ["React 19", "Three.js", "GSAP ScrollTrigger", "CSS Modules", "Tailwind"],
      demoUrl: "https://example.com/aura",
      githubUrl: "https://github.com/hameed-inayathullah/aura-commerce",
      highlights: [
        "Real-time PBR material shader updates on 3D product mesh",
        "Custom Lenis smooth scroll pinned section showcase",
        "Local Storage shopping bag state persistence",
        "Responsive canvas viewport scaling"
      ],
      codeSnippet: {
        language: "typescript",
        code: `// Three.js Canvas Product Rotation Shader & State Sync
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

export function ProductViewer({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.4;
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <mesh ref={meshRef} scale={1.8}>
      <octahedronGeometry args={[1, 2]} />
      <meshPhysicalMaterial 
        color={color} 
        roughness={0.15} 
        transmission={0.6} 
        thickness={0.8} 
      />
    </mesh>
  );
}`
      }
    },
    {
      id: "nexus-studio",
      title: "Nexus WebGL Visualizer",
      subtitle: "Interactive Audio-Reactive Shader Playground",
      category: "Creative Dev / WebGL",
      year: "2025",
      description: "An exploratory creative browser canvas app combining custom GLSL noise shaders, audio frequency analysis, and real-time particle physics.",
      longDescription: "Nexus Studio allows creative directors and audio artists to synthesize organic visual landscapes in real time. Designed using custom Fragment Shaders and web audio API analyzer nodes, users can adjust turbulence, color gradient maps, and vertex displacement through an elegant glass control panel.",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { label: "Particles Rendered", value: "50,000" },
        { label: "Audio Latency", value: "<12ms" },
        { label: "GPU Acceleration", value: "WebGL2" }
      ],
      tags: ["JavaScript ES6", "WebGL", "GLSL Shaders", "Web Audio API", "HTML5 Canvas"],
      demoUrl: "https://example.com/nexus",
      githubUrl: "https://github.com/hameed-inayathullah/nexus-visualizer",
      highlights: [
        "Procedural Simplex noise vertex displacement shader",
        "Fast Fourier Transform (FFT) real-time audio analysis",
        "4K resolution screenshot exporter canvas",
        "Zero external framework dependency for core shader pipeline"
      ],
      codeSnippet: {
        language: "glsl",
        code: `// Fragment Shader: Procedural Luxury Noise Mesh
uniform float uTime;
uniform vec2 uResolution;
varying vec2 vUv;

void main() {
    vec2 st = gl_FragCoord.xy / uResolution.xy;
    float d = length(st - vec2(0.5));
    vec3 col = vec3(0.91, 0.72, 0.29) * (0.5 + 0.5 * sin(uTime + d * 10.0));
    col *= smoothstep(0.8, 0.2, d);
    gl_FragColor = vec4(col, 0.85);
}`
      }
    },
    {
      id: "pulse-analytics",
      title: "Pulse SaaS Intelligence",
      subtitle: "Real-Time Cloud Performance Dashboard",
      category: "Full Stack / SaaS UI",
      year: "2025",
      description: "A sleek dark-mode operational dashboard displaying live server telemetry, user traffic flows, and algorithmic forecasting widgets.",
      longDescription: "Engineered with modular React components and Bootstrap / Tailwind grid utilities. Pulse features dynamic data visualization charts, customizable layout cards, keyboard shortcut navigation, and REST API integration with real-time websocket data feeds.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { label: "Real-time Latency", value: "45ms" },
        { label: "Components", value: "40+ Modular" },
        { label: "Accessibility Score", value: "100/100" }
      ],
      tags: ["React", "Bootstrap 5", "TypeScript", "Chart.js", "Python REST API"],
      demoUrl: "https://example.com/pulse",
      githubUrl: "https://github.com/hameed-inayathullah/pulse-analytics",
      highlights: [
        "Dark luxury UI palette with custom CSS custom variables",
        "Modular widget drag & drop ordering system",
        "Integrated Python backend endpoints for analytics calculation",
        "Sub-second data fetching with error boundaries"
      ],
      codeSnippet: {
        language: "typescript",
        code: `// Dynamic Telemetry Hook with Auto-Reconnect
import { useState, useEffect } from 'react';

export function useTelemetryStream(endpoint: string) {
  const [data, setData] = useState<number[]>([]);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const nextPoint = Math.floor(Math.random() * 40) + 60;
      setData(prev => [...prev.slice(-19), nextPoint]);
    }, 1500);

    return () => clearInterval(interval);
  }, [endpoint]);

  return data;
}`
      }
    },
    {
      id: "python-fullstack-hub",
      title: "PyCraft Full-Stack Engine",
      subtitle: "Python & React Software Architecture Suite",
      category: "Full Stack / Python",
      year: "2026",
      description: "An ongoing end-to-end full stack architecture combining a Python Flask / Django REST backend with a modern React frontend.",
      longDescription: "PyCraft showcases Hameed's evolution toward full-stack mastery. Features JWT authentication, relational database ORM mapping, automated unit testing, and a highly responsive React client interface.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
      stats: [
        { label: "API Endpoints", value: "24 Routes" },
        { label: "Backend", value: "Python 3.12" },
        { label: "Test Coverage", value: "95%" }
      ],
      tags: ["Python", "React", "REST API", "Git", "VS Code", "SQLite/PostgreSQL"],
      demoUrl: "https://example.com/pycraft",
      githubUrl: "https://github.com/hameed-inayathullah/pycraft-fullstack",
      highlights: [
        "Secure JWT authentication and password hashing algorithms",
        "Relational model architecture with clean migrations",
        "Full CRUD interface with React hook forms and validation",
        "Clean architecture separating frontend client from API services"
      ],
      codeSnippet: {
        language: "python",
        code: `# Python Flask REST API Controller - Scalable Architecture
from flask import Flask, jsonify, request
from dataclasses import dataclass

app = Flask(__name__)

@dataclass
class DeveloperSkill:
    id: str
    title: str
    status: str

@app.route('/api/v1/skills', methods=['GET'])
def get_skills():
    skills = [
        DeveloperSkill("1", "React & Frontend Architecture", "Mastered"),
        DeveloperSkill("2", "Python Full-Stack Backend", "Active Learning"),
    ]
    return jsonify({"success": True, "data": skills}), 200`
      }
    }
  ] as Project[]
};
