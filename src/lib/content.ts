import ChatImg from "../assets/chat.png";
import EcommerceImg from "../assets/ecommerce.png";
import PMImg from "../assets/pm.png";
import SaaSImg from "../assets/saas.png";

export const content = {
    navbar: {
        navlinks: ['Home', 'About', 'Skills', 'Projects', 'Contact']
    },
    project : {
        projects : [
            {
                title: "Realtime Chat App",
                desc: "WebSocket-powered chat with presence, typing indicators, and message history.",
                tech: ["React", "TypeScript", "Node.js", "Socket.IO", "Redis"],
                image: ChatImg,
                alt: "Realtime Chat App screenshot",
            },
            {
                title: "E‑commerce Platform",
                desc: "Product catalog, shopping cart, checkout with Stripe, admin dashboard.",
                tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe", "Vercel"],
                image: EcommerceImg,
                alt: "E-commerce Platform screenshot",
            },
            {
                title: "Project Management Tool",
                desc: "Task boards, real-time collaboration, notifications and role-based access.",
                tech: ["React", "NestJS", "Postgres", "Docker", "CI/CD"],
                image: PMImg,
                alt: "Project Management Tool screenshot",
            },
            {
                title: "SaaS Analytics Dashboard",
                desc: "Data visualizations, usage tracking, and actionable insights for product teams.",
                tech: ["React", "Node.js", "Chart.js", "PostgreSQL", "Docker"],
                image: SaaSImg,
                alt: "SaaS Analytics Dashboard screenshot",
            },
        ]
    },
    skill: {
        frontEnd : [
            { name: "React", level: "Advanced", value: 90 },
            { name: "TypeScript", level: "Advanced", value: 85 },
            { name: "Next.js", level: "Advanced", value: 82 },
            { name: "Tailwind CSS", level: "Advanced", value: 88 },
            { name: "HTML", level: "Expert", value: 95 },
            { name: "CSS", level: "Expert", value: 92 },
        ],
        backEnd : [
            { name: "Node.js", level: "Advanced", value: 88 },
            { name: "Express", level: "Advanced", value: 84 },
            { name: "NestJS", level: "Intermediate", value: 75 },
            { name: "TypeORM", level: "Intermediate", value: 72 },
            { name: "PostgreSQL", level: "Advanced", value: 80 },
            { name: "MongoDB", level: "Advanced", value: 78 },
        ],
        cloud : [
            { name: "AWS (Lambda, S3, RDS)", level: "Intermediate", value: 76 },
            { name: "Vercel", level: "Advanced", value: 85 },
            { name: "Netlify", level: "Advanced", value: 82 },
            { name: "Docker", level: "Intermediate", value: 74 },
        ],
        tools : [
            { name: "Git", level: "Expert", value: 93 },
            { name: "Jest", level: "Advanced", value: 80 },
            { name: "ESLint", level: "Advanced", value: 86 },
            { name: "Prettier", level: "Advanced", value: 88 },
            { name: "CI/CD", level: "Intermediate", value: 72 },
            { name: "Webpack", level: "Intermediate", value: 70 },
        ],
    },
    contact : {
        contactItems : [
            {
            label: "Email",
            value: "hello@jamesblack.dev",
            href: "mailto:hello@jamesblack.dev",
            },
            {
            label: "LinkedIn",
            value: "linkedin.com/in/jamesblack",
            href: "https://linkedin.com/in/jamesblack",
            },
            {
            label: "GitHub",
            value: "github.com/jamesblack",
            href: "https://github.com/jamesblack",
            },
        ]
    }
}