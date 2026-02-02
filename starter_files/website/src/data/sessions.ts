export interface Session {
  id: string;
  title: string;
  speaker: string;
  category: 'Keynote' | 'Breakout' | 'Learning Lab' | 'Customer Story' | 'Expo';
  day: 'Day 1' | 'Day 2' | 'Day 3';
  time: string;
  location: string;
  description: string;
  details?: {
    fullDescription: string;
    takeaways: string[];
    tracks: string[];
    level?: string;
    speakerBio?: string;
  };
}

export const SESSIONS: Session[] = [
  {
    id: 'keynote-d1',
    title: 'The Future of AI is Here',
    speaker: 'Dr. Elena Rostova',
    category: 'Keynote',
    day: 'Day 1',
    time: '09:00 AM - 10:30 AM',
    location: 'Main Hall A',
    description: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology.',
    details: {
      fullDescription: 'Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry. Dr. Rostova will discuss the ethical implications, the speed of innovation, and how our company is positioning itself at the forefront of this revolution.',
      takeaways: ['AI Market Trends', 'Strategic Vision', 'Ethical AI'],
      tracks: ['AI/ML', 'Leadership'],
      level: 'Beginner',
      speakerBio: 'Dr. Elena Rostova is the CEO of TechStack and a pioneer in artificial intelligence research.'
    }
  },
  {
    id: 'lab-d1-1',
    title: 'End-to-End MLOps with Kubernetes',
    speaker: 'Marcus Chen',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Learn the entire MLOps lifecycle from data ingestion to deployment.',
    details: {
      fullDescription: 'Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster. This hands-on lab will guide you through setting up a robust pipeline using industry-standard tools.',
      takeaways: ['Kubernetes Basics', 'Model Containerization', 'CI/CD for ML'],
      tracks: ['DevOps', 'AI/ML'],
      level: 'Advanced',
      speakerBio: 'Marcus Chen is a Principal DevOps Engineer with over 10 years of experience in cloud infrastructure.'
    }
  },
  {
    id: 'breakout-d1-1',
    title: 'Micro-Frontends at Scale',
    speaker: 'Priya Patel',
    category: 'Breakout',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Learn how to brand distributed niches effectively using micro-frontends.',
    details: {
      fullDescription: 'Learn how to brand distributed niches effectively. We will dive deep into module federation, shared state management, and ensuring a consistent user experience across disparate teams.',
      takeaways: ['Module Federation', 'State Management', 'Team Autonomy'],
      tracks: ['Frontend', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'Priya Patel is a Senior Frontend Architect at WebScale Inc.'
    }
  },
  {
    id: 'breakout-d1-2',
    title: 'Real-Time Event Streaming with Kafka',
    speaker: 'Sarah Johnson',
    category: 'Customer Story',
    day: 'Day 1',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Real-world case study on unleashing real-time initiatives.',
    details: {
      fullDescription: 'Real-world case study on unleashing real-time initiatives. Sarah will share how her team migrated from a batch-processing monolith to a real-time event streaming architecture using Apache Kafka.',
      takeaways: ['Kafka Fundamentals', 'Event-Driven Architecture', 'Migration Strategies'],
      tracks: ['Backend', 'Data Engineering'],
      level: 'Intermediate',
      speakerBio: 'Sarah Johnson is the VP of Engineering at FinTech Solutions.'
    }
  },
  {
    id: 'lab-d1-2',
    title: 'Graph Neural Networks in Practice',
    speaker: 'Isabella Martinez',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Workshop: Generating extensible relationships with GNNs.',
    details: {
      fullDescription: 'Workshop: Generating extensible relationships. Discover the power of Graph Neural Networks for analyzing complex relationship data. We will build a recommendation engine from scratch.',
      takeaways: ['GNN Theory', 'PyTorch Geometric', 'Recommendation Systems'],
      tracks: ['AI/ML', 'Data Science'],
      level: 'Advanced',
      speakerBio: 'Isabella Martinez is a Research Scientist specializing in geometric deep learning.'
    }
  },
  {
    id: 'breakout-d1-3',
    title: 'Optimizing React Performance',
    speaker: 'David Kim',
    category: 'Breakout',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Strategies for streamlining customized eyeballs and rendering.',
    details: {
      fullDescription: 'Strategies for streamlining customized eyeballs. David will cover advanced profiling techniques, memoization patterns, and how to effectively use the latest React features to prevent wasted renders.',
      takeaways: ['React Profiler', 'useMemo & useCallback', 'Concurrent Features'],
      tracks: ['Frontend', 'Performance'],
      level: 'Intermediate',
      speakerBio: 'David Kim is a Core Maintainer of several popular React libraries.'
    }
  },
  {
    id: 'breakout-d1-4',
    title: 'Building Scalable Community Platforms',
    speaker: 'James Wilson',
    category: 'Customer Story',
    day: 'Day 1',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'How we e-enabled dynamic communities for millions of users.',
    details: {
      fullDescription: 'How we e-enabled dynamic communities. James shares the architectural decisions behind scaling a community platform to support millions of concurrent users.',
      takeaways: ['Scalability', 'Database Sharding', 'Caching Strategies'],
      tracks: ['Backend', 'System Design'],
      level: 'Advanced',
      speakerBio: 'James Wilson is the CTO of CommunityFirst.'
    }
  },
  {
    id: 'lab-d1-3',
    title: 'High-Throughput Data Pipelines',
    speaker: 'Robert Garcia',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Hands-on: Transitioning efficient channels for big data.',
    details: {
      fullDescription: 'Hands-on: Transitioning efficient channels. Build a high-throughput data pipeline using Apache Spark and Airflow. We will focus on optimization and error handling.',
      takeaways: ['Apache Spark', 'Airflow', 'Data Quality'],
      tracks: ['Data Engineering', 'Big Data'],
      level: 'Intermediate',
      speakerBio: 'Robert Garcia is a Data Engineer at BigData Corp.'
    }
  },
  {
    id: 'breakout-d1-5',
    title: 'Open Source Stewardship Strategy',
    speaker: 'Thomas Lee',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Implementing strategic communities for sustainable open source.',
    details: {
      fullDescription: 'Implementing strategic communities. Learn how to manage open source projects effectively, from governance models to community engagement and funding.',
      takeaways: ['Governance', 'Community Building', 'Sustainability'],
      tracks: ['Open Source', 'Leadership'],
      level: 'Beginner',
      speakerBio: 'Thomas Lee is the Executive Director of the Open Source Alliance.'
    }
  },
  {
    id: 'breakout-d1-6',
    title: 'Securing Modern Web APIs',
    speaker: 'Michael Brown',
    category: 'Breakout',
    day: 'Day 1',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Targeting holistic web services effectively against threats.',
    details: {
      fullDescription: 'Targeting holistic web services effectively. A deep dive into API security best practices, including OAuth 2.1, rate limiting, and threat detection.',
      takeaways: ['OAuth 2.1', 'API Gateway', 'Threat Modeling'],
      tracks: ['Security', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Michael Brown is a Security Researcher.'
    }
  },
  {
    id: 'lab-d1-4',
    title: 'Next-Gen WebAssembly (Wasm)',
    speaker: 'Lisa Wang',
    category: 'Learning Lab',
    day: 'Day 1',
    time: '04:00 PM - 06:00 PM',
    location: 'Lab A',
    description: 'E-Enabling next-generation web services with Wasm.',
    details: {
      fullDescription: 'E-Enabling next-generation web services. Explore the potential of WebAssembly outside the browser. We will write Wasm modules in Rust and run them on the server.',
      takeaways: ['Wasm Fundamentals', 'Rust for Wasm', 'Server-side Wasm'],
      tracks: ['WebAssembly', 'Rust'],
      level: 'Intermediate',
      speakerBio: 'Lisa Wang is a Compiler Engineer.'
    }
  },
  {
    id: 'keynote-d2',
    title: 'Building Ethical AI Systems',
    speaker: 'Prof. Emily Carter',
    category: 'Keynote',
    day: 'Day 2',
    time: '09:00 AM - 10:00 AM',
    location: 'Main Hall A',
    description: 'A deep dive into the importance of ethics in AI development.',
    details: {
      fullDescription: 'A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency. Prof. Carter will present a framework for evaluating AI systems for bias and harm.',
      takeaways: ['AI Ethics', 'Bias Detection', 'Responsible AI'],
      tracks: ['AI/ML', 'Ethics'],
      level: 'Beginner',
      speakerBio: 'Prof. Emily Carter is a Professor of Computer Science at Tech University.'
    }
  },
  {
    id: 'lab-d2-1',
    title: 'Personalization at Scale with AI',
    speaker: 'Maria Hernandez',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Streamlining B2C experiences lab.',
    details: {
      fullDescription: 'Streamlining B2C experiences lab. Implement a real-time personalization engine using machine learning to tailor user experiences on the fly.',
      takeaways: ['Recommendation Algorithms', 'Real-time Inference', 'A/B Testing'],
      tracks: ['AI/ML', 'Product'],
      level: 'Intermediate',
      speakerBio: 'Maria Hernandez is a Lead Data Scientist at E-Shop.'
    }
  },
  {
    id: 'breakout-d2-1',
    title: 'Building Vertical AI Agents',
    speaker: 'Christopher Davis',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Optimizing vertical applications for better performance.',
    details: {
      fullDescription: 'Optimizing vertical applications for better performance. Learn how to design and build AI agents specialized for specific industry verticals like healthcare or finance.',
      takeaways: ['Agent Architecture', 'Domain Adaptation', 'Compliance'],
      tracks: ['AI/ML', 'Architecture'],
      level: 'Advanced',
      speakerBio: 'Christopher Davis is the Founder of VerticalAI.'
    }
  },
  {
    id: 'breakout-d2-2',
    title: 'Distributed Tracing & Observability',
    speaker: 'Jennifer Martinez',
    category: 'Breakout',
    day: 'Day 2',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Aggregating granular synergies for success.',
    details: {
      fullDescription: 'Aggregating granular synergies for success. Master distributed tracing with OpenTelemetry to debug complex microservices architectures.',
      takeaways: ['OpenTelemetry', 'Tracing Patterns', 'Debugging'],
      tracks: ['DevOps', 'Observability'],
      level: 'Intermediate',
      speakerBio: 'Jennifer Martinez is a Staff SRE at CloudOps.'
    }
  },
  {
    id: 'lab-d2-2',
    title: 'Real-Time Analytics with Apache Flink',
    speaker: 'Kevin Anderson',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Maximize real-time eyeballs workshop.',
    details: {
      fullDescription: 'Maximize real-time eyeballs workshop. Build stateful stream processing applications with Apache Flink.',
      takeaways: ['Stream Processing', 'Apache Flink', 'State Management'],
      tracks: ['Big Data', 'Streaming'],
      level: 'Advanced',
      speakerBio: 'Kevin Anderson is a Flink Committer.'
    }
  },
  {
    id: 'breakout-d2-3',
    title: 'Edge AI: Running Models Locally',
    speaker: 'Susan Taylor',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class bandwidth standards.',
    details: {
      fullDescription: 'Redefining world-class bandwidth standards. Explore techniques for optimizing and running ML models directly on edge devices and browsers.',
      takeaways: ['Edge Computing', 'Model Quantization', 'TensorFlow.js'],
      tracks: ['AI/ML', 'Edge'],
      level: 'Intermediate',
      speakerBio: 'Susan Taylor is an IoT Architect.'
    }
  },
  {
    id: 'breakout-d2-4',
    title: 'Benchmarking Large Language Models',
    speaker: 'Daniel White',
    category: 'Breakout',
    day: 'Day 2',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Benchmarking synergistic vortals in the industry.',
    details: {
      fullDescription: 'Benchmarking synergistic vortals in the industry. How to effectively evaluate and compare the performance of different LLMs for your specific use cases.',
      takeaways: ['LLM Evaluation', 'Benchmarks', 'Cost Analysis'],
      tracks: ['AI/ML', 'NLP'],
      level: 'Advanced',
      speakerBio: 'Daniel White is an AI Researcher.'
    }
  },
  {
    id: 'lab-d2-3',
    title: 'WebTransport & WebSockets Deep Dive',
    speaker: 'Jessica Thomas',
    category: 'Learning Lab',
    day: 'Day 2',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Seize next-generation bandwidth tutorial.',
    details: {
      fullDescription: 'Seize next-generation bandwidth tutorial. Understand the differences between WebSockets and WebTransport and when to use each for low-latency communication.',
      takeaways: ['WebTransport', 'WebSockets', 'Networking'],
      tracks: ['Web', 'Networking'],
      level: 'Intermediate',
      speakerBio: 'Jessica Thomas is a Network Engineer.'
    }
  },
  {
    id: 'breakout-d2-5',
    title: 'Serverless vs. Edge Functions',
    speaker: 'Paul Moore',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Techniques to disintermediate back-end web services.',
    details: {
      fullDescription: 'Techniques to disintermediate back-end web services. Comparing serverless functions (Lambda) with edge functions (Cloudflare Workers, Vercel Edge) for performance and cost.',
      takeaways: ['Serverless', 'Edge Computing', 'Cost Optimization'],
      tracks: ['Cloud', 'Architecture'],
      level: 'Intermediate',
      speakerBio: 'Paul Moore is a Cloud Architect.'
    }
  },
  {
    id: 'breakout-d2-6',
    title: 'Optimizing 5G for IoT',
    speaker: 'Mark Jackson',
    category: 'Breakout',
    day: 'Day 2',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Transforming bleeding-edge bandwidth case study.',
    details: {
      fullDescription: 'Transforming bleeding-edge bandwidth case study. Leveraging 5G networks for high-density IoT deployments.',
      takeaways: ['5G', 'IoT', 'Connectivity'],
      tracks: ['IoT', 'Networking'],
      level: 'Advanced',
      speakerBio: 'Mark Jackson is a Telecom Engineer.'
    }
  },
  {
    id: 'lab-d3-1',
    title: 'Scaling Rust for Web Services',
    speaker: 'Laura Martin',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '09:00 AM - 11:00 AM',
    location: 'Lab C',
    description: 'Scaling next-generation e-business strategies.',
    details: {
      fullDescription: 'Scaling next-generation e-business strategies. Building high-performance, asynchronous web services using Rust and Tokio.',
      takeaways: ['Rust', 'Async Programming', 'Web Frameworks'],
      tracks: ['Rust', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Laura Martin is a Rust Core Team member.'
    }
  },
  {
    id: 'breakout-d3-1',
    title: 'Migrating from Monolith to Microservices',
    speaker: 'Michelle Wu',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 101',
    description: 'Transitioning to holistic models seamlessly.',
    details: {
      fullDescription: 'Transitioning to holistic models seamlessly. Strategies for decomposing a monolithic application into microservices without stopping the world.',
      takeaways: ['Strangler Fig Pattern', 'Database Migration', 'Service Discovery'],
      tracks: ['Architecture', 'Legacy Modernization'],
      level: 'Intermediate',
      speakerBio: 'Michelle Wu is a Software Architect.'
    }
  },
  {
    id: 'breakout-d3-2',
    title: 'Service Mesh with Istio & Linkerd',
    speaker: 'David O\'Connell',
    category: 'Breakout',
    day: 'Day 3',
    time: '11:00 AM - 12:00 PM',
    location: 'Room 201',
    description: 'Meshing customized web services seamlessly.',
    details: {
      fullDescription: 'Meshing customized web services seamlessly. Comparing Istio and Linkerd for managing service-to-service communication, security, and observability.',
      takeaways: ['Service Mesh', 'mTLS', 'Traffic Management'],
      tracks: ['DevOps', 'Security'],
      level: 'Advanced',
      speakerBio: 'David O\'Connell is a Cloud Native Engineer.'
    }
  },
  {
    id: 'lab-d3-2',
    title: 'Efficient Video Streaming Protocols',
    speaker: 'Steven Thompson',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '11:00 AM - 01:00 PM',
    location: 'Lab A',
    description: 'Cultivating efficient bandwidth deep dive.',
    details: {
      fullDescription: 'Cultivating efficient bandwidth deep dive. Understanding HLS, DASH, and WebRTC for modern video streaming applications.',
      takeaways: ['Video Streaming', 'WebRTC', 'HLS/DASH'],
      tracks: ['Media', 'Web'],
      level: 'Intermediate',
      speakerBio: 'Steven Thompson is a Video Engineer.'
    }
  },
  {
    id: 'breakout-d3-3',
    title: 'Headless Commerce Architectures',
    speaker: 'Kenneth Lewis',
    category: 'Breakout',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 102',
    description: 'Redefining world-class e-commerce experiences.',
    details: {
      fullDescription: 'Redefining world-class e-commerce experiences. Decoupling the frontend from the backend to create flexible and fast e-commerce experiences.',
      takeaways: ['Headless CMS', 'E-commerce', 'API-First'],
      tracks: ['E-commerce', 'Architecture'],
      level: 'Beginner',
      speakerBio: 'Kenneth Lewis is a Solutions Architect.'
    }
  },
  {
    id: 'breakout-d3-4',
    title: 'DevRel: Building Developer Trust',
    speaker: 'Patricia Walker',
    category: 'Customer Story',
    day: 'Day 3',
    time: '01:00 PM - 02:00 PM',
    location: 'Room 202',
    description: 'Monetizing next-generation relationships.',
    details: {
      fullDescription: 'Monetizing next-generation relationships. Best practices for developer relations, community engagement, and technical content creation.',
      takeaways: ['Developer Experience', 'Community Management', 'Content Strategy'],
      tracks: ['DevRel', 'Community'],
      level: 'Beginner',
      speakerBio: 'Patricia Walker is a Head of Developer Relations.'
    }
  },
  {
    id: 'lab-d3-3',
    title: 'GraphQL Federation at Scale',
    speaker: 'Brian Garcia',
    category: 'Learning Lab',
    day: 'Day 3',
    time: '02:00 PM - 04:00 PM',
    location: 'Lab B',
    description: 'Driving rich web services masterclass.',
    details: {
      fullDescription: 'Driving rich web services masterclass. Unify your data graph with Apollo Federation. We will build a federated graph across multiple services.',
      takeaways: ['GraphQL', 'Apollo Federation', 'Microservices'],
      tracks: ['Backend', 'API'],
      level: 'Advanced',
      speakerBio: 'Brian Garcia is a GraphQL Expert.'
    }
  },
  {
    id: 'breakout-d3-5',
    title: 'Multi-Cloud Infrastructure Management',
    speaker: 'Amara Okafor',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 103',
    description: 'Engaging distributed infrastructures at scale.',
    details: {
      fullDescription: 'Engaging distributed infrastructures at scale. Tools and strategies for managing infrastructure across AWS, Azure, and GCP using Terraform.',
      takeaways: ['Terraform', 'Multi-Cloud', 'IaC'],
      tracks: ['DevOps', 'Cloud'],
      level: 'Intermediate',
      speakerBio: 'Amara Okafor is a Principal Cloud Engineer.'
    }
  },
  {
    id: 'breakout-d3-6',
    title: 'Accessibility in Modern Web Apps',
    speaker: 'Tariq Al-Fayed',
    category: 'Breakout',
    day: 'Day 3',
    time: '02:30 PM - 03:30 PM',
    location: 'Room 203',
    description: 'Re-intermediating rich communities for growth.',
    details: {
      fullDescription: 'Re-intermediating rich communities. Ensuring your web applications are accessible to everyone, covering WCAG guidelines and testing tools.',
      takeaways: ['WCAG', 'A11y Testing', 'Inclusive Design'],
      tracks: ['Frontend', 'Accessibility'],
      level: 'Beginner',
      speakerBio: 'Tariq Al-Fayed is an Accessibility Advocate.'
    }
  },
  {
    id: 'breakout-d3-7',
    title: 'Advanced PostgreSQL Patterns',
    speaker: 'Wei Zhang',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 104',
    description: 'E-Enabling efficient schemas for data.',
    details: {
      fullDescription: 'E-Enabling efficient schemas. Advanced indexing, partitioning, and query optimization techniques for high-performance PostgreSQL databases.',
      takeaways: ['PostgreSQL', 'Database Tuning', 'SQL'],
      tracks: ['Database', 'Backend'],
      level: 'Advanced',
      speakerBio: 'Wei Zhang is a Database Administrator.'
    }
  },
  {
    id: 'breakout-d3-8',
    title: 'Bridging Digital & Physical Retail',
    speaker: 'Mateo Fernandez',
    category: 'Breakout',
    day: 'Day 3',
    time: '04:00 PM - 05:00 PM',
    location: 'Room 204',
    description: 'Streamlining clicks-and-mortar functionalities.',
    details: {
      fullDescription: 'Streamlining clicks-and-mortar functionalities. Integrating online and offline retail experiences using modern technology stacks.',
      takeaways: ['Omnichannel', 'Retail Tech', 'Integration'],
      tracks: ['Retail', 'Digital Transformation'],
      level: 'Intermediate',
      speakerBio: 'Mateo Fernandez is a CTO of RetailTech.'
    }
  }
];
