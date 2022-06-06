import React from 'react'
import { Link } from 'react-router-dom'

function About() {
	return (
		<>


			{/*<!--begin::Container--->*/}
			<div className="d-flex flex-column flex-column-fluid container-fluid my-10">

				{/*<!--begin::Post--->*/}
				<div className="content flex-column-fluid" id="kt_content">
					{/*<!--begin::About card--->*/}
					<div className="card">
						{/*<!--begin::Body--->*/}
						<div className="card-body p-lg-17">
							{/*<!--begin::About--->*/}
							<div className="mb-18">
								{/*<!--begin::Wrapper--->*/}
								<div className="mb-10">
									{/*<!--begin::Top--->*/}
									<div className="text-center mb-15">
										{/*<!--begin::Title--->*/}
										<h3 className="fs-2hx text-dark mb-5">About Us</h3>
										{/*<!--end::Title--->*/}
										{/*<!--begin::Text--->*/}
										<div className="fs-5 text-muted fw-bold">DISCLAIMER : This site has been developed only for the test purpose by a  developer !</div>
										{/*<!--end::Text--->*/}
									</div>
									{/*<!--end::Top--->*/}

									{/*<!--end::Container--->*/}
								</div>
								{/*<!--end::Wrapper--->*/}
								{/*<!--begin::Description--->*/}
								<div className="fs-5 fw-bold text-gray-600">
									<p className='mb-10'>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam animi earum quod nostrum repellendus. Ullam perspiciatis quos dicta excepturi expedita quas molestiae beatae totam adipisci esse nulla iste repellat, unde, aspernatur accusamus reiciendis at, ratione voluptatibus laudantium quibusdam. Fuga modi itaque quia aliquam eveniet ab quo aspernatur suscipit nesciunt, doloribus perferendis, obcaecati quis molestias? Aliquam eum cupiditate consequuntur incidunt culpa illum libero, dolore fugit pariatur ipsa non excepturi nam sunt accusantium ipsam assumenda aliquid officiis ipsum similique sint porro odio maiores doloremque. Odit, aut. Ducimus doloribus, dolore aut exercitationem laborum unde eum aliquam odio nihil, vitae modi voluptatem? In, fugit?
									</p>

									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum dolores atque accusantium impedit provident ea sint excepturi dolor cum molestias incidunt, eveniet quo ratione ex illum eaque, explicabo odit aliquid consequuntur harum totam quis! Sint cupiditate, corporis repudiandae iusto temporibus non perspiciatis unde odit fuga amet ea laboriosam ipsa beatae!
									</p>

								</div>
								{/*<!--end::Description--->*/}
							</div>
							{/*<!--end::About--->*/}
							{/*<!--begin::Statistics--->*/}
							<div className="card bg-light mb-18">
								{/*<!--begin::Body--->*/}
								<div className="card-body py-15">
								
									{/*<!--begin::Testimonial--->*/}
									<div className="fs-2 fw-bold text-muted text-center mb-3">
										<span className="fs-1 lh-1 text-gray-700">“</span>Create things with love to make
										<br />
										<span className="text-gray-700 me-1">more powerful</span>, and be creative
										<span className="fs-1 lh-1 text-gray-700">“</span></div>
									{/*<!--end::Testimonial--->*/}
									{/*<!--begin::Author--->*/}
									<div className="fs-2 fw-bold text-muted text-center">
										<a href="#!" className="link-primary fs-4 fw-bolder">Developer</a>
										<span className="fs-4 fw-bolder text-gray-600">, Meroshare Revamped</span>
									</div>
									{/*<!--end::Author--->*/}
								</div>
								{/*<!--end::Body--->*/}
							</div>
							{/*<!--end::Statistics--->*/}
						

							{/*<!--begin::Card--->*/}
							<div className="card mb-4 bg-light text-center">
								{/*<!--begin::Body--->*/}
								<div className="card-body py-12">
									{/*<!--begin::Icon--->*/}
									<a href="#" className="mx-4">
										<img src="assets/media/svg/brand-logos/facebook-4.svg" className="h-30px my-2" alt="" />
									</a>
									{/*<!--end::Icon--->*/}
									{/*<!--begin::Icon--->*/}
									<a href="#" className="mx-4">
										<img src="assets/media/svg/brand-logos/instagram-2-1.svg" className="h-30px my-2" alt="" />
									</a>
									{/*<!--end::Icon--->*/}
									{/*<!--begin::Icon--->*/}
									<a href="#" className="mx-4">
										<img src="assets/media/svg/brand-logos/github.svg" className="h-30px my-2" alt="" />
									</a>
									{/*<!--end::Icon--->*/}
									{/*<!--begin::Icon--->*/}
									<a href="#" className="mx-4">
										<img src="assets/media/svg/brand-logos/behance.svg" className="h-30px my-2" alt="" />
									</a>
									{/*<!--end::Icon--->*/}
									{/*<!--begin::Icon--->*/}
									<a href="#" className="mx-4">
										<img src="assets/media/svg/brand-logos/pinterest-p.svg" className="h-30px my-2" alt="" />
									</a>
									{/*<!--end::Icon--->*/}
									{/*<!--begin::Icon--->*/}
									<a href="#" className="mx-4">
										<img src="assets/media/svg/brand-logos/twitter.svg" className="h-30px my-2" alt="" />
									</a>
									{/*<!--end::Icon--->*/}
									{/*<!--begin::Icon--->*/}
									<a href="#" className="mx-4">
										<img src="assets/media/svg/brand-logos/dribbble-icon-1.svg" className="h-30px my-2" alt="" />
									</a>
									{/*<!--end::Icon--->*/}
								</div>
								{/*<!--end::Body--->*/}
							</div>
							{/*<!--end::Card--->*/}
						</div>
						{/*<!--end::Body--->*/}
					</div>
					{/*<!--end::About card--->*/}
				</div>
				{/*<!--end::Post--->*/}
				{/*<!--begin::Footer--->*/}
				<div className="footer py-4 d-flex flex-column flex-md-row flex-stack" id="kt_footer">
					{/*<!--begin::Copyright--->*/}
					<div className="text-dark order-2 order-md-1">
						<span className="text-muted fw-bold me-1">2022©</span>
						<a href="#!" target="_blank" className="text-gray-800 text-hover-primary">Meroshare Revamped</a>
					</div>
					{/*<!--end::Copyright--->*/}
					{/*<!--begin::Menu--->*/}
					<ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
						<li className="menu-item">
							<Link to={'/about'} target="_blank" className="menu-link px-2">About</Link>
						</li>
						<li className="menu-item">
							<a href="#!" target="_blank" className="menu-link px-2">Support</a>
						</li>
						<li className="menu-item">
							<a href="#!" target="_blank" className="menu-link px-2">Privacy Policy</a>
						</li>
					</ul>
					{/*<!--end::Menu--->*/}
				</div>
				{/*<!--end::Footer--->*/}
			</div>
			{/*<!--end::Container--->*/}



		</>
	)
}

export default About