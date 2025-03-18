"use client";

import { useEffect, useRef, useState } from "react";
import refreshIcon from '../../public/refresh.svg';
import juiceBox from '../../public/juicebox.svg';
import arrow from '../../public/arrow.svg';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

const Lottie = dynamic(() => import('react-lottie-player'), { ssr: false });

export default function TutorialPage() {
	const [animationData, setAnimationData] = useState<object>();
	const lottieRef = useRef<any>(null);
	const [currentSlide, setCurrentSlide] = useState(0);
	const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
	const continueButtonRef = useRef<HTMLButtonElement>(null);
	const router = useRouter();

	const slides = [
		{ id: "slide-1", text: `Professionals around the world shared how they feel abo<span>ut technology and I've listened. Now it's your turn.</span>` },
		{ id: "slide-2", text: `I'll ask you a handful of meaningful questions <span>and compare your responses with people in your industry.</span>` },
		{ id: "slide-3", text: `You'll get insights into current industry sentiments an<span>d a reality check about technology in a few minutes. Deal? Great!</span>` },
	];

	useEffect(() => {
		if (typeof window !== 'undefined') {
			import('../../public/animation/lottie.json').then((data) => {
				setAnimationData(data);

				import('gsap').then(({ gsap }) => {
					if (lottieRef.current) {
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
					}
				});
			});
		}
	}, []);

	useEffect(() => {
		import('gsap').then(({ gsap }) => {
			slideRefs.current.forEach((slide, index) => {
				if (slide) {
					if (index === 0) {
						gsap.set(slide, { x: 0, opacity: 1 });
					} else {
						gsap.set(slide, { x: '100%', opacity: 0 });
					}
				}
			});
		});
	}, []);

	useEffect(() => {
		if (continueButtonRef.current) {
			if (currentSlide === slides.length - 1) {
				continueButtonRef.current.style.backgroundColor = 'white';
				continueButtonRef.current.style.color = 'black';
			} else {
				continueButtonRef.current.style.backgroundColor = '';
				continueButtonRef.current.style.color = '';
			}
		}

		import('gsap').then(({ gsap }) => {
			slideRefs.current.forEach((slide, index) => {
				if (slide) {
					if (index === currentSlide) {
						gsap.to(slide, {
							x: 0,
							opacity: 1,
							duration: 0.5,
							ease: 'power2.out',
						});
					} else if (index < currentSlide) {
						gsap.to(slide, {
							x: '-100%',
							opacity: 0,
							duration: 0.5,
							ease: 'power2.out',
						});
					} else {
						gsap.to(slide, {
							x: '100%',
							opacity: 0,
							duration: 0.5,
							ease: 'power2.out',
						});
					}
				}
			});
		});
	}, [currentSlide, slides.length]);

	const handleRefresh = () => {
		window.location.reload();
	};

	const nextSlide = () => {
		if (currentSlide < slides.length - 1) {
			setCurrentSlide((prev) => prev + 1);
		} else {
			router.push('/form');
		}
	};

	const goToSlide = (index: number) => {
		setCurrentSlide(index);
	};

  const backToHomePage = () => {
    router.push('/');
  };

	return (
		<div className="container">
			<div className="mobile-wrap">
				<div className="mobile clearfix">
					<header>
						<nav>
							<div>
								<div>
									<div className="back-button-container" onClick={backToHomePage}>
										<Image src={arrow} alt="Back Icon" />
									</div>
								</div>
								<div>
									<Image src={juiceBox} alt="Juicebox Icon" />
								</div>
								<div>
									<div>
										<Image src={refreshIcon} alt="Refresh Icon" onClick={handleRefresh} />
									</div>
								</div>
							</div>
						</nav>
					</header>
					<main>
						<section>
							<div id="animation-container" className="tutorial-animation-container">
								{animationData && (
									<Lottie
										ref={lottieRef}
										play
										loop
										animationData={animationData}
										style={{ width: '50%', height: 'auto' }} />
								)}
							</div>
						</section>
						<section className="slider-container">
							<div className="slides-wrapper">
								{slides.map((slide, index) => (
									<div
										key={index}
										id={slide.id}
										className="slide text-container"
										ref={(el) => (slideRefs.current[index] = el)}>
										<p className="bagoss-text" dangerouslySetInnerHTML={{ __html: slide.text }}></p>
									</div>
								))}
							</div>
							<div className="pagination">
								{slides.map((_, index) => (
									<div
										key={index}
										className={`dot ${currentSlide === index ? 'active' : ''}`}
										onClick={() => goToSlide(index)} />
								))}
							</div>
						</section>
					</main>
					<footer>
						<button
							aria-label="Get a reality check"
							className="border border-white rounded-md w-full p-4 continue cursor-pointer"
							onClick={nextSlide}
							ref={continueButtonRef}> Continue
						</button>
					</footer>
				</div>
			</div>
		</div>
	);
}