function loadTestCode() {
    var bodyEle = document.querySelector('body');
    if (!bodyEle.classList.contains('homewarrantyreviews_test')) {
        bodyEle.classList.add('homewarrantyreviews_test');
        

		// Write code : variation
		var elemDiv = document.createElement('div');
		elemDiv.classList.add('information_box');
		// var box = document.querySelector(".company_banner_block .container-fluid");
		document.body.appendChild(elemDiv);

		document.querySelector('.information_box').insertAdjacentHTML(
			'afterbegin',
			`<section class="">
			<div class="container-fluid container_fluid_double">
			  <div class="company_list">
					<section>
						<h2>How Do Home Warranties Work?</h2>
						<p>Home warranties are supposed to protect you from spending excessive money on repairs and replacements for malfunctioning appliances and systems. Home warranty companies offer coverage for these potential damages by collecting a premium once a month or a year.</p>
						<p>Once you purchase a plan, you are entitled to file for claims if any covered items malfunction, generally after a 30-day waiting period from the date of purchase. The steps below will help you file a claim and get the company's promised service.</p>
						<div class="row mb-md-5 mb-4">
							<div class="col-md-6 pr-lg-4 align-self-center">
								<div class="d-flex step_block">
								<span>Step1:</span>
								<p>Firstly, you request service by contacting the company's customer support department. After submitting the request, the company will process it further and assign you a licensed contractor or technician.</p>
							</div>
							</div> 
							<div class="col-md-6 pl-lg-5">
								<img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/home_warranty_step_1.png" class="w-100 h-auto" width="100" height="100" decoding="async" loading="lazy" alt="Call your home warranty company">
							</div>
							</div>
							<div class="row mb-md-5 mb-4">
								<div class="col-md-6 pl-lg-5 order-2">
							<img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/home-warranty-step-2.png" class="w-100 h-auto" width="100" height="100" decoding="async" loading="lazy" alt="inspection by technician">
							</div>
							<div class="col-md-6 pr-lg-4 align-self-center">
								<div class="d-flex step_block">
								<span>Step2:</span>
								<p>The assigned technician will arrive at your doorstep at the earliest, diagnose the problem, and inform the company about it.</p>
							</div>
							</div> 
						</div>
						<div class="row mb-md-5 mb-4">
						   <div class="col-md-6 pr-lg-4 align-self-center">
								<div class="d-flex step_block">
								<span>Step3:</span>
								<p>Depending on the information provided by the technician, you will receive a repair or replacement service. In exchange for this, you are required to pay a service fee as mentioned in your contract. </p>
							</div>
							<div class="note_block">
									<p class="mb-0"><b>Note:</b> The process may change depending on the company, so we encourage you to read the service agreements carefully.  </p>
								</div>
							</div> 
							<div class="col-md-6 pl-lg-5">
							<img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/home_warranty_step_3.png" class="w-100 h-auto" width="100" height="100" decoding="async" loading="lazy" alt=" repair and replacement ">
							</div>
						</div>
					</section>
					<section>
						<h2>Home Warranty Vs. Home Insurance</h2>
						<p>Home warranty is a service contract that helps you repair and replace household appliances and home systems with basic pay. Home insurance is property insurance that protects it against losses and damages.</p>
						<p>In case of a breakdown of an appliance or system, a home warranty plan covers all of it with a service call fee. Home insurance includes protection of personal belongings, the structure of a home, liability, and living expenses.</p>
						<p>The important <a href="https://www.homewarrantyreviews.com/guides/home-warranty-vs-home-insurance-whats-the-difference/">difference between a home warranty and home insurance</a> is their coverage. A home warranty can help you stay ahead of your home's expenses.</p>
						<img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/home_warranty_vs_home_isnurance.png" class="w-100 h-auto" width="100" height="100" decoding="async" loading="lazy" alt="home_warranty_vs_home_isnurance">
					</section>
				</div>
			</div>
		</section>`      
		)
        var addBeforeThis = document.querySelectorAll('.company_banner_block .container-fluid')[0];
		addBeforeThis.appendChild(elemDiv);

		// var addBeforeThinew = document.querySelectorAll('.other_companies_block')[0];
		// addBeforeThinew.appendChild(elemDiv);
		var elemmDiv = document.createElement('div');
		elemmDiv.classList.add('other_companies_box');
		elemmDiv.classList.add('information_box');
		// var box = document.querySelector(".company_banner_block .container-fluid");
		document.body.appendChild(elemmDiv);
		document.querySelector('.other_companies_box').insertAdjacentHTML(
			'afterbegin',
			`<section class="">
			<div class="container-fluid container_fluid_double">
			  <div class="company_list">
					<section>
						<h2 class="mt-4">How To Choose The Best Home Warranty Company?</h2>
						<p>One of the major concerns leading to unsatisfactory experience among the customers that we notice is the mismatch of expectations placed on the home warranty companies. This primarily happens for two reasons:</p>
						<div class="list_block">
							<ul>
							 <li>There is a disconnect between what the customer wants and what the company offers</li>
							 <li>Customers miss out on reading the fine print and the terms of service offered by the company</li>
							 <li>Prospective customers are misled by reviews coming out of poorly researched sources</li>
							</ul>
						</div>
					   <p>Follow these steps to identify an ideal home warranty that fits your requirements: </p>
						<div class="row mb-md-5 mb-4 mt-4">
							<div class="col-md-6 choose_block">
								<h3 class="pl-4 mb-md-4 mb-3">Determine Coverage needs</h3>
								<p>Make a list of the things you want the home warranty to cover. Identify systems and appliances that are <b>crucial for the functioning of your home</b> and those that are relatively <b>old (older than 3-4 years)</b>, as these may be more in need of protection.</p>
							</div>
							<div class="col-md-6 pl-lg-5">
							<img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/Determine-Coverage-needs.png" class="w-100 h-auto" width="100" height="100" decoding="async" loading="lazy" alt="Determine-Coverage-needs">
							</div>
						</div>
						<div class="row mb-md-5 mb-4">
							<div class="col-md-6 pr-lg-5 order-2">
							<img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/Do-Research.png" class="w-100 h-auto" width="100" height="100" decoding="async" loading="lazy" alt="Do-Research">
							</div>
							<div class="col-md-6 choose_block">
								<h3 class="pl-4 mb-md-4 mb-3">Find Companies That Match Your Requirements </h3>
								<p>The USP of every home warranty company differs, and therefore you must shortlist companies that cater to your needs. Check if the company’s coverage list meets your requirement and if the cost fits your budget. Ensure that the customer representative answers all your questions to your satisfaction before you proceed. </p>
							</div>
						</div>
						<div class="row mb-md-5 mb-4">
							<div class="col-md-6 choose_block">
								<h3 class="pl-4 mb-md-4 mb-3">Read The Fine Print &amp; Terms Of Service</h3>
								<p>The importance of reading the fine print and terms of service cannot be stressed enough. Companies lay out many conditions for their services in these columns, which are not advertised.</p>
								<p> Therefore, before finalizing the deal, customers must know the extent and limitation of coverage for all their appliances and services. This will help them in avoiding future conflicts that may arise with the home warranty company. </p>
							</div>
							<div class="col-md-6 pl-lg-5">
							<img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/Ask-Your-Near-and-Dear-Ones.png" class="w-100 h-auto" width="100" height="100" decoding="async" loading="lazy" alt="Ask-Your-Near-and-Dear-Ones">
							</div>
						</div>
						<div class="row mb-md-5 mb-4">
						<div class="col-md-6 pr-lg-5 order-2">
							<img src="https://www.homewarrantyreviews.com/wp-content/themes/HWR-2020/assets/images/Ask-For-Free-Quotes.png" class="w-100 h-auto" width="100" height="100" decoding="async" loading="lazy" alt="Ask-For-Free-Quotes">
							</div>
							<div class="col-md-6 choose_block">
								<h3 class="pl-4 mb-md-4 mb-3">Get Your Information For Authoritative Sources</h3>
								<p>Many sources peddle home warranty reviews, but most of these are not authoritative. Many multi-vertical sites have started listing home warranty companies, where any information related to home warranty exists in one or two pages. </p>
								<p>As a result, it is evident that apart from company lists, you get no substantial information required to help you make an informed choice. It is advisable to consult sources dedicated to learning about the home warranty users' requirements and the companies’ reviews. </p>
								<p>If you want to learn more about choosing a home warranty, read our detailed  <a href="https://www.homewarrantyreviews.com/guides/how-to-purchase-home-warranty/">guide on purchasing a home warranty.</a></p>
							</div>
						</div>
					</section>
				</div>
			</div>
		</section>`      
		)

		var addBeforeThinew = document.querySelectorAll('.other_companies_block')[0];
		addBeforeThinew.appendChild(elemmDiv);
		

    }
}

loadTestCode();