import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Articles | Foundations of Marketing Systems",
    description: "Access the foundational index of essays on data signals, behavioral logic, and systemic infrastructure in marketing.",
};

export default function KnowledgeBaseLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
