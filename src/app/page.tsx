export default function Home() {
	const AvatarImg =
		'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo30qsmsj93gs505og3o8ck1d60bkao0n0?imageView2/2/w/360/format/webp';

	const intro =
		'作为摄影师，如何以独特的视角展展现瞬间的没，追求卓越是我的信念。运用光影与构图，捕捉情感瞬间，引起观者的深度共鸣，传达无言的联系。愿以含蓄之美，与您共同探索摄影世界，创造珍贵的艺术作品。期许共同创作奇迹，共享摄影魅力。';

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
				<div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
				<div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
				<div className="mx-auto max-w-2xl lg:max-w-4xl">
					<img className="mx-auto h-12" src="/camera.png" alt="" />
					<figure className="mt-10">
						<blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
							<p>{intro}</p>
						</blockquote>
						<figcaption className="mt-10">
							<img className="mx-auto h-10 w-10 rounded-full" src={AvatarImg} alt="" />
							<div className="mt-4 flex items-center justify-center space-x-3 text-base">
								<div className="font-semibold text-gray-900">Black Lee</div>
								<svg
									viewBox="0 0 2 2"
									width={3}
									height={3}
									aria-hidden="true"
									className="fill-gray-900"
								>
									<circle cx={1} cy={1} r={1} />
								</svg>
								<div className="text-gray-600">软件工程师 / 摄影师</div>
							</div>
						</figcaption>
					</figure>
				</div>
			</section>
		</main>
	);
}
