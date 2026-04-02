import CircularGallery from '@/components/CircularGallery'

const galleryItems = [
    { image: '/img1.jpeg', text: 'ICPC' },
    { image: '/img2.jpeg', text: 'Coder Bloom' },
    { image: '/img3.jpeg', text: '1er Lugar - NASA Space Apps Challenge' },
    { image: '/img4.jpeg', text: 'SheShips' },
    { image: '/img5.jpeg', text: '1er Lugar - Coder Bloom' },
]

export default function More() {
    return (
        <section
            id="about"
            className="bg-background px-6 py-16 sm:px-10 sm:py-24 lg:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <h2 className="text-[2.4rem] font-black leading-[1.05] tracking-tight text-secondary sm:text-[3.2rem] md:text-[4rem] lg:text-[4.6rem]">
                    Hola, soy
                    <br />
                    <span className="text-secondary">{"{ "}</span>
                    <span className="font-serif font-medium italic text-primary">Danna Sandez</span>
                    <span className="text-secondary">{" }"}</span>
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

            <div className="mt-5 sm:mt-5 lg:mt-0" style={{ height: '600px', position: 'relative' }}>
                <CircularGallery
                    items={galleryItems}
                    bend={1}
                    textColor="#D81B60"
                    borderRadius={0.05}
                    scrollEase={0.05}
                    scrollSpeed={2}
                    font="italic 600 28px Playfair Display"
                />
            </div>
        </section>
    )
}