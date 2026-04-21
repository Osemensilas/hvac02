'use client';

const FAQs = () => {

    const frequentClicked = (e: React.MouseEvent<HTMLDivElement>) => {
        const dropDown = e.currentTarget;
        const dropDownAnswer = dropDown.parentElement!.parentElement!.children[0].children[1];
        
        if (dropDown.classList.contains('active')){
            dropDown.classList.remove('active');
            dropDownAnswer.classList.remove('active');
        }else{
            dropDown.classList.add('active');
            dropDownAnswer.classList.add('active');
        }
    }

    const faqs = [
        {
            question: "Do you offer AC repair services?",
            answer: "Yes, we provide fast and reliable AC repair services for residential and commercial units. We diagnose issues quickly and restore cooling efficiency with quality parts and expert technicians.",
        },
        {
            question: "How often should I service my AC unit?",
            answer: "We recommend servicing your AC at least twice a year to maintain efficiency, reduce energy consumption, and prevent unexpected breakdowns.",
        },
        {
            question: "Do you install new air conditioning systems?",
            answer: "Yes, we handle complete AC installation for homes, offices, and commercial buildings. We help you choose the right system based on your space and cooling needs.",
        },
        {
            question: "What does your AC maintenance service include?",
            answer: "Our maintenance service includes cleaning filters, checking refrigerant levels, inspecting electrical components, testing system performance, and ensuring optimal airflow.",
        },
        {
            question: "Do you handle emergency HVAC repairs?",
            answer: "Yes, we offer emergency HVAC repair services to restore cooling or heating systems as quickly as possible, especially during urgent breakdowns.",
        },
        {
            question: "What general contracting services do you offer?",
            answer: "We provide general contracting services including HVAC system installation, building maintenance support, renovations, and project coordination for residential and commercial projects.",
        },
        {
            question: "How do I know if my AC needs repair or replacement?",
            answer: "If your AC frequently breaks down, cools poorly, or causes high energy bills, it may need repair or replacement. Our technicians can inspect and advise the best option.",
        },
        {
            question: "Do you offer consultation before installation?",
            answer: "Yes, we provide free consultation to assess your space and recommend the best HVAC system for efficiency, comfort, and budget.",
        }
    ];
     

    return ( 
        <>
        <section className="frequently px-4 sm:px-10 py-10 h-max w-full flex flex-col justify-between items-center gap-5">
            <h3 className="text-xl font-bold text-primary">FREQUENTLY ASKED QUESTIONS</h3>
            <h2 className="text-2xl font-bold">Got Questions? We Have Answers</h2>
            <div className="frequently-container bg-background rounded p-5 w-full h-max flex flex-col gap-3">
                {
                    faqs.map((faq, index) => (
                        <div key={index} className="frequent-question bg-grey/10 rounded p-4 flex items-center justify-between cursor-pointer">
                            <div className="frequent-question-left">
                                <h2 className="text-base font-bold text-header">{faq.question}</h2>
                                <div className="frequequent-question-left-content">
                                    <p className="text-sm text-text">{faq.answer}</p>
                                </div>
                            </div>
                            <div className="frequent-question-right">
                                <div onClick={frequentClicked} className="frequent-drop-down-container">
                                    <i className="fa fa-chevron-down"></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
      </section>
        </>
     );
}
 
export default FAQs;