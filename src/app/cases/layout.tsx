import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Cases | Marketing Systems in Practice",
    description: "Explore industry best practices and case studies demonstrating the application of structural logic and behavioral architecture across global brands.",
};

export default function CasesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
