"use client";

import { FormEvent, useState } from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";

const serviceTypes = [
    { value: "cleaning", label: "家庭保洁" },
];

const frequencyOptions = [
    { value: "one-time", label: "单次服务" },
    { value: "weekly", label: "每周一次" },
    { value: "bi-weekly", label: "每两周一次" },
];

const contactMethods = [
    { value: "SMS", label: "短信" },
    { value: "Email", label: "邮件" },
    { value: "WeChat", label: "微信" },
];

interface InquiryFormProps {
    id?: string;
    caregiverName?: string;
    className?: string;
}

export function InquiryFormCN({ id, caregiverName, className }: InquiryFormProps) {
    const [serviceType, setServiceType] = useState("");
    const [frequency, setFrequency] = useState("");
    const [contactMethod, setContactMethod] = useState("SMS");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [message, setMessage] = useState<string>("");

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const form = event.currentTarget;
        const formData = new FormData(event.currentTarget);
        const name = formData.get("name")?.toString().trim();
        const email = formData.get("email")?.toString().trim();
        const phone = formData.get("phone")?.toString().trim();
        const zip = formData.get("zip")?.toString().trim();
        const startDate = formData.get("startDate")?.toString().trim();

        if (
            !name ||
            !email ||
            !phone ||
            !zip ||
            !serviceType ||
            !frequency ||
            !startDate ||
            !contactMethod
        ) {
            setStatus("error");
            setMessage("请填写表格中高亮的必填项。");
            return;
        }

        setStatus("loading");
        setMessage("");

        try {
            const res = await fetch("/api/inquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    phone,
                    zip,
                    serviceType,
                    frequency,
                    startDate,
                    contactMethod,
                    notes: formData.get("notes")?.toString() ?? "",
                    caregiverName,
                    lang: "zh-CN",
                }),
            });

            if (!res.ok) {
                throw new Error("Failed to send");
            }

            setStatus("success");
            setMessage("提交成功！我们在尔湾的团队通常会在 24 小时内联系您。");
            form.reset();
            setServiceType("");
            setFrequency("");
            setContactMethod("SMS");
        } catch (error) {
            console.error(error);
            setStatus("error");
            setMessage("出错了，请重试或直接发送邮件至 hello@gerish.xyz");
        }
    }

    return (
        <form
            id={id}
            onSubmit={handleSubmit}
            className={cn(
                "rounded-3xl bg-white/95 p-6 shadow-soft backdrop-blur",
                className
            )}
        >
            <div className="mb-6 space-y-2 text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted">
                    立即开始
                </p>
                <h3 className="text-2xl font-semibold text-ink">查询服务报价</h3>
                <p className="text-sm text-muted">
                    GerishCare 不直接雇佣清洁人员，而是为您匹配最合适的专业人员。
                </p>
                <p className="text-sm font-semibold text-moss">
                    免费咨询 · 无隐形费用 · 无需绑定
                </p>
                {caregiverName && (
                    <p className="text-xs font-semibold text-ink/70">
                        咨询对象：<span className="text-ink">{caregiverName}</span>
                    </p>
                )}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1">
                    <label htmlFor="full-name" className="text-sm font-medium text-ink">
                        您的姓名*
                    </label>
                    <input
                        id="full-name"
                        name="name"
                        required
                        className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
                        placeholder="请输入姓名"
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="email" className="text-sm font-medium text-ink">
                        电子邮箱*
                    </label>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        required
                        className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
                        placeholder="you@email.com"
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="phone" className="text-sm font-medium text-ink">
                        电话号码*
                    </label>
                    <input
                        id="phone"
                        name="phone"
                        required
                        className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
                        placeholder="949-555-1234"
                    />
                </div>
                <div className="space-y-1">
                    <label htmlFor="zip-code" className="text-sm font-medium text-ink">
                        居住地邮编*
                    </label>
                    <input
                        id="zip-code"
                        name="zip"
                        required
                        className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
                        placeholder="例如 92602"
                    />
                </div>
            </div>
            <div className="mt-6 space-y-2">
                <p className="text-sm font-medium text-ink">服务类型*</p>
                <div className="flex flex-wrap gap-2">
                    {serviceTypes.map((option) => {
                        const isActive = serviceType === option.value;
                        return (
                            <button
                                type="button"
                                key={option.value}
                                onClick={() => setServiceType(option.value)}
                                className={cn(
                                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                                    isActive
                                        ? "border-transparent bg-peach text-ink"
                                        : "border-ink/10 bg-shell text-muted hover:border-peach/70"
                                )}
                            >
                                {option.label}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="mt-6 space-y-2">
                <p className="text-sm font-medium text-ink">服务频率*</p>
                <div className="flex flex-wrap gap-2">
                    {frequencyOptions.map((option) => {
                        const isActive = frequency === option.value;
                        return (
                            <button
                                type="button"
                                key={option.value}
                                onClick={() => setFrequency(option.value)}
                                className={cn(
                                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                                    isActive
                                        ? "border-transparent bg-peach text-ink"
                                        : "border-ink/10 bg-shell text-muted hover:border-peach/70"
                                )}
                            >
                                {option.label}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="mt-6 space-y-1">
                <label htmlFor="start-date" className="text-sm font-medium text-ink">
                    期望开始日期*
                </label>
                <input
                    id="start-date"
                    type="date"
                    name="startDate"
                    required
                    className="w-full rounded-2xl border border-ink/10 bg-shell px-4 py-2 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
                />
            </div>
            <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-ink">首选联系方式*</p>
                <div className="flex flex-wrap gap-2">
                    {contactMethods.map((option) => {
                        const isActive = contactMethod === option.value;
                        return (
                            <button
                                type="button"
                                key={option.value}
                                onClick={() => setContactMethod(option.value)}
                                className={cn(
                                    "rounded-full border px-4 py-2 text-sm font-semibold transition",
                                    isActive
                                        ? "border-transparent bg-peach text-ink"
                                        : "border-ink/10 bg-shell text-muted hover:border-peach/70"
                                )}
                            >
                                {option.label}
                            </button>
                        );
                    })}
                </div>
            </div>
            <div className="mt-4 space-y-1">
                <label htmlFor="notes" className="text-sm font-medium text-ink">
                    备注或特殊需求
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    className="min-h-[90px] w-full rounded-2xl border border-ink/10 bg-shell px-4 py-3 text-base text-ink focus:border-peach focus:outline-none focus:ring-2 focus:ring-peach/40"
                    placeholder="例如：家里有宠物、需要深度清洁厨房、停车位信息等..."
                />
            </div>
            <p className="mt-4 text-xs text-muted">
                GerishCare Home 仅作为预约平台。我们不直接雇佣保洁人员。所有的雇佣决定、付款和协议均由您与服务人员直接达成。
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
                    {status === "loading" ? "提交中..." : "免费获取报价"}
                </Button>
                {message && (
                    <p
                        className={cn(
                            "text-sm",
                            status === "success" ? "text-moss" : "text-[#c94857]"
                        )}
                    >
                        {message}
                    </p>
                )}
            </div>
        </form>
    );
}
