import React from 'react';
import faq from './faq.jpg';

const Faqs = () => {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <h2 className='text-center mb-3'>FAQ</h2>
                <div className='col-12 col-md-6'>
                    <img src={faq} className="w-100" alt="..." />
                </div>
                <div className='col-12 col-md-6'>

                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <b> What are lawyer's primary responsibilities?</b>
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    Lawyers, by virtue of a state's bar admission, are expected to both uphold the law and protect the rights of their clients. In addition to actually knowing the law, particularly within his or her practice area, an attorney must be able to communicate clearly with their clients, work competently to resolve their client's needs and be ethical in the performance of their overall handling of a case.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <b>I can't afford a lawyer Do you offer free legal help?</b>
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    You may qualify for free legal help if you meet certain income requirements, especially if you are charged with a crime for which the sentence would deprive you of liberty (such as jail or prison time). For non-criminal matters, community legal clinics and lawyers working \"pro bono\" offer free legal services for those who qualify.
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <b>May I hire a non-lwayer for a legal problem?</b>
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    It depends on the situation and the breadth of service since only lawyers may practice law. Paralegals, for example, may represent you in certain situations involving complaints against a government agency (such as a dispute over Social Security benefits). You may also represent yourself in court, hire a notary public, or work with law students (under the supervision of a lawyer) under certain circumstances.
                                </div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </div>
    );
};

export default Faqs;