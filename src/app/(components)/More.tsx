'use client'
import CircularGallery from '@/components/CircularGallery'
import SplitText from '@/components/SplitText'
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

const galleryItems = [
    { image: '/img1.jpeg', text: 'ICPC' },
    { image: '/img2.jpeg', text: 'Coder Bloom' },
    { image: '/img3.jpeg', text: '1er Lugar - NASA Space Apps Challenge' },
    { image: '/img4.jpeg', text: 'SheShips' },
    { image: '/img5.jpeg', text: '1er Lugar - Coder Bloom' },
]

export default function More() {
    const { resolvedTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    useEffect(() => setMounted(true), [])
    const galleryTextColor = mounted && resolvedTheme === 'dark' ? '#d65d74' : '#D81B60'

    return (
        <section
            id="about"
            className="bg-background px-6 py-16 sm:px-10 sm:py-24 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <h2 className="text-[2.4rem] font-black leading-[1.05] tracking-tight text-secondary sm:text-[3.2rem] md:text-[4rem] lg:text-[4.6rem]">
                    <SplitText
                        text="Hola, soy"
                        className="text-secondary"
                        tag="span"
                        delay={50}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />
                    <br />
                    <SplitText
                        text="{ "
                        className="text-secondary"
                        tag="span"
                        delay={50}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />
                    <SplitText
                        text="Danna Sandez"
                        className="font-serif font-medium italic text-primary"
                        tag="span"
                        delay={50}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />
                    <SplitText
                        text=" }"
                        className="text-secondary"
                        tag="span"
                        delay={50}
                        duration={1.25}
                        ease="power3.out"
                        splitType="chars"
                        from={{ opacity: 0, y: 40 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.1}
                        rootMargin="-100px"
                        textAlign="left"
                    />
                </h2>

                <p className="max-w-md text-[0.9rem] leading-relaxed text-foreground/70 sm:text-base lg:max-w-lg lg:text-lg">
                    Cuento con <strong className="text-foreground">más de un año</strong> de experiencia
                    en <strong className="text-foreground">análisis y diseño de software</strong>,
                    desarrollando sistemas web y móviles. He participado
                    en <strong className="text-foreground">hackatones</strong> y{' '}
                    <strong className="text-primary">competencias de programación</strong>,
                    lo que ha fortalecido mi pensamiento lógico y capacidad de resolver problemas complejos.
                </p>
            </div>

            <div className="relative mt-5 h-[50vh] min-h-[320px] max-h-[600px] sm:mt-5 lg:mt-0 lg:h-[600px]">
                <CircularGallery
                    items={galleryItems}
                    bend={1}
                    textColor={galleryTextColor}
                    borderRadius={0.05}
                    scrollEase={0.05}
                    scrollSpeed={2}
                    font="italic 600 28px Playfair Display"
                />
            </div>
        </section>
    )
}