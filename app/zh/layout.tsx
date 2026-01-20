import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "尔湾保洁公司 | 专业家庭清洁、退房保洁、搬家扫除 | GerishCare",
    description:
        "GerishCare 为尔湾 (Irvine) 及橙县华人家庭提供专业保洁服务。包括退房清洁 (Move-out)、深度清洁及日常维护。背景调查保障，中文沟通无障碍。",
    alternates: {
        canonical: "/zh",
        languages: {
            "en-US": "/",
        },
    },
};

export default function ChineseLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return children;
}
