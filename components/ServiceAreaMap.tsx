"use client";

import Image from "next/image";

export function ServiceAreaMap() {
    return (
        <section className="relative -mt-10 mb-20 overflow-hidden bg-white/40 py-12 backdrop-blur-sm">
            <div className="mx-auto max-w-6xl px-4">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-shell shadow-2xl">
                    <div className="relative aspect-[21/9] w-full">
                        <Image
                            src="/irvine-map.png"
                            alt="Irvine Service Area Map"
                            fill
                            className="object-cover opacity-80"
                            loading="lazy"
                        />
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-r from-shell/90 via-shell/40 to-transparent" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex items-center px-8 md:px-16">
                            <div className="max-w-md space-y-4">
                                <div className="flex items-center gap-2">
                                    <span className="h-px w-8 bg-peach" />
                                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                                        Visual Trust Anchor
                                    </p>
                                </div>
                                <h2 className="text-2xl font-bold text-ink md:text-4xl">
                                    Serving all Irvine neighborhoods: <br />
                                    <span className="text-peach">Move-in / Move-out cleaning Irvine, Deep cleaning, and more.</span>
                                </h2>
                                <p className="text-sm font-medium text-muted md:text-base">
                                    From recurring maid service Irvine to one-time deep cleaning services near me, our local teams are ready to serve yours in Woodbury, Northwood, and beyond.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
