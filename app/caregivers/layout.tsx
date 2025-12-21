import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Browse Caregivers in Irvine | Find Nannies & Housekeepers",
    description:
        "View profiles of vetted home cleaners and babysitters in Irvine. Filter by experience and service type to find your perfect family helper.",
    alternates: {
        canonical: "/caregivers",
    },
};

export default function CaregiversLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
