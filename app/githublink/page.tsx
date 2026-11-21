import Link from "next/link";


export default function Page() {
    return (
        <>
            <h1>GitHub Repo</h1>
            <p>
                For my final project, I want to build a node-based task management
                app that sits between a simple to-do list and a full project
                management system. Users work on a canvas where they place nodes
                for collecting, organizing, and displaying content. A node can
                start as a simple checklist for groceries, to-dos, or favorite
                local restaurants, and grow into something more complex as needed,
                holding notes, media, or files. Every entry has a unique ID, so
                other nodes can reference and manipulate that data. Think of it as
                OneNote on steroids, but built around nodes instead of pages. I'd
                like the project to showcase React's component model and state
                management, since each node type is a reusable component with its
                own state. Here is the link to my GitHub repo.
            </p>
            <Link href="https://github.com/MillerM13/nextjs_hw">GitHub Repo</Link>
        </>
    );
}

