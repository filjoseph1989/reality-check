import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function FormAnimation() {
    const [animationData, setAnimationData] = useState<object>();
    const lottieRef = useRef<any>(null);

    useEffect(() => {
        import('../../public/animation/lottie.json').then((data) => {
            setAnimationData(data);

            import('gsap').then(({ gsap }) => {
                gsap.from(lottieRef.current?.container, {
                    duration: 1.5,
                    opacity: 0,
                    y: 50,
                    ease: 'power3.out',
                });

                lottieRef.current?.container.addEventListener('mouseenter', () => {
                    gsap.to(lottieRef.current?.container, {
                        duration: 0.3,
                        scale: 1.02,
                        ease: 'power2.out',
                    });
                });

                lottieRef.current?.container.addEventListener('mouseleave', () => {
                    gsap.to(lottieRef.current?.container, {
                        duration: 0.3,
                        scale: 1,
                        ease: 'power2.out',
                    });
                });
            });
        });
    }, []);

    return (
        <>
            {animationData && (
                <Lottie
                    ref={lottieRef}
                    play
                    loop
                    animationData={animationData}
                    style={{ width: '20%', height: 'auto' }}
                />
            )}
        </>
    );
}
