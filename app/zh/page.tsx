import { HeroCN } from "@/components/HeroCN";
import { ServiceAreaMap } from "@/components/ServiceAreaMap";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { Badge } from "@/components/Badge";

const neighborhoods = [
    "Woodbury",
    "Northwood",
    "Turtle Ridge",
    "Orchard Hills",
    "Portola Springs",
    "University Park",
];

const steps = [
    {
        title: "获取即时报价",
        description: "只需输入您的邮编和清洁需求，即可立即查看价格。",
    },
    {
        title: "匹配专业人员",
        description: "为您安排经过背景调查的尔湾本地专业保洁人员。",
    },
    {
        title: "100% 满意保",
        description: "享受焕然一新的家。我们也提供简单直接的账单服务。",
    },
];

const trustPoints = [
    {
        title: "执照与保险齐全",
        text: "您的家庭财产受保护。我们拥有完整的商业责任险和员工保险，让您无后顾之忧。",
    },
    {
        title: "尔湾本地团队",
        text: "如果在沟通上遇到任何问题，我们也是华人团队，随时帮您解决。",
    },
    {
        title: "环保安全产品",
        text: "对儿童和宠物安全。我们使用优质无毒的清洁解决方案。",
    },
];

const stories = [
    {
        quote:
            "Woodbury 最好的清洁服务。他们完美地完成了我们的退房清洁，并且非常细心。",
        author: "Sloane Family, Irvine",
    },
    {
        quote:
            "终于找到了靠谱的本地服务。我们在 Northwood 的家从未如此干净。强烈推荐！",
        author: "Aria & Daniel, Irvine",
    },
];

export default function HomeCN() {
    return (
        <div className="pb-24">
            <HeroCN />
            <ServiceAreaMap />

            <section className="bg-shell/30 py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <SectionHeader
                        eyebrow="服务流程"
                        title="尔湾退房清洁 (Move-out Cleaning) 专项服务"
                        description="我们的流程设计旨在快速、透明且完全无压力。"
                    />
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {steps.map((step, index) => (
                            <Card key={step.title} className="group relative h-full bg-white transition-all hover:shadow-xl">
                                <Badge variant="lilac" className="mb-4 text-xs font-bold uppercase tracking-widest">
                                    第 {index + 1} 步
                                </Badge>
                                <h3 className="text-xl font-bold text-ink">{step.title}</h3>
                                <p className="mt-4 text-muted">{step.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="mx-auto max-w-6xl px-4">
                    <SectionHeader
                        eyebrow="信任与安全"
                        title="您的家交给我们很放心"
                        description="我们将安全和质量放在首位，确保每一次服务都完美无缺。"
                    />
                    <div className="mt-16 grid gap-8 md:grid-cols-3">
                        {trustPoints.map((point) => (
                            <Card key={point.title} className="bg-white p-8">
                                <h3 className="text-xl font-bold text-ink">{point.title}</h3>
                                <p className="mt-4 text-muted leading-relaxed">{point.text}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-shell/30 py-24">
                <div className="mx-auto max-w-4xl px-4">
                    <SectionHeader
                        eyebrow="常见问题"
                        title="您可能关心的问题"
                        description="针对尔湾租房退租、房屋买卖清洁的特别解答。"
                    />
                    <div className="mt-12 grid gap-6">
                        {[
                            {
                                q: "是否包含地毯清洗？",
                                a: "标准深度清洁不包含高温地毯清洗 (Carpet Steam Cleaning)。但如果您需要，我们可以安排专业的合作伙伴为您服务，或为您推荐靠谱的尔湾本地地毯清洁商。"
                            },
                            {
                                q: "尔湾公寓退房检查不合格怎么办？",
                                a: "我们熟悉 Irvine Company 及各大公寓社区的退房标准。如果在我们服务后因清洁问题导致 Check-out 未通过，我们承诺免费返工，直至达标。"
                            },
                            {
                                q: "需要我提供清洁用品吗？",
                                a: "不需要。我们的团队会携带所有专业的清洁设备和环保清洁剂。如果您有特别指定的清洁产品，也欢迎提供给我们使用。"
                            },
                            {
                                q: "如何预约？",
                                a: "最快的方式是在线提交询价表格。我们的中文客服会在收到后尽快与您联系，确认时间和价格。"
                            }
                        ].map((faq) => (
                            <Card key={faq.q} className="bg-white p-6">
                                <h3 className="text-lg font-bold text-ink">{faq.q}</h3>
                                <p className="mt-2 text-muted">{faq.a}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-5xl px-4">
                <SectionHeader
                    eyebrow="客户故事"
                    title="真实的尔湾家庭评价"
                    description="来自通过简单咨询找到帮手的邻居们的真实反馈。"
                />
                <div className="mt-10 grid gap-6 md:grid-cols-2">
                    {stories.map((story) => (
                        <Card key={story.author} className="bg-white/95">
                            <p className="text-lg text-ink/90">“{story.quote}”</p>
                            <p className="mt-4 text-sm font-semibold text-muted">{story.author}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mt-24 border-t border-peach/10 py-12">
                <div className="mx-auto max-w-5xl px-4 text-center">
                    <p className="text-sm text-muted">
                        服务所有尔湾社区，包括{" "}
                        {neighborhoods.map((n, i) => (
                            <span key={n}>
                                {n}
                                {i < neighborhoods.length - 1 ? ", " : ""}
                            </span>
                        ))}{" "}
                        及周边地区。
                    </p>
                    <p className="mt-4 text-sm text-muted">
                        服务尔湾邮编: 92602, 92603, 92604, 92606, 92612, 92614, 92617, 92618, 92620.
                    </p>
                </div>
            </section>
        </div>
    );
}
